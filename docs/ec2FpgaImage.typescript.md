# `ec2FpgaImage` Submodule <a name="`ec2FpgaImage` Submodule" id="@cdktn/provider-awscc.ec2FpgaImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2FpgaImage <a name="Ec2FpgaImage" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image awscc_ec2_fpga_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer"></a>

```typescript
import { ec2FpgaImage } from '@cdktn/provider-awscc'

new ec2FpgaImage.Ec2FpgaImage(scope: Construct, id: string, config?: Ec2FpgaImageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig">Ec2FpgaImageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig">Ec2FpgaImageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putInputStorageLocation">putInputStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putLogsStorageLocation">putLogsStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetInputStorageLocation">resetInputStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetLogsStorageLocation">resetLogsStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInputStorageLocation` <a name="putInputStorageLocation" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putInputStorageLocation"></a>

```typescript
public putInputStorageLocation(value: Ec2FpgaImageInputStorageLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putInputStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a>

---

##### `putLogsStorageLocation` <a name="putLogsStorageLocation" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putLogsStorageLocation"></a>

```typescript
public putLogsStorageLocation(value: Ec2FpgaImageLogsStorageLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putLogsStorageLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putTags"></a>

```typescript
public putTags(value: IResolvable | Ec2FpgaImageTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetInputStorageLocation` <a name="resetInputStorageLocation" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetInputStorageLocation"></a>

```typescript
public resetInputStorageLocation(): void
```

##### `resetLogsStorageLocation` <a name="resetLogsStorageLocation" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetLogsStorageLocation"></a>

```typescript
public resetLogsStorageLocation(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2FpgaImage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isConstruct"></a>

```typescript
import { ec2FpgaImage } from '@cdktn/provider-awscc'

ec2FpgaImage.Ec2FpgaImage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isTerraformElement"></a>

```typescript
import { ec2FpgaImage } from '@cdktn/provider-awscc'

ec2FpgaImage.Ec2FpgaImage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isTerraformResource"></a>

```typescript
import { ec2FpgaImage } from '@cdktn/provider-awscc'

ec2FpgaImage.Ec2FpgaImage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.generateConfigForImport"></a>

```typescript
import { ec2FpgaImage } from '@cdktn/provider-awscc'

ec2FpgaImage.Ec2FpgaImage.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Ec2FpgaImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Ec2FpgaImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Ec2FpgaImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Ec2FpgaImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.dataRetentionSupport">dataRetentionSupport</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.fpgaImageGlobalId">fpgaImageGlobalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.fpgaImageId">fpgaImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.inputStorageLocation">inputStorageLocation</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference">Ec2FpgaImageInputStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.logsStorageLocation">logsStorageLocation</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference">Ec2FpgaImageLogsStorageLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.public">public</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList">Ec2FpgaImageTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.inputStorageLocationInput">inputStorageLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.logsStorageLocationInput">logsStorageLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `dataRetentionSupport`<sup>Required</sup> <a name="dataRetentionSupport" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.dataRetentionSupport"></a>

```typescript
public readonly dataRetentionSupport: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fpgaImageGlobalId`<sup>Required</sup> <a name="fpgaImageGlobalId" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.fpgaImageGlobalId"></a>

```typescript
public readonly fpgaImageGlobalId: string;
```

- *Type:* string

---

##### `fpgaImageId`<sup>Required</sup> <a name="fpgaImageId" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.fpgaImageId"></a>

```typescript
public readonly fpgaImageId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputStorageLocation`<sup>Required</sup> <a name="inputStorageLocation" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.inputStorageLocation"></a>

```typescript
public readonly inputStorageLocation: Ec2FpgaImageInputStorageLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference">Ec2FpgaImageInputStorageLocationOutputReference</a>

---

##### `logsStorageLocation`<sup>Required</sup> <a name="logsStorageLocation" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.logsStorageLocation"></a>

```typescript
public readonly logsStorageLocation: Ec2FpgaImageLogsStorageLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference">Ec2FpgaImageLogsStorageLocationOutputReference</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.public"></a>

```typescript
public readonly public: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.tags"></a>

```typescript
public readonly tags: Ec2FpgaImageTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList">Ec2FpgaImageTagsList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `inputStorageLocationInput`<sup>Optional</sup> <a name="inputStorageLocationInput" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.inputStorageLocationInput"></a>

```typescript
public readonly inputStorageLocationInput: IResolvable | Ec2FpgaImageInputStorageLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a>

---

##### `logsStorageLocationInput`<sup>Optional</sup> <a name="logsStorageLocationInput" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.logsStorageLocationInput"></a>

```typescript
public readonly logsStorageLocationInput: IResolvable | Ec2FpgaImageLogsStorageLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Ec2FpgaImageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2FpgaImageConfig <a name="Ec2FpgaImageConfig" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.Initializer"></a>

```typescript
import { ec2FpgaImage } from '@cdktn/provider-awscc'

const ec2FpgaImageConfig: ec2FpgaImage.Ec2FpgaImageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.description">description</a></code> | <code>string</code> | A description for the AFI. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.inputStorageLocation">inputStorageLocation</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a></code> | The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.logsStorageLocation">logsStorageLocation</a></code> | <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a></code> | The location in Amazon S3 for the output logs. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.name">name</a></code> | <code>string</code> | A name for the AFI. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>[]</code> | The tags assigned to the FPGA image. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the AFI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#description Ec2FpgaImage#description}

---

##### `inputStorageLocation`<sup>Optional</sup> <a name="inputStorageLocation" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.inputStorageLocation"></a>

```typescript
public readonly inputStorageLocation: Ec2FpgaImageInputStorageLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a>

The location of the encrypted design checkpoint in Amazon S3. The input must be a tarball.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#input_storage_location Ec2FpgaImage#input_storage_location}

---

##### `logsStorageLocation`<sup>Optional</sup> <a name="logsStorageLocation" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.logsStorageLocation"></a>

```typescript
public readonly logsStorageLocation: Ec2FpgaImageLogsStorageLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a>

The location in Amazon S3 for the output logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#logs_storage_location Ec2FpgaImage#logs_storage_location}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A name for the AFI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#name Ec2FpgaImage#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Ec2FpgaImageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>[]

The tags assigned to the FPGA image.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#tags Ec2FpgaImage#tags}

---

### Ec2FpgaImageInputStorageLocation <a name="Ec2FpgaImageInputStorageLocation" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation.Initializer"></a>

```typescript
import { ec2FpgaImage } from '@cdktn/provider-awscc'

const ec2FpgaImageInputStorageLocation: ec2FpgaImage.Ec2FpgaImageInputStorageLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation.property.bucket">bucket</a></code> | <code>string</code> | The name of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation.property.key">key</a></code> | <code>string</code> | The key. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#bucket Ec2FpgaImage#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#key Ec2FpgaImage#key}

---

### Ec2FpgaImageLogsStorageLocation <a name="Ec2FpgaImageLogsStorageLocation" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation.Initializer"></a>

```typescript
import { ec2FpgaImage } from '@cdktn/provider-awscc'

const ec2FpgaImageLogsStorageLocation: ec2FpgaImage.Ec2FpgaImageLogsStorageLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation.property.bucket">bucket</a></code> | <code>string</code> | The name of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation.property.key">key</a></code> | <code>string</code> | The key. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#bucket Ec2FpgaImage#bucket}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#key Ec2FpgaImage#key}

---

### Ec2FpgaImageTags <a name="Ec2FpgaImageTags" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags.Initializer"></a>

```typescript
import { ec2FpgaImage } from '@cdktn/provider-awscc'

const ec2FpgaImageTags: ec2FpgaImage.Ec2FpgaImageTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags.property.key">key</a></code> | <code>string</code> | The tag key. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags.property.value">value</a></code> | <code>string</code> | The tag value. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The tag key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#key Ec2FpgaImage#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The tag value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_fpga_image#value Ec2FpgaImage#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2FpgaImageInputStorageLocationOutputReference <a name="Ec2FpgaImageInputStorageLocationOutputReference" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.Initializer"></a>

```typescript
import { ec2FpgaImage } from '@cdktn/provider-awscc'

new ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FpgaImageInputStorageLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageInputStorageLocation">Ec2FpgaImageInputStorageLocation</a>

---


### Ec2FpgaImageLogsStorageLocationOutputReference <a name="Ec2FpgaImageLogsStorageLocationOutputReference" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.Initializer"></a>

```typescript
import { ec2FpgaImage } from '@cdktn/provider-awscc'

new ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resetKey">resetKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FpgaImageLogsStorageLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageLogsStorageLocation">Ec2FpgaImageLogsStorageLocation</a>

---


### Ec2FpgaImageTagsList <a name="Ec2FpgaImageTagsList" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer"></a>

```typescript
import { ec2FpgaImage } from '@cdktn/provider-awscc'

new ec2FpgaImage.Ec2FpgaImageTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.get"></a>

```typescript
public get(index: number): Ec2FpgaImageTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FpgaImageTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>[]

---


### Ec2FpgaImageTagsOutputReference <a name="Ec2FpgaImageTagsOutputReference" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer"></a>

```typescript
import { ec2FpgaImage } from '@cdktn/provider-awscc'

new ec2FpgaImage.Ec2FpgaImageTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Ec2FpgaImageTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.ec2FpgaImage.Ec2FpgaImageTags">Ec2FpgaImageTags</a>

---



