# `curReportDefinition` Submodule <a name="`curReportDefinition` Submodule" id="@cdktn/provider-awscc.curReportDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurReportDefinition <a name="CurReportDefinition" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition awscc_cur_report_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer"></a>

```typescript
import { curReportDefinition } from '@cdktn/provider-awscc'

new curReportDefinition.CurReportDefinition(scope: Construct, id: string, config: CurReportDefinitionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig">CurReportDefinitionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig">CurReportDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts">resetAdditionalArtifacts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetAdditionalSchemaElements">resetAdditionalSchemaElements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetBillingViewArn">resetBillingViewArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.putTags"></a>

```typescript
public putTags(value: IResolvable | CurReportDefinitionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]

---

##### `resetAdditionalArtifacts` <a name="resetAdditionalArtifacts" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetAdditionalArtifacts"></a>

```typescript
public resetAdditionalArtifacts(): void
```

##### `resetAdditionalSchemaElements` <a name="resetAdditionalSchemaElements" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetAdditionalSchemaElements"></a>

```typescript
public resetAdditionalSchemaElements(): void
```

##### `resetBillingViewArn` <a name="resetBillingViewArn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetBillingViewArn"></a>

```typescript
public resetBillingViewArn(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CurReportDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isConstruct"></a>

```typescript
import { curReportDefinition } from '@cdktn/provider-awscc'

curReportDefinition.CurReportDefinition.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformElement"></a>

```typescript
import { curReportDefinition } from '@cdktn/provider-awscc'

curReportDefinition.CurReportDefinition.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformResource"></a>

```typescript
import { curReportDefinition } from '@cdktn/provider-awscc'

curReportDefinition.CurReportDefinition.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport"></a>

```typescript
import { curReportDefinition } from '@cdktn/provider-awscc'

curReportDefinition.CurReportDefinition.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CurReportDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CurReportDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CurReportDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CurReportDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList">CurReportDefinitionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput">additionalArtifactsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput">additionalSchemaElementsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.billingViewArnInput">billingViewArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.compressionInput">compressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput">refreshClosedReportsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportNameInput">reportNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportVersioningInput">reportVersioningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3PrefixInput">s3PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3RegionInput">s3RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.timeUnitInput">timeUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalArtifacts">additionalArtifacts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalSchemaElements">additionalSchemaElements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.billingViewArn">billingViewArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.compression">compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.refreshClosedReports">refreshClosedReports</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportName">reportName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportVersioning">reportVersioning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Prefix">s3Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Region">s3Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.timeUnit">timeUnit</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tags"></a>

```typescript
public readonly tags: CurReportDefinitionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList">CurReportDefinitionTagsList</a>

---

##### `additionalArtifactsInput`<sup>Optional</sup> <a name="additionalArtifactsInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalArtifactsInput"></a>

```typescript
public readonly additionalArtifactsInput: string[];
```

- *Type:* string[]

---

##### `additionalSchemaElementsInput`<sup>Optional</sup> <a name="additionalSchemaElementsInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalSchemaElementsInput"></a>

```typescript
public readonly additionalSchemaElementsInput: string[];
```

- *Type:* string[]

---

##### `billingViewArnInput`<sup>Optional</sup> <a name="billingViewArnInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.billingViewArnInput"></a>

```typescript
public readonly billingViewArnInput: string;
```

- *Type:* string

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.compressionInput"></a>

```typescript
public readonly compressionInput: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `refreshClosedReportsInput`<sup>Optional</sup> <a name="refreshClosedReportsInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.refreshClosedReportsInput"></a>

```typescript
public readonly refreshClosedReportsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reportNameInput`<sup>Optional</sup> <a name="reportNameInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportNameInput"></a>

```typescript
public readonly reportNameInput: string;
```

- *Type:* string

---

##### `reportVersioningInput`<sup>Optional</sup> <a name="reportVersioningInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportVersioningInput"></a>

```typescript
public readonly reportVersioningInput: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3PrefixInput`<sup>Optional</sup> <a name="s3PrefixInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3PrefixInput"></a>

```typescript
public readonly s3PrefixInput: string;
```

- *Type:* string

---

##### `s3RegionInput`<sup>Optional</sup> <a name="s3RegionInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3RegionInput"></a>

```typescript
public readonly s3RegionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | CurReportDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]

---

##### `timeUnitInput`<sup>Optional</sup> <a name="timeUnitInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.timeUnitInput"></a>

```typescript
public readonly timeUnitInput: string;
```

- *Type:* string

---

##### `additionalArtifacts`<sup>Required</sup> <a name="additionalArtifacts" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalArtifacts"></a>

```typescript
public readonly additionalArtifacts: string[];
```

- *Type:* string[]

---

##### `additionalSchemaElements`<sup>Required</sup> <a name="additionalSchemaElements" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.additionalSchemaElements"></a>

```typescript
public readonly additionalSchemaElements: string[];
```

- *Type:* string[]

---

##### `billingViewArn`<sup>Required</sup> <a name="billingViewArn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.billingViewArn"></a>

```typescript
public readonly billingViewArn: string;
```

- *Type:* string

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `refreshClosedReports`<sup>Required</sup> <a name="refreshClosedReports" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.refreshClosedReports"></a>

```typescript
public readonly refreshClosedReports: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

---

##### `reportVersioning`<sup>Required</sup> <a name="reportVersioning" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.reportVersioning"></a>

```typescript
public readonly reportVersioning: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Prefix`<sup>Required</sup> <a name="s3Prefix" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Prefix"></a>

```typescript
public readonly s3Prefix: string;
```

- *Type:* string

---

##### `s3Region`<sup>Required</sup> <a name="s3Region" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.s3Region"></a>

```typescript
public readonly s3Region: string;
```

- *Type:* string

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinition.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CurReportDefinitionConfig <a name="CurReportDefinitionConfig" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.Initializer"></a>

```typescript
import { curReportDefinition } from '@cdktn/provider-awscc'

