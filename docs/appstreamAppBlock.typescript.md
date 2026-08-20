# `appstreamAppBlock` Submodule <a name="`appstreamAppBlock` Submodule" id="@cdktn/provider-awscc.appstreamAppBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamAppBlock <a name="AppstreamAppBlock" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block awscc_appstream_app_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

new appstreamAppBlock.AppstreamAppBlock(scope: Construct, id: string, config: AppstreamAppBlockConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig">AppstreamAppBlockConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig">AppstreamAppBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails">putPostSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails">putSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location">putSourceS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPackagingType">resetPackagingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPostSetupScriptDetails">resetPostSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetSetupScriptDetails">resetSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPostSetupScriptDetails` <a name="putPostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails"></a>

```typescript
public putPostSetupScriptDetails(value: AppstreamAppBlockPostSetupScriptDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

---

##### `putSetupScriptDetails` <a name="putSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails"></a>

```typescript
public putSetupScriptDetails(value: AppstreamAppBlockSetupScriptDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

---

##### `putSourceS3Location` <a name="putSourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location"></a>

```typescript
public putSourceS3Location(value: AppstreamAppBlockSourceS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags"></a>

```typescript
public putTags(value: IResolvable | AppstreamAppBlockTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetPackagingType` <a name="resetPackagingType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPackagingType"></a>

```typescript
public resetPackagingType(): void
```

##### `resetPostSetupScriptDetails` <a name="resetPostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPostSetupScriptDetails"></a>

```typescript
public resetPostSetupScriptDetails(): void
```

##### `resetSetupScriptDetails` <a name="resetSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetSetupScriptDetails"></a>

```typescript
public resetSetupScriptDetails(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamAppBlock resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

appstreamAppBlock.AppstreamAppBlock.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

appstreamAppBlock.AppstreamAppBlock.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

appstreamAppBlock.AppstreamAppBlock.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

appstreamAppBlock.AppstreamAppBlock.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AppstreamAppBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AppstreamAppBlock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AppstreamAppBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamAppBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.createdTime">createdTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetails">postSetupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference">AppstreamAppBlockPostSetupScriptDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetails">setupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference">AppstreamAppBlockSetupScriptDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3Location">sourceS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference">AppstreamAppBlockSourceS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList">AppstreamAppBlockTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingTypeInput">packagingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetailsInput">postSetupScriptDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetailsInput">setupScriptDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3LocationInput">sourceS3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingType">packagingType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.createdTime"></a>

```typescript
public readonly createdTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `postSetupScriptDetails`<sup>Required</sup> <a name="postSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetails"></a>

```typescript
public readonly postSetupScriptDetails: AppstreamAppBlockPostSetupScriptDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference">AppstreamAppBlockPostSetupScriptDetailsOutputReference</a>

---

##### `setupScriptDetails`<sup>Required</sup> <a name="setupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetails"></a>

```typescript
public readonly setupScriptDetails: AppstreamAppBlockSetupScriptDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference">AppstreamAppBlockSetupScriptDetailsOutputReference</a>

---

##### `sourceS3Location`<sup>Required</sup> <a name="sourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3Location"></a>

```typescript
public readonly sourceS3Location: AppstreamAppBlockSourceS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference">AppstreamAppBlockSourceS3LocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tags"></a>

```typescript
public readonly tags: AppstreamAppBlockTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList">AppstreamAppBlockTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `packagingTypeInput`<sup>Optional</sup> <a name="packagingTypeInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingTypeInput"></a>

```typescript
public readonly packagingTypeInput: string;
```

- *Type:* string

---

##### `postSetupScriptDetailsInput`<sup>Optional</sup> <a name="postSetupScriptDetailsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetailsInput"></a>

```typescript
public readonly postSetupScriptDetailsInput: IResolvable | AppstreamAppBlockPostSetupScriptDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

---

##### `setupScriptDetailsInput`<sup>Optional</sup> <a name="setupScriptDetailsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetailsInput"></a>

```typescript
public readonly setupScriptDetailsInput: IResolvable | AppstreamAppBlockSetupScriptDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

---

##### `sourceS3LocationInput`<sup>Optional</sup> <a name="sourceS3LocationInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3LocationInput"></a>

```typescript
public readonly sourceS3LocationInput: IResolvable | AppstreamAppBlockSourceS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | AppstreamAppBlockTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `packagingType`<sup>Required</sup> <a name="packagingType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingType"></a>

```typescript
public readonly packagingType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamAppBlockConfig <a name="AppstreamAppBlockConfig" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

const appstreamAppBlockConfig: appstreamAppBlock.AppstreamAppBlockConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.sourceS3Location">sourceS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.packagingType">packagingType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.postSetupScriptDetails">postSetupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.setupScriptDetails">setupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}.

---

##### `sourceS3Location`<sup>Required</sup> <a name="sourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.sourceS3Location"></a>

```typescript
public readonly sourceS3Location: AppstreamAppBlockSourceS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}.

---

##### `packagingType`<sup>Optional</sup> <a name="packagingType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.packagingType"></a>

```typescript
public readonly packagingType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}.

---

##### `postSetupScriptDetails`<sup>Optional</sup> <a name="postSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.postSetupScriptDetails"></a>

```typescript
public readonly postSetupScriptDetails: AppstreamAppBlockPostSetupScriptDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}.

---

##### `setupScriptDetails`<sup>Optional</sup> <a name="setupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.setupScriptDetails"></a>

```typescript
public readonly setupScriptDetails: AppstreamAppBlockSetupScriptDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | AppstreamAppBlockTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}.

