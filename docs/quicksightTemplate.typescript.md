# `quicksightTemplate` Submodule <a name="`quicksightTemplate` Submodule" id="@cdktn/provider-awscc.quicksightTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightTemplate <a name="QuicksightTemplate" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template awscc_quicksight_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplate(scope: Construct, id: string, config: QuicksightTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig">QuicksightTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig">QuicksightTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.putPermissions">putPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.putSourceEntity">putSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.resetVersionDescription">resetVersionDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPermissions` <a name="putPermissions" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.putPermissions"></a>

```typescript
public putPermissions(value: IResolvable | QuicksightTemplatePermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.putPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>[]

---

##### `putSourceEntity` <a name="putSourceEntity" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.putSourceEntity"></a>

```typescript
public putSourceEntity(value: QuicksightTemplateSourceEntity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.putSourceEntity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.putTags"></a>

```typescript
public putTags(value: IResolvable | QuicksightTemplateTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags">QuicksightTemplateTags</a>[]

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVersionDescription` <a name="resetVersionDescription" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.resetVersionDescription"></a>

```typescript
public resetVersionDescription(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a QuicksightTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.isConstruct"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

quicksightTemplate.QuicksightTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.isTerraformElement"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

quicksightTemplate.QuicksightTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.isTerraformResource"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

quicksightTemplate.QuicksightTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.generateConfigForImport"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

quicksightTemplate.QuicksightTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a QuicksightTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QuicksightTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QuicksightTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the QuicksightTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.lastUpdatedTime">lastUpdatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.permissions">permissions</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList">QuicksightTemplatePermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference">QuicksightTemplateSourceEntityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList">QuicksightTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.version">version</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference">QuicksightTemplateVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.permissionsInput">permissionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.sourceEntityInput">sourceEntityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags">QuicksightTemplateTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.templateIdInput">templateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.versionDescriptionInput">versionDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.templateId">templateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.versionDescription">versionDescription</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTime`<sup>Required</sup> <a name="lastUpdatedTime" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.lastUpdatedTime"></a>

```typescript
public readonly lastUpdatedTime: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.permissions"></a>

```typescript
public readonly permissions: QuicksightTemplatePermissionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList">QuicksightTemplatePermissionsList</a>

---

##### `sourceEntity`<sup>Required</sup> <a name="sourceEntity" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.sourceEntity"></a>

```typescript
public readonly sourceEntity: QuicksightTemplateSourceEntityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference">QuicksightTemplateSourceEntityOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.tags"></a>

```typescript
public readonly tags: QuicksightTemplateTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList">QuicksightTemplateTagsList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.version"></a>

```typescript
public readonly version: QuicksightTemplateVersionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference">QuicksightTemplateVersionOutputReference</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.awsAccountIdInput"></a>

```typescript
public readonly awsAccountIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: IResolvable | QuicksightTemplatePermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>[]

---

##### `sourceEntityInput`<sup>Optional</sup> <a name="sourceEntityInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.sourceEntityInput"></a>

```typescript
public readonly sourceEntityInput: IResolvable | QuicksightTemplateSourceEntity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | QuicksightTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags">QuicksightTemplateTags</a>[]

---

##### `templateIdInput`<sup>Optional</sup> <a name="templateIdInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.templateIdInput"></a>

```typescript
public readonly templateIdInput: string;
```

- *Type:* string

---

##### `versionDescriptionInput`<sup>Optional</sup> <a name="versionDescriptionInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.versionDescriptionInput"></a>

```typescript
public readonly versionDescriptionInput: string;
```

- *Type:* string

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

---

##### `versionDescription`<sup>Required</sup> <a name="versionDescription" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.versionDescription"></a>

```typescript
public readonly versionDescription: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightTemplateConfig <a name="QuicksightTemplateConfig" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateConfig: quicksightTemplate.QuicksightTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.awsAccountId">awsAccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#aws_account_id QuicksightTemplate#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.sourceEntity">sourceEntity</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a></code> | <p>The source entity of the template.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.templateId">templateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#template_id QuicksightTemplate#template_id}. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.name">name</a></code> | <code>string</code> | <p>A display name for the template.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.permissions">permissions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>[]</code> | <p>A list of resource permissions to be set on the template. </p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags">QuicksightTemplateTags</a>[]</code> | <p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.versionDescription">versionDescription</a></code> | <code>string</code> | <p>A description of the current template version being created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.awsAccountId"></a>

```typescript
public readonly awsAccountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#aws_account_id QuicksightTemplate#aws_account_id}.

---

##### `sourceEntity`<sup>Required</sup> <a name="sourceEntity" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.sourceEntity"></a>

```typescript
public readonly sourceEntity: QuicksightTemplateSourceEntity;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a>

<p>The source entity of the template.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#source_entity QuicksightTemplate#source_entity}

---

##### `templateId`<sup>Required</sup> <a name="templateId" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.templateId"></a>

```typescript
public readonly templateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#template_id QuicksightTemplate#template_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

<p>A display name for the template.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#name QuicksightTemplate#name}

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.permissions"></a>

```typescript
public readonly permissions: IResolvable | QuicksightTemplatePermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>[]

<p>A list of resource permissions to be set on the template. </p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#permissions QuicksightTemplate#permissions}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | QuicksightTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags">QuicksightTemplateTags</a>[]

<p>Contains a map of the key-value pairs for the resource tag or tags assigned to the resource.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#tags QuicksightTemplate#tags}

---

##### `versionDescription`<sup>Optional</sup> <a name="versionDescription" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateConfig.property.versionDescription"></a>

```typescript
public readonly versionDescription: string;
```

- *Type:* string

<p>A description of the current template version being created.

This API operation creates the
			first version of the template. Every time <code>UpdateTemplate</code> is called, a new
			version is created. Each version of the template maintains a description of the version
			in the <code>VersionDescription</code> field.</p>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#version_description QuicksightTemplate#version_description}

---

### QuicksightTemplatePermissions <a name="QuicksightTemplatePermissions" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplatePermissions: quicksightTemplate.QuicksightTemplatePermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions.property.actions">actions</a></code> | <code>string[]</code> | <p>The IAM action to grant or revoke permissions on.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions.property.principal">principal</a></code> | <code>string</code> | <p>The Amazon Resource Name (ARN) of the principal. |

---

##### `actions`<sup>Optional</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

<p>The IAM action to grant or revoke permissions on.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#actions QuicksightTemplate#actions}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

<p>The Amazon Resource Name (ARN) of the principal.

This can be one of the
            following:</p>
        <ul>
            <li>
                <p>The ARN of an Amazon QuickSight user or group associated with a data source or dataset. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an Amazon QuickSight user, group, or namespace associated with an analysis, dashboard, template, or theme. (This is common.)</p>
            </li>
            <li>
                <p>The ARN of an AWS account root: This is an IAM ARN rather than a QuickSight
                    ARN. Use this option only to share resources (templates) across AWS accounts.
                    (This is less common.) </p>
            </li>
         </ul>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#principal QuicksightTemplate#principal}

---

### QuicksightTemplateSourceEntity <a name="QuicksightTemplateSourceEntity" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntity.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateSourceEntity: quicksightTemplate.QuicksightTemplateSourceEntity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntity.property.sourceAnalysis">sourceAnalysis</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a></code> | <p>The source analysis of the template.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntity.property.sourceTemplate">sourceTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a></code> | <p>The source template of the template.</p>. |

---

##### `sourceAnalysis`<sup>Optional</sup> <a name="sourceAnalysis" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntity.property.sourceAnalysis"></a>

```typescript
public readonly sourceAnalysis: QuicksightTemplateSourceEntitySourceAnalysis;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a>

<p>The source analysis of the template.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#source_analysis QuicksightTemplate#source_analysis}

---

##### `sourceTemplate`<sup>Optional</sup> <a name="sourceTemplate" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntity.property.sourceTemplate"></a>

```typescript
public readonly sourceTemplate: QuicksightTemplateSourceEntitySourceTemplate;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a>

<p>The source template of the template.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#source_template QuicksightTemplate#source_template}

---

### QuicksightTemplateSourceEntitySourceAnalysis <a name="QuicksightTemplateSourceEntitySourceAnalysis" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateSourceEntitySourceAnalysis: quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.property.arn">arn</a></code> | <code>string</code> | <p>The Amazon Resource Name (ARN) of the resource.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.property.dataSetReferences">dataSetReferences</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>[]</code> | <p>A structure containing information about the dataset references used as placeholders             in the template.</p>. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

<p>The Amazon Resource Name (ARN) of the resource.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}