const curReportDefinitionConfig: curReportDefinition.CurReportDefinitionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.compression">compression</a></code> | <code>string</code> | The compression format that AWS uses for the report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.format">format</a></code> | <code>string</code> | The format that AWS saves the report in. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports">refreshClosedReports</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.reportName">reportName</a></code> | <code>string</code> | The name of the report that you want to create. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning">reportVersioning</a></code> | <code>string</code> | Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | The S3 bucket where AWS delivers the report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix">s3Prefix</a></code> | <code>string</code> | The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Region">s3Region</a></code> | <code>string</code> | The region of the S3 bucket that AWS delivers the report into. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.timeUnit">timeUnit</a></code> | <code>string</code> | The granularity of the line items in the report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts">additionalArtifacts</a></code> | <code>string[]</code> | A list of manifests that you want Amazon Web Services to create for this report. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements">additionalSchemaElements</a></code> | <code>string[]</code> | A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.billingViewArn">billingViewArn</a></code> | <code>string</code> | The Amazon resource name of the billing view. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#tags CurReportDefinition#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.compression"></a>

```typescript
public readonly compression: string;
```

- *Type:* string

The compression format that AWS uses for the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#compression CurReportDefinition#compression}

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The format that AWS saves the report in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#format CurReportDefinition#format}

---

##### `refreshClosedReports`<sup>Required</sup> <a name="refreshClosedReports" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.refreshClosedReports"></a>

```typescript
public readonly refreshClosedReports: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether you want Amazon Web Services to update your reports after they have been finalized if Amazon Web Services detects charges related to previous months.

These charges can include refunds, credits, or support fees.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#refresh_closed_reports CurReportDefinition#refresh_closed_reports}

---

##### `reportName`<sup>Required</sup> <a name="reportName" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.reportName"></a>

```typescript
public readonly reportName: string;
```

- *Type:* string

The name of the report that you want to create.

The name must be unique, is case sensitive, and can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#report_name CurReportDefinition#report_name}

---

##### `reportVersioning`<sup>Required</sup> <a name="reportVersioning" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.reportVersioning"></a>

```typescript
public readonly reportVersioning: string;
```

- *Type:* string

Whether you want Amazon Web Services to overwrite the previous version of each report or to deliver the report in addition to the previous versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#report_versioning CurReportDefinition#report_versioning}

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

The S3 bucket where AWS delivers the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#s3_bucket CurReportDefinition#s3_bucket}

---

##### `s3Prefix`<sup>Required</sup> <a name="s3Prefix" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Prefix"></a>

```typescript
public readonly s3Prefix: string;
```

- *Type:* string

The prefix that AWS adds to the report name when AWS delivers the report. Your prefix can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#s3_prefix CurReportDefinition#s3_prefix}

---

##### `s3Region`<sup>Required</sup> <a name="s3Region" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.s3Region"></a>

```typescript
public readonly s3Region: string;
```

- *Type:* string

The region of the S3 bucket that AWS delivers the report into.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#s3_region CurReportDefinition#s3_region}

---

##### `timeUnit`<sup>Required</sup> <a name="timeUnit" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.timeUnit"></a>

```typescript
public readonly timeUnit: string;
```

- *Type:* string

The granularity of the line items in the report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#time_unit CurReportDefinition#time_unit}

---

##### `additionalArtifacts`<sup>Optional</sup> <a name="additionalArtifacts" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.additionalArtifacts"></a>

```typescript
public readonly additionalArtifacts: string[];
```

- *Type:* string[]

A list of manifests that you want Amazon Web Services to create for this report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#additional_artifacts CurReportDefinition#additional_artifacts}

---

##### `additionalSchemaElements`<sup>Optional</sup> <a name="additionalSchemaElements" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.additionalSchemaElements"></a>

```typescript
public readonly additionalSchemaElements: string[];
```

- *Type:* string[]

A list of strings that indicate additional content that Amazon Web Services includes in the report, such as individual resource IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#additional_schema_elements CurReportDefinition#additional_schema_elements}

---

##### `billingViewArn`<sup>Optional</sup> <a name="billingViewArn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.billingViewArn"></a>

```typescript
public readonly billingViewArn: string;
```

- *Type:* string

The Amazon resource name of the billing view.

You can get this value by using the billing view service public APIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#billing_view_arn CurReportDefinition#billing_view_arn}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | CurReportDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#tags CurReportDefinition#tags}.

---

### CurReportDefinitionTags <a name="CurReportDefinitionTags" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.Initializer"></a>

```typescript
import { curReportDefinition } from '@cdktn/provider-awscc'

const curReportDefinitionTags: curReportDefinition.CurReportDefinitionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#key CurReportDefinition#key}. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#value CurReportDefinition#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#key CurReportDefinition#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/cur_report_definition#value CurReportDefinition#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### CurReportDefinitionTagsList <a name="CurReportDefinitionTagsList" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer"></a>

```typescript
import { curReportDefinition } from '@cdktn/provider-awscc'

new curReportDefinition.CurReportDefinitionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.get"></a>

```typescript
public get(index: number): CurReportDefinitionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CurReportDefinitionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>[]

---


### CurReportDefinitionTagsOutputReference <a name="CurReportDefinitionTagsOutputReference" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer"></a>

```typescript
import { curReportDefinition } from '@cdktn/provider-awscc'

new curReportDefinition.CurReportDefinitionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CurReportDefinitionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.curReportDefinition.CurReportDefinitionTags">CurReportDefinitionTags</a>

---



