# `ivsEncoderConfiguration` Submodule <a name="`ivsEncoderConfiguration` Submodule" id="@cdktn/provider-awscc.ivsEncoderConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IvsEncoderConfiguration <a name="IvsEncoderConfiguration" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration awscc_ivs_encoder_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer"></a>

```typescript
import { ivsEncoderConfiguration } from '@cdktn/provider-awscc'

new ivsEncoderConfiguration.IvsEncoderConfiguration(scope: Construct, id: string, config?: IvsEncoderConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig">IvsEncoderConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig">IvsEncoderConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putVideo">putVideo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetVideo">resetVideo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | IvsEncoderConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]

---

##### `putVideo` <a name="putVideo" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putVideo"></a>

```typescript
public putVideo(value: IvsEncoderConfigurationVideo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.putVideo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVideo` <a name="resetVideo" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.resetVideo"></a>

```typescript
public resetVideo(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IvsEncoderConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isConstruct"></a>

```typescript
import { ivsEncoderConfiguration } from '@cdktn/provider-awscc'

ivsEncoderConfiguration.IvsEncoderConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformElement"></a>

```typescript
import { ivsEncoderConfiguration } from '@cdktn/provider-awscc'

ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformResource"></a>

```typescript
import { ivsEncoderConfiguration } from '@cdktn/provider-awscc'

ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport"></a>

```typescript
import { ivsEncoderConfiguration } from '@cdktn/provider-awscc'

ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IvsEncoderConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IvsEncoderConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IvsEncoderConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IvsEncoderConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList">IvsEncoderConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.video">video</a></code> | <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference">IvsEncoderConfigurationVideoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.videoInput">videoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tags"></a>

```typescript
public readonly tags: IvsEncoderConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList">IvsEncoderConfigurationTagsList</a>

---

##### `video`<sup>Required</sup> <a name="video" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.video"></a>

```typescript
public readonly video: IvsEncoderConfigurationVideoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference">IvsEncoderConfigurationVideoOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IvsEncoderConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]

---

##### `videoInput`<sup>Optional</sup> <a name="videoInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.videoInput"></a>

```typescript
public readonly videoInput: IResolvable | IvsEncoderConfigurationVideo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IvsEncoderConfigurationConfig <a name="IvsEncoderConfigurationConfig" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.Initializer"></a>

```typescript
import { ivsEncoderConfiguration } from '@cdktn/provider-awscc'

const ivsEncoderConfigurationConfig: ivsEncoderConfiguration.IvsEncoderConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.name">name</a></code> | <code>string</code> | Encoder configuration name. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.video">video</a></code> | <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a></code> | Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Encoder configuration name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#name IvsEncoderConfiguration#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IvsEncoderConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#tags IvsEncoderConfiguration#tags}

---

##### `video`<sup>Optional</sup> <a name="video" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationConfig.property.video"></a>

```typescript
public readonly video: IvsEncoderConfigurationVideo;
```

- *Type:* <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a>

Video configuration. Default: video resolution 1280x720, bitrate 2500 kbps, 30 fps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#video IvsEncoderConfiguration#video}

---

### IvsEncoderConfigurationTags <a name="IvsEncoderConfigurationTags" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.Initializer"></a>

```typescript
import { ivsEncoderConfiguration } from '@cdktn/provider-awscc'

const ivsEncoderConfigurationTags: ivsEncoderConfiguration.IvsEncoderConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#key IvsEncoderConfiguration#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#value IvsEncoderConfiguration#value}

---

### IvsEncoderConfigurationVideo <a name="IvsEncoderConfigurationVideo" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.Initializer"></a>

```typescript
import { ivsEncoderConfiguration } from '@cdktn/provider-awscc'

const ivsEncoderConfigurationVideo: ivsEncoderConfiguration.IvsEncoderConfigurationVideo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.bitrate">bitrate</a></code> | <code>number</code> | Bitrate for generated output, in bps. Default: 2500000. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.framerate">framerate</a></code> | <code>number</code> | Video frame rate, in fps. Default: 30. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.height">height</a></code> | <code>number</code> | Video-resolution height. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.width">width</a></code> | <code>number</code> | Video-resolution width. |

---

##### `bitrate`<sup>Optional</sup> <a name="bitrate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.bitrate"></a>

```typescript
public readonly bitrate: number;
```

- *Type:* number

Bitrate for generated output, in bps. Default: 2500000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#bitrate IvsEncoderConfiguration#bitrate}

---

##### `framerate`<sup>Optional</sup> <a name="framerate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.framerate"></a>

```typescript
public readonly framerate: number;
```

- *Type:* number

Video frame rate, in fps. Default: 30.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#framerate IvsEncoderConfiguration#framerate}

---

##### `height`<sup>Optional</sup> <a name="height" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

Video-resolution height.

This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 720.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#height IvsEncoderConfiguration#height}

---

##### `width`<sup>Optional</sup> <a name="width" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

Video-resolution width.

This must be an even number. Note that the maximum value is determined by width times height, such that the maximum total pixels is 2073600 (1920x1080 or 1080x1920). Default: 1280.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ivs_encoder_configuration#width IvsEncoderConfiguration#width}

---

## Classes <a name="Classes" id="Classes"></a>

### IvsEncoderConfigurationTagsList <a name="IvsEncoderConfigurationTagsList" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer"></a>

```typescript
import { ivsEncoderConfiguration } from '@cdktn/provider-awscc'

new ivsEncoderConfiguration.IvsEncoderConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.get"></a>

```typescript
public get(index: number): IvsEncoderConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsEncoderConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>[]

---


### IvsEncoderConfigurationTagsOutputReference <a name="IvsEncoderConfigurationTagsOutputReference" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { ivsEncoderConfiguration } from '@cdktn/provider-awscc'

new ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsEncoderConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationTags">IvsEncoderConfigurationTags</a>

---


### IvsEncoderConfigurationVideoOutputReference <a name="IvsEncoderConfigurationVideoOutputReference" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer"></a>

```typescript
import { ivsEncoderConfiguration } from '@cdktn/provider-awscc'

new ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetBitrate">resetBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetFramerate">resetFramerate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetHeight">resetHeight</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetWidth">resetWidth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBitrate` <a name="resetBitrate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetBitrate"></a>

```typescript
public resetBitrate(): void
```

##### `resetFramerate` <a name="resetFramerate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetFramerate"></a>

```typescript
public resetFramerate(): void
```

##### `resetHeight` <a name="resetHeight" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetHeight"></a>

```typescript
public resetHeight(): void
```

##### `resetWidth` <a name="resetWidth" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.resetWidth"></a>

```typescript
public resetWidth(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.bitrateInput">bitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.framerateInput">framerateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.heightInput">heightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.widthInput">widthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.bitrate">bitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.framerate">framerate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.height">height</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.width">width</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bitrateInput`<sup>Optional</sup> <a name="bitrateInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.bitrateInput"></a>

```typescript
public readonly bitrateInput: number;
```

- *Type:* number

---

##### `framerateInput`<sup>Optional</sup> <a name="framerateInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.framerateInput"></a>

```typescript
public readonly framerateInput: number;
```

- *Type:* number

---

##### `heightInput`<sup>Optional</sup> <a name="heightInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.heightInput"></a>

```typescript
public readonly heightInput: number;
```

- *Type:* number

---

##### `widthInput`<sup>Optional</sup> <a name="widthInput" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.widthInput"></a>

```typescript
public readonly widthInput: number;
```

- *Type:* number

---

##### `bitrate`<sup>Required</sup> <a name="bitrate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.bitrate"></a>

```typescript
public readonly bitrate: number;
```

- *Type:* number

---

##### `framerate`<sup>Required</sup> <a name="framerate" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.framerate"></a>

```typescript
public readonly framerate: number;
```

- *Type:* number

---

##### `height`<sup>Required</sup> <a name="height" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.height"></a>

```typescript
public readonly height: number;
```

- *Type:* number

---

##### `width`<sup>Required</sup> <a name="width" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.width"></a>

```typescript
public readonly width: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IvsEncoderConfigurationVideo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ivsEncoderConfiguration.IvsEncoderConfigurationVideo">IvsEncoderConfigurationVideo</a>

---



