# `mediaconnectFlowSource` Submodule <a name="`mediaconnectFlowSource` Submodule" id="@cdktn/provider-awscc.mediaconnectFlowSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlowSourceA <a name="MediaconnectFlowSourceA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source awscc_mediaconnect_flow_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

new mediaconnectFlowSource.MediaconnectFlowSourceA(scope: Construct, id: string, config: MediaconnectFlowSourceAConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig">MediaconnectFlowSourceAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig">MediaconnectFlowSourceAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption">putDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putGatewayBridgeSource">putGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetDecryption">resetDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetEntitlementArn">resetEntitlementArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetGatewayBridgeSource">resetGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetIngestPort">resetIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxBitrate">resetMaxBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxLatency">resetMaxLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMinLatency">resetMinLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderControlPort">resetSenderControlPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderIpAddress">resetSenderIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerAddress">resetSourceListenerAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerPort">resetSourceListenerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetStreamId">resetStreamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetVpcInterfaceName">resetVpcInterfaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetWhitelistCidr">resetWhitelistCidr</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDecryption` <a name="putDecryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption"></a>

```typescript
public putDecryption(value: MediaconnectFlowSourceDecryptionA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putDecryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

---

##### `putGatewayBridgeSource` <a name="putGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putGatewayBridgeSource"></a>

```typescript
public putGatewayBridgeSource(value: MediaconnectFlowSourceGatewayBridgeSourceA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putGatewayBridgeSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putTags"></a>

```typescript
public putTags(value: IResolvable | MediaconnectFlowSourceTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>[]

---

##### `resetDecryption` <a name="resetDecryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetDecryption"></a>

```typescript
public resetDecryption(): void
```

##### `resetEntitlementArn` <a name="resetEntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetEntitlementArn"></a>

```typescript
public resetEntitlementArn(): void
```

##### `resetGatewayBridgeSource` <a name="resetGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetGatewayBridgeSource"></a>

```typescript
public resetGatewayBridgeSource(): void
```

##### `resetIngestPort` <a name="resetIngestPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetIngestPort"></a>

```typescript
public resetIngestPort(): void
```

##### `resetMaxBitrate` <a name="resetMaxBitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxBitrate"></a>

```typescript
public resetMaxBitrate(): void
```

##### `resetMaxLatency` <a name="resetMaxLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMaxLatency"></a>

```typescript
public resetMaxLatency(): void
```

##### `resetMinLatency` <a name="resetMinLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetMinLatency"></a>

```typescript
public resetMinLatency(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSenderControlPort` <a name="resetSenderControlPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderControlPort"></a>

```typescript
public resetSenderControlPort(): void
```

##### `resetSenderIpAddress` <a name="resetSenderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSenderIpAddress"></a>

```typescript
public resetSenderIpAddress(): void
```

##### `resetSourceListenerAddress` <a name="resetSourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerAddress"></a>

```typescript
public resetSourceListenerAddress(): void
```

##### `resetSourceListenerPort` <a name="resetSourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetSourceListenerPort"></a>

```typescript
public resetSourceListenerPort(): void
```

##### `resetStreamId` <a name="resetStreamId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetStreamId"></a>

```typescript
public resetStreamId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVpcInterfaceName` <a name="resetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetVpcInterfaceName"></a>

```typescript
public resetVpcInterfaceName(): void
```

##### `resetWhitelistCidr` <a name="resetWhitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.resetWhitelistCidr"></a>

```typescript
public resetWhitelistCidr(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectFlowSourceA resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isConstruct"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

mediaconnectFlowSource.MediaconnectFlowSourceA.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformElement"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformResource"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MediaconnectFlowSourceA resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconnectFlowSourceA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconnectFlowSourceA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlowSourceA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference">MediaconnectFlowSourceDecryptionAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSource">gatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestIp">ingestIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceIngestPort">sourceIngestPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList">MediaconnectFlowSourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryptionInput">decryptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArnInput">entitlementArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArnInput">flowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSourceInput">gatewayBridgeSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPortInput">ingestPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrateInput">maxBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatencyInput">maxLatencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatencyInput">minLatencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPortInput">senderControlPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddressInput">senderIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddressInput">sourceListenerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPortInput">sourceListenerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamIdInput">streamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceNameInput">vpcInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidrInput">whitelistCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArn">entitlementArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArn">flowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPort">ingestPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrate">maxBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatency">maxLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatency">minLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPort">senderControlPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddress">senderIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddress">sourceListenerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPort">sourceListenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidr">whitelistCidr</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `decryption`<sup>Required</sup> <a name="decryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryption"></a>

```typescript
public readonly decryption: MediaconnectFlowSourceDecryptionAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference">MediaconnectFlowSourceDecryptionAOutputReference</a>

---

##### `gatewayBridgeSource`<sup>Required</sup> <a name="gatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSource"></a>

```typescript
public readonly gatewayBridgeSource: MediaconnectFlowSourceGatewayBridgeSourceAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceAOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingestIp`<sup>Required</sup> <a name="ingestIp" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestIp"></a>

```typescript
public readonly ingestIp: string;
```

- *Type:* string

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceIngestPort`<sup>Required</sup> <a name="sourceIngestPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceIngestPort"></a>

```typescript
public readonly sourceIngestPort: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tags"></a>

```typescript
public readonly tags: MediaconnectFlowSourceTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList">MediaconnectFlowSourceTagsList</a>

---

##### `decryptionInput`<sup>Optional</sup> <a name="decryptionInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.decryptionInput"></a>

```typescript
public readonly decryptionInput: IResolvable | MediaconnectFlowSourceDecryptionA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entitlementArnInput`<sup>Optional</sup> <a name="entitlementArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArnInput"></a>

```typescript
public readonly entitlementArnInput: string;
```

- *Type:* string

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArnInput"></a>

```typescript
public readonly flowArnInput: string;
```

- *Type:* string

---

##### `gatewayBridgeSourceInput`<sup>Optional</sup> <a name="gatewayBridgeSourceInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.gatewayBridgeSourceInput"></a>

```typescript
public readonly gatewayBridgeSourceInput: IResolvable | MediaconnectFlowSourceGatewayBridgeSourceA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

---

##### `ingestPortInput`<sup>Optional</sup> <a name="ingestPortInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPortInput"></a>

```typescript
public readonly ingestPortInput: number;
```

- *Type:* number

---

##### `maxBitrateInput`<sup>Optional</sup> <a name="maxBitrateInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrateInput"></a>

```typescript
public readonly maxBitrateInput: number;
```

- *Type:* number

---

##### `maxLatencyInput`<sup>Optional</sup> <a name="maxLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatencyInput"></a>

```typescript
public readonly maxLatencyInput: number;
```

- *Type:* number

---

##### `minLatencyInput`<sup>Optional</sup> <a name="minLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatencyInput"></a>

```typescript
public readonly minLatencyInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `senderControlPortInput`<sup>Optional</sup> <a name="senderControlPortInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPortInput"></a>

```typescript
public readonly senderControlPortInput: number;
```

- *Type:* number

---

##### `senderIpAddressInput`<sup>Optional</sup> <a name="senderIpAddressInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddressInput"></a>

```typescript
public readonly senderIpAddressInput: string;
```

- *Type:* string

---

##### `sourceListenerAddressInput`<sup>Optional</sup> <a name="sourceListenerAddressInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddressInput"></a>

```typescript
public readonly sourceListenerAddressInput: string;
```

- *Type:* string

---

##### `sourceListenerPortInput`<sup>Optional</sup> <a name="sourceListenerPortInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPortInput"></a>

```typescript
public readonly sourceListenerPortInput: number;
```

- *Type:* number

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamIdInput"></a>

```typescript
public readonly streamIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | MediaconnectFlowSourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>[]

---

##### `vpcInterfaceNameInput`<sup>Optional</sup> <a name="vpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceNameInput"></a>

```typescript
public readonly vpcInterfaceNameInput: string;
```

- *Type:* string

---

##### `whitelistCidrInput`<sup>Optional</sup> <a name="whitelistCidrInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidrInput"></a>

```typescript
public readonly whitelistCidrInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `entitlementArn`<sup>Required</sup> <a name="entitlementArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.entitlementArn"></a>

```typescript
public readonly entitlementArn: string;
```

- *Type:* string

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

---

##### `ingestPort`<sup>Required</sup> <a name="ingestPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.ingestPort"></a>

```typescript
public readonly ingestPort: number;
```

- *Type:* number

---

##### `maxBitrate`<sup>Required</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxBitrate"></a>

```typescript
public readonly maxBitrate: number;
```

- *Type:* number

---

##### `maxLatency`<sup>Required</sup> <a name="maxLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.maxLatency"></a>

```typescript
public readonly maxLatency: number;
```

- *Type:* number

---

##### `minLatency`<sup>Required</sup> <a name="minLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.minLatency"></a>

```typescript
public readonly minLatency: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `senderControlPort`<sup>Required</sup> <a name="senderControlPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderControlPort"></a>

```typescript
public readonly senderControlPort: number;
```

- *Type:* number

---

##### `senderIpAddress`<sup>Required</sup> <a name="senderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.senderIpAddress"></a>

```typescript
public readonly senderIpAddress: string;
```

- *Type:* string

---

##### `sourceListenerAddress`<sup>Required</sup> <a name="sourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerAddress"></a>

```typescript
public readonly sourceListenerAddress: string;
```

- *Type:* string

---

##### `sourceListenerPort`<sup>Required</sup> <a name="sourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.sourceListenerPort"></a>

```typescript
public readonly sourceListenerPort: number;
```

- *Type:* number

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

---

##### `whitelistCidr`<sup>Required</sup> <a name="whitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.whitelistCidr"></a>

```typescript
public readonly whitelistCidr: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceA.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowSourceAConfig <a name="MediaconnectFlowSourceAConfig" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.Initializer"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceAConfig: mediaconnectFlowSource.MediaconnectFlowSourceAConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.description">description</a></code> | <code>string</code> | A description for the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.flowArn">flowArn</a></code> | <code>string</code> | The ARN of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.name">name</a></code> | <code>string</code> | The name of the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a></code> | The type of encryption that is used on the content ingested from this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.entitlementArn">entitlementArn</a></code> | <code>string</code> | The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.gatewayBridgeSource">gatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a></code> | The source configuration for cloud flows receiving a stream from a bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.ingestPort">ingestPort</a></code> | <code>number</code> | The port that the flow will be listening on for incoming content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxBitrate">maxBitrate</a></code> | <code>number</code> | The smoothing max bitrate for RIST, RTP, and RTP-FEC streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxLatency">maxLatency</a></code> | <code>number</code> | The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.minLatency">minLatency</a></code> | <code>number</code> | The minimum latency in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.protocol">protocol</a></code> | <code>string</code> | The protocol that is used by the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderControlPort">senderControlPort</a></code> | <code>number</code> | The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderIpAddress">senderIpAddress</a></code> | <code>string</code> | The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerAddress">sourceListenerAddress</a></code> | <code>string</code> | Source IP or domain name for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerPort">sourceListenerPort</a></code> | <code>number</code> | Source port for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.streamId">streamId</a></code> | <code>string</code> | The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>[]</code> | Key-value pairs that can be used to tag and organize this flow source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | The name of the VPC Interface this Source is configured with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.whitelistCidr">whitelistCidr</a></code> | <code>string</code> | The range of IP addresses that should be allowed to contribute content to your source. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the source.

This value is not used or seen outside of the current AWS Elemental MediaConnect account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#description MediaconnectFlowSourceA#description}

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

The ARN of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#flow_arn MediaconnectFlowSourceA#flow_arn}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#name MediaconnectFlowSourceA#name}

---

##### `decryption`<sup>Optional</sup> <a name="decryption" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.decryption"></a>

```typescript
public readonly decryption: MediaconnectFlowSourceDecryptionA;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

The type of encryption that is used on the content ingested from this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#decryption MediaconnectFlowSourceA#decryption}

---

##### `entitlementArn`<sup>Optional</sup> <a name="entitlementArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.entitlementArn"></a>

```typescript
public readonly entitlementArn: string;
```

- *Type:* string

The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account.

The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#entitlement_arn MediaconnectFlowSourceA#entitlement_arn}

---

##### `gatewayBridgeSource`<sup>Optional</sup> <a name="gatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.gatewayBridgeSource"></a>

```typescript
public readonly gatewayBridgeSource: MediaconnectFlowSourceGatewayBridgeSourceA;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

The source configuration for cloud flows receiving a stream from a bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#gateway_bridge_source MediaconnectFlowSourceA#gateway_bridge_source}

---

##### `ingestPort`<sup>Optional</sup> <a name="ingestPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.ingestPort"></a>

```typescript
public readonly ingestPort: number;
```

- *Type:* number

The port that the flow will be listening on for incoming content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#ingest_port MediaconnectFlowSourceA#ingest_port}

---

##### `maxBitrate`<sup>Optional</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxBitrate"></a>

```typescript
public readonly maxBitrate: number;
```

- *Type:* number

The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#max_bitrate MediaconnectFlowSourceA#max_bitrate}

---

##### `maxLatency`<sup>Optional</sup> <a name="maxLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.maxLatency"></a>

```typescript
public readonly maxLatency: number;
```

- *Type:* number

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#max_latency MediaconnectFlowSourceA#max_latency}

---

##### `minLatency`<sup>Optional</sup> <a name="minLatency" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.minLatency"></a>

```typescript
public readonly minLatency: number;
```

- *Type:* number

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#min_latency MediaconnectFlowSourceA#min_latency}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol that is used by the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#protocol MediaconnectFlowSourceA#protocol}

---

##### `senderControlPort`<sup>Optional</sup> <a name="senderControlPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderControlPort"></a>

```typescript
public readonly senderControlPort: number;
```

- *Type:* number

The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#sender_control_port MediaconnectFlowSourceA#sender_control_port}

---

##### `senderIpAddress`<sup>Optional</sup> <a name="senderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.senderIpAddress"></a>

```typescript
public readonly senderIpAddress: string;
```

- *Type:* string

The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#sender_ip_address MediaconnectFlowSourceA#sender_ip_address}

---

##### `sourceListenerAddress`<sup>Optional</sup> <a name="sourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerAddress"></a>

```typescript
public readonly sourceListenerAddress: string;
```

- *Type:* string

Source IP or domain name for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#source_listener_address MediaconnectFlowSourceA#source_listener_address}

---

##### `sourceListenerPort`<sup>Optional</sup> <a name="sourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.sourceListenerPort"></a>

```typescript
public readonly sourceListenerPort: number;
```

- *Type:* number

Source port for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#source_listener_port MediaconnectFlowSourceA#source_listener_port}

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#stream_id MediaconnectFlowSourceA#stream_id}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | MediaconnectFlowSourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>[]

Key-value pairs that can be used to tag and organize this flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#tags MediaconnectFlowSourceA#tags}

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

The name of the VPC Interface this Source is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#vpc_interface_name MediaconnectFlowSourceA#vpc_interface_name}

---

##### `whitelistCidr`<sup>Optional</sup> <a name="whitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceAConfig.property.whitelistCidr"></a>

```typescript
public readonly whitelistCidr: string;
```

- *Type:* string

The range of IP addresses that should be allowed to contribute content to your source.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#whitelist_cidr MediaconnectFlowSourceA#whitelist_cidr}

---

### MediaconnectFlowSourceDecryptionA <a name="MediaconnectFlowSourceDecryptionA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.Initializer"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceDecryptionA: mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.algorithm">algorithm</a></code> | <code>string</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.constantInitializationVector">constantInitializationVector</a></code> | <code>string</code> | A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.deviceId">deviceId</a></code> | <code>string</code> | The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.keyType">keyType</a></code> | <code>string</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.region">region</a></code> | <code>string</code> | The AWS Region that the API Gateway proxy endpoint was created in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.resourceId">resourceId</a></code> | <code>string</code> | An identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.secretArn">secretArn</a></code> | <code>string</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.url">url</a></code> | <code>string</code> | The URL from the API Gateway proxy that you set up to talk to your key server. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#algorithm MediaconnectFlowSourceA#algorithm}

---

##### `constantInitializationVector`<sup>Optional</sup> <a name="constantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.constantInitializationVector"></a>

```typescript
public readonly constantInitializationVector: string;
```

- *Type:* string

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#constant_initialization_vector MediaconnectFlowSourceA#constant_initialization_vector}

---

##### `deviceId`<sup>Optional</sup> <a name="deviceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#device_id MediaconnectFlowSourceA#device_id}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#key_type MediaconnectFlowSourceA#key_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#region MediaconnectFlowSourceA#region}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#resource_id MediaconnectFlowSourceA#resource_id}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#role_arn MediaconnectFlowSourceA#role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#secret_arn MediaconnectFlowSourceA#secret_arn}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#url MediaconnectFlowSourceA#url}

---

### MediaconnectFlowSourceGatewayBridgeSourceA <a name="MediaconnectFlowSourceGatewayBridgeSourceA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.Initializer"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceGatewayBridgeSourceA: mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.bridgeArn">bridgeArn</a></code> | <code>string</code> | The ARN of the bridge feeding this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.vpcInterfaceAttachment">vpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a></code> | The name of the VPC interface attachment to use for this bridge source. |

---

##### `bridgeArn`<sup>Optional</sup> <a name="bridgeArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.bridgeArn"></a>

```typescript
public readonly bridgeArn: string;
```

- *Type:* string

The ARN of the bridge feeding this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#bridge_arn MediaconnectFlowSourceA#bridge_arn}

---

##### `vpcInterfaceAttachment`<sup>Optional</sup> <a name="vpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA.property.vpcInterfaceAttachment"></a>

```typescript
public readonly vpcInterfaceAttachment: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

The name of the VPC interface attachment to use for this bridge source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#vpc_interface_attachment MediaconnectFlowSourceA#vpc_interface_attachment}

---

### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.Initializer"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA: mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | The name of the VPC interface to use for this resource. |

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#vpc_interface_name MediaconnectFlowSourceA#vpc_interface_name}

---

### MediaconnectFlowSourceTags <a name="MediaconnectFlowSourceTags" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.Initializer"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceTags: mediaconnectFlowSource.MediaconnectFlowSourceTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#key MediaconnectFlowSourceA#key}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#value MediaconnectFlowSourceA#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#key MediaconnectFlowSourceA#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_flow_source#value MediaconnectFlowSourceA#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowSourceDecryptionAOutputReference <a name="MediaconnectFlowSourceDecryptionAOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

new mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetConstantInitializationVector">resetConstantInitializationVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetDeviceId">resetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetConstantInitializationVector` <a name="resetConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetConstantInitializationVector"></a>

```typescript
public resetConstantInitializationVector(): void
```

##### `resetDeviceId` <a name="resetDeviceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetDeviceId"></a>

```typescript
public resetDeviceId(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetKeyType"></a>

```typescript
public resetKeyType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVectorInput">constantInitializationVectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceIdInput">deviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVector">constantInitializationVector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `constantInitializationVectorInput`<sup>Optional</sup> <a name="constantInitializationVectorInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVectorInput"></a>

```typescript
public readonly constantInitializationVectorInput: string;
```

- *Type:* string

---

##### `deviceIdInput`<sup>Optional</sup> <a name="deviceIdInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceIdInput"></a>

```typescript
public readonly deviceIdInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `constantInitializationVector`<sup>Required</sup> <a name="constantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.constantInitializationVector"></a>

```typescript
public readonly constantInitializationVector: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceDecryptionA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceDecryptionA">MediaconnectFlowSourceDecryptionA</a>

---


### MediaconnectFlowSourceGatewayBridgeSourceAOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceAOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

new mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.putVpcInterfaceAttachment">putVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetBridgeArn">resetBridgeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetVpcInterfaceAttachment">resetVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcInterfaceAttachment` <a name="putVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.putVpcInterfaceAttachment"></a>

```typescript
public putVpcInterfaceAttachment(value: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.putVpcInterfaceAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

---

##### `resetBridgeArn` <a name="resetBridgeArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetBridgeArn"></a>

```typescript
public resetBridgeArn(): void
```

##### `resetVpcInterfaceAttachment` <a name="resetVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.resetVpcInterfaceAttachment"></a>

```typescript
public resetVpcInterfaceAttachment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachment">vpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArnInput">bridgeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachmentInput">vpcInterfaceAttachmentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArn">bridgeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcInterfaceAttachment`<sup>Required</sup> <a name="vpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachment"></a>

```typescript
public readonly vpcInterfaceAttachment: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference</a>

---

##### `bridgeArnInput`<sup>Optional</sup> <a name="bridgeArnInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArnInput"></a>

```typescript
public readonly bridgeArnInput: string;
```

- *Type:* string

---

##### `vpcInterfaceAttachmentInput`<sup>Optional</sup> <a name="vpcInterfaceAttachmentInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.vpcInterfaceAttachmentInput"></a>

```typescript
public readonly vpcInterfaceAttachmentInput: IResolvable | MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

---

##### `bridgeArn`<sup>Required</sup> <a name="bridgeArn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.bridgeArn"></a>

```typescript
public readonly bridgeArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceGatewayBridgeSourceA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceA">MediaconnectFlowSourceGatewayBridgeSourceA</a>

---


### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

new mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resetVpcInterfaceName">resetVpcInterfaceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcInterfaceName` <a name="resetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.resetVpcInterfaceName"></a>

```typescript
public resetVpcInterfaceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceNameInput">vpcInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcInterfaceNameInput`<sup>Optional</sup> <a name="vpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceNameInput"></a>

```typescript
public readonly vpcInterfaceNameInput: string;
```

- *Type:* string

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentAOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentA</a>

---


### MediaconnectFlowSourceTagsList <a name="MediaconnectFlowSourceTagsList" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

new mediaconnectFlowSource.MediaconnectFlowSourceTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.get"></a>

```typescript
public get(index: number): MediaconnectFlowSourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>[]

---


### MediaconnectFlowSourceTagsOutputReference <a name="MediaconnectFlowSourceTagsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlowSource } from '@cdktn/provider-awscc'

new mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlowSource.MediaconnectFlowSourceTags">MediaconnectFlowSourceTags</a>

---



