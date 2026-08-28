# `iotwirelessWirelessDevice` Submodule <a name="`iotwirelessWirelessDevice` Submodule" id="@cdktn/provider-awscc.iotwirelessWirelessDevice"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessWirelessDevice <a name="IotwirelessWirelessDevice" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device awscc_iotwireless_wireless_device}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new iotwirelessWirelessDevice.IotwirelessWirelessDevice(scope: Construct, id: string, config: IotwirelessWirelessDeviceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig">IotwirelessWirelessDeviceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig">IotwirelessWirelessDeviceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan">putLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLastUplinkReceivedAt">resetLastUplinkReceivedAt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLoRaWan">resetLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetPositioning">resetPositioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetThingArn">resetThingArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoRaWan` <a name="putLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan"></a>

```typescript
public putLoRaWan(value: IotwirelessWirelessDeviceLoRaWan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags"></a>

```typescript
public putTags(value: IResolvable | IotwirelessWirelessDeviceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetLastUplinkReceivedAt` <a name="resetLastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLastUplinkReceivedAt"></a>

```typescript
public resetLastUplinkReceivedAt(): void
```

##### `resetLoRaWan` <a name="resetLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetLoRaWan"></a>

```typescript
public resetLoRaWan(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPositioning` <a name="resetPositioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetPositioning"></a>

```typescript
public resetPositioning(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetThingArn` <a name="resetThingArn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.resetThingArn"></a>

```typescript
public resetThingArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotwirelessWirelessDevice resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessWirelessDevice to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessWirelessDevice that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessWirelessDevice to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference">IotwirelessWirelessDeviceLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList">IotwirelessWirelessDeviceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingName">thingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.wirelessDeviceId">wirelessDeviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationNameInput">destinationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAtInput">lastUplinkReceivedAtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWanInput">loRaWanInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioningInput">positioningInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArnInput">thingArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationName">destinationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAt">lastUplinkReceivedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioning">positioning</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArn">thingArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWan"></a>

```typescript
public readonly loRaWan: IotwirelessWirelessDeviceLoRaWanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference">IotwirelessWirelessDeviceLoRaWanOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tags"></a>

```typescript
public readonly tags: IotwirelessWirelessDeviceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList">IotwirelessWirelessDeviceTagsList</a>

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

---

##### `wirelessDeviceId`<sup>Required</sup> <a name="wirelessDeviceId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.wirelessDeviceId"></a>

```typescript
public readonly wirelessDeviceId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationNameInput`<sup>Optional</sup> <a name="destinationNameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationNameInput"></a>

```typescript
public readonly destinationNameInput: string;
```

- *Type:* string

---

##### `lastUplinkReceivedAtInput`<sup>Optional</sup> <a name="lastUplinkReceivedAtInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAtInput"></a>

```typescript
public readonly lastUplinkReceivedAtInput: string;
```

- *Type:* string

---

##### `loRaWanInput`<sup>Optional</sup> <a name="loRaWanInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.loRaWanInput"></a>

```typescript
public readonly loRaWanInput: IResolvable | IotwirelessWirelessDeviceLoRaWan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `positioningInput`<sup>Optional</sup> <a name="positioningInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioningInput"></a>

```typescript
public readonly positioningInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotwirelessWirelessDeviceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]

---

##### `thingArnInput`<sup>Optional</sup> <a name="thingArnInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArnInput"></a>

```typescript
public readonly thingArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

---

##### `lastUplinkReceivedAt`<sup>Required</sup> <a name="lastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.lastUplinkReceivedAt"></a>

```typescript
public readonly lastUplinkReceivedAt: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `positioning`<sup>Required</sup> <a name="positioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.positioning"></a>

```typescript
public readonly positioning: string;
```

- *Type:* string

---

##### `thingArn`<sup>Required</sup> <a name="thingArn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.thingArn"></a>

```typescript
public readonly thingArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDevice.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessWirelessDeviceConfig <a name="IotwirelessWirelessDeviceConfig" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceConfig: iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.destinationName">destinationName</a></code> | <code>string</code> | Wireless device destination name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.type">type</a></code> | <code>string</code> | Wireless device type, currently only Sidewalk and LoRa. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.description">description</a></code> | <code>string</code> | Wireless device description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lastUplinkReceivedAt">lastUplinkReceivedAt</a></code> | <code>string</code> | The date and time when the most recent uplink was received. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.name">name</a></code> | <code>string</code> | Wireless device name. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.positioning">positioning</a></code> | <code>string</code> | FPort values for the GNSS, stream, and ClockSync functions of the positioning information. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]</code> | A list of key-value pairs that contain metadata for the device. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.thingArn">thingArn</a></code> | <code>string</code> | Thing arn. Passed into update to associate Thing with Wireless device. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

Wireless device destination name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#destination_name IotwirelessWirelessDevice#destination_name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Wireless device type, currently only Sidewalk and LoRa.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#type IotwirelessWirelessDevice#type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Wireless device description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#description IotwirelessWirelessDevice#description}

---

##### `lastUplinkReceivedAt`<sup>Optional</sup> <a name="lastUplinkReceivedAt" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.lastUplinkReceivedAt"></a>

```typescript
public readonly lastUplinkReceivedAt: string;
```

- *Type:* string

The date and time when the most recent uplink was received.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#last_uplink_received_at IotwirelessWirelessDevice#last_uplink_received_at}

---

##### `loRaWan`<sup>Optional</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.loRaWan"></a>

```typescript
public readonly loRaWan: IotwirelessWirelessDeviceLoRaWan;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

The combination of Package, Station and Model which represents the version of the LoRaWAN Wireless Device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#lo_ra_wan IotwirelessWirelessDevice#lo_ra_wan}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Wireless device name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#name IotwirelessWirelessDevice#name}

---

##### `positioning`<sup>Optional</sup> <a name="positioning" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.positioning"></a>

```typescript
public readonly positioning: string;
```

- *Type:* string

FPort values for the GNSS, stream, and ClockSync functions of the positioning information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#positioning IotwirelessWirelessDevice#positioning}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotwirelessWirelessDeviceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]

A list of key-value pairs that contain metadata for the device.

Currently not supported, will not create if tags are passed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#tags IotwirelessWirelessDevice#tags}

---

##### `thingArn`<sup>Optional</sup> <a name="thingArn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceConfig.property.thingArn"></a>

```typescript
public readonly thingArn: string;
```

- *Type:* string

Thing arn. Passed into update to associate Thing with Wireless device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#thing_arn IotwirelessWirelessDevice#thing_arn}

---

### IotwirelessWirelessDeviceLoRaWan <a name="IotwirelessWirelessDeviceLoRaWan" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceLoRaWan: iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV10X">abpV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#abp_v10_x IotwirelessWirelessDevice#abp_v10_x}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV11">abpV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#abp_v11 IotwirelessWirelessDevice#abp_v11}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.devEui">devEui</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#dev_eui IotwirelessWirelessDevice#dev_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.deviceProfileId">deviceProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#device_profile_id IotwirelessWirelessDevice#device_profile_id}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.fPorts">fPorts</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#f_ports IotwirelessWirelessDevice#f_ports}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV10X">otaaV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#otaa_v10_x IotwirelessWirelessDevice#otaa_v10_x}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV11">otaaV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#otaa_v11 IotwirelessWirelessDevice#otaa_v11}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.serviceProfileId">serviceProfileId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#service_profile_id IotwirelessWirelessDevice#service_profile_id}. |

---

##### `abpV10X`<sup>Optional</sup> <a name="abpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV10X"></a>

```typescript
public readonly abpV10X: IotwirelessWirelessDeviceLoRaWanAbpV10X;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#abp_v10_x IotwirelessWirelessDevice#abp_v10_x}.

---

##### `abpV11`<sup>Optional</sup> <a name="abpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.abpV11"></a>

```typescript
public readonly abpV11: IotwirelessWirelessDeviceLoRaWanAbpV11;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#abp_v11 IotwirelessWirelessDevice#abp_v11}.

---

##### `devEui`<sup>Optional</sup> <a name="devEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.devEui"></a>

```typescript
public readonly devEui: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#dev_eui IotwirelessWirelessDevice#dev_eui}.

---

##### `deviceProfileId`<sup>Optional</sup> <a name="deviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.deviceProfileId"></a>

```typescript
public readonly deviceProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#device_profile_id IotwirelessWirelessDevice#device_profile_id}.

---

##### `fPorts`<sup>Optional</sup> <a name="fPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.fPorts"></a>

```typescript
public readonly fPorts: IotwirelessWirelessDeviceLoRaWanFPorts;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#f_ports IotwirelessWirelessDevice#f_ports}.

---

##### `otaaV10X`<sup>Optional</sup> <a name="otaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV10X"></a>

```typescript
public readonly otaaV10X: IotwirelessWirelessDeviceLoRaWanOtaaV10X;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#otaa_v10_x IotwirelessWirelessDevice#otaa_v10_x}.

---

##### `otaaV11`<sup>Optional</sup> <a name="otaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.otaaV11"></a>

```typescript
public readonly otaaV11: IotwirelessWirelessDeviceLoRaWanOtaaV11;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#otaa_v11 IotwirelessWirelessDevice#otaa_v11}.

---

##### `serviceProfileId`<sup>Optional</sup> <a name="serviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan.property.serviceProfileId"></a>

```typescript
public readonly serviceProfileId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#service_profile_id IotwirelessWirelessDevice#service_profile_id}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV10X <a name="IotwirelessWirelessDeviceLoRaWanAbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceLoRaWanAbpV10X: iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.devAddr">devAddr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.sessionKeys">sessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}. |

---

##### `devAddr`<sup>Optional</sup> <a name="devAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.devAddr"></a>

```typescript
public readonly devAddr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}.

---

##### `sessionKeys`<sup>Optional</sup> <a name="sessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X.property.sessionKeys"></a>

```typescript
public readonly sessionKeys: IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys: iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.appSKey">appSKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.nwkSKey">nwkSKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#nwk_s_key IotwirelessWirelessDevice#nwk_s_key}. |

---

##### `appSKey`<sup>Optional</sup> <a name="appSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.appSKey"></a>

```typescript
public readonly appSKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}.

---

##### `nwkSKey`<sup>Optional</sup> <a name="nwkSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys.property.nwkSKey"></a>

```typescript
public readonly nwkSKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#nwk_s_key IotwirelessWirelessDevice#nwk_s_key}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV11 <a name="IotwirelessWirelessDeviceLoRaWanAbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceLoRaWanAbpV11: iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.devAddr">devAddr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.sessionKeys">sessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}. |

---

##### `devAddr`<sup>Optional</sup> <a name="devAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.devAddr"></a>

```typescript
public readonly devAddr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#dev_addr IotwirelessWirelessDevice#dev_addr}.

---

##### `sessionKeys`<sup>Optional</sup> <a name="sessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11.property.sessionKeys"></a>

```typescript
public readonly sessionKeys: IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#session_keys IotwirelessWirelessDevice#session_keys}.

---

### IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys <a name="IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys: iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.appSKey">appSKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.fNwkSIntKey">fNwkSIntKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#f_nwk_s_int_key IotwirelessWirelessDevice#f_nwk_s_int_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.nwkSEncKey">nwkSEncKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#nwk_s_enc_key IotwirelessWirelessDevice#nwk_s_enc_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.sNwkSIntKey">sNwkSIntKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#s_nwk_s_int_key IotwirelessWirelessDevice#s_nwk_s_int_key}. |

---

##### `appSKey`<sup>Optional</sup> <a name="appSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.appSKey"></a>

```typescript
public readonly appSKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#app_s_key IotwirelessWirelessDevice#app_s_key}.

---

##### `fNwkSIntKey`<sup>Optional</sup> <a name="fNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.fNwkSIntKey"></a>

```typescript
public readonly fNwkSIntKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#f_nwk_s_int_key IotwirelessWirelessDevice#f_nwk_s_int_key}.

---

##### `nwkSEncKey`<sup>Optional</sup> <a name="nwkSEncKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.nwkSEncKey"></a>

```typescript
public readonly nwkSEncKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#nwk_s_enc_key IotwirelessWirelessDevice#nwk_s_enc_key}.

---

##### `sNwkSIntKey`<sup>Optional</sup> <a name="sNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys.property.sNwkSIntKey"></a>

```typescript
public readonly sNwkSIntKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#s_nwk_s_int_key IotwirelessWirelessDevice#s_nwk_s_int_key}.

---

### IotwirelessWirelessDeviceLoRaWanFPorts <a name="IotwirelessWirelessDeviceLoRaWanFPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceLoRaWanFPorts: iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.property.applications">applications</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]</code> | A list of optional LoRaWAN application information, which can be used for geolocation. |

---

##### `applications`<sup>Optional</sup> <a name="applications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts.property.applications"></a>

```typescript
public readonly applications: IResolvable | IotwirelessWirelessDeviceLoRaWanFPortsApplications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]

A list of optional LoRaWAN application information, which can be used for geolocation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#applications IotwirelessWirelessDevice#applications}

---

### IotwirelessWirelessDeviceLoRaWanFPortsApplications <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceLoRaWanFPortsApplications: iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.destinationName">destinationName</a></code> | <code>string</code> | The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.fPort">fPort</a></code> | <code>number</code> | The Fport value. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.type">type</a></code> | <code>string</code> | Application type, which can be specified to obtain real-time position information of your LoRaWAN device. |

---

##### `destinationName`<sup>Optional</sup> <a name="destinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

The name of the position data destination that describes the AWS IoT rule that processes the device's position data for use by AWS IoT Core for LoRaWAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#destination_name IotwirelessWirelessDevice#destination_name}

---

##### `fPort`<sup>Optional</sup> <a name="fPort" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.fPort"></a>

```typescript
public readonly fPort: number;
```

- *Type:* number

The Fport value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#f_port IotwirelessWirelessDevice#f_port}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Application type, which can be specified to obtain real-time position information of your LoRaWAN device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#type IotwirelessWirelessDevice#type}

---

### IotwirelessWirelessDeviceLoRaWanOtaaV10X <a name="IotwirelessWirelessDeviceLoRaWanOtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceLoRaWanOtaaV10X: iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appEui">appEui</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#app_eui IotwirelessWirelessDevice#app_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appKey">appKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}. |

---

##### `appEui`<sup>Optional</sup> <a name="appEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appEui"></a>

```typescript
public readonly appEui: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#app_eui IotwirelessWirelessDevice#app_eui}.

---

##### `appKey`<sup>Optional</sup> <a name="appKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X.property.appKey"></a>

```typescript
public readonly appKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}.

---

### IotwirelessWirelessDeviceLoRaWanOtaaV11 <a name="IotwirelessWirelessDeviceLoRaWanOtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceLoRaWanOtaaV11: iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.appKey">appKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.joinEui">joinEui</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#join_eui IotwirelessWirelessDevice#join_eui}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.nwkKey">nwkKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#nwk_key IotwirelessWirelessDevice#nwk_key}. |

---

##### `appKey`<sup>Optional</sup> <a name="appKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.appKey"></a>

```typescript
public readonly appKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#app_key IotwirelessWirelessDevice#app_key}.

---

##### `joinEui`<sup>Optional</sup> <a name="joinEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.joinEui"></a>

```typescript
public readonly joinEui: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#join_eui IotwirelessWirelessDevice#join_eui}.

---

##### `nwkKey`<sup>Optional</sup> <a name="nwkKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11.property.nwkKey"></a>

```typescript
public readonly nwkKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#nwk_key IotwirelessWirelessDevice#nwk_key}.

---

### IotwirelessWirelessDeviceTags <a name="IotwirelessWirelessDeviceTags" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

const iotwirelessWirelessDeviceTags: iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#key IotwirelessWirelessDevice#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#value IotwirelessWirelessDevice#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#key IotwirelessWirelessDevice#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/iotwireless_wireless_device#value IotwirelessWirelessDevice#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys">putSessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetDevAddr">resetDevAddr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetSessionKeys">resetSessionKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionKeys` <a name="putSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys"></a>

```typescript
public putSessionKeys(value: IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.putSessionKeys.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---

##### `resetDevAddr` <a name="resetDevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetDevAddr"></a>

```typescript
public resetDevAddr(): void
```

##### `resetSessionKeys` <a name="resetSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.resetSessionKeys"></a>

```typescript
public resetSessionKeys(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys">sessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddrInput">devAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeysInput">sessionKeysInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr">devAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionKeys`<sup>Required</sup> <a name="sessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeys"></a>

```typescript
public readonly sessionKeys: IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference</a>

---

##### `devAddrInput`<sup>Optional</sup> <a name="devAddrInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddrInput"></a>

```typescript
public readonly devAddrInput: string;
```

- *Type:* string

---

##### `sessionKeysInput`<sup>Optional</sup> <a name="sessionKeysInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.sessionKeysInput"></a>

```typescript
public readonly sessionKeysInput: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---

##### `devAddr`<sup>Required</sup> <a name="devAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.devAddr"></a>

```typescript
public readonly devAddr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV10X;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---


### IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetAppSKey">resetAppSKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetNwkSKey">resetNwkSKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppSKey` <a name="resetAppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetAppSKey"></a>

```typescript
public resetAppSKey(): void
```

##### `resetNwkSKey` <a name="resetNwkSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.resetNwkSKey"></a>

```typescript
public resetNwkSKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKeyInput">appSKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKeyInput">nwkSKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey">appSKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey">nwkSKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appSKeyInput`<sup>Optional</sup> <a name="appSKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKeyInput"></a>

```typescript
public readonly appSKeyInput: string;
```

- *Type:* string

---

##### `nwkSKeyInput`<sup>Optional</sup> <a name="nwkSKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKeyInput"></a>

```typescript
public readonly nwkSKeyInput: string;
```

- *Type:* string

---

##### `appSKey`<sup>Required</sup> <a name="appSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.appSKey"></a>

```typescript
public readonly appSKey: string;
```

- *Type:* string

---

##### `nwkSKey`<sup>Required</sup> <a name="nwkSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.nwkSKey"></a>

```typescript
public readonly nwkSKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV10XSessionKeys</a>

---


### IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys">putSessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetDevAddr">resetDevAddr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetSessionKeys">resetSessionKeys</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionKeys` <a name="putSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys"></a>

```typescript
public putSessionKeys(value: IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.putSessionKeys.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---

##### `resetDevAddr` <a name="resetDevAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetDevAddr"></a>

```typescript
public resetDevAddr(): void
```

##### `resetSessionKeys` <a name="resetSessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.resetSessionKeys"></a>

```typescript
public resetSessionKeys(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys">sessionKeys</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddrInput">devAddrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeysInput">sessionKeysInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr">devAddr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionKeys`<sup>Required</sup> <a name="sessionKeys" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeys"></a>

```typescript
public readonly sessionKeys: IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference</a>

---

##### `devAddrInput`<sup>Optional</sup> <a name="devAddrInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddrInput"></a>

```typescript
public readonly devAddrInput: string;
```

- *Type:* string

---

##### `sessionKeysInput`<sup>Optional</sup> <a name="sessionKeysInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.sessionKeysInput"></a>

```typescript
public readonly sessionKeysInput: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---

##### `devAddr`<sup>Required</sup> <a name="devAddr" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.devAddr"></a>

```typescript
public readonly devAddr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV11;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

---


### IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference <a name="IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetAppSKey">resetAppSKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetFNwkSIntKey">resetFNwkSIntKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetNwkSEncKey">resetNwkSEncKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetSNwkSIntKey">resetSNwkSIntKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppSKey` <a name="resetAppSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetAppSKey"></a>

```typescript
public resetAppSKey(): void
```

##### `resetFNwkSIntKey` <a name="resetFNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetFNwkSIntKey"></a>

```typescript
public resetFNwkSIntKey(): void
```

##### `resetNwkSEncKey` <a name="resetNwkSEncKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetNwkSEncKey"></a>

```typescript
public resetNwkSEncKey(): void
```

##### `resetSNwkSIntKey` <a name="resetSNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.resetSNwkSIntKey"></a>

```typescript
public resetSNwkSIntKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKeyInput">appSKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKeyInput">fNwkSIntKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKeyInput">nwkSEncKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKeyInput">sNwkSIntKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey">appSKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey">fNwkSIntKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey">nwkSEncKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey">sNwkSIntKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appSKeyInput`<sup>Optional</sup> <a name="appSKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKeyInput"></a>

```typescript
public readonly appSKeyInput: string;
```

- *Type:* string

---

##### `fNwkSIntKeyInput`<sup>Optional</sup> <a name="fNwkSIntKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKeyInput"></a>

```typescript
public readonly fNwkSIntKeyInput: string;
```

- *Type:* string

---

##### `nwkSEncKeyInput`<sup>Optional</sup> <a name="nwkSEncKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKeyInput"></a>

```typescript
public readonly nwkSEncKeyInput: string;
```

- *Type:* string

---

##### `sNwkSIntKeyInput`<sup>Optional</sup> <a name="sNwkSIntKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKeyInput"></a>

```typescript
public readonly sNwkSIntKeyInput: string;
```

- *Type:* string

---

##### `appSKey`<sup>Required</sup> <a name="appSKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.appSKey"></a>

```typescript
public readonly appSKey: string;
```

- *Type:* string

---

##### `fNwkSIntKey`<sup>Required</sup> <a name="fNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.fNwkSIntKey"></a>

```typescript
public readonly fNwkSIntKey: string;
```

- *Type:* string

---

##### `nwkSEncKey`<sup>Required</sup> <a name="nwkSEncKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.nwkSEncKey"></a>

```typescript
public readonly nwkSEncKey: string;
```

- *Type:* string

---

##### `sNwkSIntKey`<sup>Required</sup> <a name="sNwkSIntKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.sNwkSIntKey"></a>

```typescript
public readonly sNwkSIntKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys">IotwirelessWirelessDeviceLoRaWanAbpV11SessionKeys</a>

---


### IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get"></a>

```typescript
public get(index: number): IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceLoRaWanFPortsApplications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]

---


### IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference <a name="IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetDestinationName">resetDestinationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetFPort">resetFPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationName` <a name="resetDestinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetDestinationName"></a>

```typescript
public resetDestinationName(): void
```

##### `resetFPort` <a name="resetFPort" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetFPort"></a>

```typescript
public resetFPort(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationNameInput">destinationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPortInput">fPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName">destinationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort">fPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `destinationNameInput`<sup>Optional</sup> <a name="destinationNameInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationNameInput"></a>

```typescript
public readonly destinationNameInput: string;
```

- *Type:* string

---

##### `fPortInput`<sup>Optional</sup> <a name="fPortInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPortInput"></a>

```typescript
public readonly fPortInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `destinationName`<sup>Required</sup> <a name="destinationName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.destinationName"></a>

```typescript
public readonly destinationName: string;
```

- *Type:* string

---

##### `fPort`<sup>Required</sup> <a name="fPort" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.fPort"></a>

```typescript
public readonly fPort: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceLoRaWanFPortsApplications;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>

---


### IotwirelessWirelessDeviceLoRaWanFPortsOutputReference <a name="IotwirelessWirelessDeviceLoRaWanFPortsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications">putApplications</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resetApplications">resetApplications</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApplications` <a name="putApplications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications"></a>

```typescript
public putApplications(value: IResolvable | IotwirelessWirelessDeviceLoRaWanFPortsApplications[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.putApplications.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]

---

##### `resetApplications` <a name="resetApplications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.resetApplications"></a>

```typescript
public resetApplications(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications">applications</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applicationsInput">applicationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applications`<sup>Required</sup> <a name="applications" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applications"></a>

```typescript
public readonly applications: IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList">IotwirelessWirelessDeviceLoRaWanFPortsApplicationsList</a>

---

##### `applicationsInput`<sup>Optional</sup> <a name="applicationsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.applicationsInput"></a>

```typescript
public readonly applicationsInput: IResolvable | IotwirelessWirelessDeviceLoRaWanFPortsApplications[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsApplications">IotwirelessWirelessDeviceLoRaWanFPortsApplications</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceLoRaWanFPorts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

---


### IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference <a name="IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppEui">resetAppEui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppKey">resetAppKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppEui` <a name="resetAppEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppEui"></a>

```typescript
public resetAppEui(): void
```

##### `resetAppKey` <a name="resetAppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.resetAppKey"></a>

```typescript
public resetAppKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEuiInput">appEuiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKeyInput">appKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui">appEui</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey">appKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appEuiInput`<sup>Optional</sup> <a name="appEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEuiInput"></a>

```typescript
public readonly appEuiInput: string;
```

- *Type:* string

---

##### `appKeyInput`<sup>Optional</sup> <a name="appKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKeyInput"></a>

```typescript
public readonly appKeyInput: string;
```

- *Type:* string

---

##### `appEui`<sup>Required</sup> <a name="appEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appEui"></a>

```typescript
public readonly appEui: string;
```

- *Type:* string

---

##### `appKey`<sup>Required</sup> <a name="appKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.appKey"></a>

```typescript
public readonly appKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceLoRaWanOtaaV10X;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---


### IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference <a name="IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetAppKey">resetAppKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetJoinEui">resetJoinEui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetNwkKey">resetNwkKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppKey` <a name="resetAppKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetAppKey"></a>

```typescript
public resetAppKey(): void
```

##### `resetJoinEui` <a name="resetJoinEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetJoinEui"></a>

```typescript
public resetJoinEui(): void
```

##### `resetNwkKey` <a name="resetNwkKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.resetNwkKey"></a>

```typescript
public resetNwkKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKeyInput">appKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEuiInput">joinEuiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKeyInput">nwkKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey">appKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui">joinEui</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey">nwkKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appKeyInput`<sup>Optional</sup> <a name="appKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKeyInput"></a>

```typescript
public readonly appKeyInput: string;
```

- *Type:* string

---

##### `joinEuiInput`<sup>Optional</sup> <a name="joinEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEuiInput"></a>

```typescript
public readonly joinEuiInput: string;
```

- *Type:* string

---

##### `nwkKeyInput`<sup>Optional</sup> <a name="nwkKeyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKeyInput"></a>

```typescript
public readonly nwkKeyInput: string;
```

- *Type:* string

---

##### `appKey`<sup>Required</sup> <a name="appKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.appKey"></a>

```typescript
public readonly appKey: string;
```

- *Type:* string

---

##### `joinEui`<sup>Required</sup> <a name="joinEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.joinEui"></a>

```typescript
public readonly joinEui: string;
```

- *Type:* string

---

##### `nwkKey`<sup>Required</sup> <a name="nwkKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.nwkKey"></a>

```typescript
public readonly nwkKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceLoRaWanOtaaV11;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---


### IotwirelessWirelessDeviceLoRaWanOutputReference <a name="IotwirelessWirelessDeviceLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X">putAbpV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11">putAbpV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts">putFPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X">putOtaaV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11">putOtaaV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV10X">resetAbpV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV11">resetAbpV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDevEui">resetDevEui</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDeviceProfileId">resetDeviceProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetFPorts">resetFPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV10X">resetOtaaV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV11">resetOtaaV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetServiceProfileId">resetServiceProfileId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbpV10X` <a name="putAbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X"></a>

```typescript
public putAbpV10X(value: IotwirelessWirelessDeviceLoRaWanAbpV10X): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV10X.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---

##### `putAbpV11` <a name="putAbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11"></a>

```typescript
public putAbpV11(value: IotwirelessWirelessDeviceLoRaWanAbpV11): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putAbpV11.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

---

##### `putFPorts` <a name="putFPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts"></a>

```typescript
public putFPorts(value: IotwirelessWirelessDeviceLoRaWanFPorts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putFPorts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

---

##### `putOtaaV10X` <a name="putOtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X"></a>

```typescript
public putOtaaV10X(value: IotwirelessWirelessDeviceLoRaWanOtaaV10X): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV10X.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---

##### `putOtaaV11` <a name="putOtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11"></a>

```typescript
public putOtaaV11(value: IotwirelessWirelessDeviceLoRaWanOtaaV11): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.putOtaaV11.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---

##### `resetAbpV10X` <a name="resetAbpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV10X"></a>

```typescript
public resetAbpV10X(): void
```

##### `resetAbpV11` <a name="resetAbpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetAbpV11"></a>

```typescript
public resetAbpV11(): void
```

##### `resetDevEui` <a name="resetDevEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDevEui"></a>

```typescript
public resetDevEui(): void
```

##### `resetDeviceProfileId` <a name="resetDeviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetDeviceProfileId"></a>

```typescript
public resetDeviceProfileId(): void
```

##### `resetFPorts` <a name="resetFPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetFPorts"></a>

```typescript
public resetFPorts(): void
```

##### `resetOtaaV10X` <a name="resetOtaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV10X"></a>

```typescript
public resetOtaaV10X(): void
```

##### `resetOtaaV11` <a name="resetOtaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetOtaaV11"></a>

```typescript
public resetOtaaV11(): void
```

##### `resetServiceProfileId` <a name="resetServiceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.resetServiceProfileId"></a>

```typescript
public resetServiceProfileId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X">abpV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11">abpV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts">fPorts</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference">IotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X">otaaV10X</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11">otaaV11</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10XInput">abpV10XInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11Input">abpV11Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEuiInput">devEuiInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileIdInput">deviceProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPortsInput">fPortsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10XInput">otaaV10XInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11Input">otaaV11Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileIdInput">serviceProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui">devEui</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId">deviceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId">serviceProfileId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `abpV10X`<sup>Required</sup> <a name="abpV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10X"></a>

```typescript
public readonly abpV10X: IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference">IotwirelessWirelessDeviceLoRaWanAbpV10XOutputReference</a>

---

##### `abpV11`<sup>Required</sup> <a name="abpV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11"></a>

```typescript
public readonly abpV11: IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference">IotwirelessWirelessDeviceLoRaWanAbpV11OutputReference</a>

---

##### `fPorts`<sup>Required</sup> <a name="fPorts" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPorts"></a>

```typescript
public readonly fPorts: IotwirelessWirelessDeviceLoRaWanFPortsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPortsOutputReference">IotwirelessWirelessDeviceLoRaWanFPortsOutputReference</a>

---

##### `otaaV10X`<sup>Required</sup> <a name="otaaV10X" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10X"></a>

```typescript
public readonly otaaV10X: IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV10XOutputReference</a>

---

##### `otaaV11`<sup>Required</sup> <a name="otaaV11" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11"></a>

```typescript
public readonly otaaV11: IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference">IotwirelessWirelessDeviceLoRaWanOtaaV11OutputReference</a>

---

##### `abpV10XInput`<sup>Optional</sup> <a name="abpV10XInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV10XInput"></a>

```typescript
public readonly abpV10XInput: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV10X;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV10X">IotwirelessWirelessDeviceLoRaWanAbpV10X</a>

---

##### `abpV11Input`<sup>Optional</sup> <a name="abpV11Input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.abpV11Input"></a>

```typescript
public readonly abpV11Input: IResolvable | IotwirelessWirelessDeviceLoRaWanAbpV11;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanAbpV11">IotwirelessWirelessDeviceLoRaWanAbpV11</a>

---

##### `devEuiInput`<sup>Optional</sup> <a name="devEuiInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEuiInput"></a>

```typescript
public readonly devEuiInput: string;
```

- *Type:* string

---

##### `deviceProfileIdInput`<sup>Optional</sup> <a name="deviceProfileIdInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileIdInput"></a>

```typescript
public readonly deviceProfileIdInput: string;
```

- *Type:* string

---

##### `fPortsInput`<sup>Optional</sup> <a name="fPortsInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.fPortsInput"></a>

```typescript
public readonly fPortsInput: IResolvable | IotwirelessWirelessDeviceLoRaWanFPorts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanFPorts">IotwirelessWirelessDeviceLoRaWanFPorts</a>

---

##### `otaaV10XInput`<sup>Optional</sup> <a name="otaaV10XInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV10XInput"></a>

```typescript
public readonly otaaV10XInput: IResolvable | IotwirelessWirelessDeviceLoRaWanOtaaV10X;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV10X">IotwirelessWirelessDeviceLoRaWanOtaaV10X</a>

---

##### `otaaV11Input`<sup>Optional</sup> <a name="otaaV11Input" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.otaaV11Input"></a>

```typescript
public readonly otaaV11Input: IResolvable | IotwirelessWirelessDeviceLoRaWanOtaaV11;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOtaaV11">IotwirelessWirelessDeviceLoRaWanOtaaV11</a>

---

##### `serviceProfileIdInput`<sup>Optional</sup> <a name="serviceProfileIdInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileIdInput"></a>

```typescript
public readonly serviceProfileIdInput: string;
```

- *Type:* string

---

##### `devEui`<sup>Required</sup> <a name="devEui" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.devEui"></a>

```typescript
public readonly devEui: string;
```

- *Type:* string

---

##### `deviceProfileId`<sup>Required</sup> <a name="deviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.deviceProfileId"></a>

```typescript
public readonly deviceProfileId: string;
```

- *Type:* string

---

##### `serviceProfileId`<sup>Required</sup> <a name="serviceProfileId" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.serviceProfileId"></a>

```typescript
public readonly serviceProfileId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceLoRaWan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceLoRaWan">IotwirelessWirelessDeviceLoRaWan</a>

---


### IotwirelessWirelessDeviceTagsList <a name="IotwirelessWirelessDeviceTagsList" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get"></a>

```typescript
public get(index: number): IotwirelessWirelessDeviceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>[]

---


### IotwirelessWirelessDeviceTagsOutputReference <a name="IotwirelessWirelessDeviceTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer"></a>

```typescript
import { iotwirelessWirelessDevice } from '@cdktn/provider-awscc'

new iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessWirelessDeviceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessWirelessDevice.IotwirelessWirelessDeviceTags">IotwirelessWirelessDeviceTags</a>

---