---

##### `dataSetReferences`<sup>Optional</sup> <a name="dataSetReferences" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis.property.dataSetReferences"></a>

```typescript
public readonly dataSetReferences: IResolvable | QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>[]

<p>A structure containing information about the dataset references used as placeholders             in the template.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#data_set_references QuicksightTemplate#data_set_references}

---

### QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences <a name="QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateSourceEntitySourceAnalysisDataSetReferences: quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.property.dataSetArn">dataSetArn</a></code> | <code>string</code> | <p>Dataset Amazon Resource Name (ARN).</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.property.dataSetPlaceholder">dataSetPlaceholder</a></code> | <code>string</code> | <p>Dataset placeholder.</p>. |

---

##### `dataSetArn`<sup>Optional</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.property.dataSetArn"></a>

```typescript
public readonly dataSetArn: string;
```

- *Type:* string

<p>Dataset Amazon Resource Name (ARN).</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#data_set_arn QuicksightTemplate#data_set_arn}

---

##### `dataSetPlaceholder`<sup>Optional</sup> <a name="dataSetPlaceholder" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences.property.dataSetPlaceholder"></a>

```typescript
public readonly dataSetPlaceholder: string;
```

- *Type:* string

<p>Dataset placeholder.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#data_set_placeholder QuicksightTemplate#data_set_placeholder}

---

### QuicksightTemplateSourceEntitySourceTemplate <a name="QuicksightTemplateSourceEntitySourceTemplate" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateSourceEntitySourceTemplate: quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate.property.arn">arn</a></code> | <code>string</code> | <p>The Amazon Resource Name (ARN) of the resource.</p>. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

<p>The Amazon Resource Name (ARN) of the resource.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#arn QuicksightTemplate#arn}

---

### QuicksightTemplateTags <a name="QuicksightTemplateTags" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateTags: quicksightTemplate.QuicksightTemplateTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags.property.key">key</a></code> | <code>string</code> | <p>Tag key.</p>. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags.property.value">value</a></code> | <code>string</code> | <p>Tag value.</p>. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

<p>Tag key.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#key QuicksightTemplate#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

<p>Tag value.</p>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/quicksight_template#value QuicksightTemplate#value}

---

### QuicksightTemplateVersion <a name="QuicksightTemplateVersion" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersion.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateVersion: quicksightTemplate.QuicksightTemplateVersion = { ... }
```


