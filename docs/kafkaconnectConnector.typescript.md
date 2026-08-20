# `kafkaconnectConnector` Submodule <a name="`kafkaconnectConnector` Submodule" id="@cdktn/provider-awscc.kafkaconnectConnector"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KafkaconnectConnector <a name="KafkaconnectConnector" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector awscc_kafkaconnect_connector}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnector(scope: Construct, id: string, config: KafkaconnectConnectorConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig">KafkaconnectConnectorConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig">KafkaconnectConnectorConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster">putKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication">putKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit">putKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery">putLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins">putPlugins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration">putWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetConnectorDescription">resetConnectorDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetLogDelivery">resetLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetWorkerConfiguration">resetWorkerConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCapacity` <a name="putCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity"></a>

```typescript
public putCapacity(value: KafkaconnectConnectorCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

---

##### `putKafkaCluster` <a name="putKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster"></a>

```typescript
public putKafkaCluster(value: KafkaconnectConnectorKafkaCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

---

##### `putKafkaClusterClientAuthentication` <a name="putKafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication"></a>

```typescript
public putKafkaClusterClientAuthentication(value: KafkaconnectConnectorKafkaClusterClientAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `putKafkaClusterEncryptionInTransit` <a name="putKafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit"></a>

```typescript
public putKafkaClusterEncryptionInTransit(value: KafkaconnectConnectorKafkaClusterEncryptionInTransit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putKafkaClusterEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `putLogDelivery` <a name="putLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery"></a>

```typescript
public putLogDelivery(value: KafkaconnectConnectorLogDelivery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

---

##### `putPlugins` <a name="putPlugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins"></a>

```typescript
public putPlugins(value: IResolvable | KafkaconnectConnectorPlugins[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putPlugins.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags"></a>

```typescript
public putTags(value: IResolvable | KafkaconnectConnectorTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]

---

##### `putWorkerConfiguration` <a name="putWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration"></a>

```typescript
public putWorkerConfiguration(value: KafkaconnectConnectorWorkerConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.putWorkerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

---

##### `resetConnectorDescription` <a name="resetConnectorDescription" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetConnectorDescription"></a>

```typescript
public resetConnectorDescription(): void
```

##### `resetLogDelivery` <a name="resetLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetLogDelivery"></a>

```typescript
public resetLogDelivery(): void
```

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWorkerConfiguration` <a name="resetWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.resetWorkerConfiguration"></a>

```typescript
public resetWorkerConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a KafkaconnectConnector resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

kafkaconnectConnector.KafkaconnectConnector.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

kafkaconnectConnector.KafkaconnectConnector.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

kafkaconnectConnector.KafkaconnectConnector.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a KafkaconnectConnector resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the KafkaconnectConnector to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing KafkaconnectConnector that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the KafkaconnectConnector to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference">KafkaconnectConnectorCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorArn">connectorArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaCluster">kafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthentication">kafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransit">kafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.plugins">plugins</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList">KafkaconnectConnectorPluginsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList">KafkaconnectConnectorTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference">KafkaconnectConnectorWorkerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacityInput">capacityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfigurationInput">connectorConfigurationInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescriptionInput">connectorDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorNameInput">connectorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthenticationInput">kafkaClusterClientAuthenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransitInput">kafkaClusterEncryptionInTransitInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterInput">kafkaClusterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersionInput">kafkaConnectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDeliveryInput">logDeliveryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.pluginsInput">pluginsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArnInput">serviceExecutionRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfigurationInput">workerConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfiguration">connectorConfiguration</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescription">connectorDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorName">connectorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersion">kafkaConnectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacity"></a>

```typescript
public readonly capacity: KafkaconnectConnectorCapacityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference">KafkaconnectConnectorCapacityOutputReference</a>

---

##### `connectorArn`<sup>Required</sup> <a name="connectorArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorArn"></a>

```typescript
public readonly connectorArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaCluster"></a>

```typescript
public readonly kafkaCluster: KafkaconnectConnectorKafkaClusterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterOutputReference</a>

---

##### `kafkaClusterClientAuthentication`<sup>Required</sup> <a name="kafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthentication"></a>

```typescript
public readonly kafkaClusterClientAuthentication: KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference">KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference</a>

---

##### `kafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="kafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransit"></a>

```typescript
public readonly kafkaClusterEncryptionInTransit: KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference">KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference</a>

---

##### `logDelivery`<sup>Required</sup> <a name="logDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDelivery"></a>

```typescript
public readonly logDelivery: KafkaconnectConnectorLogDeliveryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryOutputReference</a>

---

##### `plugins`<sup>Required</sup> <a name="plugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.plugins"></a>

```typescript
public readonly plugins: KafkaconnectConnectorPluginsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList">KafkaconnectConnectorPluginsList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tags"></a>

```typescript
public readonly tags: KafkaconnectConnectorTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList">KafkaconnectConnectorTagsList</a>

---

##### `workerConfiguration`<sup>Required</sup> <a name="workerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfiguration"></a>

```typescript
public readonly workerConfiguration: KafkaconnectConnectorWorkerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference">KafkaconnectConnectorWorkerConfigurationOutputReference</a>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.capacityInput"></a>

```typescript
public readonly capacityInput: IResolvable | KafkaconnectConnectorCapacity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

---

##### `connectorConfigurationInput`<sup>Optional</sup> <a name="connectorConfigurationInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfigurationInput"></a>

```typescript
public readonly connectorConfigurationInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectorDescriptionInput`<sup>Optional</sup> <a name="connectorDescriptionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescriptionInput"></a>

```typescript
public readonly connectorDescriptionInput: string;
```

- *Type:* string

---

##### `connectorNameInput`<sup>Optional</sup> <a name="connectorNameInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorNameInput"></a>

```typescript
public readonly connectorNameInput: string;
```

- *Type:* string

---

##### `kafkaClusterClientAuthenticationInput`<sup>Optional</sup> <a name="kafkaClusterClientAuthenticationInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterClientAuthenticationInput"></a>

```typescript
public readonly kafkaClusterClientAuthenticationInput: IResolvable | KafkaconnectConnectorKafkaClusterClientAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

---

##### `kafkaClusterEncryptionInTransitInput`<sup>Optional</sup> <a name="kafkaClusterEncryptionInTransitInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterEncryptionInTransitInput"></a>

```typescript
public readonly kafkaClusterEncryptionInTransitInput: IResolvable | KafkaconnectConnectorKafkaClusterEncryptionInTransit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---

##### `kafkaClusterInput`<sup>Optional</sup> <a name="kafkaClusterInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaClusterInput"></a>

```typescript
public readonly kafkaClusterInput: IResolvable | KafkaconnectConnectorKafkaCluster;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

---

##### `kafkaConnectVersionInput`<sup>Optional</sup> <a name="kafkaConnectVersionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersionInput"></a>

```typescript
public readonly kafkaConnectVersionInput: string;
```

- *Type:* string

---

##### `logDeliveryInput`<sup>Optional</sup> <a name="logDeliveryInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.logDeliveryInput"></a>

```typescript
public readonly logDeliveryInput: IResolvable | KafkaconnectConnectorLogDelivery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `pluginsInput`<sup>Optional</sup> <a name="pluginsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.pluginsInput"></a>

```typescript
public readonly pluginsInput: IResolvable | KafkaconnectConnectorPlugins[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]

---

##### `serviceExecutionRoleArnInput`<sup>Optional</sup> <a name="serviceExecutionRoleArnInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArnInput"></a>

```typescript
public readonly serviceExecutionRoleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | KafkaconnectConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]

---

##### `workerConfigurationInput`<sup>Optional</sup> <a name="workerConfigurationInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.workerConfigurationInput"></a>

```typescript
public readonly workerConfigurationInput: IResolvable | KafkaconnectConnectorWorkerConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

---

##### `connectorConfiguration`<sup>Required</sup> <a name="connectorConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorConfiguration"></a>

```typescript
public readonly connectorConfiguration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectorDescription`<sup>Required</sup> <a name="connectorDescription" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorDescription"></a>

```typescript
public readonly connectorDescription: string;
```

- *Type:* string

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

---

##### `kafkaConnectVersion`<sup>Required</sup> <a name="kafkaConnectVersion" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.kafkaConnectVersion"></a>

```typescript
public readonly kafkaConnectVersion: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnector.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### KafkaconnectConnectorCapacity <a name="KafkaconnectConnectorCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorCapacity: kafkaconnectConnector.KafkaconnectConnectorCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a></code> | Details about auto scaling of a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.provisionedCapacity">provisionedCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a></code> | Details about a fixed capacity allocated to a connector. |

---

##### `autoScaling`<sup>Optional</sup> <a name="autoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.autoScaling"></a>

```typescript
public readonly autoScaling: KafkaconnectConnectorCapacityAutoScaling;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

Details about auto scaling of a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#auto_scaling KafkaconnectConnector#auto_scaling}

---

##### `provisionedCapacity`<sup>Optional</sup> <a name="provisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity.property.provisionedCapacity"></a>

```typescript
public readonly provisionedCapacity: KafkaconnectConnectorCapacityProvisionedCapacity;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

Details about a fixed capacity allocated to a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#provisioned_capacity KafkaconnectConnector#provisioned_capacity}

---

### KafkaconnectConnectorCapacityAutoScaling <a name="KafkaconnectConnectorCapacityAutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorCapacityAutoScaling: kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxAutoscalingTaskCount">maxAutoscalingTaskCount</a></code> | <code>number</code> | The maximum number of tasks allocated to the connector during autoscaling operations. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxWorkerCount">maxWorkerCount</a></code> | <code>number</code> | The maximum number of workers for a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.mcuCount">mcuCount</a></code> | <code>number</code> | Specifies how many MSK Connect Units (MCU) as the minimum scaling unit. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.minWorkerCount">minWorkerCount</a></code> | <code>number</code> | The minimum number of workers for a connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleInPolicy">scaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | Information about the scale in policy of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleOutPolicy">scaleOutPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | Information about the scale out policy of the connector. |

---

##### `maxAutoscalingTaskCount`<sup>Optional</sup> <a name="maxAutoscalingTaskCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxAutoscalingTaskCount"></a>

```typescript
public readonly maxAutoscalingTaskCount: number;
```

- *Type:* number

The maximum number of tasks allocated to the connector during autoscaling operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#max_autoscaling_task_count KafkaconnectConnector#max_autoscaling_task_count}

---

##### `maxWorkerCount`<sup>Optional</sup> <a name="maxWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.maxWorkerCount"></a>

```typescript
public readonly maxWorkerCount: number;
```

- *Type:* number

The maximum number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#max_worker_count KafkaconnectConnector#max_worker_count}

---

##### `mcuCount`<sup>Optional</sup> <a name="mcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.mcuCount"></a>

```typescript
public readonly mcuCount: number;
```

- *Type:* number

Specifies how many MSK Connect Units (MCU) as the minimum scaling unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#mcu_count KafkaconnectConnector#mcu_count}

---

##### `minWorkerCount`<sup>Optional</sup> <a name="minWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.minWorkerCount"></a>

```typescript
public readonly minWorkerCount: number;
```

- *Type:* number

The minimum number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#min_worker_count KafkaconnectConnector#min_worker_count}

---

##### `scaleInPolicy`<sup>Optional</sup> <a name="scaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleInPolicy"></a>

```typescript
public readonly scaleInPolicy: KafkaconnectConnectorCapacityAutoScalingScaleInPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

Information about the scale in policy of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#scale_in_policy KafkaconnectConnector#scale_in_policy}

---

##### `scaleOutPolicy`<sup>Optional</sup> <a name="scaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling.property.scaleOutPolicy"></a>

```typescript
public readonly scaleOutPolicy: KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

Information about the scale out policy of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#scale_out_policy KafkaconnectConnector#scale_out_policy}

---

### KafkaconnectConnectorCapacityAutoScalingScaleInPolicy <a name="KafkaconnectConnectorCapacityAutoScalingScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorCapacityAutoScalingScaleInPolicy: kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>number</code> | Specifies the CPU utilization percentage threshold at which connector scale in should trigger. |

---

##### `cpuUtilizationPercentage`<sup>Optional</sup> <a name="cpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy.property.cpuUtilizationPercentage"></a>

```typescript
public readonly cpuUtilizationPercentage: number;
```

- *Type:* number

Specifies the CPU utilization percentage threshold at which connector scale in should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage KafkaconnectConnector#cpu_utilization_percentage}

---

### KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy <a name="KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorCapacityAutoScalingScaleOutPolicy: kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>number</code> | Specifies the CPU utilization percentage threshold at which connector scale out should trigger. |

---

##### `cpuUtilizationPercentage`<sup>Optional</sup> <a name="cpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy.property.cpuUtilizationPercentage"></a>

```typescript
public readonly cpuUtilizationPercentage: number;
```

- *Type:* number

Specifies the CPU utilization percentage threshold at which connector scale out should trigger.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#cpu_utilization_percentage KafkaconnectConnector#cpu_utilization_percentage}

---

### KafkaconnectConnectorCapacityProvisionedCapacity <a name="KafkaconnectConnectorCapacityProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorCapacityProvisionedCapacity: kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.mcuCount">mcuCount</a></code> | <code>number</code> | Specifies how many MSK Connect Units (MCU) are allocated to the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.workerCount">workerCount</a></code> | <code>number</code> | Number of workers for a connector. |

---

##### `mcuCount`<sup>Optional</sup> <a name="mcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.mcuCount"></a>

```typescript
public readonly mcuCount: number;
```

- *Type:* number

Specifies how many MSK Connect Units (MCU) are allocated to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#mcu_count KafkaconnectConnector#mcu_count}

---

##### `workerCount`<sup>Optional</sup> <a name="workerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

Number of workers for a connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#worker_count KafkaconnectConnector#worker_count}

---

### KafkaconnectConnectorConfig <a name="KafkaconnectConnectorConfig" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorConfig: kafkaconnectConnector.KafkaconnectConnectorConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | Information about the capacity allocated to the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorConfiguration">connectorConfiguration</a></code> | <code>{[ key: string ]: string}</code> | The configuration for the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorName">connectorName</a></code> | <code>string</code> | The name of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaCluster">kafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | Details of how to connect to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterClientAuthentication">kafkaClusterClientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | Details of the client authentication used by the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterEncryptionInTransit">kafkaClusterEncryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | Details of encryption in transit to the Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaConnectVersion">kafkaConnectVersion</a></code> | <code>string</code> | The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.plugins">plugins</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]</code> | List of plugins to use with the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.serviceExecutionRoleArn">serviceExecutionRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorDescription">connectorDescription</a></code> | <code>string</code> | A summary description of the connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.logDelivery">logDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | Details of what logs are delivered and where they are delivered. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.networkType">networkType</a></code> | <code>string</code> | The network type of the Connector. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]</code> | A collection of tags associated with a resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.workerConfiguration">workerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | Specifies the worker configuration to use with the connector. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.capacity"></a>

```typescript
public readonly capacity: KafkaconnectConnectorCapacity;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

Information about the capacity allocated to the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#capacity KafkaconnectConnector#capacity}

---

##### `connectorConfiguration`<sup>Required</sup> <a name="connectorConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorConfiguration"></a>

```typescript
public readonly connectorConfiguration: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The configuration for the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#connector_configuration KafkaconnectConnector#connector_configuration}

---

##### `connectorName`<sup>Required</sup> <a name="connectorName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorName"></a>

```typescript
public readonly connectorName: string;
```

- *Type:* string

The name of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#connector_name KafkaconnectConnector#connector_name}

---

##### `kafkaCluster`<sup>Required</sup> <a name="kafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaCluster"></a>

```typescript
public readonly kafkaCluster: KafkaconnectConnectorKafkaCluster;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

Details of how to connect to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#kafka_cluster KafkaconnectConnector#kafka_cluster}

---

##### `kafkaClusterClientAuthentication`<sup>Required</sup> <a name="kafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterClientAuthentication"></a>

```typescript
public readonly kafkaClusterClientAuthentication: KafkaconnectConnectorKafkaClusterClientAuthentication;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

Details of the client authentication used by the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#kafka_cluster_client_authentication KafkaconnectConnector#kafka_cluster_client_authentication}

---

##### `kafkaClusterEncryptionInTransit`<sup>Required</sup> <a name="kafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaClusterEncryptionInTransit"></a>

```typescript
public readonly kafkaClusterEncryptionInTransit: KafkaconnectConnectorKafkaClusterEncryptionInTransit;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

Details of encryption in transit to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#kafka_cluster_encryption_in_transit KafkaconnectConnector#kafka_cluster_encryption_in_transit}

---

##### `kafkaConnectVersion`<sup>Required</sup> <a name="kafkaConnectVersion" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.kafkaConnectVersion"></a>

```typescript
public readonly kafkaConnectVersion: string;
```

- *Type:* string

The version of Kafka Connect. It has to be compatible with both the Kafka cluster's version and the plugins.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#kafka_connect_version KafkaconnectConnector#kafka_connect_version}

---

##### `plugins`<sup>Required</sup> <a name="plugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.plugins"></a>

```typescript
public readonly plugins: IResolvable | KafkaconnectConnectorPlugins[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]

List of plugins to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#plugins KafkaconnectConnector#plugins}

---

##### `serviceExecutionRoleArn`<sup>Required</sup> <a name="serviceExecutionRoleArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.serviceExecutionRoleArn"></a>

```typescript
public readonly serviceExecutionRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role used by the connector to access Amazon S3 objects and other external resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#service_execution_role_arn KafkaconnectConnector#service_execution_role_arn}

---

##### `connectorDescription`<sup>Optional</sup> <a name="connectorDescription" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.connectorDescription"></a>

```typescript
public readonly connectorDescription: string;
```

- *Type:* string

A summary description of the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#connector_description KafkaconnectConnector#connector_description}

---

##### `logDelivery`<sup>Optional</sup> <a name="logDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.logDelivery"></a>

```typescript
public readonly logDelivery: KafkaconnectConnectorLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

Details of what logs are delivered and where they are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#log_delivery KafkaconnectConnector#log_delivery}

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

The network type of the Connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#network_type KafkaconnectConnector#network_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | KafkaconnectConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]

A collection of tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#tags KafkaconnectConnector#tags}

---

##### `workerConfiguration`<sup>Optional</sup> <a name="workerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorConfig.property.workerConfiguration"></a>

```typescript
public readonly workerConfiguration: KafkaconnectConnectorWorkerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

Specifies the worker configuration to use with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#worker_configuration KafkaconnectConnector#worker_configuration}

---

### KafkaconnectConnectorKafkaCluster <a name="KafkaconnectConnectorKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorKafkaCluster: kafkaconnectConnector.KafkaconnectConnectorKafkaCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.property.apacheKafkaCluster">apacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | Details of how to connect to an Apache Kafka cluster. |

---

##### `apacheKafkaCluster`<sup>Required</sup> <a name="apacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster.property.apacheKafkaCluster"></a>

```typescript
public readonly apacheKafkaCluster: KafkaconnectConnectorKafkaClusterApacheKafkaCluster;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

Details of how to connect to an Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#apache_kafka_cluster KafkaconnectConnector#apache_kafka_cluster}

---

### KafkaconnectConnectorKafkaClusterApacheKafkaCluster <a name="KafkaconnectConnectorKafkaClusterApacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorKafkaClusterApacheKafkaCluster: kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers">bootstrapServers</a></code> | <code>string</code> | The bootstrap servers string of the Apache Kafka cluster. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | Information about a VPC used with the connector. |

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: string;
```

- *Type:* string

The bootstrap servers string of the Apache Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#bootstrap_servers KafkaconnectConnector#bootstrap_servers}

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster.property.vpc"></a>

```typescript
public readonly vpc: KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

Information about a VPC used with the connector.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#vpc KafkaconnectConnector#vpc}

---

### KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc: kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets">subnets</a></code> | <code>string[]</code> | The list of subnets to connect to in the virtual private cloud (VPC). |

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

The AWS security groups to associate with the elastic network interfaces in order to specify what the connector has access to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#security_groups KafkaconnectConnector#security_groups}

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

The list of subnets to connect to in the virtual private cloud (VPC).

AWS creates elastic network interfaces inside these subnets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#subnets KafkaconnectConnector#subnets}

---

### KafkaconnectConnectorKafkaClusterClientAuthentication <a name="KafkaconnectConnectorKafkaClusterClientAuthentication" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorKafkaClusterClientAuthentication: kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.property.authenticationType">authenticationType</a></code> | <code>string</code> | The type of client authentication used to connect to the Kafka cluster. |

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

The type of client authentication used to connect to the Kafka cluster.

Value NONE means that no client authentication is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#authentication_type KafkaconnectConnector#authentication_type}

---

### KafkaconnectConnectorKafkaClusterEncryptionInTransit <a name="KafkaconnectConnectorKafkaClusterEncryptionInTransit" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorKafkaClusterEncryptionInTransit: kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType">encryptionType</a></code> | <code>string</code> | The type of encryption in transit to the Kafka cluster. |

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

The type of encryption in transit to the Kafka cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#encryption_type KafkaconnectConnector#encryption_type}

---

### KafkaconnectConnectorLogDelivery <a name="KafkaconnectConnectorLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorLogDelivery: kafkaconnectConnector.KafkaconnectConnectorLogDelivery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.property.workerLogDelivery">workerLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | Specifies where worker logs are delivered. |

---

##### `workerLogDelivery`<sup>Optional</sup> <a name="workerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery.property.workerLogDelivery"></a>

```typescript
public readonly workerLogDelivery: KafkaconnectConnectorLogDeliveryWorkerLogDelivery;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

Specifies where worker logs are delivered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#worker_log_delivery KafkaconnectConnector#worker_log_delivery}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDelivery <a name="KafkaconnectConnectorLogDeliveryWorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorLogDeliveryWorkerLogDelivery: kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | Details about delivering logs to Amazon CloudWatch Logs. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | Details about delivering logs to Amazon Kinesis Data Firehose. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | Details about delivering logs to Amazon S3. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

Details about delivering logs to Amazon CloudWatch Logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#cloudwatch_logs KafkaconnectConnector#cloudwatch_logs}

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.firehose"></a>

```typescript
public readonly firehose: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

Details about delivering logs to Amazon Kinesis Data Firehose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#firehose KafkaconnectConnector#firehose}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery.property.s3"></a>

```typescript
public readonly s3: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

Details about delivering logs to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#s3 KafkaconnectConnector#s3}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs: kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the logs get sent to the specified CloudWatch Logs destination. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>string</code> | The CloudWatch log group that is the destination for log delivery. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the logs get sent to the specified CloudWatch Logs destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

The CloudWatch log group that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#log_group KafkaconnectConnector#log_group}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose: kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | The Kinesis Data Firehose delivery stream that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream. |

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

The Kinesis Data Firehose delivery stream that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#delivery_stream KafkaconnectConnector#delivery_stream}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the logs get sent to the specified Kinesis Data Firehose delivery stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3: kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket">bucket</a></code> | <code>string</code> | The name of the S3 bucket that is the destination for log delivery. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies whether the logs get sent to the specified Amazon S3 destination. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix">prefix</a></code> | <code>string</code> | The S3 prefix that is the destination for log delivery. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

The name of the S3 bucket that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#bucket KafkaconnectConnector#bucket}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies whether the logs get sent to the specified Amazon S3 destination.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#enabled KafkaconnectConnector#enabled}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

The S3 prefix that is the destination for log delivery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#prefix KafkaconnectConnector#prefix}

---

### KafkaconnectConnectorPlugins <a name="KafkaconnectConnectorPlugins" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorPlugins: kafkaconnectConnector.KafkaconnectConnectorPlugins = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.property.customPlugin">customPlugin</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a></code> | Details about a custom plugin. |

---

##### `customPlugin`<sup>Required</sup> <a name="customPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins.property.customPlugin"></a>

```typescript
public readonly customPlugin: KafkaconnectConnectorPluginsCustomPlugin;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

Details about a custom plugin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#custom_plugin KafkaconnectConnector#custom_plugin}

---

### KafkaconnectConnectorPluginsCustomPlugin <a name="KafkaconnectConnectorPluginsCustomPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorPluginsCustomPlugin: kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.customPluginArn">customPluginArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the custom plugin to use. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.revision">revision</a></code> | <code>number</code> | The revision of the custom plugin to use. |

---

##### `customPluginArn`<sup>Required</sup> <a name="customPluginArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.customPluginArn"></a>

```typescript
public readonly customPluginArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the custom plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#custom_plugin_arn KafkaconnectConnector#custom_plugin_arn}

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

The revision of the custom plugin to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#revision KafkaconnectConnector#revision}

---

### KafkaconnectConnectorTags <a name="KafkaconnectConnectorTags" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorTags: kafkaconnectConnector.KafkaconnectConnectorTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#key KafkaconnectConnector#key}. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#value KafkaconnectConnector#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#key KafkaconnectConnector#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#value KafkaconnectConnector#value}.

---

### KafkaconnectConnectorWorkerConfiguration <a name="KafkaconnectConnectorWorkerConfiguration" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

const kafkaconnectConnectorWorkerConfiguration: kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.revision">revision</a></code> | <code>number</code> | The revision of the worker configuration to use. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.workerConfigurationArn">workerConfigurationArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the worker configuration to use. |

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

The revision of the worker configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#revision KafkaconnectConnector#revision}

---

##### `workerConfigurationArn`<sup>Optional</sup> <a name="workerConfigurationArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration.property.workerConfigurationArn"></a>

```typescript
public readonly workerConfigurationArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the worker configuration to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/kafkaconnect_connector#worker_configuration_arn KafkaconnectConnector#worker_configuration_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### KafkaconnectConnectorCapacityAutoScalingOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy">putScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy">putScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxAutoscalingTaskCount">resetMaxAutoscalingTaskCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxWorkerCount">resetMaxWorkerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMcuCount">resetMcuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMinWorkerCount">resetMinWorkerCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleInPolicy">resetScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleOutPolicy">resetScaleOutPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScaleInPolicy` <a name="putScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy"></a>

```typescript
public putScaleInPolicy(value: KafkaconnectConnectorCapacityAutoScalingScaleInPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleInPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---

##### `putScaleOutPolicy` <a name="putScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy"></a>

```typescript
public putScaleOutPolicy(value: KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.putScaleOutPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---

##### `resetMaxAutoscalingTaskCount` <a name="resetMaxAutoscalingTaskCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxAutoscalingTaskCount"></a>

```typescript
public resetMaxAutoscalingTaskCount(): void
```

##### `resetMaxWorkerCount` <a name="resetMaxWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMaxWorkerCount"></a>

```typescript
public resetMaxWorkerCount(): void
```

##### `resetMcuCount` <a name="resetMcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMcuCount"></a>

```typescript
public resetMcuCount(): void
```

##### `resetMinWorkerCount` <a name="resetMinWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetMinWorkerCount"></a>

```typescript
public resetMinWorkerCount(): void
```

##### `resetScaleInPolicy` <a name="resetScaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleInPolicy"></a>

```typescript
public resetScaleInPolicy(): void
```

##### `resetScaleOutPolicy` <a name="resetScaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.resetScaleOutPolicy"></a>

```typescript
public resetScaleOutPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy">scaleInPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy">scaleOutPolicy</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCountInput">maxAutoscalingTaskCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCountInput">maxWorkerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCountInput">mcuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCountInput">minWorkerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicyInput">scaleInPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicyInput">scaleOutPolicyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount">maxAutoscalingTaskCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount">maxWorkerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount">mcuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount">minWorkerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scaleInPolicy`<sup>Required</sup> <a name="scaleInPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicy"></a>

```typescript
public readonly scaleInPolicy: KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference</a>

---

##### `scaleOutPolicy`<sup>Required</sup> <a name="scaleOutPolicy" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicy"></a>

```typescript
public readonly scaleOutPolicy: KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference</a>

---

##### `maxAutoscalingTaskCountInput`<sup>Optional</sup> <a name="maxAutoscalingTaskCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCountInput"></a>

```typescript
public readonly maxAutoscalingTaskCountInput: number;
```

- *Type:* number

---

##### `maxWorkerCountInput`<sup>Optional</sup> <a name="maxWorkerCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCountInput"></a>

```typescript
public readonly maxWorkerCountInput: number;
```

- *Type:* number

---

##### `mcuCountInput`<sup>Optional</sup> <a name="mcuCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCountInput"></a>

```typescript
public readonly mcuCountInput: number;
```

- *Type:* number

---

##### `minWorkerCountInput`<sup>Optional</sup> <a name="minWorkerCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCountInput"></a>

```typescript
public readonly minWorkerCountInput: number;
```

- *Type:* number

---

##### `scaleInPolicyInput`<sup>Optional</sup> <a name="scaleInPolicyInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleInPolicyInput"></a>

```typescript
public readonly scaleInPolicyInput: IResolvable | KafkaconnectConnectorCapacityAutoScalingScaleInPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---

##### `scaleOutPolicyInput`<sup>Optional</sup> <a name="scaleOutPolicyInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.scaleOutPolicyInput"></a>

```typescript
public readonly scaleOutPolicyInput: IResolvable | KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---

##### `maxAutoscalingTaskCount`<sup>Required</sup> <a name="maxAutoscalingTaskCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxAutoscalingTaskCount"></a>

```typescript
public readonly maxAutoscalingTaskCount: number;
```

- *Type:* number

---

##### `maxWorkerCount`<sup>Required</sup> <a name="maxWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.maxWorkerCount"></a>

```typescript
public readonly maxWorkerCount: number;
```

- *Type:* number

---

##### `mcuCount`<sup>Required</sup> <a name="mcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.mcuCount"></a>

```typescript
public readonly mcuCount: number;
```

- *Type:* number

---

##### `minWorkerCount`<sup>Required</sup> <a name="minWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.minWorkerCount"></a>

```typescript
public readonly minWorkerCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorCapacityAutoScaling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

---


### KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage">resetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuUtilizationPercentage` <a name="resetCpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```typescript
public resetCpuUtilizationPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput">cpuUtilizationPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuUtilizationPercentageInput`<sup>Optional</sup> <a name="cpuUtilizationPercentageInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```typescript
public readonly cpuUtilizationPercentageInput: number;
```

- *Type:* number

---

##### `cpuUtilizationPercentage`<sup>Required</sup> <a name="cpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```typescript
public readonly cpuUtilizationPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorCapacityAutoScalingScaleInPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleInPolicy">KafkaconnectConnectorCapacityAutoScalingScaleInPolicy</a>

---


### KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference <a name="KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage">resetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCpuUtilizationPercentage` <a name="resetCpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.resetCpuUtilizationPercentage"></a>

```typescript
public resetCpuUtilizationPercentage(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput">cpuUtilizationPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage">cpuUtilizationPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuUtilizationPercentageInput`<sup>Optional</sup> <a name="cpuUtilizationPercentageInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentageInput"></a>

```typescript
public readonly cpuUtilizationPercentageInput: number;
```

- *Type:* number

---

##### `cpuUtilizationPercentage`<sup>Required</sup> <a name="cpuUtilizationPercentage" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.cpuUtilizationPercentage"></a>

```typescript
public readonly cpuUtilizationPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy">KafkaconnectConnectorCapacityAutoScalingScaleOutPolicy</a>

---


### KafkaconnectConnectorCapacityOutputReference <a name="KafkaconnectConnectorCapacityOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling">putAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity">putProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetAutoScaling">resetAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetProvisionedCapacity">resetProvisionedCapacity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoScaling` <a name="putAutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling"></a>

```typescript
public putAutoScaling(value: KafkaconnectConnectorCapacityAutoScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

---

##### `putProvisionedCapacity` <a name="putProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity"></a>

```typescript
public putProvisionedCapacity(value: KafkaconnectConnectorCapacityProvisionedCapacity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.putProvisionedCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

---

##### `resetAutoScaling` <a name="resetAutoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetAutoScaling"></a>

```typescript
public resetAutoScaling(): void
```

##### `resetProvisionedCapacity` <a name="resetProvisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.resetProvisionedCapacity"></a>

```typescript
public resetProvisionedCapacity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScaling">autoScaling</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference">KafkaconnectConnectorCapacityAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity">provisionedCapacity</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference">KafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScalingInput">autoScalingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacityInput">provisionedCapacityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoScaling`<sup>Required</sup> <a name="autoScaling" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScaling"></a>

```typescript
public readonly autoScaling: KafkaconnectConnectorCapacityAutoScalingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScalingOutputReference">KafkaconnectConnectorCapacityAutoScalingOutputReference</a>

---

##### `provisionedCapacity`<sup>Required</sup> <a name="provisionedCapacity" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacity"></a>

```typescript
public readonly provisionedCapacity: KafkaconnectConnectorCapacityProvisionedCapacityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference">KafkaconnectConnectorCapacityProvisionedCapacityOutputReference</a>

---

##### `autoScalingInput`<sup>Optional</sup> <a name="autoScalingInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.autoScalingInput"></a>

```typescript
public readonly autoScalingInput: IResolvable | KafkaconnectConnectorCapacityAutoScaling;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityAutoScaling">KafkaconnectConnectorCapacityAutoScaling</a>

---

##### `provisionedCapacityInput`<sup>Optional</sup> <a name="provisionedCapacityInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.provisionedCapacityInput"></a>

```typescript
public readonly provisionedCapacityInput: IResolvable | KafkaconnectConnectorCapacityProvisionedCapacity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorCapacity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacity">KafkaconnectConnectorCapacity</a>

---


### KafkaconnectConnectorCapacityProvisionedCapacityOutputReference <a name="KafkaconnectConnectorCapacityProvisionedCapacityOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount">resetMcuCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetWorkerCount">resetWorkerCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMcuCount` <a name="resetMcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetMcuCount"></a>

```typescript
public resetMcuCount(): void
```

##### `resetWorkerCount` <a name="resetWorkerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.resetWorkerCount"></a>

```typescript
public resetWorkerCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput">mcuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput">workerCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount">mcuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount">workerCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mcuCountInput`<sup>Optional</sup> <a name="mcuCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCountInput"></a>

```typescript
public readonly mcuCountInput: number;
```

- *Type:* number

---

##### `workerCountInput`<sup>Optional</sup> <a name="workerCountInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCountInput"></a>

```typescript
public readonly workerCountInput: number;
```

- *Type:* number

---

##### `mcuCount`<sup>Required</sup> <a name="mcuCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.mcuCount"></a>

```typescript
public readonly mcuCount: number;
```

- *Type:* number

---

##### `workerCount`<sup>Required</sup> <a name="workerCount" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.workerCount"></a>

```typescript
public readonly workerCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorCapacityProvisionedCapacity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorCapacityProvisionedCapacity">KafkaconnectConnectorCapacityProvisionedCapacity</a>

---


### KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc">putVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpc` <a name="putVpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc"></a>

```typescript
public putVpc(value: KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.putVpc.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput">bootstrapServersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput">vpcInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers">bootstrapServers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpc"></a>

```typescript
public readonly vpc: KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference</a>

---

##### `bootstrapServersInput`<sup>Optional</sup> <a name="bootstrapServersInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServersInput"></a>

```typescript
public readonly bootstrapServersInput: string;
```

- *Type:* string

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.vpcInput"></a>

```typescript
public readonly vpcInput: IResolvable | KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---

##### `bootstrapServers`<sup>Required</sup> <a name="bootstrapServers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.bootstrapServers"></a>

```typescript
public readonly bootstrapServers: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorKafkaClusterApacheKafkaCluster;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


### KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference <a name="KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput">subnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `subnetsInput`<sup>Optional</sup> <a name="subnetsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnetsInput"></a>

```typescript
public readonly subnetsInput: string[];
```

- *Type:* string[]

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc">KafkaconnectConnectorKafkaClusterApacheKafkaClusterVpc</a>

---


### KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference <a name="KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorKafkaClusterClientAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterClientAuthentication">KafkaconnectConnectorKafkaClusterClientAuthentication</a>

---


### KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference <a name="KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput">encryptionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType">encryptionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionTypeInput`<sup>Optional</sup> <a name="encryptionTypeInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionTypeInput"></a>

```typescript
public readonly encryptionTypeInput: string;
```

- *Type:* string

---

##### `encryptionType`<sup>Required</sup> <a name="encryptionType" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.encryptionType"></a>

```typescript
public readonly encryptionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorKafkaClusterEncryptionInTransit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterEncryptionInTransit">KafkaconnectConnectorKafkaClusterEncryptionInTransit</a>

---


### KafkaconnectConnectorKafkaClusterOutputReference <a name="KafkaconnectConnectorKafkaClusterOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster">putApacheKafkaCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApacheKafkaCluster` <a name="putApacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster"></a>

```typescript
public putApacheKafkaCluster(value: KafkaconnectConnectorKafkaClusterApacheKafkaCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.putApacheKafkaCluster.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster">apacheKafkaCluster</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput">apacheKafkaClusterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apacheKafkaCluster`<sup>Required</sup> <a name="apacheKafkaCluster" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaCluster"></a>

```typescript
public readonly apacheKafkaCluster: KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference">KafkaconnectConnectorKafkaClusterApacheKafkaClusterOutputReference</a>

---

##### `apacheKafkaClusterInput`<sup>Optional</sup> <a name="apacheKafkaClusterInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.apacheKafkaClusterInput"></a>

```typescript
public readonly apacheKafkaClusterInput: IResolvable | KafkaconnectConnectorKafkaClusterApacheKafkaCluster;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterApacheKafkaCluster">KafkaconnectConnectorKafkaClusterApacheKafkaCluster</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorKafkaCluster;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorKafkaCluster">KafkaconnectConnectorKafkaCluster</a>

---


### KafkaconnectConnectorLogDeliveryOutputReference <a name="KafkaconnectConnectorLogDeliveryOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery">putWorkerLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resetWorkerLogDelivery">resetWorkerLogDelivery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWorkerLogDelivery` <a name="putWorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery"></a>

```typescript
public putWorkerLogDelivery(value: KafkaconnectConnectorLogDeliveryWorkerLogDelivery): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.putWorkerLogDelivery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---

##### `resetWorkerLogDelivery` <a name="resetWorkerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.resetWorkerLogDelivery"></a>

```typescript
public resetWorkerLogDelivery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery">workerLogDelivery</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput">workerLogDeliveryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workerLogDelivery`<sup>Required</sup> <a name="workerLogDelivery" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDelivery"></a>

```typescript
public readonly workerLogDelivery: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference</a>

---

##### `workerLogDeliveryInput`<sup>Optional</sup> <a name="workerLogDeliveryInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.workerLogDeliveryInput"></a>

```typescript
public readonly workerLogDeliveryInput: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDelivery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorLogDelivery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDelivery">KafkaconnectConnectorLogDelivery</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetDeliveryStream"></a>

```typescript
public resetDeliveryStream(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStreamInput"></a>

```typescript
public readonly deliveryStreamInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose"></a>

```typescript
public putFirehose(value: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3"></a>

```typescript
public putS3(value: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetCloudwatchLogs"></a>

```typescript
public resetCloudwatchLogs(): void
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetFirehose"></a>

```typescript
public resetFirehose(): void
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput">firehoseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input">s3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehose"></a>

```typescript
public readonly firehose: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3"></a>

```typescript
public readonly s3: KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryCloudwatchLogs</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.firehoseInput"></a>

```typescript
public readonly firehoseInput: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryFirehose</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDelivery;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDelivery">KafkaconnectConnectorLogDeliveryWorkerLogDelivery</a>

---


### KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference <a name="KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3">KafkaconnectConnectorLogDeliveryWorkerLogDeliveryS3</a>

---


### KafkaconnectConnectorPluginsCustomPluginOutputReference <a name="KafkaconnectConnectorPluginsCustomPluginOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArnInput">customPluginArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revisionInput">revisionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn">customPluginArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customPluginArnInput`<sup>Optional</sup> <a name="customPluginArnInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArnInput"></a>

```typescript
public readonly customPluginArnInput: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: number;
```

- *Type:* number

---

##### `customPluginArn`<sup>Required</sup> <a name="customPluginArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.customPluginArn"></a>

```typescript
public readonly customPluginArn: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorPluginsCustomPlugin;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

---


### KafkaconnectConnectorPluginsList <a name="KafkaconnectConnectorPluginsList" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorPluginsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get"></a>

```typescript
public get(index: number): KafkaconnectConnectorPluginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorPlugins[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>[]

---


### KafkaconnectConnectorPluginsOutputReference <a name="KafkaconnectConnectorPluginsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin">putCustomPlugin</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPlugin` <a name="putCustomPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin"></a>

```typescript
public putCustomPlugin(value: KafkaconnectConnectorPluginsCustomPlugin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.putCustomPlugin.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPlugin">customPlugin</a></code> | <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference">KafkaconnectConnectorPluginsCustomPluginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPluginInput">customPluginInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customPlugin`<sup>Required</sup> <a name="customPlugin" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPlugin"></a>

```typescript
public readonly customPlugin: KafkaconnectConnectorPluginsCustomPluginOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPluginOutputReference">KafkaconnectConnectorPluginsCustomPluginOutputReference</a>

---

##### `customPluginInput`<sup>Optional</sup> <a name="customPluginInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.customPluginInput"></a>

```typescript
public readonly customPluginInput: IResolvable | KafkaconnectConnectorPluginsCustomPlugin;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsCustomPlugin">KafkaconnectConnectorPluginsCustomPlugin</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPluginsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorPlugins;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorPlugins">KafkaconnectConnectorPlugins</a>

---


### KafkaconnectConnectorTagsList <a name="KafkaconnectConnectorTagsList" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get"></a>

```typescript
public get(index: number): KafkaconnectConnectorTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>[]

---


### KafkaconnectConnectorTagsOutputReference <a name="KafkaconnectConnectorTagsOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorTags">KafkaconnectConnectorTags</a>

---


### KafkaconnectConnectorWorkerConfigurationOutputReference <a name="KafkaconnectConnectorWorkerConfigurationOutputReference" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer"></a>

```typescript
import { kafkaconnectConnector } from '@cdktn/provider-awscc'

new kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetWorkerConfigurationArn">resetWorkerConfigurationArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRevision` <a name="resetRevision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetRevision"></a>

```typescript
public resetRevision(): void
```

##### `resetWorkerConfigurationArn` <a name="resetWorkerConfigurationArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.resetWorkerConfigurationArn"></a>

```typescript
public resetWorkerConfigurationArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revisionInput">revisionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArnInput">workerConfigurationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn">workerConfigurationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: number;
```

- *Type:* number

---

##### `workerConfigurationArnInput`<sup>Optional</sup> <a name="workerConfigurationArnInput" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArnInput"></a>

```typescript
public readonly workerConfigurationArnInput: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `workerConfigurationArn`<sup>Required</sup> <a name="workerConfigurationArn" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.workerConfigurationArn"></a>

```typescript
public readonly workerConfigurationArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | KafkaconnectConnectorWorkerConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.kafkaconnectConnector.KafkaconnectConnectorWorkerConfiguration">KafkaconnectConnectorWorkerConfiguration</a>

---



