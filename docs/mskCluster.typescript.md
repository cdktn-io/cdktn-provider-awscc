# `mskCluster` Submodule <a name="`mskCluster` Submodule" id="@cdktn/provider-awscc.mskCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MskCluster <a name="MskCluster" id="@cdktn/provider-awscc.mskCluster.MskCluster"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster awscc_msk_cluster}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskCluster.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskCluster(scope: Construct, id: string, config: MskClusterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig">MskClusterConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskCluster.MskCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskCluster.MskCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mskCluster.MskCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig">MskClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putBrokerNodeGroupInfo">putBrokerNodeGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putClientAuthentication">putClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putConfigurationInfo">putConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putEncryptionInfo">putEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putLoggingInfo">putLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putOpenMonitoring">putOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putRebalancing">putRebalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.putZookeeperAccess">putZookeeperAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetClientAuthentication">resetClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetConfigurationInfo">resetConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetEncryptionInfo">resetEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetEnhancedMonitoring">resetEnhancedMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetLoggingInfo">resetLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetOpenMonitoring">resetOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetRebalancing">resetRebalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetStorageMode">resetStorageMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.resetZookeeperAccess">resetZookeeperAccess</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskCluster.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mskCluster.MskCluster.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mskCluster.MskCluster.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mskCluster.MskCluster.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mskCluster.MskCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskCluster.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mskCluster.MskCluster.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mskCluster.MskCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mskCluster.MskCluster.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mskCluster.MskCluster.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mskCluster.MskCluster.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mskCluster.MskCluster.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mskCluster.MskCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mskCluster.MskCluster.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mskCluster.MskCluster.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskCluster.MskCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskCluster.MskCluster.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskCluster.MskCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBrokerNodeGroupInfo` <a name="putBrokerNodeGroupInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.putBrokerNodeGroupInfo"></a>

