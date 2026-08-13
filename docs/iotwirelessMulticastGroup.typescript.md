# `iotwirelessMulticastGroup` Submodule <a name="`iotwirelessMulticastGroup` Submodule" id="@cdktn/provider-awscc.iotwirelessMulticastGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotwirelessMulticastGroup <a name="IotwirelessMulticastGroup" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group awscc_iotwireless_multicast_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.Initializer"></a>

```typescript
import { iotwirelessMulticastGroup } from '@cdktn/provider-awscc'

new iotwirelessMulticastGroup.IotwirelessMulticastGroup(scope: Construct, id: string, config: IotwirelessMulticastGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig">IotwirelessMulticastGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig">IotwirelessMulticastGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.putLoRaWan">putLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.resetAssociateWirelessDevice">resetAssociateWirelessDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.resetDisassociateWirelessDevice">resetDisassociateWirelessDevice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoRaWan` <a name="putLoRaWan" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.putLoRaWan"></a>

```typescript
public putLoRaWan(value: IotwirelessMulticastGroupLoRaWan): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.putLoRaWan.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan">IotwirelessMulticastGroupLoRaWan</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.putTags"></a>

```typescript
public putTags(value: IResolvable | IotwirelessMulticastGroupTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags">IotwirelessMulticastGroupTags</a>[]

---

##### `resetAssociateWirelessDevice` <a name="resetAssociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.resetAssociateWirelessDevice"></a>

```typescript
public resetAssociateWirelessDevice(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDisassociateWirelessDevice` <a name="resetDisassociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.resetDisassociateWirelessDevice"></a>

```typescript
public resetDisassociateWirelessDevice(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotwirelessMulticastGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.isConstruct"></a>

```typescript
import { iotwirelessMulticastGroup } from '@cdktn/provider-awscc'

iotwirelessMulticastGroup.IotwirelessMulticastGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.isTerraformElement"></a>

```typescript
import { iotwirelessMulticastGroup } from '@cdktn/provider-awscc'

iotwirelessMulticastGroup.IotwirelessMulticastGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.isTerraformResource"></a>

```typescript
import { iotwirelessMulticastGroup } from '@cdktn/provider-awscc'

iotwirelessMulticastGroup.IotwirelessMulticastGroup.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.generateConfigForImport"></a>

```typescript
import { iotwirelessMulticastGroup } from '@cdktn/provider-awscc'

iotwirelessMulticastGroup.IotwirelessMulticastGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotwirelessMulticastGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotwirelessMulticastGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotwirelessMulticastGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotwirelessMulticastGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference">IotwirelessMulticastGroupLoRaWanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.multicastGroupId">multicastGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList">IotwirelessMulticastGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.associateWirelessDeviceInput">associateWirelessDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.disassociateWirelessDeviceInput">disassociateWirelessDeviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.loRaWanInput">loRaWanInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan">IotwirelessMulticastGroupLoRaWan</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags">IotwirelessMulticastGroupTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.associateWirelessDevice">associateWirelessDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.disassociateWirelessDevice">disassociateWirelessDevice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.loRaWan"></a>

```typescript
public readonly loRaWan: IotwirelessMulticastGroupLoRaWanOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference">IotwirelessMulticastGroupLoRaWanOutputReference</a>

---

##### `multicastGroupId`<sup>Required</sup> <a name="multicastGroupId" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.multicastGroupId"></a>

```typescript
public readonly multicastGroupId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.tags"></a>

```typescript
public readonly tags: IotwirelessMulticastGroupTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList">IotwirelessMulticastGroupTagsList</a>

---

##### `associateWirelessDeviceInput`<sup>Optional</sup> <a name="associateWirelessDeviceInput" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.associateWirelessDeviceInput"></a>

```typescript
public readonly associateWirelessDeviceInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `disassociateWirelessDeviceInput`<sup>Optional</sup> <a name="disassociateWirelessDeviceInput" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.disassociateWirelessDeviceInput"></a>

```typescript
public readonly disassociateWirelessDeviceInput: string;
```

- *Type:* string

---

##### `loRaWanInput`<sup>Optional</sup> <a name="loRaWanInput" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.loRaWanInput"></a>

```typescript
public readonly loRaWanInput: IResolvable | IotwirelessMulticastGroupLoRaWan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan">IotwirelessMulticastGroupLoRaWan</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotwirelessMulticastGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags">IotwirelessMulticastGroupTags</a>[]

---

##### `associateWirelessDevice`<sup>Required</sup> <a name="associateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.associateWirelessDevice"></a>

```typescript
public readonly associateWirelessDevice: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `disassociateWirelessDevice`<sup>Required</sup> <a name="disassociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.disassociateWirelessDevice"></a>

```typescript
public readonly disassociateWirelessDevice: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotwirelessMulticastGroupConfig <a name="IotwirelessMulticastGroupConfig" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.Initializer"></a>

```typescript
import { iotwirelessMulticastGroup } from '@cdktn/provider-awscc'

const iotwirelessMulticastGroupConfig: iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.loRaWan">loRaWan</a></code> | <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan">IotwirelessMulticastGroupLoRaWan</a></code> | Multicast group LoRaWAN. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.associateWirelessDevice">associateWirelessDevice</a></code> | <code>string</code> | Wireless device to associate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.description">description</a></code> | <code>string</code> | Multicast group description. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.disassociateWirelessDevice">disassociateWirelessDevice</a></code> | <code>string</code> | Wireless device to disassociate. Only for update request. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.name">name</a></code> | <code>string</code> | Name of Multicast group. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags">IotwirelessMulticastGroupTags</a>[]</code> | A list of key-value pairs that contain metadata for the Multicast group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `loRaWan`<sup>Required</sup> <a name="loRaWan" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.loRaWan"></a>

```typescript
public readonly loRaWan: IotwirelessMulticastGroupLoRaWan;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan">IotwirelessMulticastGroupLoRaWan</a>

Multicast group LoRaWAN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group#lo_ra_wan IotwirelessMulticastGroup#lo_ra_wan}

---

##### `associateWirelessDevice`<sup>Optional</sup> <a name="associateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.associateWirelessDevice"></a>

```typescript
public readonly associateWirelessDevice: string;
```

- *Type:* string

Wireless device to associate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group#associate_wireless_device IotwirelessMulticastGroup#associate_wireless_device}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Multicast group description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group#description IotwirelessMulticastGroup#description}

---

##### `disassociateWirelessDevice`<sup>Optional</sup> <a name="disassociateWirelessDevice" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.disassociateWirelessDevice"></a>

```typescript
public readonly disassociateWirelessDevice: string;
```

- *Type:* string

Wireless device to disassociate. Only for update request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group#disassociate_wireless_device IotwirelessMulticastGroup#disassociate_wireless_device}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of Multicast group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group#name IotwirelessMulticastGroup#name}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotwirelessMulticastGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags">IotwirelessMulticastGroupTags</a>[]

A list of key-value pairs that contain metadata for the Multicast group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group#tags IotwirelessMulticastGroup#tags}

---

### IotwirelessMulticastGroupLoRaWan <a name="IotwirelessMulticastGroupLoRaWan" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan.Initializer"></a>

```typescript
import { iotwirelessMulticastGroup } from '@cdktn/provider-awscc'

const iotwirelessMulticastGroupLoRaWan: iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan.property.dlClass">dlClass</a></code> | <code>string</code> | Multicast group LoRaWAN DL Class. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan.property.rfRegion">rfRegion</a></code> | <code>string</code> | Multicast group LoRaWAN RF region. |

---

##### `dlClass`<sup>Required</sup> <a name="dlClass" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan.property.dlClass"></a>

```typescript
public readonly dlClass: string;
```

- *Type:* string

Multicast group LoRaWAN DL Class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group#dl_class IotwirelessMulticastGroup#dl_class}

---

##### `rfRegion`<sup>Required</sup> <a name="rfRegion" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan.property.rfRegion"></a>

```typescript
public readonly rfRegion: string;
```

- *Type:* string

Multicast group LoRaWAN RF region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group#rf_region IotwirelessMulticastGroup#rf_region}

---

### IotwirelessMulticastGroupTags <a name="IotwirelessMulticastGroupTags" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags.Initializer"></a>

```typescript
import { iotwirelessMulticastGroup } from '@cdktn/provider-awscc'

const iotwirelessMulticastGroupTags: iotwirelessMulticastGroup.IotwirelessMulticastGroupTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group#key IotwirelessMulticastGroup#key}. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group#value IotwirelessMulticastGroup#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group#key IotwirelessMulticastGroup#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotwireless_multicast_group#value IotwirelessMulticastGroup#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotwirelessMulticastGroupLoRaWanOutputReference <a name="IotwirelessMulticastGroupLoRaWanOutputReference" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.Initializer"></a>

```typescript
import { iotwirelessMulticastGroup } from '@cdktn/provider-awscc'

new iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.numberOfDevicesInGroup">numberOfDevicesInGroup</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.numberOfDevicesRequested">numberOfDevicesRequested</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.dlClassInput">dlClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.rfRegionInput">rfRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.dlClass">dlClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.rfRegion">rfRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan">IotwirelessMulticastGroupLoRaWan</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `numberOfDevicesInGroup`<sup>Required</sup> <a name="numberOfDevicesInGroup" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.numberOfDevicesInGroup"></a>

```typescript
public readonly numberOfDevicesInGroup: number;
```

- *Type:* number

---

##### `numberOfDevicesRequested`<sup>Required</sup> <a name="numberOfDevicesRequested" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.numberOfDevicesRequested"></a>

```typescript
public readonly numberOfDevicesRequested: number;
```

- *Type:* number

---

##### `dlClassInput`<sup>Optional</sup> <a name="dlClassInput" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.dlClassInput"></a>

```typescript
public readonly dlClassInput: string;
```

- *Type:* string

---

##### `rfRegionInput`<sup>Optional</sup> <a name="rfRegionInput" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.rfRegionInput"></a>

```typescript
public readonly rfRegionInput: string;
```

- *Type:* string

---

##### `dlClass`<sup>Required</sup> <a name="dlClass" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.dlClass"></a>

```typescript
public readonly dlClass: string;
```

- *Type:* string

---

##### `rfRegion`<sup>Required</sup> <a name="rfRegion" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.rfRegion"></a>

```typescript
public readonly rfRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWanOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessMulticastGroupLoRaWan;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupLoRaWan">IotwirelessMulticastGroupLoRaWan</a>

---


### IotwirelessMulticastGroupTagsList <a name="IotwirelessMulticastGroupTagsList" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.Initializer"></a>

```typescript
import { iotwirelessMulticastGroup } from '@cdktn/provider-awscc'

new iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.get"></a>

```typescript
public get(index: number): IotwirelessMulticastGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags">IotwirelessMulticastGroupTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessMulticastGroupTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags">IotwirelessMulticastGroupTags</a>[]

---


### IotwirelessMulticastGroupTagsOutputReference <a name="IotwirelessMulticastGroupTagsOutputReference" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.Initializer"></a>

```typescript
import { iotwirelessMulticastGroup } from '@cdktn/provider-awscc'

new iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags">IotwirelessMulticastGroupTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotwirelessMulticastGroupTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotwirelessMulticastGroup.IotwirelessMulticastGroupTags">IotwirelessMulticastGroupTags</a>

---