### QuicksightTemplateVersionDataSetConfigurations <a name="QuicksightTemplateVersionDataSetConfigurations" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurations.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateVersionDataSetConfigurations: quicksightTemplate.QuicksightTemplateVersionDataSetConfigurations = { ... }
```


### QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct <a name="QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct: quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct = { ... }
```


### QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct <a name="QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct: quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct = { ... }
```


### QuicksightTemplateVersionDataSetConfigurationsDataSetSchema <a name="QuicksightTemplateVersionDataSetConfigurationsDataSetSchema" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchema.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateVersionDataSetConfigurationsDataSetSchema: quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchema = { ... }
```


### QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct <a name="QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct: quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct = { ... }
```


### QuicksightTemplateVersionErrors <a name="QuicksightTemplateVersionErrors" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrors.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateVersionErrors: quicksightTemplate.QuicksightTemplateVersionErrors = { ... }
```


### QuicksightTemplateVersionSheets <a name="QuicksightTemplateVersionSheets" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheets.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

const quicksightTemplateVersionSheets: quicksightTemplate.QuicksightTemplateVersionSheets = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### QuicksightTemplatePermissionsList <a name="QuicksightTemplatePermissionsList" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplatePermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.get"></a>

```typescript
public get(index: number): QuicksightTemplatePermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTemplatePermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>[]

---


### QuicksightTemplatePermissionsOutputReference <a name="QuicksightTemplatePermissionsOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplatePermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.resetActions">resetActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActions` <a name="resetActions" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.resetActions"></a>