---

### AppstreamAppBlockPostSetupScriptDetails <a name="AppstreamAppBlockPostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

const appstreamAppBlockPostSetupScriptDetails: appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executableParameters">executableParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executablePath">executablePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.scriptS3Location">scriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}. |

---

##### `executableParameters`<sup>Optional</sup> <a name="executableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executableParameters"></a>

```typescript
public readonly executableParameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}.

---

##### `executablePath`<sup>Optional</sup> <a name="executablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executablePath"></a>

```typescript
public readonly executablePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}.

---

##### `scriptS3Location`<sup>Optional</sup> <a name="scriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.scriptS3Location"></a>

```typescript
public readonly scriptS3Location: AppstreamAppBlockPostSetupScriptDetailsScriptS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}.

---

### AppstreamAppBlockPostSetupScriptDetailsScriptS3Location <a name="AppstreamAppBlockPostSetupScriptDetailsScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

const appstreamAppBlockPostSetupScriptDetailsScriptS3Location: appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Key">s3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockSetupScriptDetails <a name="AppstreamAppBlockSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

const appstreamAppBlockSetupScriptDetails: appstreamAppBlock.AppstreamAppBlockSetupScriptDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executableParameters">executableParameters</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executablePath">executablePath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.scriptS3Location">scriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}. |

---

##### `executableParameters`<sup>Optional</sup> <a name="executableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executableParameters"></a>

```typescript
public readonly executableParameters: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}.

---

##### `executablePath`<sup>Optional</sup> <a name="executablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executablePath"></a>

```typescript
public readonly executablePath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}.

---

##### `scriptS3Location`<sup>Optional</sup> <a name="scriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.scriptS3Location"></a>

```typescript
public readonly scriptS3Location: AppstreamAppBlockSetupScriptDetailsScriptS3Location;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}.

---

### AppstreamAppBlockSetupScriptDetailsScriptS3Location <a name="AppstreamAppBlockSetupScriptDetailsScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

const appstreamAppBlockSetupScriptDetailsScriptS3Location: appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Key">s3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockSourceS3Location <a name="AppstreamAppBlockSourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

const appstreamAppBlockSourceS3Location: appstreamAppBlock.AppstreamAppBlockSourceS3Location = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Key">s3Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockTags <a name="AppstreamAppBlockTags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

const appstreamAppBlockTags: appstreamAppBlock.AppstreamAppBlockTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#key AppstreamAppBlock#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagKey">tagKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tag_key AppstreamAppBlock#tag_key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagValue">tagValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tag_value AppstreamAppBlock#tag_value}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#value AppstreamAppBlock#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#key AppstreamAppBlock#key}.

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tag_key AppstreamAppBlock#tag_key}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#tag_value AppstreamAppBlock#tag_value}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/appstream_app_block#value AppstreamAppBlock#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamAppBlockPostSetupScriptDetailsOutputReference <a name="AppstreamAppBlockPostSetupScriptDetailsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

new appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location">putScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutableParameters">resetExecutableParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutablePath">resetExecutablePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetScriptS3Location">resetScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptS3Location` <a name="putScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location"></a>

```typescript
public putScriptS3Location(value: AppstreamAppBlockPostSetupScriptDetailsScriptS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

---

##### `resetExecutableParameters` <a name="resetExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutableParameters"></a>

```typescript
public resetExecutableParameters(): void
```

##### `resetExecutablePath` <a name="resetExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutablePath"></a>

```typescript
public resetExecutablePath(): void
```

##### `resetScriptS3Location` <a name="resetScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetScriptS3Location"></a>

```typescript
public resetScriptS3Location(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3Location">scriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParametersInput">executableParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePathInput">executablePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3LocationInput">scriptS3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParameters">executableParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePath">executablePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptS3Location`<sup>Required</sup> <a name="scriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3Location"></a>

```typescript
public readonly scriptS3Location: AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference</a>

---

##### `executableParametersInput`<sup>Optional</sup> <a name="executableParametersInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParametersInput"></a>

```typescript
public readonly executableParametersInput: string;
```

- *Type:* string

---

##### `executablePathInput`<sup>Optional</sup> <a name="executablePathInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePathInput"></a>

```typescript
public readonly executablePathInput: string;
```

- *Type:* string

---

##### `scriptS3LocationInput`<sup>Optional</sup> <a name="scriptS3LocationInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3LocationInput"></a>

```typescript
public readonly scriptS3LocationInput: IResolvable | AppstreamAppBlockPostSetupScriptDetailsScriptS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `executableParameters`<sup>Required</sup> <a name="executableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParameters"></a>

```typescript
public readonly executableParameters: string;
```

- *Type:* string

---

##### `executablePath`<sup>Required</sup> <a name="executablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePath"></a>

```typescript
public readonly executablePath: string;
```

- *Type:* string

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamAppBlockPostSetupScriptDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

---


### AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference <a name="AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

new appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key"></a>

```typescript
public resetS3Key(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamAppBlockPostSetupScriptDetailsScriptS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

---


### AppstreamAppBlockSetupScriptDetailsOutputReference <a name="AppstreamAppBlockSetupScriptDetailsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

new appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location">putScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutableParameters">resetExecutableParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutablePath">resetExecutablePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetScriptS3Location">resetScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptS3Location` <a name="putScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location"></a>

```typescript
public putScriptS3Location(value: AppstreamAppBlockSetupScriptDetailsScriptS3Location): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

---

##### `resetExecutableParameters` <a name="resetExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutableParameters"></a>

```typescript
public resetExecutableParameters(): void
```

##### `resetExecutablePath` <a name="resetExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutablePath"></a>

```typescript
public resetExecutablePath(): void
```

##### `resetScriptS3Location` <a name="resetScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetScriptS3Location"></a>

```typescript
public resetScriptS3Location(): void
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetTimeoutInSeconds"></a>

```typescript
public resetTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3Location">scriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParametersInput">executableParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePathInput">executablePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3LocationInput">scriptS3LocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParameters">executableParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePath">executablePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptS3Location`<sup>Required</sup> <a name="scriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3Location"></a>

```typescript
public readonly scriptS3Location: AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference</a>

---

##### `executableParametersInput`<sup>Optional</sup> <a name="executableParametersInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParametersInput"></a>

```typescript
public readonly executableParametersInput: string;
```

- *Type:* string

---

##### `executablePathInput`<sup>Optional</sup> <a name="executablePathInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePathInput"></a>

```typescript
public readonly executablePathInput: string;
```

- *Type:* string

---

##### `scriptS3LocationInput`<sup>Optional</sup> <a name="scriptS3LocationInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3LocationInput"></a>

```typescript
public readonly scriptS3LocationInput: IResolvable | AppstreamAppBlockSetupScriptDetailsScriptS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSecondsInput"></a>

```typescript
public readonly timeoutInSecondsInput: number;
```

- *Type:* number

---

##### `executableParameters`<sup>Required</sup> <a name="executableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParameters"></a>

```typescript
public readonly executableParameters: string;
```

- *Type:* string

---

##### `executablePath`<sup>Required</sup> <a name="executablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePath"></a>

```typescript
public readonly executablePath: string;
```

- *Type:* string

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSeconds"></a>

```typescript
public readonly timeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamAppBlockSetupScriptDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

---


### AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference <a name="AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

new appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket"></a>

```typescript
public resetS3Bucket(): void
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key"></a>

```typescript
public resetS3Key(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamAppBlockSetupScriptDetailsScriptS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

---


### AppstreamAppBlockSourceS3LocationOutputReference <a name="AppstreamAppBlockSourceS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

new appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resetS3Key"></a>

```typescript
public resetS3Key(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Key">s3Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3BucketInput"></a>

```typescript
public readonly s3BucketInput: string;
```

- *Type:* string

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3KeyInput"></a>

```typescript
public readonly s3KeyInput: string;
```

- *Type:* string

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Bucket"></a>

```typescript
public readonly s3Bucket: string;
```

- *Type:* string

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Key"></a>

```typescript
public readonly s3Key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamAppBlockSourceS3Location;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

---


### AppstreamAppBlockTagsList <a name="AppstreamAppBlockTagsList" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

new appstreamAppBlock.AppstreamAppBlockTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get"></a>

```typescript
public get(index: number): AppstreamAppBlockTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamAppBlockTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>[]

---


### AppstreamAppBlockTagsOutputReference <a name="AppstreamAppBlockTagsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer"></a>

```typescript
import { appstreamAppBlock } from '@cdktn/provider-awscc'

new appstreamAppBlock.AppstreamAppBlockTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagKey"></a>

```typescript
public resetTagKey(): void
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagValue"></a>

```typescript
public resetTagValue(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKey">tagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValue">tagValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKeyInput"></a>

```typescript
public readonly tagKeyInput: string;
```

- *Type:* string

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValueInput"></a>

```typescript
public readonly tagValueInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKey"></a>

```typescript
public readonly tagKey: string;
```

- *Type:* string

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValue"></a>

```typescript
public readonly tagValue: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppstreamAppBlockTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>

---



