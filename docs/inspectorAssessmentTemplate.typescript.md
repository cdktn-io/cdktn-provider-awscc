# `inspectorAssessmentTemplate` Submodule <a name="`inspectorAssessmentTemplate` Submodule" id="@cdktn/provider-awscc.inspectorAssessmentTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InspectorAssessmentTemplate <a name="InspectorAssessmentTemplate" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template awscc_inspector_assessment_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer"></a>

```typescript
import { inspectorAssessmentTemplate } from '@cdktn/provider-awscc'

new inspectorAssessmentTemplate.InspectorAssessmentTemplate(scope: Construct, id: string, config: InspectorAssessmentTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig">InspectorAssessmentTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig">InspectorAssessmentTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putUserAttributesForFindings">putUserAttributesForFindings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetAssessmentTemplateName">resetAssessmentTemplateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetUserAttributesForFindings">resetUserAttributesForFindings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putUserAttributesForFindings` <a name="putUserAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putUserAttributesForFindings"></a>

```typescript
public putUserAttributesForFindings(value: IResolvable | InspectorAssessmentTemplateUserAttributesForFindings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.putUserAttributesForFindings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]

---

##### `resetAssessmentTemplateName` <a name="resetAssessmentTemplateName" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetAssessmentTemplateName"></a>

```typescript
public resetAssessmentTemplateName(): void
```

##### `resetUserAttributesForFindings` <a name="resetUserAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.resetUserAttributesForFindings"></a>

```typescript
public resetUserAttributesForFindings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a InspectorAssessmentTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct"></a>

```typescript
import { inspectorAssessmentTemplate } from '@cdktn/provider-awscc'

inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement"></a>

```typescript
import { inspectorAssessmentTemplate } from '@cdktn/provider-awscc'

inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource"></a>

```typescript
import { inspectorAssessmentTemplate } from '@cdktn/provider-awscc'

inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport"></a>

```typescript
import { inspectorAssessmentTemplate } from '@cdktn/provider-awscc'

inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a InspectorAssessmentTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InspectorAssessmentTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InspectorAssessmentTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the InspectorAssessmentTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindings">userAttributesForFindings</a></code> | <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList">InspectorAssessmentTemplateUserAttributesForFindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArnInput">assessmentTargetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateNameInput">assessmentTemplateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSecondsInput">durationInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput">rulesPackageArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindingsInput">userAttributesForFindingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArn">assessmentTargetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateName">assessmentTemplateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSeconds">durationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns">rulesPackageArns</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `userAttributesForFindings`<sup>Required</sup> <a name="userAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindings"></a>

```typescript
public readonly userAttributesForFindings: InspectorAssessmentTemplateUserAttributesForFindingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList">InspectorAssessmentTemplateUserAttributesForFindingsList</a>

---

##### `assessmentTargetArnInput`<sup>Optional</sup> <a name="assessmentTargetArnInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArnInput"></a>

```typescript
public readonly assessmentTargetArnInput: string;
```

- *Type:* string

---

##### `assessmentTemplateNameInput`<sup>Optional</sup> <a name="assessmentTemplateNameInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateNameInput"></a>

```typescript
public readonly assessmentTemplateNameInput: string;
```

- *Type:* string

---

##### `durationInSecondsInput`<sup>Optional</sup> <a name="durationInSecondsInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSecondsInput"></a>

```typescript
public readonly durationInSecondsInput: number;
```

- *Type:* number

---

##### `rulesPackageArnsInput`<sup>Optional</sup> <a name="rulesPackageArnsInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArnsInput"></a>

```typescript
public readonly rulesPackageArnsInput: string[];
```

- *Type:* string[]

---

##### `userAttributesForFindingsInput`<sup>Optional</sup> <a name="userAttributesForFindingsInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.userAttributesForFindingsInput"></a>

```typescript
public readonly userAttributesForFindingsInput: IResolvable | InspectorAssessmentTemplateUserAttributesForFindings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]

---

##### `assessmentTargetArn`<sup>Required</sup> <a name="assessmentTargetArn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTargetArn"></a>

```typescript
public readonly assessmentTargetArn: string;
```

- *Type:* string

---