```typescript
public resetActions(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.actionsInput">actionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.actions">actions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.actionsInput"></a>

```typescript
public readonly actionsInput: string[];
```

- *Type:* string[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.actions"></a>

```typescript
public readonly actions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTemplatePermissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplatePermissions">QuicksightTemplatePermissions</a>

---


### QuicksightTemplateSourceEntityOutputReference <a name="QuicksightTemplateSourceEntityOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateSourceEntityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceAnalysis">putSourceAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceTemplate">putSourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resetSourceAnalysis">resetSourceAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resetSourceTemplate">resetSourceTemplate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourceAnalysis` <a name="putSourceAnalysis" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceAnalysis"></a>

```typescript
public putSourceAnalysis(value: QuicksightTemplateSourceEntitySourceAnalysis): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceAnalysis.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a>

---

##### `putSourceTemplate` <a name="putSourceTemplate" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceTemplate"></a>

```typescript
public putSourceTemplate(value: QuicksightTemplateSourceEntitySourceTemplate): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.putSourceTemplate.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a>

---

##### `resetSourceAnalysis` <a name="resetSourceAnalysis" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resetSourceAnalysis"></a>

```typescript
public resetSourceAnalysis(): void
```

##### `resetSourceTemplate` <a name="resetSourceTemplate" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.resetSourceTemplate"></a>

```typescript
public resetSourceTemplate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceAnalysis">sourceAnalysis</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference">QuicksightTemplateSourceEntitySourceAnalysisOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceTemplate">sourceTemplate</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference">QuicksightTemplateSourceEntitySourceTemplateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceAnalysisInput">sourceAnalysisInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceTemplateInput">sourceTemplateInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourceAnalysis`<sup>Required</sup> <a name="sourceAnalysis" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceAnalysis"></a>

```typescript
public readonly sourceAnalysis: QuicksightTemplateSourceEntitySourceAnalysisOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference">QuicksightTemplateSourceEntitySourceAnalysisOutputReference</a>

---

##### `sourceTemplate`<sup>Required</sup> <a name="sourceTemplate" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceTemplate"></a>

```typescript
public readonly sourceTemplate: QuicksightTemplateSourceEntitySourceTemplateOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference">QuicksightTemplateSourceEntitySourceTemplateOutputReference</a>

---

##### `sourceAnalysisInput`<sup>Optional</sup> <a name="sourceAnalysisInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceAnalysisInput"></a>

```typescript
public readonly sourceAnalysisInput: IResolvable | QuicksightTemplateSourceEntitySourceAnalysis;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a>

---

##### `sourceTemplateInput`<sup>Optional</sup> <a name="sourceTemplateInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.sourceTemplateInput"></a>

```typescript
public readonly sourceTemplateInput: IResolvable | QuicksightTemplateSourceEntitySourceTemplate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTemplateSourceEntity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntity">QuicksightTemplateSourceEntity</a>

---


### QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList <a name="QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.get"></a>

```typescript
public get(index: number): QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>[]

---


### QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference <a name="QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.resetDataSetArn">resetDataSetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.resetDataSetPlaceholder">resetDataSetPlaceholder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataSetArn` <a name="resetDataSetArn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.resetDataSetArn"></a>

```typescript
public resetDataSetArn(): void
```

##### `resetDataSetPlaceholder` <a name="resetDataSetPlaceholder" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.resetDataSetPlaceholder"></a>

```typescript
public resetDataSetPlaceholder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetArnInput">dataSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetPlaceholderInput">dataSetPlaceholderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetArn">dataSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetPlaceholder">dataSetPlaceholder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSetArnInput`<sup>Optional</sup> <a name="dataSetArnInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetArnInput"></a>

```typescript
public readonly dataSetArnInput: string;
```

- *Type:* string

---

##### `dataSetPlaceholderInput`<sup>Optional</sup> <a name="dataSetPlaceholderInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetPlaceholderInput"></a>

```typescript
public readonly dataSetPlaceholderInput: string;
```

- *Type:* string

---

##### `dataSetArn`<sup>Required</sup> <a name="dataSetArn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetArn"></a>

```typescript
public readonly dataSetArn: string;
```

- *Type:* string

---

