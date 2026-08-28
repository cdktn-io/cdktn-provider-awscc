# `nimblestudioStreamingImage` Submodule <a name="`nimblestudioStreamingImage` Submodule" id="@cdktn/provider-awscc.nimblestudioStreamingImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NimblestudioStreamingImage <a name="NimblestudioStreamingImage" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image awscc_nimblestudio_streaming_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer"></a>

```typescript
import { nimblestudioStreamingImage } from '@cdktn/provider-awscc'

new nimblestudioStreamingImage.NimblestudioStreamingImage(scope: Construct, id: string, config: NimblestudioStreamingImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig">NimblestudioStreamingImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig">NimblestudioStreamingImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetEncryptionConfigurationKeyArn">resetEncryptionConfigurationKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetEncryptionConfigurationKeyType">resetEncryptionConfigurationKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEncryptionConfigurationKeyArn` <a name="resetEncryptionConfigurationKeyArn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetEncryptionConfigurationKeyArn"></a>

```typescript
public resetEncryptionConfigurationKeyArn(): void
```

##### `resetEncryptionConfigurationKeyType` <a name="resetEncryptionConfigurationKeyType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetEncryptionConfigurationKeyType"></a>

```typescript
public resetEncryptionConfigurationKeyType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NimblestudioStreamingImage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isConstruct"></a>

```typescript
import { nimblestudioStreamingImage } from '@cdktn/provider-awscc'

nimblestudioStreamingImage.NimblestudioStreamingImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformElement"></a>

```typescript
import { nimblestudioStreamingImage } from '@cdktn/provider-awscc'

nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformResource"></a>

```typescript
import { nimblestudioStreamingImage } from '@cdktn/provider-awscc'

nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport"></a>

```typescript
import { nimblestudioStreamingImage } from '@cdktn/provider-awscc'

nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NimblestudioStreamingImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NimblestudioStreamingImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NimblestudioStreamingImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NimblestudioStreamingImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference">NimblestudioStreamingImageEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.eulaIds">eulaIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.streamingImageId">streamingImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.ec2ImageIdInput">ec2ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyArnInput">encryptionConfigurationKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyTypeInput">encryptionConfigurationKeyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.studioIdInput">studioIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.ec2ImageId">ec2ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyArn">encryptionConfigurationKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyType">encryptionConfigurationKeyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.studioId">studioId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfiguration"></a>

```typescript
public readonly encryptionConfiguration: NimblestudioStreamingImageEncryptionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference">NimblestudioStreamingImageEncryptionConfigurationOutputReference</a>

---

##### `eulaIds`<sup>Required</sup> <a name="eulaIds" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.eulaIds"></a>

```typescript
public readonly eulaIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `streamingImageId`<sup>Required</sup> <a name="streamingImageId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.streamingImageId"></a>

```typescript
public readonly streamingImageId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `ec2ImageIdInput`<sup>Optional</sup> <a name="ec2ImageIdInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.ec2ImageIdInput"></a>

```typescript
public readonly ec2ImageIdInput: string;
```

- *Type:* string

---

##### `encryptionConfigurationKeyArnInput`<sup>Optional</sup> <a name="encryptionConfigurationKeyArnInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyArnInput"></a>

```typescript
public readonly encryptionConfigurationKeyArnInput: string;
```

- *Type:* string

---

##### `encryptionConfigurationKeyTypeInput`<sup>Optional</sup> <a name="encryptionConfigurationKeyTypeInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyTypeInput"></a>

```typescript
public readonly encryptionConfigurationKeyTypeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `studioIdInput`<sup>Optional</sup> <a name="studioIdInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.studioIdInput"></a>

```typescript
public readonly studioIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ec2ImageId`<sup>Required</sup> <a name="ec2ImageId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.ec2ImageId"></a>

```typescript
public readonly ec2ImageId: string;
```

- *Type:* string

---

##### `encryptionConfigurationKeyArn`<sup>Required</sup> <a name="encryptionConfigurationKeyArn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyArn"></a>

```typescript
public readonly encryptionConfigurationKeyArn: string;
```

- *Type:* string

---

##### `encryptionConfigurationKeyType`<sup>Required</sup> <a name="encryptionConfigurationKeyType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyType"></a>

```typescript
public readonly encryptionConfigurationKeyType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.studioId"></a>

```typescript
public readonly studioId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NimblestudioStreamingImageConfig <a name="NimblestudioStreamingImageConfig" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.Initializer"></a>

```typescript
import { nimblestudioStreamingImage } from '@cdktn/provider-awscc'

const nimblestudioStreamingImageConfig: nimblestudioStreamingImage.NimblestudioStreamingImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.ec2ImageId">ec2ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#ec_2_image_id NimblestudioStreamingImage#ec_2_image_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#name NimblestudioStreamingImage#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.studioId">studioId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#studio_id NimblestudioStreamingImage#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#description NimblestudioStreamingImage#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.encryptionConfigurationKeyArn">encryptionConfigurationKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_arn NimblestudioStreamingImage#encryption_configuration_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.encryptionConfigurationKeyType">encryptionConfigurationKeyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_type NimblestudioStreamingImage#encryption_configuration_key_type}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#tags NimblestudioStreamingImage#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ec2ImageId`<sup>Required</sup> <a name="ec2ImageId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.ec2ImageId"></a>

```typescript
public readonly ec2ImageId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#ec_2_image_id NimblestudioStreamingImage#ec_2_image_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#name NimblestudioStreamingImage#name}.

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.studioId"></a>

```typescript
public readonly studioId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#studio_id NimblestudioStreamingImage#studio_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#description NimblestudioStreamingImage#description}.

---

##### `encryptionConfigurationKeyArn`<sup>Optional</sup> <a name="encryptionConfigurationKeyArn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.encryptionConfigurationKeyArn"></a>

```typescript
public readonly encryptionConfigurationKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_arn NimblestudioStreamingImage#encryption_configuration_key_arn}.

---

##### `encryptionConfigurationKeyType`<sup>Optional</sup> <a name="encryptionConfigurationKeyType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.encryptionConfigurationKeyType"></a>

```typescript
public readonly encryptionConfigurationKeyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_type NimblestudioStreamingImage#encryption_configuration_key_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/nimblestudio_streaming_image#tags NimblestudioStreamingImage#tags}.

---

### NimblestudioStreamingImageEncryptionConfiguration <a name="NimblestudioStreamingImageEncryptionConfiguration" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration.Initializer"></a>

```typescript
import { nimblestudioStreamingImage } from '@cdktn/provider-awscc'

const nimblestudioStreamingImageEncryptionConfiguration: nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### NimblestudioStreamingImageEncryptionConfigurationOutputReference <a name="NimblestudioStreamingImageEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer"></a>

```typescript
import { nimblestudioStreamingImage } from '@cdktn/provider-awscc'

new nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration">NimblestudioStreamingImageEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: NimblestudioStreamingImageEncryptionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration">NimblestudioStreamingImageEncryptionConfiguration</a>

---