##### `assessmentTemplateName`<sup>Required</sup> <a name="assessmentTemplateName" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.assessmentTemplateName"></a>

```typescript
public readonly assessmentTemplateName: string;
```

- *Type:* string

---

##### `durationInSeconds`<sup>Required</sup> <a name="durationInSeconds" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.durationInSeconds"></a>

```typescript
public readonly durationInSeconds: number;
```

- *Type:* number

---

##### `rulesPackageArns`<sup>Required</sup> <a name="rulesPackageArns" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.rulesPackageArns"></a>

```typescript
public readonly rulesPackageArns: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InspectorAssessmentTemplateConfig <a name="InspectorAssessmentTemplateConfig" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.Initializer"></a>

```typescript
import { inspectorAssessmentTemplate } from '@cdktn/provider-awscc'

const inspectorAssessmentTemplateConfig: inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTargetArn">assessmentTargetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#assessment_target_arn InspectorAssessmentTemplate#assessment_target_arn}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.durationInSeconds">durationInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#duration_in_seconds InspectorAssessmentTemplate#duration_in_seconds}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns">rulesPackageArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTemplateName">assessmentTemplateName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#assessment_template_name InspectorAssessmentTemplate#assessment_template_name}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.userAttributesForFindings">userAttributesForFindings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#user_attributes_for_findings InspectorAssessmentTemplate#user_attributes_for_findings}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `assessmentTargetArn`<sup>Required</sup> <a name="assessmentTargetArn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTargetArn"></a>

```typescript
public readonly assessmentTargetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#assessment_target_arn InspectorAssessmentTemplate#assessment_target_arn}.

---

##### `durationInSeconds`<sup>Required</sup> <a name="durationInSeconds" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.durationInSeconds"></a>

```typescript
public readonly durationInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#duration_in_seconds InspectorAssessmentTemplate#duration_in_seconds}.

---

##### `rulesPackageArns`<sup>Required</sup> <a name="rulesPackageArns" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.rulesPackageArns"></a>

```typescript
public readonly rulesPackageArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#rules_package_arns InspectorAssessmentTemplate#rules_package_arns}.

---

##### `assessmentTemplateName`<sup>Optional</sup> <a name="assessmentTemplateName" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.assessmentTemplateName"></a>

```typescript
public readonly assessmentTemplateName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#assessment_template_name InspectorAssessmentTemplate#assessment_template_name}.

---

##### `userAttributesForFindings`<sup>Optional</sup> <a name="userAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateConfig.property.userAttributesForFindings"></a>

```typescript
public readonly userAttributesForFindings: IResolvable | InspectorAssessmentTemplateUserAttributesForFindings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#user_attributes_for_findings InspectorAssessmentTemplate#user_attributes_for_findings}.

---

### InspectorAssessmentTemplateUserAttributesForFindings <a name="InspectorAssessmentTemplateUserAttributesForFindings" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.Initializer"></a>

```typescript
import { inspectorAssessmentTemplate } from '@cdktn/provider-awscc'

const inspectorAssessmentTemplateUserAttributesForFindings: inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#key InspectorAssessmentTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#value InspectorAssessmentTemplate#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#key InspectorAssessmentTemplate#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/inspector_assessment_template#value InspectorAssessmentTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### InspectorAssessmentTemplateUserAttributesForFindingsList <a name="InspectorAssessmentTemplateUserAttributesForFindingsList" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer"></a>

```typescript
import { inspectorAssessmentTemplate } from '@cdktn/provider-awscc'

new inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.get"></a>

```typescript
public get(index: number): InspectorAssessmentTemplateUserAttributesForFindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InspectorAssessmentTemplateUserAttributesForFindings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>[]

---


### InspectorAssessmentTemplateUserAttributesForFindingsOutputReference <a name="InspectorAssessmentTemplateUserAttributesForFindingsOutputReference" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer"></a>

```typescript
import { inspectorAssessmentTemplate } from '@cdktn/provider-awscc'

new inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | InspectorAssessmentTemplateUserAttributesForFindings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.inspectorAssessmentTemplate.InspectorAssessmentTemplateUserAttributesForFindings">InspectorAssessmentTemplateUserAttributesForFindings</a>

---