##### `dataSetPlaceholder`<sup>Required</sup> <a name="dataSetPlaceholder" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.dataSetPlaceholder"></a>

```typescript
public readonly dataSetPlaceholder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>

---


### QuicksightTemplateSourceEntitySourceAnalysisOutputReference <a name="QuicksightTemplateSourceEntitySourceAnalysisOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.putDataSetReferences">putDataSetReferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.resetDataSetReferences">resetDataSetReferences</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataSetReferences` <a name="putDataSetReferences" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.putDataSetReferences"></a>

```typescript
public putDataSetReferences(value: IResolvable | QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.putDataSetReferences.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>[]

---

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetDataSetReferences` <a name="resetDataSetReferences" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.resetDataSetReferences"></a>

```typescript
public resetDataSetReferences(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.dataSetReferences">dataSetReferences</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.dataSetReferencesInput">dataSetReferencesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataSetReferences`<sup>Required</sup> <a name="dataSetReferences" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.dataSetReferences"></a>

```typescript
public readonly dataSetReferences: QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferencesList</a>

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `dataSetReferencesInput`<sup>Optional</sup> <a name="dataSetReferencesInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.dataSetReferencesInput"></a>

```typescript
public readonly dataSetReferencesInput: IResolvable | QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences">QuicksightTemplateSourceEntitySourceAnalysisDataSetReferences</a>[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysisOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTemplateSourceEntitySourceAnalysis;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceAnalysis">QuicksightTemplateSourceEntitySourceAnalysis</a>

---


### QuicksightTemplateSourceEntitySourceTemplateOutputReference <a name="QuicksightTemplateSourceEntitySourceTemplateOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTemplateSourceEntitySourceTemplate;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateSourceEntitySourceTemplate">QuicksightTemplateSourceEntitySourceTemplate</a>

---


### QuicksightTemplateTagsList <a name="QuicksightTemplateTagsList" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.get"></a>

```typescript
public get(index: number): QuicksightTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags">QuicksightTemplateTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTemplateTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags">QuicksightTemplateTags</a>[]

---


### QuicksightTemplateTagsOutputReference <a name="QuicksightTemplateTagsOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags">QuicksightTemplateTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | QuicksightTemplateTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateTags">QuicksightTemplateTags</a>

---


### QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList <a name="QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.get"></a>

```typescript
public get(index: number): QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference <a name="QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct">QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct">QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStruct</a>

---


### QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList <a name="QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.get"></a>

```typescript
public get(index: number): QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference <a name="QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.property.columnGroupColumnSchemaList">columnGroupColumnSchemaList</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList">QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct">QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnGroupColumnSchemaList`<sup>Required</sup> <a name="columnGroupColumnSchemaList" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.property.columnGroupColumnSchemaList"></a>

```typescript
public readonly columnGroupColumnSchemaList: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList">QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListColumnGroupColumnSchemaListStructList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct">QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStruct</a>

---


### QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList <a name="QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.get"></a>

```typescript
public get(index: number): QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference <a name="QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.property.dataType">dataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.property.geographicRole">geographicRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct">QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataType`<sup>Required</sup> <a name="dataType" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.property.dataType"></a>

```typescript
public readonly dataType: string;
```

- *Type:* string

---

##### `geographicRole`<sup>Required</sup> <a name="geographicRole" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.property.geographicRole"></a>

```typescript
public readonly geographicRole: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct">QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStruct</a>

---


### QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference <a name="QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.property.columnSchemaList">columnSchemaList</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList">QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchema">QuicksightTemplateVersionDataSetConfigurationsDataSetSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnSchemaList`<sup>Required</sup> <a name="columnSchemaList" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.property.columnSchemaList"></a>