```typescript
public putBrokerNodeGroupInfo(value: MskClusterBrokerNodeGroupInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putBrokerNodeGroupInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---

##### `putClientAuthentication` <a name="putClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskCluster.putClientAuthentication"></a>

```typescript
public putClientAuthentication(value: MskClusterClientAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---

##### `putConfigurationInfo` <a name="putConfigurationInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.putConfigurationInfo"></a>

```typescript
public putConfigurationInfo(value: MskClusterConfigurationInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putConfigurationInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---

##### `putEncryptionInfo` <a name="putEncryptionInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.putEncryptionInfo"></a>

```typescript
public putEncryptionInfo(value: MskClusterEncryptionInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putEncryptionInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---

##### `putLoggingInfo` <a name="putLoggingInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.putLoggingInfo"></a>

```typescript
public putLoggingInfo(value: MskClusterLoggingInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putLoggingInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---

##### `putOpenMonitoring` <a name="putOpenMonitoring" id="@cdktn/provider-awscc.mskCluster.MskCluster.putOpenMonitoring"></a>

```typescript
public putOpenMonitoring(value: MskClusterOpenMonitoring): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putOpenMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---

##### `putRebalancing` <a name="putRebalancing" id="@cdktn/provider-awscc.mskCluster.MskCluster.putRebalancing"></a>

```typescript
public putRebalancing(value: MskClusterRebalancing): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putRebalancing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a>

---

##### `putZookeeperAccess` <a name="putZookeeperAccess" id="@cdktn/provider-awscc.mskCluster.MskCluster.putZookeeperAccess"></a>

```typescript
public putZookeeperAccess(value: MskClusterZookeeperAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskCluster.putZookeeperAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a>

---

##### `resetClientAuthentication` <a name="resetClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetClientAuthentication"></a>

```typescript
public resetClientAuthentication(): void
```

##### `resetConfigurationInfo` <a name="resetConfigurationInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetConfigurationInfo"></a>

```typescript
public resetConfigurationInfo(): void
```

##### `resetEncryptionInfo` <a name="resetEncryptionInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetEncryptionInfo"></a>

```typescript
public resetEncryptionInfo(): void
```

##### `resetEnhancedMonitoring` <a name="resetEnhancedMonitoring" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetEnhancedMonitoring"></a>

```typescript
public resetEnhancedMonitoring(): void
```

##### `resetLoggingInfo` <a name="resetLoggingInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetLoggingInfo"></a>

```typescript
public resetLoggingInfo(): void
```

##### `resetOpenMonitoring` <a name="resetOpenMonitoring" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetOpenMonitoring"></a>

```typescript
public resetOpenMonitoring(): void
```

##### `resetRebalancing` <a name="resetRebalancing" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetRebalancing"></a>

```typescript
public resetRebalancing(): void
```

##### `resetStorageMode` <a name="resetStorageMode" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetStorageMode"></a>

```typescript
public resetStorageMode(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetZookeeperAccess` <a name="resetZookeeperAccess" id="@cdktn/provider-awscc.mskCluster.MskCluster.resetZookeeperAccess"></a>

```typescript
public resetZookeeperAccess(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MskCluster resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mskCluster.MskCluster.isConstruct"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

mskCluster.MskCluster.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskCluster.MskCluster.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mskCluster.MskCluster.isTerraformElement"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

mskCluster.MskCluster.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskCluster.MskCluster.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mskCluster.MskCluster.isTerraformResource"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

mskCluster.MskCluster.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mskCluster.MskCluster.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mskCluster.MskCluster.generateConfigForImport"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

mskCluster.MskCluster.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MskCluster resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mskCluster.MskCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mskCluster.MskCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MskCluster to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mskCluster.MskCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MskCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskCluster.MskCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MskCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.brokerNodeGroupInfo">brokerNodeGroupInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference">MskClusterBrokerNodeGroupInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.clientAuthentication">clientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference">MskClusterClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.configurationInfo">configurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference">MskClusterConfigurationInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.currentVersion">currentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.encryptionInfo">encryptionInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference">MskClusterEncryptionInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.loggingInfo">loggingInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference">MskClusterLoggingInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.openMonitoring">openMonitoring</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference">MskClusterOpenMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.rebalancing">rebalancing</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference">MskClusterRebalancingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.zookeeperAccess">zookeeperAccess</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference">MskClusterZookeeperAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.brokerNodeGroupInfoInput">brokerNodeGroupInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.clientAuthenticationInput">clientAuthenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.configurationInfoInput">configurationInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.encryptionInfoInput">encryptionInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.enhancedMonitoringInput">enhancedMonitoringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.kafkaVersionInput">kafkaVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.loggingInfoInput">loggingInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.numberOfBrokerNodesInput">numberOfBrokerNodesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.openMonitoringInput">openMonitoringInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.rebalancingInput">rebalancingInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.storageModeInput">storageModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.zookeeperAccessInput">zookeeperAccessInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.enhancedMonitoring">enhancedMonitoring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.kafkaVersion">kafkaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.numberOfBrokerNodes">numberOfBrokerNodes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.storageMode">storageMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `brokerNodeGroupInfo`<sup>Required</sup> <a name="brokerNodeGroupInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.brokerNodeGroupInfo"></a>

```typescript
public readonly brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference">MskClusterBrokerNodeGroupInfoOutputReference</a>

---

##### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.clientAuthentication"></a>

```typescript
public readonly clientAuthentication: MskClusterClientAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference">MskClusterClientAuthenticationOutputReference</a>

---

##### `configurationInfo`<sup>Required</sup> <a name="configurationInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.configurationInfo"></a>

```typescript
public readonly configurationInfo: MskClusterConfigurationInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference">MskClusterConfigurationInfoOutputReference</a>

---

##### `currentVersion`<sup>Required</sup> <a name="currentVersion" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.currentVersion"></a>

```typescript
public readonly currentVersion: string;
```

- *Type:* string

---

##### `encryptionInfo`<sup>Required</sup> <a name="encryptionInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.encryptionInfo"></a>

```typescript
public readonly encryptionInfo: MskClusterEncryptionInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference">MskClusterEncryptionInfoOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loggingInfo`<sup>Required</sup> <a name="loggingInfo" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.loggingInfo"></a>

```typescript
public readonly loggingInfo: MskClusterLoggingInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference">MskClusterLoggingInfoOutputReference</a>

---

##### `openMonitoring`<sup>Required</sup> <a name="openMonitoring" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.openMonitoring"></a>

```typescript
public readonly openMonitoring: MskClusterOpenMonitoringOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference">MskClusterOpenMonitoringOutputReference</a>

---

##### `rebalancing`<sup>Required</sup> <a name="rebalancing" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.rebalancing"></a>

```typescript
public readonly rebalancing: MskClusterRebalancingOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference">MskClusterRebalancingOutputReference</a>

---

##### `zookeeperAccess`<sup>Required</sup> <a name="zookeeperAccess" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.zookeeperAccess"></a>

```typescript
public readonly zookeeperAccess: MskClusterZookeeperAccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference">MskClusterZookeeperAccessOutputReference</a>

---

##### `brokerNodeGroupInfoInput`<sup>Optional</sup> <a name="brokerNodeGroupInfoInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.brokerNodeGroupInfoInput"></a>

```typescript
public readonly brokerNodeGroupInfoInput: IResolvable | MskClusterBrokerNodeGroupInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---

##### `clientAuthenticationInput`<sup>Optional</sup> <a name="clientAuthenticationInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.clientAuthenticationInput"></a>

```typescript
public readonly clientAuthenticationInput: IResolvable | MskClusterClientAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `configurationInfoInput`<sup>Optional</sup> <a name="configurationInfoInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.configurationInfoInput"></a>

```typescript
public readonly configurationInfoInput: IResolvable | MskClusterConfigurationInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---

##### `encryptionInfoInput`<sup>Optional</sup> <a name="encryptionInfoInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.encryptionInfoInput"></a>

```typescript
public readonly encryptionInfoInput: IResolvable | MskClusterEncryptionInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---

##### `enhancedMonitoringInput`<sup>Optional</sup> <a name="enhancedMonitoringInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.enhancedMonitoringInput"></a>

```typescript
public readonly enhancedMonitoringInput: string;
```

- *Type:* string

---

##### `kafkaVersionInput`<sup>Optional</sup> <a name="kafkaVersionInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.kafkaVersionInput"></a>

```typescript
public readonly kafkaVersionInput: string;
```

- *Type:* string

---

##### `loggingInfoInput`<sup>Optional</sup> <a name="loggingInfoInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.loggingInfoInput"></a>

```typescript
public readonly loggingInfoInput: IResolvable | MskClusterLoggingInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---

##### `numberOfBrokerNodesInput`<sup>Optional</sup> <a name="numberOfBrokerNodesInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.numberOfBrokerNodesInput"></a>

```typescript
public readonly numberOfBrokerNodesInput: number;
```

- *Type:* number

---

##### `openMonitoringInput`<sup>Optional</sup> <a name="openMonitoringInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.openMonitoringInput"></a>

```typescript
public readonly openMonitoringInput: IResolvable | MskClusterOpenMonitoring;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---

##### `rebalancingInput`<sup>Optional</sup> <a name="rebalancingInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.rebalancingInput"></a>

```typescript
public readonly rebalancingInput: IResolvable | MskClusterRebalancing;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a>

---

##### `storageModeInput`<sup>Optional</sup> <a name="storageModeInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.storageModeInput"></a>

```typescript
public readonly storageModeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zookeeperAccessInput`<sup>Optional</sup> <a name="zookeeperAccessInput" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.zookeeperAccessInput"></a>

```typescript
public readonly zookeeperAccessInput: IResolvable | MskClusterZookeeperAccess;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a>

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `enhancedMonitoring`<sup>Required</sup> <a name="enhancedMonitoring" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.enhancedMonitoring"></a>

```typescript
public readonly enhancedMonitoring: string;
```

- *Type:* string

---

##### `kafkaVersion`<sup>Required</sup> <a name="kafkaVersion" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.kafkaVersion"></a>

```typescript
public readonly kafkaVersion: string;
```

- *Type:* string

---

##### `numberOfBrokerNodes`<sup>Required</sup> <a name="numberOfBrokerNodes" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.numberOfBrokerNodes"></a>

```typescript
public readonly numberOfBrokerNodes: number;
```

- *Type:* number

---

##### `storageMode`<sup>Required</sup> <a name="storageMode" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.storageMode"></a>

```typescript
public readonly storageMode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskCluster.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mskCluster.MskCluster.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MskClusterBrokerNodeGroupInfo <a name="MskClusterBrokerNodeGroupInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterBrokerNodeGroupInfo: mskCluster.MskClusterBrokerNodeGroupInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.clientSubnets">clientSubnets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#client_subnets MskCluster#client_subnets}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.instanceType">instanceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#instance_type MskCluster#instance_type}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.brokerAzDistribution">brokerAzDistribution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#broker_az_distribution MskCluster#broker_az_distribution}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.connectivityInfo">connectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#connectivity_info MskCluster#connectivity_info}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#security_groups MskCluster#security_groups}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.storageInfo">storageInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#storage_info MskCluster#storage_info}. |

---

##### `clientSubnets`<sup>Required</sup> <a name="clientSubnets" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.clientSubnets"></a>

```typescript
public readonly clientSubnets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#client_subnets MskCluster#client_subnets}.

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#instance_type MskCluster#instance_type}.

---

##### `brokerAzDistribution`<sup>Optional</sup> <a name="brokerAzDistribution" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.brokerAzDistribution"></a>

```typescript
public readonly brokerAzDistribution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#broker_az_distribution MskCluster#broker_az_distribution}.

---

##### `connectivityInfo`<sup>Optional</sup> <a name="connectivityInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.connectivityInfo"></a>

```typescript
public readonly connectivityInfo: MskClusterBrokerNodeGroupInfoConnectivityInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#connectivity_info MskCluster#connectivity_info}.

---

##### `securityGroups`<sup>Optional</sup> <a name="securityGroups" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#security_groups MskCluster#security_groups}.

---

##### `storageInfo`<sup>Optional</sup> <a name="storageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo.property.storageInfo"></a>

```typescript
public readonly storageInfo: MskClusterBrokerNodeGroupInfoStorageInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#storage_info MskCluster#storage_info}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfo <a name="MskClusterBrokerNodeGroupInfoConnectivityInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterBrokerNodeGroupInfoConnectivityInfo: mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.networkType">networkType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#network_type MskCluster#network_type}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.publicAccess">publicAccess</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#public_access MskCluster#public_access}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.vpcConnectivity">vpcConnectivity</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#vpc_connectivity MskCluster#vpc_connectivity}. |

---

##### `networkType`<sup>Optional</sup> <a name="networkType" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#network_type MskCluster#network_type}.

---

##### `publicAccess`<sup>Optional</sup> <a name="publicAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.publicAccess"></a>

```typescript
public readonly publicAccess: MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#public_access MskCluster#public_access}.

---

##### `vpcConnectivity`<sup>Optional</sup> <a name="vpcConnectivity" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo.property.vpcConnectivity"></a>

```typescript
public readonly vpcConnectivity: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#vpc_connectivity MskCluster#vpc_connectivity}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess: mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#type MskCluster#type}. |

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#type MskCluster#type}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity: mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity.property.clientAuthentication">clientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#client_authentication MskCluster#client_authentication}. |

---

##### `clientAuthentication`<sup>Optional</sup> <a name="clientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity.property.clientAuthentication"></a>

```typescript
public readonly clientAuthentication: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#client_authentication MskCluster#client_authentication}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication: mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication.property.sasl">sasl</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#sasl MskCluster#sasl}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication.property.tls">tls</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#tls MskCluster#tls}. |

---

##### `sasl`<sup>Optional</sup> <a name="sasl" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication.property.sasl"></a>

```typescript
public readonly sasl: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#sasl MskCluster#sasl}.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication.property.tls"></a>

```typescript
public readonly tls: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#tls MskCluster#tls}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl: mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl.property.iam">iam</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#iam MskCluster#iam}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl.property.scram">scram</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#scram MskCluster#scram}. |

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl.property.iam"></a>

```typescript
public readonly iam: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#iam MskCluster#iam}.

---

##### `scram`<sup>Optional</sup> <a name="scram" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl.property.scram"></a>

```typescript
public readonly scram: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#scram MskCluster#scram}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam: mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram: mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls: mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterBrokerNodeGroupInfoStorageInfo <a name="MskClusterBrokerNodeGroupInfoStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterBrokerNodeGroupInfoStorageInfo: mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.property.ebsStorageInfo">ebsStorageInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#ebs_storage_info MskCluster#ebs_storage_info}. |

---

##### `ebsStorageInfo`<sup>Optional</sup> <a name="ebsStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo.property.ebsStorageInfo"></a>

```typescript
public readonly ebsStorageInfo: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#ebs_storage_info MskCluster#ebs_storage_info}.

---

### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo: mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#provisioned_throughput MskCluster#provisioned_throughput}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.volumeSize">volumeSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#volume_size MskCluster#volume_size}. |

---

##### `provisionedThroughput`<sup>Optional</sup> <a name="provisionedThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#provisioned_throughput MskCluster#provisioned_throughput}.

---

##### `volumeSize`<sup>Optional</sup> <a name="volumeSize" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#volume_size MskCluster#volume_size}.

---

### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput: mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.volumeThroughput">volumeThroughput</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#volume_throughput MskCluster#volume_throughput}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

##### `volumeThroughput`<sup>Optional</sup> <a name="volumeThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput.property.volumeThroughput"></a>

```typescript
public readonly volumeThroughput: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#volume_throughput MskCluster#volume_throughput}.

---

### MskClusterClientAuthentication <a name="MskClusterClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterClientAuthentication: mskCluster.MskClusterClientAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.property.sasl">sasl</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#sasl MskCluster#sasl}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.property.tls">tls</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#tls MskCluster#tls}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.property.unauthenticated">unauthenticated</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#unauthenticated MskCluster#unauthenticated}. |

---

##### `sasl`<sup>Optional</sup> <a name="sasl" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.property.sasl"></a>

```typescript
public readonly sasl: MskClusterClientAuthenticationSasl;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#sasl MskCluster#sasl}.

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.property.tls"></a>

```typescript
public readonly tls: MskClusterClientAuthenticationTls;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#tls MskCluster#tls}.

---

##### `unauthenticated`<sup>Optional</sup> <a name="unauthenticated" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication.property.unauthenticated"></a>

```typescript
public readonly unauthenticated: MskClusterClientAuthenticationUnauthenticated;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#unauthenticated MskCluster#unauthenticated}.

---

### MskClusterClientAuthenticationSasl <a name="MskClusterClientAuthenticationSasl" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterClientAuthenticationSasl: mskCluster.MskClusterClientAuthenticationSasl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl.property.iam">iam</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#iam MskCluster#iam}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl.property.scram">scram</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#scram MskCluster#scram}. |

---

##### `iam`<sup>Optional</sup> <a name="iam" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl.property.iam"></a>

```typescript
public readonly iam: MskClusterClientAuthenticationSaslIam;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#iam MskCluster#iam}.

---

##### `scram`<sup>Optional</sup> <a name="scram" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl.property.scram"></a>

```typescript
public readonly scram: MskClusterClientAuthenticationSaslScram;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#scram MskCluster#scram}.

---

### MskClusterClientAuthenticationSaslIam <a name="MskClusterClientAuthenticationSaslIam" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterClientAuthenticationSaslIam: mskCluster.MskClusterClientAuthenticationSaslIam = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterClientAuthenticationSaslScram <a name="MskClusterClientAuthenticationSaslScram" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterClientAuthenticationSaslScram: mskCluster.MskClusterClientAuthenticationSaslScram = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterClientAuthenticationTls <a name="MskClusterClientAuthenticationTls" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterClientAuthenticationTls: mskCluster.MskClusterClientAuthenticationTls = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls.property.certificateAuthorityArnList">certificateAuthorityArnList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#certificate_authority_arn_list MskCluster#certificate_authority_arn_list}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `certificateAuthorityArnList`<sup>Optional</sup> <a name="certificateAuthorityArnList" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls.property.certificateAuthorityArnList"></a>

```typescript
public readonly certificateAuthorityArnList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#certificate_authority_arn_list MskCluster#certificate_authority_arn_list}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterClientAuthenticationUnauthenticated <a name="MskClusterClientAuthenticationUnauthenticated" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterClientAuthenticationUnauthenticated: mskCluster.MskClusterClientAuthenticationUnauthenticated = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterConfig <a name="MskClusterConfig" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterConfig: mskCluster.MskClusterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.brokerNodeGroupInfo">brokerNodeGroupInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#broker_node_group_info MskCluster#broker_node_group_info}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#cluster_name MskCluster#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.kafkaVersion">kafkaVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#kafka_version MskCluster#kafka_version}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.numberOfBrokerNodes">numberOfBrokerNodes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.clientAuthentication">clientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#client_authentication MskCluster#client_authentication}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.configurationInfo">configurationInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#configuration_info MskCluster#configuration_info}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.encryptionInfo">encryptionInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#encryption_info MskCluster#encryption_info}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.enhancedMonitoring">enhancedMonitoring</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.loggingInfo">loggingInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#logging_info MskCluster#logging_info}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.openMonitoring">openMonitoring</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#open_monitoring MskCluster#open_monitoring}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.rebalancing">rebalancing</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#rebalancing MskCluster#rebalancing}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.storageMode">storageMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#storage_mode MskCluster#storage_mode}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | A key-value pair to associate with a resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.zookeeperAccess">zookeeperAccess</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#zookeeper_access MskCluster#zookeeper_access}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `brokerNodeGroupInfo`<sup>Required</sup> <a name="brokerNodeGroupInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.brokerNodeGroupInfo"></a>

```typescript
public readonly brokerNodeGroupInfo: MskClusterBrokerNodeGroupInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#broker_node_group_info MskCluster#broker_node_group_info}.

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#cluster_name MskCluster#cluster_name}.

---

##### `kafkaVersion`<sup>Required</sup> <a name="kafkaVersion" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.kafkaVersion"></a>

```typescript
public readonly kafkaVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#kafka_version MskCluster#kafka_version}.

---

##### `numberOfBrokerNodes`<sup>Required</sup> <a name="numberOfBrokerNodes" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.numberOfBrokerNodes"></a>

```typescript
public readonly numberOfBrokerNodes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#number_of_broker_nodes MskCluster#number_of_broker_nodes}.

---

##### `clientAuthentication`<sup>Optional</sup> <a name="clientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.clientAuthentication"></a>

```typescript
public readonly clientAuthentication: MskClusterClientAuthentication;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#client_authentication MskCluster#client_authentication}.

---

##### `configurationInfo`<sup>Optional</sup> <a name="configurationInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.configurationInfo"></a>

```typescript
public readonly configurationInfo: MskClusterConfigurationInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#configuration_info MskCluster#configuration_info}.

---

##### `encryptionInfo`<sup>Optional</sup> <a name="encryptionInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.encryptionInfo"></a>

```typescript
public readonly encryptionInfo: MskClusterEncryptionInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#encryption_info MskCluster#encryption_info}.

---

##### `enhancedMonitoring`<sup>Optional</sup> <a name="enhancedMonitoring" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.enhancedMonitoring"></a>

```typescript
public readonly enhancedMonitoring: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enhanced_monitoring MskCluster#enhanced_monitoring}.

---

##### `loggingInfo`<sup>Optional</sup> <a name="loggingInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.loggingInfo"></a>

```typescript
public readonly loggingInfo: MskClusterLoggingInfo;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#logging_info MskCluster#logging_info}.

---

##### `openMonitoring`<sup>Optional</sup> <a name="openMonitoring" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.openMonitoring"></a>

```typescript
public readonly openMonitoring: MskClusterOpenMonitoring;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#open_monitoring MskCluster#open_monitoring}.

---

##### `rebalancing`<sup>Optional</sup> <a name="rebalancing" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.rebalancing"></a>

```typescript
public readonly rebalancing: MskClusterRebalancing;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#rebalancing MskCluster#rebalancing}.

---

##### `storageMode`<sup>Optional</sup> <a name="storageMode" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.storageMode"></a>

```typescript
public readonly storageMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#storage_mode MskCluster#storage_mode}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#tags MskCluster#tags}

---

##### `zookeeperAccess`<sup>Optional</sup> <a name="zookeeperAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterConfig.property.zookeeperAccess"></a>

```typescript
public readonly zookeeperAccess: MskClusterZookeeperAccess;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#zookeeper_access MskCluster#zookeeper_access}.

---

### MskClusterConfigurationInfo <a name="MskClusterConfigurationInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterConfigurationInfo: mskCluster.MskClusterConfigurationInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#arn MskCluster#arn}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo.property.revision">revision</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#revision MskCluster#revision}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#arn MskCluster#arn}.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#revision MskCluster#revision}.

---

### MskClusterEncryptionInfo <a name="MskClusterEncryptionInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterEncryptionInfo: mskCluster.MskClusterEncryptionInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo.property.encryptionAtRest">encryptionAtRest</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#encryption_at_rest MskCluster#encryption_at_rest}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo.property.encryptionInTransit">encryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#encryption_in_transit MskCluster#encryption_in_transit}. |

---

##### `encryptionAtRest`<sup>Optional</sup> <a name="encryptionAtRest" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo.property.encryptionAtRest"></a>

```typescript
public readonly encryptionAtRest: MskClusterEncryptionInfoEncryptionAtRest;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#encryption_at_rest MskCluster#encryption_at_rest}.

---

##### `encryptionInTransit`<sup>Optional</sup> <a name="encryptionInTransit" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo.property.encryptionInTransit"></a>

```typescript
public readonly encryptionInTransit: MskClusterEncryptionInfoEncryptionInTransit;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#encryption_in_transit MskCluster#encryption_in_transit}.

---

### MskClusterEncryptionInfoEncryptionAtRest <a name="MskClusterEncryptionInfoEncryptionAtRest" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterEncryptionInfoEncryptionAtRest: mskCluster.MskClusterEncryptionInfoEncryptionAtRest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest.property.dataVolumeKmsKeyId">dataVolumeKmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#data_volume_kms_key_id MskCluster#data_volume_kms_key_id}. |

---

##### `dataVolumeKmsKeyId`<sup>Optional</sup> <a name="dataVolumeKmsKeyId" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest.property.dataVolumeKmsKeyId"></a>

```typescript
public readonly dataVolumeKmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#data_volume_kms_key_id MskCluster#data_volume_kms_key_id}.

---

### MskClusterEncryptionInfoEncryptionInTransit <a name="MskClusterEncryptionInfoEncryptionInTransit" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterEncryptionInfoEncryptionInTransit: mskCluster.MskClusterEncryptionInfoEncryptionInTransit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.clientBroker">clientBroker</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#client_broker MskCluster#client_broker}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.inCluster">inCluster</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#in_cluster MskCluster#in_cluster}. |

---

##### `clientBroker`<sup>Optional</sup> <a name="clientBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.clientBroker"></a>

```typescript
public readonly clientBroker: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#client_broker MskCluster#client_broker}.

---

##### `inCluster`<sup>Optional</sup> <a name="inCluster" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit.property.inCluster"></a>

```typescript
public readonly inCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#in_cluster MskCluster#in_cluster}.

---

### MskClusterLoggingInfo <a name="MskClusterLoggingInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterLoggingInfo: mskCluster.MskClusterLoggingInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo.property.brokerLogs">brokerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#broker_logs MskCluster#broker_logs}. |

---

##### `brokerLogs`<sup>Optional</sup> <a name="brokerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo.property.brokerLogs"></a>

```typescript
public readonly brokerLogs: MskClusterLoggingInfoBrokerLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#broker_logs MskCluster#broker_logs}.

---

### MskClusterLoggingInfoBrokerLogs <a name="MskClusterLoggingInfoBrokerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterLoggingInfoBrokerLogs: mskCluster.MskClusterLoggingInfoBrokerLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#cloudwatch_logs MskCluster#cloudwatch_logs}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#firehose MskCluster#firehose}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#s3 MskCluster#s3}. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: MskClusterLoggingInfoBrokerLogsCloudwatchLogs;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#cloudwatch_logs MskCluster#cloudwatch_logs}.

---

##### `firehose`<sup>Optional</sup> <a name="firehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.property.firehose"></a>

```typescript
public readonly firehose: MskClusterLoggingInfoBrokerLogsFirehose;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#firehose MskCluster#firehose}.

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs.property.s3"></a>

```typescript
public readonly s3: MskClusterLoggingInfoBrokerLogsS3;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#s3 MskCluster#s3}.

---

### MskClusterLoggingInfoBrokerLogsCloudwatchLogs <a name="MskClusterLoggingInfoBrokerLogsCloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterLoggingInfoBrokerLogsCloudwatchLogs: mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.logGroup">logGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#log_group MskCluster#log_group}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

##### `logGroup`<sup>Optional</sup> <a name="logGroup" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#log_group MskCluster#log_group}.

---

### MskClusterLoggingInfoBrokerLogsFirehose <a name="MskClusterLoggingInfoBrokerLogsFirehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterLoggingInfoBrokerLogsFirehose: mskCluster.MskClusterLoggingInfoBrokerLogsFirehose = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#delivery_stream MskCluster#delivery_stream}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `deliveryStream`<sup>Optional</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#delivery_stream MskCluster#delivery_stream}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

### MskClusterLoggingInfoBrokerLogsS3 <a name="MskClusterLoggingInfoBrokerLogsS3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterLoggingInfoBrokerLogsS3: mskCluster.MskClusterLoggingInfoBrokerLogsS3 = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#bucket MskCluster#bucket}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#prefix MskCluster#prefix}. |

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#bucket MskCluster#bucket}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#prefix MskCluster#prefix}.

---

### MskClusterOpenMonitoring <a name="MskClusterOpenMonitoring" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterOpenMonitoring: mskCluster.MskClusterOpenMonitoring = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring.property.prometheus">prometheus</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#prometheus MskCluster#prometheus}. |

---

##### `prometheus`<sup>Optional</sup> <a name="prometheus" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring.property.prometheus"></a>

```typescript
public readonly prometheus: MskClusterOpenMonitoringPrometheus;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#prometheus MskCluster#prometheus}.

---

### MskClusterOpenMonitoringPrometheus <a name="MskClusterOpenMonitoringPrometheus" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterOpenMonitoringPrometheus: mskCluster.MskClusterOpenMonitoringPrometheus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus.property.jmxExporter">jmxExporter</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#jmx_exporter MskCluster#jmx_exporter}. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus.property.nodeExporter">nodeExporter</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#node_exporter MskCluster#node_exporter}. |

---

##### `jmxExporter`<sup>Optional</sup> <a name="jmxExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus.property.jmxExporter"></a>

```typescript
public readonly jmxExporter: MskClusterOpenMonitoringPrometheusJmxExporter;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#jmx_exporter MskCluster#jmx_exporter}.

---

##### `nodeExporter`<sup>Optional</sup> <a name="nodeExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus.property.nodeExporter"></a>

```typescript
public readonly nodeExporter: MskClusterOpenMonitoringPrometheusNodeExporter;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#node_exporter MskCluster#node_exporter}.

---

### MskClusterOpenMonitoringPrometheusJmxExporter <a name="MskClusterOpenMonitoringPrometheusJmxExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterOpenMonitoringPrometheusJmxExporter: mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.property.enabledInBroker">enabledInBroker</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}. |

---

##### `enabledInBroker`<sup>Optional</sup> <a name="enabledInBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter.property.enabledInBroker"></a>

```typescript
public readonly enabledInBroker: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}.

---

### MskClusterOpenMonitoringPrometheusNodeExporter <a name="MskClusterOpenMonitoringPrometheusNodeExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterOpenMonitoringPrometheusNodeExporter: mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.property.enabledInBroker">enabledInBroker</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}. |

---

##### `enabledInBroker`<sup>Optional</sup> <a name="enabledInBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter.property.enabledInBroker"></a>

```typescript
public readonly enabledInBroker: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled_in_broker MskCluster#enabled_in_broker}.

---

### MskClusterRebalancing <a name="MskClusterRebalancing" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancing.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterRebalancing: mskCluster.MskClusterRebalancing = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#status MskCluster#status}. |

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancing.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#status MskCluster#status}.

---

### MskClusterZookeeperAccess <a name="MskClusterZookeeperAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

const mskClusterZookeeperAccess: mskCluster.MskClusterZookeeperAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/msk_cluster#enabled MskCluster#enabled}.

---

## Classes <a name="Classes" id="Classes"></a>

### MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess">putPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putVpcConnectivity">putVpcConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetNetworkType">resetNetworkType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetPublicAccess">resetPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetVpcConnectivity">resetVpcConnectivity</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPublicAccess` <a name="putPublicAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess"></a>

```typescript
public putPublicAccess(value: MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putPublicAccess.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---

##### `putVpcConnectivity` <a name="putVpcConnectivity" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putVpcConnectivity"></a>

```typescript
public putVpcConnectivity(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.putVpcConnectivity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a>

---

##### `resetNetworkType` <a name="resetNetworkType" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetNetworkType"></a>

```typescript
public resetNetworkType(): void
```

##### `resetPublicAccess` <a name="resetPublicAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetPublicAccess"></a>

```typescript
public resetPublicAccess(): void
```

##### `resetVpcConnectivity` <a name="resetVpcConnectivity" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.resetVpcConnectivity"></a>

```typescript
public resetVpcConnectivity(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess">publicAccess</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.vpcConnectivity">vpcConnectivity</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.networkTypeInput">networkTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccessInput">publicAccessInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.vpcConnectivityInput">vpcConnectivityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `publicAccess`<sup>Required</sup> <a name="publicAccess" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccess"></a>

```typescript
public readonly publicAccess: MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference</a>

---

##### `vpcConnectivity`<sup>Required</sup> <a name="vpcConnectivity" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.vpcConnectivity"></a>

```typescript
public readonly vpcConnectivity: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference</a>

---

##### `networkTypeInput`<sup>Optional</sup> <a name="networkTypeInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.networkTypeInput"></a>

```typescript
public readonly networkTypeInput: string;
```

- *Type:* string

---

##### `publicAccessInput`<sup>Optional</sup> <a name="publicAccessInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.publicAccessInput"></a>

```typescript
public readonly publicAccessInput: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---

##### `vpcConnectivityInput`<sup>Optional</sup> <a name="vpcConnectivityInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.vpcConnectivityInput"></a>

```typescript
public readonly vpcConnectivityInput: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a>

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess">MskClusterBrokerNodeGroupInfoConnectivityInfoPublicAccess</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.putSasl">putSasl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.putTls">putTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resetSasl">resetSasl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resetTls">resetTls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSasl` <a name="putSasl" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.putSasl"></a>

```typescript
public putSasl(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.putSasl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a>

---

##### `putTls` <a name="putTls" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.putTls"></a>

```typescript
public putTls(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a>

---

##### `resetSasl` <a name="resetSasl" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resetSasl"></a>

```typescript
public resetSasl(): void
```

##### `resetTls` <a name="resetTls" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.sasl">sasl</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.saslInput">saslInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.tlsInput">tlsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sasl`<sup>Required</sup> <a name="sasl" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.sasl"></a>

```typescript
public readonly sasl: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.tls"></a>

```typescript
public readonly tls: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference</a>

---

##### `saslInput`<sup>Optional</sup> <a name="saslInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.saslInput"></a>

```typescript
public readonly saslInput: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.putIam">putIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.putScram">putScram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resetIam">resetIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resetScram">resetScram</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIam` <a name="putIam" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.putIam"></a>

```typescript
public putIam(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.putIam.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a>

---

##### `putScram` <a name="putScram" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.putScram"></a>

```typescript
public putScram(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.putScram.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a>

---

##### `resetIam` <a name="resetIam" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resetIam"></a>

```typescript
public resetIam(): void
```

##### `resetScram` <a name="resetScram" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.resetScram"></a>

```typescript
public resetScram(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.iam">iam</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.scram">scram</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.iamInput">iamInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.scramInput">scramInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.iam"></a>

```typescript
public readonly iam: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIamOutputReference</a>

---

##### `scram`<sup>Required</sup> <a name="scram" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.scram"></a>

```typescript
public readonly scram: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference</a>

---

##### `iamInput`<sup>Optional</sup> <a name="iamInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.iamInput"></a>

```typescript
public readonly iamInput: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslIam</a>

---

##### `scramInput`<sup>Optional</sup> <a name="scramInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.scramInput"></a>

```typescript
public readonly scramInput: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSasl</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScramOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationSaslScram</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationTls</a>

---


### MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference <a name="MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.putClientAuthentication">putClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resetClientAuthentication">resetClientAuthentication</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientAuthentication` <a name="putClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.putClientAuthentication"></a>

```typescript
public putClientAuthentication(value: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.putClientAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a>

---

##### `resetClientAuthentication` <a name="resetClientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.resetClientAuthentication"></a>

```typescript
public resetClientAuthentication(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.clientAuthentication">clientAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.clientAuthenticationInput">clientAuthenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientAuthentication`<sup>Required</sup> <a name="clientAuthentication" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.clientAuthentication"></a>

```typescript
public readonly clientAuthentication: MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthenticationOutputReference</a>

---

##### `clientAuthenticationInput`<sup>Optional</sup> <a name="clientAuthenticationInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.clientAuthenticationInput"></a>

```typescript
public readonly clientAuthenticationInput: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityClientAuthentication</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity">MskClusterBrokerNodeGroupInfoConnectivityInfoVpcConnectivity</a>

---


### MskClusterBrokerNodeGroupInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterBrokerNodeGroupInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo">putConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo">putStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetBrokerAzDistribution">resetBrokerAzDistribution</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetConnectivityInfo">resetConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetSecurityGroups">resetSecurityGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetStorageInfo">resetStorageInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectivityInfo` <a name="putConnectivityInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo"></a>

```typescript
public putConnectivityInfo(value: MskClusterBrokerNodeGroupInfoConnectivityInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putConnectivityInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---

##### `putStorageInfo` <a name="putStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo"></a>

```typescript
public putStorageInfo(value: MskClusterBrokerNodeGroupInfoStorageInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.putStorageInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---

##### `resetBrokerAzDistribution` <a name="resetBrokerAzDistribution" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetBrokerAzDistribution"></a>

```typescript
public resetBrokerAzDistribution(): void
```

##### `resetConnectivityInfo` <a name="resetConnectivityInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetConnectivityInfo"></a>

```typescript
public resetConnectivityInfo(): void
```

##### `resetSecurityGroups` <a name="resetSecurityGroups" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetSecurityGroups"></a>

```typescript
public resetSecurityGroups(): void
```

##### `resetStorageInfo` <a name="resetStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.resetStorageInfo"></a>

```typescript
public resetStorageInfo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo">connectivityInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo">storageInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.brokerAzDistributionInput">brokerAzDistributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnetsInput">clientSubnetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfoInput">connectivityInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceTypeInput">instanceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroupsInput">securityGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfoInput">storageInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.brokerAzDistribution">brokerAzDistribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets">clientSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceType">instanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups">securityGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectivityInfo`<sup>Required</sup> <a name="connectivityInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfo"></a>

```typescript
public readonly connectivityInfo: MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference">MskClusterBrokerNodeGroupInfoConnectivityInfoOutputReference</a>

---

##### `storageInfo`<sup>Required</sup> <a name="storageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfo"></a>

```typescript
public readonly storageInfo: MskClusterBrokerNodeGroupInfoStorageInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoOutputReference</a>

---

##### `brokerAzDistributionInput`<sup>Optional</sup> <a name="brokerAzDistributionInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.brokerAzDistributionInput"></a>

```typescript
public readonly brokerAzDistributionInput: string;
```

- *Type:* string

---

##### `clientSubnetsInput`<sup>Optional</sup> <a name="clientSubnetsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnetsInput"></a>

```typescript
public readonly clientSubnetsInput: string[];
```

- *Type:* string[]

---

##### `connectivityInfoInput`<sup>Optional</sup> <a name="connectivityInfoInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.connectivityInfoInput"></a>

```typescript
public readonly connectivityInfoInput: IResolvable | MskClusterBrokerNodeGroupInfoConnectivityInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoConnectivityInfo">MskClusterBrokerNodeGroupInfoConnectivityInfo</a>

---

##### `instanceTypeInput`<sup>Optional</sup> <a name="instanceTypeInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceTypeInput"></a>

```typescript
public readonly instanceTypeInput: string;
```

- *Type:* string

---

##### `securityGroupsInput`<sup>Optional</sup> <a name="securityGroupsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroupsInput"></a>

```typescript
public readonly securityGroupsInput: string[];
```

- *Type:* string[]

---

##### `storageInfoInput`<sup>Optional</sup> <a name="storageInfoInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.storageInfoInput"></a>

```typescript
public readonly storageInfoInput: IResolvable | MskClusterBrokerNodeGroupInfoStorageInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---

##### `brokerAzDistribution`<sup>Required</sup> <a name="brokerAzDistribution" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.brokerAzDistribution"></a>

```typescript
public readonly brokerAzDistribution: string;
```

- *Type:* string

---

##### `clientSubnets`<sup>Required</sup> <a name="clientSubnets" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.clientSubnets"></a>

```typescript
public readonly clientSubnets: string[];
```

- *Type:* string[]

---

##### `instanceType`<sup>Required</sup> <a name="instanceType" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.instanceType"></a>

```typescript
public readonly instanceType: string;
```

- *Type:* string

---

##### `securityGroups`<sup>Required</sup> <a name="securityGroups" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.securityGroups"></a>

```typescript
public readonly securityGroups: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterBrokerNodeGroupInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfo">MskClusterBrokerNodeGroupInfo</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput">putProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetProvisionedThroughput">resetProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetVolumeSize">resetVolumeSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putProvisionedThroughput` <a name="putProvisionedThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput"></a>

```typescript
public putProvisionedThroughput(value: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.putProvisionedThroughput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---

##### `resetProvisionedThroughput` <a name="resetProvisionedThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetProvisionedThroughput"></a>

```typescript
public resetProvisionedThroughput(): void
```

##### `resetVolumeSize` <a name="resetVolumeSize" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.resetVolumeSize"></a>

```typescript
public resetVolumeSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput">provisionedThroughput</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughputInput">provisionedThroughputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSizeInput">volumeSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize">volumeSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `provisionedThroughput`<sup>Required</sup> <a name="provisionedThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughput"></a>

```typescript
public readonly provisionedThroughput: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference</a>

---

##### `provisionedThroughputInput`<sup>Optional</sup> <a name="provisionedThroughputInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.provisionedThroughputInput"></a>

```typescript
public readonly provisionedThroughputInput: IResolvable | MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---

##### `volumeSizeInput`<sup>Optional</sup> <a name="volumeSizeInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSizeInput"></a>

```typescript
public readonly volumeSizeInput: number;
```

- *Type:* number

---

##### `volumeSize`<sup>Required</sup> <a name="volumeSize" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.volumeSize"></a>

```typescript
public readonly volumeSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetVolumeThroughput">resetVolumeThroughput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetVolumeThroughput` <a name="resetVolumeThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.resetVolumeThroughput"></a>

```typescript
public resetVolumeThroughput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughputInput">volumeThroughputInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput">volumeThroughput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `volumeThroughputInput`<sup>Optional</sup> <a name="volumeThroughputInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughputInput"></a>

```typescript
public readonly volumeThroughputInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `volumeThroughput`<sup>Required</sup> <a name="volumeThroughput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.volumeThroughput"></a>

```typescript
public readonly volumeThroughput: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoProvisionedThroughput</a>

---


### MskClusterBrokerNodeGroupInfoStorageInfoOutputReference <a name="MskClusterBrokerNodeGroupInfoStorageInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo">putEbsStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resetEbsStorageInfo">resetEbsStorageInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEbsStorageInfo` <a name="putEbsStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo"></a>

```typescript
public putEbsStorageInfo(value: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.putEbsStorageInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---

##### `resetEbsStorageInfo` <a name="resetEbsStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.resetEbsStorageInfo"></a>

```typescript
public resetEbsStorageInfo(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo">ebsStorageInfo</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfoInput">ebsStorageInfoInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ebsStorageInfo`<sup>Required</sup> <a name="ebsStorageInfo" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfo"></a>

```typescript
public readonly ebsStorageInfo: MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfoOutputReference</a>

---

##### `ebsStorageInfoInput`<sup>Optional</sup> <a name="ebsStorageInfoInput" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.ebsStorageInfoInput"></a>

```typescript
public readonly ebsStorageInfoInput: IResolvable | MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfoEbsStorageInfo</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterBrokerNodeGroupInfoStorageInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterBrokerNodeGroupInfoStorageInfo">MskClusterBrokerNodeGroupInfoStorageInfo</a>

---


### MskClusterClientAuthenticationOutputReference <a name="MskClusterClientAuthenticationOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterClientAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl">putSasl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putTls">putTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putUnauthenticated">putUnauthenticated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resetSasl">resetSasl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resetTls">resetTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resetUnauthenticated">resetUnauthenticated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSasl` <a name="putSasl" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl"></a>

```typescript
public putSasl(value: MskClusterClientAuthenticationSasl): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putSasl.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---

##### `putTls` <a name="putTls" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putTls"></a>

```typescript
public putTls(value: MskClusterClientAuthenticationTls): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putTls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---

##### `putUnauthenticated` <a name="putUnauthenticated" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putUnauthenticated"></a>

```typescript
public putUnauthenticated(value: MskClusterClientAuthenticationUnauthenticated): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.putUnauthenticated.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a>

---

##### `resetSasl` <a name="resetSasl" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resetSasl"></a>

```typescript
public resetSasl(): void
```

##### `resetTls` <a name="resetTls" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resetTls"></a>

```typescript
public resetTls(): void
```

##### `resetUnauthenticated` <a name="resetUnauthenticated" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.resetUnauthenticated"></a>

```typescript
public resetUnauthenticated(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.sasl">sasl</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference">MskClusterClientAuthenticationSaslOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference">MskClusterClientAuthenticationTlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticated">unauthenticated</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference">MskClusterClientAuthenticationUnauthenticatedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.saslInput">saslInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.tlsInput">tlsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticatedInput">unauthenticatedInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sasl`<sup>Required</sup> <a name="sasl" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.sasl"></a>

```typescript
public readonly sasl: MskClusterClientAuthenticationSaslOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference">MskClusterClientAuthenticationSaslOutputReference</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.tls"></a>

```typescript
public readonly tls: MskClusterClientAuthenticationTlsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference">MskClusterClientAuthenticationTlsOutputReference</a>

---

##### `unauthenticated`<sup>Required</sup> <a name="unauthenticated" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticated"></a>

```typescript
public readonly unauthenticated: MskClusterClientAuthenticationUnauthenticatedOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference">MskClusterClientAuthenticationUnauthenticatedOutputReference</a>

---

##### `saslInput`<sup>Optional</sup> <a name="saslInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.saslInput"></a>

```typescript
public readonly saslInput: IResolvable | MskClusterClientAuthenticationSasl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.tlsInput"></a>

```typescript
public readonly tlsInput: IResolvable | MskClusterClientAuthenticationTls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---

##### `unauthenticatedInput`<sup>Optional</sup> <a name="unauthenticatedInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.unauthenticatedInput"></a>

```typescript
public readonly unauthenticatedInput: IResolvable | MskClusterClientAuthenticationUnauthenticated;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterClientAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthentication">MskClusterClientAuthentication</a>

---


### MskClusterClientAuthenticationSaslIamOutputReference <a name="MskClusterClientAuthenticationSaslIamOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterClientAuthenticationSaslIamOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterClientAuthenticationSaslIam;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a>

---


### MskClusterClientAuthenticationSaslOutputReference <a name="MskClusterClientAuthenticationSaslOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterClientAuthenticationSaslOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.putIam">putIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.putScram">putScram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetIam">resetIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetScram">resetScram</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIam` <a name="putIam" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.putIam"></a>

```typescript
public putIam(value: MskClusterClientAuthenticationSaslIam): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.putIam.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a>

---

##### `putScram` <a name="putScram" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.putScram"></a>

```typescript
public putScram(value: MskClusterClientAuthenticationSaslScram): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.putScram.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a>

---

##### `resetIam` <a name="resetIam" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetIam"></a>

```typescript
public resetIam(): void
```

##### `resetScram` <a name="resetScram" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.resetScram"></a>

```typescript
public resetScram(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iam">iam</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference">MskClusterClientAuthenticationSaslIamOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scram">scram</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference">MskClusterClientAuthenticationSaslScramOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iamInput">iamInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scramInput">scramInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iam`<sup>Required</sup> <a name="iam" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iam"></a>

```typescript
public readonly iam: MskClusterClientAuthenticationSaslIamOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIamOutputReference">MskClusterClientAuthenticationSaslIamOutputReference</a>

---

##### `scram`<sup>Required</sup> <a name="scram" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scram"></a>

```typescript
public readonly scram: MskClusterClientAuthenticationSaslScramOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference">MskClusterClientAuthenticationSaslScramOutputReference</a>

---

##### `iamInput`<sup>Optional</sup> <a name="iamInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.iamInput"></a>

```typescript
public readonly iamInput: IResolvable | MskClusterClientAuthenticationSaslIam;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslIam">MskClusterClientAuthenticationSaslIam</a>

---

##### `scramInput`<sup>Optional</sup> <a name="scramInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.scramInput"></a>

```typescript
public readonly scramInput: IResolvable | MskClusterClientAuthenticationSaslScram;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterClientAuthenticationSasl;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSasl">MskClusterClientAuthenticationSasl</a>

---


### MskClusterClientAuthenticationSaslScramOutputReference <a name="MskClusterClientAuthenticationSaslScramOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterClientAuthenticationSaslScramOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScramOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterClientAuthenticationSaslScram;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationSaslScram">MskClusterClientAuthenticationSaslScram</a>

---


### MskClusterClientAuthenticationTlsOutputReference <a name="MskClusterClientAuthenticationTlsOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterClientAuthenticationTlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetCertificateAuthorityArnList">resetCertificateAuthorityArnList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateAuthorityArnList` <a name="resetCertificateAuthorityArnList" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetCertificateAuthorityArnList"></a>

```typescript
public resetCertificateAuthorityArnList(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnListInput">certificateAuthorityArnListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnList">certificateAuthorityArnList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateAuthorityArnListInput`<sup>Optional</sup> <a name="certificateAuthorityArnListInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnListInput"></a>

```typescript
public readonly certificateAuthorityArnListInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `certificateAuthorityArnList`<sup>Required</sup> <a name="certificateAuthorityArnList" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.certificateAuthorityArnList"></a>

```typescript
public readonly certificateAuthorityArnList: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterClientAuthenticationTls;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationTls">MskClusterClientAuthenticationTls</a>

---


### MskClusterClientAuthenticationUnauthenticatedOutputReference <a name="MskClusterClientAuthenticationUnauthenticatedOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticatedOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterClientAuthenticationUnauthenticated;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterClientAuthenticationUnauthenticated">MskClusterClientAuthenticationUnauthenticated</a>

---


### MskClusterConfigurationInfoOutputReference <a name="MskClusterConfigurationInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterConfigurationInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resetRevision">resetRevision</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetRevision` <a name="resetRevision" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.resetRevision"></a>

```typescript
public resetRevision(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.revisionInput">revisionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.revision">revision</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: number;
```

- *Type:* number

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.revision"></a>

```typescript
public readonly revision: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterConfigurationInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterConfigurationInfo">MskClusterConfigurationInfo</a>

---


### MskClusterEncryptionInfoEncryptionAtRestOutputReference <a name="MskClusterEncryptionInfoEncryptionAtRestOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.resetDataVolumeKmsKeyId">resetDataVolumeKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataVolumeKmsKeyId` <a name="resetDataVolumeKmsKeyId" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.resetDataVolumeKmsKeyId"></a>

```typescript
public resetDataVolumeKmsKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.dataVolumeKmsKeyIdInput">dataVolumeKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.dataVolumeKmsKeyId">dataVolumeKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataVolumeKmsKeyIdInput`<sup>Optional</sup> <a name="dataVolumeKmsKeyIdInput" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.dataVolumeKmsKeyIdInput"></a>

```typescript
public readonly dataVolumeKmsKeyIdInput: string;
```

- *Type:* string

---

##### `dataVolumeKmsKeyId`<sup>Required</sup> <a name="dataVolumeKmsKeyId" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.dataVolumeKmsKeyId"></a>

```typescript
public readonly dataVolumeKmsKeyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterEncryptionInfoEncryptionAtRest;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a>

---


### MskClusterEncryptionInfoEncryptionInTransitOutputReference <a name="MskClusterEncryptionInfoEncryptionInTransitOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetClientBroker">resetClientBroker</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetInCluster">resetInCluster</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientBroker` <a name="resetClientBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetClientBroker"></a>

```typescript
public resetClientBroker(): void
```

##### `resetInCluster` <a name="resetInCluster" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.resetInCluster"></a>

```typescript
public resetInCluster(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBrokerInput">clientBrokerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inClusterInput">inClusterInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBroker">clientBroker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inCluster">inCluster</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientBrokerInput`<sup>Optional</sup> <a name="clientBrokerInput" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBrokerInput"></a>

```typescript
public readonly clientBrokerInput: string;
```

- *Type:* string

---

##### `inClusterInput`<sup>Optional</sup> <a name="inClusterInput" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inClusterInput"></a>

```typescript
public readonly inClusterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `clientBroker`<sup>Required</sup> <a name="clientBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.clientBroker"></a>

```typescript
public readonly clientBroker: string;
```

- *Type:* string

---

##### `inCluster`<sup>Required</sup> <a name="inCluster" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.inCluster"></a>

```typescript
public readonly inCluster: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterEncryptionInfoEncryptionInTransit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---


### MskClusterEncryptionInfoOutputReference <a name="MskClusterEncryptionInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterEncryptionInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionAtRest">putEncryptionAtRest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit">putEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionAtRest">resetEncryptionAtRest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionInTransit">resetEncryptionInTransit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionAtRest` <a name="putEncryptionAtRest" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionAtRest"></a>

```typescript
public putEncryptionAtRest(value: MskClusterEncryptionInfoEncryptionAtRest): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionAtRest.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a>

---

##### `putEncryptionInTransit` <a name="putEncryptionInTransit" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit"></a>

```typescript
public putEncryptionInTransit(value: MskClusterEncryptionInfoEncryptionInTransit): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.putEncryptionInTransit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---

##### `resetEncryptionAtRest` <a name="resetEncryptionAtRest" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionAtRest"></a>

```typescript
public resetEncryptionAtRest(): void
```

##### `resetEncryptionInTransit` <a name="resetEncryptionInTransit" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.resetEncryptionInTransit"></a>

```typescript
public resetEncryptionInTransit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRest">encryptionAtRest</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference">MskClusterEncryptionInfoEncryptionAtRestOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransit">encryptionInTransit</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference">MskClusterEncryptionInfoEncryptionInTransitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestInput">encryptionAtRestInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransitInput">encryptionInTransitInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionAtRest`<sup>Required</sup> <a name="encryptionAtRest" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRest"></a>

```typescript
public readonly encryptionAtRest: MskClusterEncryptionInfoEncryptionAtRestOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRestOutputReference">MskClusterEncryptionInfoEncryptionAtRestOutputReference</a>

---

##### `encryptionInTransit`<sup>Required</sup> <a name="encryptionInTransit" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransit"></a>

```typescript
public readonly encryptionInTransit: MskClusterEncryptionInfoEncryptionInTransitOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransitOutputReference">MskClusterEncryptionInfoEncryptionInTransitOutputReference</a>

---

##### `encryptionAtRestInput`<sup>Optional</sup> <a name="encryptionAtRestInput" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionAtRestInput"></a>

```typescript
public readonly encryptionAtRestInput: IResolvable | MskClusterEncryptionInfoEncryptionAtRest;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionAtRest">MskClusterEncryptionInfoEncryptionAtRest</a>

---

##### `encryptionInTransitInput`<sup>Optional</sup> <a name="encryptionInTransitInput" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.encryptionInTransitInput"></a>

```typescript
public readonly encryptionInTransitInput: IResolvable | MskClusterEncryptionInfoEncryptionInTransit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoEncryptionInTransit">MskClusterEncryptionInfoEncryptionInTransit</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterEncryptionInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterEncryptionInfo">MskClusterEncryptionInfo</a>

---


### MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference <a name="MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetLogGroup">resetLogGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetLogGroup` <a name="resetLogGroup" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.resetLogGroup"></a>

```typescript
public resetLogGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroupInput">logGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroupInput`<sup>Optional</sup> <a name="logGroupInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroupInput"></a>

```typescript
public readonly logGroupInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterLoggingInfoBrokerLogsCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---


### MskClusterLoggingInfoBrokerLogsFirehoseOutputReference <a name="MskClusterLoggingInfoBrokerLogsFirehoseOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetDeliveryStream">resetDeliveryStream</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeliveryStream` <a name="resetDeliveryStream" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetDeliveryStream"></a>

```typescript
public resetDeliveryStream(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStreamInput">deliveryStreamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStream">deliveryStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deliveryStreamInput`<sup>Optional</sup> <a name="deliveryStreamInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStreamInput"></a>

```typescript
public readonly deliveryStreamInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deliveryStream`<sup>Required</sup> <a name="deliveryStream" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.deliveryStream"></a>

```typescript
public readonly deliveryStream: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterLoggingInfoBrokerLogsFirehose;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---


### MskClusterLoggingInfoBrokerLogsOutputReference <a name="MskClusterLoggingInfoBrokerLogsOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose">putFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3">putS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetFirehose">resetFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetS3">resetS3</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: MskClusterLoggingInfoBrokerLogsCloudwatchLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---

##### `putFirehose` <a name="putFirehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose"></a>

```typescript
public putFirehose(value: MskClusterLoggingInfoBrokerLogsFirehose): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putFirehose.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---

##### `putS3` <a name="putS3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3"></a>

```typescript
public putS3(value: MskClusterLoggingInfoBrokerLogsS3): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.putS3.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetCloudwatchLogs"></a>

```typescript
public resetCloudwatchLogs(): void
```

##### `resetFirehose` <a name="resetFirehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetFirehose"></a>

```typescript
public resetFirehose(): void
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.resetS3"></a>

```typescript
public resetS3(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference">MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehose">firehose</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference">MskClusterLoggingInfoBrokerLogsFirehoseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3">s3</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference">MskClusterLoggingInfoBrokerLogsS3OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehoseInput">firehoseInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3Input">s3Input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference">MskClusterLoggingInfoBrokerLogsCloudwatchLogsOutputReference</a>

---

##### `firehose`<sup>Required</sup> <a name="firehose" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehose"></a>

```typescript
public readonly firehose: MskClusterLoggingInfoBrokerLogsFirehoseOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehoseOutputReference">MskClusterLoggingInfoBrokerLogsFirehoseOutputReference</a>

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3"></a>

```typescript
public readonly s3: MskClusterLoggingInfoBrokerLogsS3OutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference">MskClusterLoggingInfoBrokerLogsS3OutputReference</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: IResolvable | MskClusterLoggingInfoBrokerLogsCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsCloudwatchLogs">MskClusterLoggingInfoBrokerLogsCloudwatchLogs</a>

---

##### `firehoseInput`<sup>Optional</sup> <a name="firehoseInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.firehoseInput"></a>

```typescript
public readonly firehoseInput: IResolvable | MskClusterLoggingInfoBrokerLogsFirehose;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsFirehose">MskClusterLoggingInfoBrokerLogsFirehose</a>

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.s3Input"></a>

```typescript
public readonly s3Input: IResolvable | MskClusterLoggingInfoBrokerLogsS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterLoggingInfoBrokerLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---


### MskClusterLoggingInfoBrokerLogsS3OutputReference <a name="MskClusterLoggingInfoBrokerLogsS3OutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetBucket">resetBucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucket` <a name="resetBucket" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetBucket"></a>

```typescript
public resetBucket(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterLoggingInfoBrokerLogsS3;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsS3">MskClusterLoggingInfoBrokerLogsS3</a>

---


### MskClusterLoggingInfoOutputReference <a name="MskClusterLoggingInfoOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterLoggingInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs">putBrokerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.resetBrokerLogs">resetBrokerLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBrokerLogs` <a name="putBrokerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs"></a>

```typescript
public putBrokerLogs(value: MskClusterLoggingInfoBrokerLogs): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.putBrokerLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---

##### `resetBrokerLogs` <a name="resetBrokerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.resetBrokerLogs"></a>

```typescript
public resetBrokerLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogs">brokerLogs</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference">MskClusterLoggingInfoBrokerLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogsInput">brokerLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `brokerLogs`<sup>Required</sup> <a name="brokerLogs" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogs"></a>

```typescript
public readonly brokerLogs: MskClusterLoggingInfoBrokerLogsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogsOutputReference">MskClusterLoggingInfoBrokerLogsOutputReference</a>

---

##### `brokerLogsInput`<sup>Optional</sup> <a name="brokerLogsInput" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.brokerLogsInput"></a>

```typescript
public readonly brokerLogsInput: IResolvable | MskClusterLoggingInfoBrokerLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoBrokerLogs">MskClusterLoggingInfoBrokerLogs</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterLoggingInfo;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterLoggingInfo">MskClusterLoggingInfo</a>

---


### MskClusterOpenMonitoringOutputReference <a name="MskClusterOpenMonitoringOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterOpenMonitoringOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus">putPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.resetPrometheus">resetPrometheus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrometheus` <a name="putPrometheus" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus"></a>

```typescript
public putPrometheus(value: MskClusterOpenMonitoringPrometheus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.putPrometheus.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---

##### `resetPrometheus` <a name="resetPrometheus" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.resetPrometheus"></a>

```typescript
public resetPrometheus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheus">prometheus</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference">MskClusterOpenMonitoringPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheusInput">prometheusInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prometheus`<sup>Required</sup> <a name="prometheus" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheus"></a>

```typescript
public readonly prometheus: MskClusterOpenMonitoringPrometheusOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference">MskClusterOpenMonitoringPrometheusOutputReference</a>

---

##### `prometheusInput`<sup>Optional</sup> <a name="prometheusInput" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.prometheusInput"></a>

```typescript
public readonly prometheusInput: IResolvable | MskClusterOpenMonitoringPrometheus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterOpenMonitoring;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoring">MskClusterOpenMonitoring</a>

---


### MskClusterOpenMonitoringPrometheusJmxExporterOutputReference <a name="MskClusterOpenMonitoringPrometheusJmxExporterOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resetEnabledInBroker">resetEnabledInBroker</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabledInBroker` <a name="resetEnabledInBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.resetEnabledInBroker"></a>

```typescript
public resetEnabledInBroker(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBrokerInput">enabledInBrokerInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBroker">enabledInBroker</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInBrokerInput`<sup>Optional</sup> <a name="enabledInBrokerInput" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBrokerInput"></a>

```typescript
public readonly enabledInBrokerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabledInBroker`<sup>Required</sup> <a name="enabledInBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.enabledInBroker"></a>

```typescript
public readonly enabledInBroker: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterOpenMonitoringPrometheusJmxExporter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---


### MskClusterOpenMonitoringPrometheusNodeExporterOutputReference <a name="MskClusterOpenMonitoringPrometheusNodeExporterOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resetEnabledInBroker">resetEnabledInBroker</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabledInBroker` <a name="resetEnabledInBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.resetEnabledInBroker"></a>

```typescript
public resetEnabledInBroker(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBrokerInput">enabledInBrokerInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBroker">enabledInBroker</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInBrokerInput`<sup>Optional</sup> <a name="enabledInBrokerInput" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBrokerInput"></a>

```typescript
public readonly enabledInBrokerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabledInBroker`<sup>Required</sup> <a name="enabledInBroker" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.enabledInBroker"></a>

```typescript
public readonly enabledInBroker: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterOpenMonitoringPrometheusNodeExporter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---


### MskClusterOpenMonitoringPrometheusOutputReference <a name="MskClusterOpenMonitoringPrometheusOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterOpenMonitoringPrometheusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter">putJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter">putNodeExporter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetJmxExporter">resetJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetNodeExporter">resetNodeExporter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJmxExporter` <a name="putJmxExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter"></a>

```typescript
public putJmxExporter(value: MskClusterOpenMonitoringPrometheusJmxExporter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putJmxExporter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---

##### `putNodeExporter` <a name="putNodeExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter"></a>

```typescript
public putNodeExporter(value: MskClusterOpenMonitoringPrometheusNodeExporter): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.putNodeExporter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---

##### `resetJmxExporter` <a name="resetJmxExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetJmxExporter"></a>

```typescript
public resetJmxExporter(): void
```

##### `resetNodeExporter` <a name="resetNodeExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.resetNodeExporter"></a>

```typescript
public resetNodeExporter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporter">jmxExporter</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference">MskClusterOpenMonitoringPrometheusJmxExporterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporter">nodeExporter</a></code> | <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference">MskClusterOpenMonitoringPrometheusNodeExporterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporterInput">jmxExporterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporterInput">nodeExporterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jmxExporter`<sup>Required</sup> <a name="jmxExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporter"></a>

```typescript
public readonly jmxExporter: MskClusterOpenMonitoringPrometheusJmxExporterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporterOutputReference">MskClusterOpenMonitoringPrometheusJmxExporterOutputReference</a>

---

##### `nodeExporter`<sup>Required</sup> <a name="nodeExporter" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporter"></a>

```typescript
public readonly nodeExporter: MskClusterOpenMonitoringPrometheusNodeExporterOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporterOutputReference">MskClusterOpenMonitoringPrometheusNodeExporterOutputReference</a>

---

##### `jmxExporterInput`<sup>Optional</sup> <a name="jmxExporterInput" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.jmxExporterInput"></a>

```typescript
public readonly jmxExporterInput: IResolvable | MskClusterOpenMonitoringPrometheusJmxExporter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusJmxExporter">MskClusterOpenMonitoringPrometheusJmxExporter</a>

---

##### `nodeExporterInput`<sup>Optional</sup> <a name="nodeExporterInput" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.nodeExporterInput"></a>

```typescript
public readonly nodeExporterInput: IResolvable | MskClusterOpenMonitoringPrometheusNodeExporter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusNodeExporter">MskClusterOpenMonitoringPrometheusNodeExporter</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterOpenMonitoringPrometheus;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterOpenMonitoringPrometheus">MskClusterOpenMonitoringPrometheus</a>

---


### MskClusterRebalancingOutputReference <a name="MskClusterRebalancingOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterRebalancingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterRebalancingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterRebalancing;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterRebalancing">MskClusterRebalancing</a>

---


### MskClusterZookeeperAccessOutputReference <a name="MskClusterZookeeperAccessOutputReference" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.Initializer"></a>

```typescript
import { mskCluster } from '@cdktn/provider-awscc'

new mskCluster.MskClusterZookeeperAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MskClusterZookeeperAccess;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mskCluster.MskClusterZookeeperAccess">MskClusterZookeeperAccess</a>

---