```typescript
public readonly columnSchemaList: QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList">QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaColumnSchemaListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightTemplateVersionDataSetConfigurationsDataSetSchema;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchema">QuicksightTemplateVersionDataSetConfigurationsDataSetSchema</a>

---


### QuicksightTemplateVersionDataSetConfigurationsList <a name="QuicksightTemplateVersionDataSetConfigurationsList" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.get"></a>

```typescript
public get(index: number): QuicksightTemplateVersionDataSetConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### QuicksightTemplateVersionDataSetConfigurationsOutputReference <a name="QuicksightTemplateVersionDataSetConfigurationsOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.property.columnGroupSchemaList">columnGroupSchemaList</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList">QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.property.dataSetSchema">dataSetSchema</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference">QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.property.placeholder">placeholder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurations">QuicksightTemplateVersionDataSetConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnGroupSchemaList`<sup>Required</sup> <a name="columnGroupSchemaList" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.property.columnGroupSchemaList"></a>

```typescript
public readonly columnGroupSchemaList: QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList">QuicksightTemplateVersionDataSetConfigurationsColumnGroupSchemaListStructList</a>

---

##### `dataSetSchema`<sup>Required</sup> <a name="dataSetSchema" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.property.dataSetSchema"></a>

```typescript
public readonly dataSetSchema: QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference">QuicksightTemplateVersionDataSetConfigurationsDataSetSchemaOutputReference</a>

---

##### `placeholder`<sup>Required</sup> <a name="placeholder" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.property.placeholder"></a>

```typescript
public readonly placeholder: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightTemplateVersionDataSetConfigurations;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurations">QuicksightTemplateVersionDataSetConfigurations</a>

---


### QuicksightTemplateVersionErrorsList <a name="QuicksightTemplateVersionErrorsList" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionErrorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.get"></a>

```typescript
public get(index: number): QuicksightTemplateVersionErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### QuicksightTemplateVersionErrorsOutputReference <a name="QuicksightTemplateVersionErrorsOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrors">QuicksightTemplateVersionErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightTemplateVersionErrors;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrors">QuicksightTemplateVersionErrors</a>

---


### QuicksightTemplateVersionOutputReference <a name="QuicksightTemplateVersionOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.dataSetConfigurations">dataSetConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList">QuicksightTemplateVersionDataSetConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList">QuicksightTemplateVersionErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.sheets">sheets</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList">QuicksightTemplateVersionSheetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.sourceEntityArn">sourceEntityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.themeArn">themeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.versionNumber">versionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersion">QuicksightTemplateVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `dataSetConfigurations`<sup>Required</sup> <a name="dataSetConfigurations" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.dataSetConfigurations"></a>

```typescript
public readonly dataSetConfigurations: QuicksightTemplateVersionDataSetConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionDataSetConfigurationsList">QuicksightTemplateVersionDataSetConfigurationsList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.errors"></a>

```typescript
public readonly errors: QuicksightTemplateVersionErrorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionErrorsList">QuicksightTemplateVersionErrorsList</a>

---

##### `sheets`<sup>Required</sup> <a name="sheets" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.sheets"></a>

```typescript
public readonly sheets: QuicksightTemplateVersionSheetsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList">QuicksightTemplateVersionSheetsList</a>

---

##### `sourceEntityArn`<sup>Required</sup> <a name="sourceEntityArn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.sourceEntityArn"></a>

```typescript
public readonly sourceEntityArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `themeArn`<sup>Required</sup> <a name="themeArn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.themeArn"></a>

```typescript
public readonly themeArn: string;
```

- *Type:* string

---

##### `versionNumber`<sup>Required</sup> <a name="versionNumber" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.versionNumber"></a>

```typescript
public readonly versionNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightTemplateVersion;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersion">QuicksightTemplateVersion</a>

---


### QuicksightTemplateVersionSheetsList <a name="QuicksightTemplateVersionSheetsList" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionSheetsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.get"></a>

```typescript
public get(index: number): QuicksightTemplateVersionSheetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### QuicksightTemplateVersionSheetsOutputReference <a name="QuicksightTemplateVersionSheetsOutputReference" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.Initializer"></a>

```typescript
import { quicksightTemplate } from '@cdktn/provider-awscc'

new quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.property.sheetId">sheetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheets">QuicksightTemplateVersionSheets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sheetId`<sup>Required</sup> <a name="sheetId" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.property.sheetId"></a>

```typescript
public readonly sheetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheetsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: QuicksightTemplateVersionSheets;
```

- *Type:* <a href="#@cdktn/provider-awscc.quicksightTemplate.QuicksightTemplateVersionSheets">QuicksightTemplateVersionSheets</a>

---



