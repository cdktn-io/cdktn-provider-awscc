# `dmsEndpoint` Submodule <a name="`dmsEndpoint` Submodule" id="@cdktn/provider-awscc.dmsEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsEndpoint <a name="DmsEndpoint" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint awscc_dms_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpoint(scope: Construct, id: string, config: DmsEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig">DmsEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig">DmsEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDocDbSettings">putDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDynamoDbSettings">putDynamoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putElasticsearchSettings">putElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putGcpMySqlSettings">putGcpMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putIbmDb2Settings">putIbmDb2Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKafkaSettings">putKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKinesisSettings">putKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMicrosoftSqlServerSettings">putMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMongoDbSettings">putMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMySqlSettings">putMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putNeptuneSettings">putNeptuneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putOracleSettings">putOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putPostgreSqlSettings">putPostgreSqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedisSettings">putRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedshiftSettings">putRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putS3Settings">putS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putSybaseSettings">putSybaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDocDbSettings">resetDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDynamoDbSettings">resetDynamoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings">resetElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetEndpointIdentifier">resetEndpointIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes">resetExtraConnectionAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetGcpMySqlSettings">resetGcpMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetIbmDb2Settings">resetIbmDb2Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKafkaSettings">resetKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKinesisSettings">resetKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMicrosoftSqlServerSettings">resetMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMongoDbSettings">resetMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMySqlSettings">resetMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetNeptuneSettings">resetNeptuneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOracleSettings">resetOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPostgreSqlSettings">resetPostgreSqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedisSettings">resetRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedshiftSettings">resetRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetResourceIdentifier">resetResourceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetS3Settings">resetS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSslMode">resetSslMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSybaseSettings">resetSybaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDocDbSettings` <a name="putDocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDocDbSettings"></a>

```typescript
public putDocDbSettings(value: DmsEndpointDocDbSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDocDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

---

##### `putDynamoDbSettings` <a name="putDynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDynamoDbSettings"></a>

```typescript
public putDynamoDbSettings(value: DmsEndpointDynamoDbSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putDynamoDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

---

##### `putElasticsearchSettings` <a name="putElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putElasticsearchSettings"></a>

```typescript
public putElasticsearchSettings(value: DmsEndpointElasticsearchSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putElasticsearchSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `putGcpMySqlSettings` <a name="putGcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putGcpMySqlSettings"></a>

```typescript
public putGcpMySqlSettings(value: DmsEndpointGcpMySqlSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putGcpMySqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

---

##### `putIbmDb2Settings` <a name="putIbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putIbmDb2Settings"></a>

```typescript
public putIbmDb2Settings(value: DmsEndpointIbmDb2Settings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putIbmDb2Settings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

---

##### `putKafkaSettings` <a name="putKafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKafkaSettings"></a>

```typescript
public putKafkaSettings(value: DmsEndpointKafkaSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKafkaSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `putKinesisSettings` <a name="putKinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKinesisSettings"></a>

```typescript
public putKinesisSettings(value: DmsEndpointKinesisSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putKinesisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `putMicrosoftSqlServerSettings` <a name="putMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMicrosoftSqlServerSettings"></a>

```typescript
public putMicrosoftSqlServerSettings(value: DmsEndpointMicrosoftSqlServerSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMicrosoftSqlServerSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

---

##### `putMongoDbSettings` <a name="putMongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMongoDbSettings"></a>

```typescript
public putMongoDbSettings(value: DmsEndpointMongoDbSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMongoDbSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

---

##### `putMySqlSettings` <a name="putMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMySqlSettings"></a>

```typescript
public putMySqlSettings(value: DmsEndpointMySqlSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putMySqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

---

##### `putNeptuneSettings` <a name="putNeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putNeptuneSettings"></a>

```typescript
public putNeptuneSettings(value: DmsEndpointNeptuneSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putNeptuneSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

---

##### `putOracleSettings` <a name="putOracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putOracleSettings"></a>

```typescript
public putOracleSettings(value: DmsEndpointOracleSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putOracleSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---

##### `putPostgreSqlSettings` <a name="putPostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putPostgreSqlSettings"></a>

```typescript
public putPostgreSqlSettings(value: DmsEndpointPostgreSqlSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putPostgreSqlSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

---

##### `putRedisSettings` <a name="putRedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedisSettings"></a>

```typescript
public putRedisSettings(value: DmsEndpointRedisSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedisSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `putRedshiftSettings` <a name="putRedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedshiftSettings"></a>

```typescript
public putRedshiftSettings(value: DmsEndpointRedshiftSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putRedshiftSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `putS3Settings` <a name="putS3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putS3Settings"></a>

```typescript
public putS3Settings(value: DmsEndpointS3Settings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putS3Settings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `putSybaseSettings` <a name="putSybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putSybaseSettings"></a>

```typescript
public putSybaseSettings(value: DmsEndpointSybaseSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putSybaseSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putTags"></a>

```typescript
public putTags(value: IResolvable | DmsEndpointTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]

---

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetDocDbSettings` <a name="resetDocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDocDbSettings"></a>

```typescript
public resetDocDbSettings(): void
```

##### `resetDynamoDbSettings` <a name="resetDynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetDynamoDbSettings"></a>

```typescript
public resetDynamoDbSettings(): void
```

##### `resetElasticsearchSettings` <a name="resetElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetElasticsearchSettings"></a>

```typescript
public resetElasticsearchSettings(): void
```

##### `resetEndpointIdentifier` <a name="resetEndpointIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetEndpointIdentifier"></a>

```typescript
public resetEndpointIdentifier(): void
```

##### `resetExtraConnectionAttributes` <a name="resetExtraConnectionAttributes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetExtraConnectionAttributes"></a>

```typescript
public resetExtraConnectionAttributes(): void
```

##### `resetGcpMySqlSettings` <a name="resetGcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetGcpMySqlSettings"></a>

```typescript
public resetGcpMySqlSettings(): void
```

##### `resetIbmDb2Settings` <a name="resetIbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetIbmDb2Settings"></a>

```typescript
public resetIbmDb2Settings(): void
```

##### `resetKafkaSettings` <a name="resetKafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKafkaSettings"></a>

```typescript
public resetKafkaSettings(): void
```

##### `resetKinesisSettings` <a name="resetKinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKinesisSettings"></a>

```typescript
public resetKinesisSettings(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetMicrosoftSqlServerSettings` <a name="resetMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMicrosoftSqlServerSettings"></a>

```typescript
public resetMicrosoftSqlServerSettings(): void
```

##### `resetMongoDbSettings` <a name="resetMongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMongoDbSettings"></a>

```typescript
public resetMongoDbSettings(): void
```

##### `resetMySqlSettings` <a name="resetMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetMySqlSettings"></a>

```typescript
public resetMySqlSettings(): void
```

##### `resetNeptuneSettings` <a name="resetNeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetNeptuneSettings"></a>

```typescript
public resetNeptuneSettings(): void
```

##### `resetOracleSettings` <a name="resetOracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetOracleSettings"></a>

```typescript
public resetOracleSettings(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPostgreSqlSettings` <a name="resetPostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetPostgreSqlSettings"></a>

```typescript
public resetPostgreSqlSettings(): void
```

##### `resetRedisSettings` <a name="resetRedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedisSettings"></a>

```typescript
public resetRedisSettings(): void
```

##### `resetRedshiftSettings` <a name="resetRedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetRedshiftSettings"></a>

```typescript
public resetRedshiftSettings(): void
```

##### `resetResourceIdentifier` <a name="resetResourceIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetResourceIdentifier"></a>

```typescript
public resetResourceIdentifier(): void
```

##### `resetS3Settings` <a name="resetS3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetS3Settings"></a>

```typescript
public resetS3Settings(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetSslMode` <a name="resetSslMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSslMode"></a>

```typescript
public resetSslMode(): void
```

##### `resetSybaseSettings` <a name="resetSybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetSybaseSettings"></a>

```typescript
public resetSybaseSettings(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.resetUsername"></a>

```typescript
public resetUsername(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isConstruct"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

dmsEndpoint.DmsEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformElement"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

dmsEndpoint.DmsEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformResource"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

dmsEndpoint.DmsEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

dmsEndpoint.DmsEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DmsEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettings">docDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference">DmsEndpointDocDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettings">dynamoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference">DmsEndpointDynamoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointArn">endpointArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettings">gcpMySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference">DmsEndpointGcpMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2Settings">ibmDb2Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference">DmsEndpointIbmDb2SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference">DmsEndpointMicrosoftSqlServerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettings">mongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference">DmsEndpointMongoDbSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettings">mySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference">DmsEndpointMySqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettings">neptuneSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference">DmsEndpointNeptuneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettings">oracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference">DmsEndpointOracleSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettings">postgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference">DmsEndpointPostgreSqlSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettings">redisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3Settings">s3Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettings">sybaseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference">DmsEndpointSybaseSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList">DmsEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettingsInput">docDbSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettingsInput">dynamoDbSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput">elasticsearchSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifierInput">endpointIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointTypeInput">endpointTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineNameInput">engineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput">extraConnectionAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettingsInput">gcpMySqlSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2SettingsInput">ibmDb2SettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput">kafkaSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput">kinesisSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettingsInput">microsoftSqlServerSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettingsInput">mongoDbSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettingsInput">mySqlSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettingsInput">neptuneSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettingsInput">oracleSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettingsInput">postgreSqlSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettingsInput">redisSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput">redshiftSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifierInput">resourceIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3SettingsInput">s3SettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslModeInput">sslModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettingsInput">sybaseSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifier">endpointIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointType">endpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineName">engineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslMode">sslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.username">username</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `docDbSettings`<sup>Required</sup> <a name="docDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettings"></a>

```typescript
public readonly docDbSettings: DmsEndpointDocDbSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference">DmsEndpointDocDbSettingsOutputReference</a>

---

##### `dynamoDbSettings`<sup>Required</sup> <a name="dynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettings"></a>

```typescript
public readonly dynamoDbSettings: DmsEndpointDynamoDbSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference">DmsEndpointDynamoDbSettingsOutputReference</a>

---

##### `elasticsearchSettings`<sup>Required</sup> <a name="elasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettings"></a>

```typescript
public readonly elasticsearchSettings: DmsEndpointElasticsearchSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference">DmsEndpointElasticsearchSettingsOutputReference</a>

---

##### `endpointArn`<sup>Required</sup> <a name="endpointArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointArn"></a>

```typescript
public readonly endpointArn: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `gcpMySqlSettings`<sup>Required</sup> <a name="gcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettings"></a>

```typescript
public readonly gcpMySqlSettings: DmsEndpointGcpMySqlSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference">DmsEndpointGcpMySqlSettingsOutputReference</a>

---

##### `ibmDb2Settings`<sup>Required</sup> <a name="ibmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2Settings"></a>

```typescript
public readonly ibmDb2Settings: DmsEndpointIbmDb2SettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference">DmsEndpointIbmDb2SettingsOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kafkaSettings`<sup>Required</sup> <a name="kafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: DmsEndpointKafkaSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference">DmsEndpointKafkaSettingsOutputReference</a>

---

##### `kinesisSettings`<sup>Required</sup> <a name="kinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettings"></a>

```typescript
public readonly kinesisSettings: DmsEndpointKinesisSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference">DmsEndpointKinesisSettingsOutputReference</a>

---

##### `microsoftSqlServerSettings`<sup>Required</sup> <a name="microsoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettings"></a>

```typescript
public readonly microsoftSqlServerSettings: DmsEndpointMicrosoftSqlServerSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference">DmsEndpointMicrosoftSqlServerSettingsOutputReference</a>

---

##### `mongoDbSettings`<sup>Required</sup> <a name="mongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettings"></a>

```typescript
public readonly mongoDbSettings: DmsEndpointMongoDbSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference">DmsEndpointMongoDbSettingsOutputReference</a>

---

##### `mySqlSettings`<sup>Required</sup> <a name="mySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettings"></a>

```typescript
public readonly mySqlSettings: DmsEndpointMySqlSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference">DmsEndpointMySqlSettingsOutputReference</a>

---

##### `neptuneSettings`<sup>Required</sup> <a name="neptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettings"></a>

```typescript
public readonly neptuneSettings: DmsEndpointNeptuneSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference">DmsEndpointNeptuneSettingsOutputReference</a>

---

##### `oracleSettings`<sup>Required</sup> <a name="oracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettings"></a>

```typescript
public readonly oracleSettings: DmsEndpointOracleSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference">DmsEndpointOracleSettingsOutputReference</a>

---

##### `postgreSqlSettings`<sup>Required</sup> <a name="postgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettings"></a>

```typescript
public readonly postgreSqlSettings: DmsEndpointPostgreSqlSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference">DmsEndpointPostgreSqlSettingsOutputReference</a>

---

##### `redisSettings`<sup>Required</sup> <a name="redisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettings"></a>

```typescript
public readonly redisSettings: DmsEndpointRedisSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference">DmsEndpointRedisSettingsOutputReference</a>

---

##### `redshiftSettings`<sup>Required</sup> <a name="redshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettings"></a>

```typescript
public readonly redshiftSettings: DmsEndpointRedshiftSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference">DmsEndpointRedshiftSettingsOutputReference</a>

---

##### `s3Settings`<sup>Required</sup> <a name="s3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3Settings"></a>

```typescript
public readonly s3Settings: DmsEndpointS3SettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference">DmsEndpointS3SettingsOutputReference</a>

---

##### `sybaseSettings`<sup>Required</sup> <a name="sybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettings"></a>

```typescript
public readonly sybaseSettings: DmsEndpointSybaseSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference">DmsEndpointSybaseSettingsOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tags"></a>

```typescript
public readonly tags: DmsEndpointTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList">DmsEndpointTagsList</a>

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `docDbSettingsInput`<sup>Optional</sup> <a name="docDbSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.docDbSettingsInput"></a>

```typescript
public readonly docDbSettingsInput: IResolvable | DmsEndpointDocDbSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

---

##### `dynamoDbSettingsInput`<sup>Optional</sup> <a name="dynamoDbSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.dynamoDbSettingsInput"></a>

```typescript
public readonly dynamoDbSettingsInput: IResolvable | DmsEndpointDynamoDbSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

---

##### `elasticsearchSettingsInput`<sup>Optional</sup> <a name="elasticsearchSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.elasticsearchSettingsInput"></a>

```typescript
public readonly elasticsearchSettingsInput: IResolvable | DmsEndpointElasticsearchSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---

##### `endpointIdentifierInput`<sup>Optional</sup> <a name="endpointIdentifierInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifierInput"></a>

```typescript
public readonly endpointIdentifierInput: string;
```

- *Type:* string

---

##### `endpointTypeInput`<sup>Optional</sup> <a name="endpointTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointTypeInput"></a>

```typescript
public readonly endpointTypeInput: string;
```

- *Type:* string

---

##### `engineNameInput`<sup>Optional</sup> <a name="engineNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineNameInput"></a>

```typescript
public readonly engineNameInput: string;
```

- *Type:* string

---

##### `extraConnectionAttributesInput`<sup>Optional</sup> <a name="extraConnectionAttributesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributesInput"></a>

```typescript
public readonly extraConnectionAttributesInput: string;
```

- *Type:* string

---

##### `gcpMySqlSettingsInput`<sup>Optional</sup> <a name="gcpMySqlSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.gcpMySqlSettingsInput"></a>

```typescript
public readonly gcpMySqlSettingsInput: IResolvable | DmsEndpointGcpMySqlSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

---

##### `ibmDb2SettingsInput`<sup>Optional</sup> <a name="ibmDb2SettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.ibmDb2SettingsInput"></a>

```typescript
public readonly ibmDb2SettingsInput: IResolvable | DmsEndpointIbmDb2Settings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

---

##### `kafkaSettingsInput`<sup>Optional</sup> <a name="kafkaSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kafkaSettingsInput"></a>

```typescript
public readonly kafkaSettingsInput: IResolvable | DmsEndpointKafkaSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---

##### `kinesisSettingsInput`<sup>Optional</sup> <a name="kinesisSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kinesisSettingsInput"></a>

```typescript
public readonly kinesisSettingsInput: IResolvable | DmsEndpointKinesisSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `microsoftSqlServerSettingsInput`<sup>Optional</sup> <a name="microsoftSqlServerSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.microsoftSqlServerSettingsInput"></a>

```typescript
public readonly microsoftSqlServerSettingsInput: IResolvable | DmsEndpointMicrosoftSqlServerSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

---

##### `mongoDbSettingsInput`<sup>Optional</sup> <a name="mongoDbSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mongoDbSettingsInput"></a>

```typescript
public readonly mongoDbSettingsInput: IResolvable | DmsEndpointMongoDbSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

---

##### `mySqlSettingsInput`<sup>Optional</sup> <a name="mySqlSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.mySqlSettingsInput"></a>

```typescript
public readonly mySqlSettingsInput: IResolvable | DmsEndpointMySqlSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

---

##### `neptuneSettingsInput`<sup>Optional</sup> <a name="neptuneSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.neptuneSettingsInput"></a>

```typescript
public readonly neptuneSettingsInput: IResolvable | DmsEndpointNeptuneSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

---

##### `oracleSettingsInput`<sup>Optional</sup> <a name="oracleSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.oracleSettingsInput"></a>

```typescript
public readonly oracleSettingsInput: IResolvable | DmsEndpointOracleSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `postgreSqlSettingsInput`<sup>Optional</sup> <a name="postgreSqlSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.postgreSqlSettingsInput"></a>

```typescript
public readonly postgreSqlSettingsInput: IResolvable | DmsEndpointPostgreSqlSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

---

##### `redisSettingsInput`<sup>Optional</sup> <a name="redisSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redisSettingsInput"></a>

```typescript
public readonly redisSettingsInput: IResolvable | DmsEndpointRedisSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---

##### `redshiftSettingsInput`<sup>Optional</sup> <a name="redshiftSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.redshiftSettingsInput"></a>

```typescript
public readonly redshiftSettingsInput: IResolvable | DmsEndpointRedshiftSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---

##### `resourceIdentifierInput`<sup>Optional</sup> <a name="resourceIdentifierInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifierInput"></a>

```typescript
public readonly resourceIdentifierInput: string;
```

- *Type:* string

---

##### `s3SettingsInput`<sup>Optional</sup> <a name="s3SettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.s3SettingsInput"></a>

```typescript
public readonly s3SettingsInput: IResolvable | DmsEndpointS3Settings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sslModeInput`<sup>Optional</sup> <a name="sslModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslModeInput"></a>

```typescript
public readonly sslModeInput: string;
```

- *Type:* string

---

##### `sybaseSettingsInput`<sup>Optional</sup> <a name="sybaseSettingsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sybaseSettingsInput"></a>

```typescript
public readonly sybaseSettingsInput: IResolvable | DmsEndpointSybaseSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | DmsEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `endpointIdentifier`<sup>Required</sup> <a name="endpointIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointIdentifier"></a>

```typescript
public readonly endpointIdentifier: string;
```

- *Type:* string

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

---

##### `extraConnectionAttributes`<sup>Required</sup> <a name="extraConnectionAttributes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.extraConnectionAttributes"></a>

```typescript
public readonly extraConnectionAttributes: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `resourceIdentifier`<sup>Required</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslMode`<sup>Required</sup> <a name="sslMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsEndpointConfig <a name="DmsEndpointConfig" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointConfig: dmsEndpoint.DmsEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointType">endpointType</a></code> | <code>string</code> | The type of endpoint. Valid values are source and target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.engineName">engineName</a></code> | <code>string</code> | The type of engine for the endpoint, depending on the EndpointType value. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.certificateArn">certificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the certificate. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.docDbSettings">docDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a></code> | Settings in JSON format for the source and target DocumentDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dynamoDbSettings">dynamoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a></code> | Settings in JSON format for the target Amazon DynamoDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings">elasticsearchSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | Settings in JSON format for the target OpenSearch endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointIdentifier">endpointIdentifier</a></code> | <code>string</code> | The database endpoint identifier. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes">extraConnectionAttributes</a></code> | <code>string</code> | Additional attributes associated with the connection. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.gcpMySqlSettings">gcpMySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a></code> | Settings in JSON format for the source GCP MySQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.ibmDb2Settings">ibmDb2Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a></code> | Settings in JSON format for the source IBM Db2 LUW endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings">kafkaSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | Settings in JSON format for the target Apache Kafka endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings">kinesisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.If you don't specify a value for the KmsKeyId parameter, AWS DMS uses your default encryption key. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.microsoftSqlServerSettings">microsoftSqlServerSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a></code> | Settings in JSON format for the source and target Microsoft SQL Server endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mongoDbSettings">mongoDbSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a></code> | Settings in JSON format for the source MongoDB endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mySqlSettings">mySqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a></code> | Settings in JSON format for the source and target MySQL endpoin. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.neptuneSettings">neptuneSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a></code> | Settings in JSON format for the target Amazon Neptune endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.oracleSettings">oracleSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | Settings in JSON format for the source and target Oracle endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.password">password</a></code> | <code>string</code> | The password to be used to log in to the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.port">port</a></code> | <code>number</code> | The port used by the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.postgreSqlSettings">postgreSqlSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a></code> | Settings in JSON format for the source and target PostgreSQL endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redisSettings">redisSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | Settings in JSON format for the target Redis endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings">redshiftSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | Settings in JSON format for the Amazon Redshift endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.resourceIdentifier">resourceIdentifier</a></code> | <code>string</code> | A display name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.s3Settings">s3Settings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | Settings in JSON format for the source and target Amazon S3 endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.serverName">serverName</a></code> | <code>string</code> | The name of the server where the endpoint database resides. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sslMode">sslMode</a></code> | <code>string</code> | The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sybaseSettings">sybaseSettings</a></code> | <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a></code> | Settings in JSON format for the source and target SAP ASE endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]</code> | One or more tags to be assigned to the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.username">username</a></code> | <code>string</code> | The user name to be used to log in to the endpoint database. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpointType`<sup>Required</sup> <a name="endpointType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointType"></a>

```typescript
public readonly endpointType: string;
```

- *Type:* string

The type of endpoint. Valid values are source and target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#endpoint_type DmsEndpoint#endpoint_type}

---

##### `engineName`<sup>Required</sup> <a name="engineName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.engineName"></a>

```typescript
public readonly engineName: string;
```

- *Type:* string

The type of engine for the endpoint, depending on the EndpointType value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#engine_name DmsEndpoint#engine_name}

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#certificate_arn DmsEndpoint#certificate_arn}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the endpoint database.

For a MySQL source or target endpoint, don't specify DatabaseName. To migrate to a specific database, use this setting and targetDbType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `docDbSettings`<sup>Optional</sup> <a name="docDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.docDbSettings"></a>

```typescript
public readonly docDbSettings: DmsEndpointDocDbSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

Settings in JSON format for the source and target DocumentDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#doc_db_settings DmsEndpoint#doc_db_settings}

---

##### `dynamoDbSettings`<sup>Optional</sup> <a name="dynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.dynamoDbSettings"></a>

```typescript
public readonly dynamoDbSettings: DmsEndpointDynamoDbSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

Settings in JSON format for the target Amazon DynamoDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#dynamo_db_settings DmsEndpoint#dynamo_db_settings}

---

##### `elasticsearchSettings`<sup>Optional</sup> <a name="elasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.elasticsearchSettings"></a>

```typescript
public readonly elasticsearchSettings: DmsEndpointElasticsearchSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

Settings in JSON format for the target OpenSearch endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#elasticsearch_settings DmsEndpoint#elasticsearch_settings}

---

##### `endpointIdentifier`<sup>Optional</sup> <a name="endpointIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.endpointIdentifier"></a>

```typescript
public readonly endpointIdentifier: string;
```

- *Type:* string

The database endpoint identifier.

Identifiers must begin with a letter and must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#endpoint_identifier DmsEndpoint#endpoint_identifier}

---

##### `extraConnectionAttributes`<sup>Optional</sup> <a name="extraConnectionAttributes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.extraConnectionAttributes"></a>

```typescript
public readonly extraConnectionAttributes: string;
```

- *Type:* string

Additional attributes associated with the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#extra_connection_attributes DmsEndpoint#extra_connection_attributes}

---

##### `gcpMySqlSettings`<sup>Optional</sup> <a name="gcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.gcpMySqlSettings"></a>

```typescript
public readonly gcpMySqlSettings: DmsEndpointGcpMySqlSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

Settings in JSON format for the source GCP MySQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#gcp_my_sql_settings DmsEndpoint#gcp_my_sql_settings}

---

##### `ibmDb2Settings`<sup>Optional</sup> <a name="ibmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.ibmDb2Settings"></a>

```typescript
public readonly ibmDb2Settings: DmsEndpointIbmDb2Settings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

Settings in JSON format for the source IBM Db2 LUW endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#ibm_db_2_settings DmsEndpoint#ibm_db_2_settings}

---

##### `kafkaSettings`<sup>Optional</sup> <a name="kafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kafkaSettings"></a>

```typescript
public readonly kafkaSettings: DmsEndpointKafkaSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

Settings in JSON format for the target Apache Kafka endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#kafka_settings DmsEndpoint#kafka_settings}

---

##### `kinesisSettings`<sup>Optional</sup> <a name="kinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kinesisSettings"></a>

```typescript
public readonly kinesisSettings: DmsEndpointKinesisSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#kinesis_settings DmsEndpoint#kinesis_settings}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.If you don't specify a value for the KmsKeyId parameter, AWS DMS uses your default encryption key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#kms_key_id DmsEndpoint#kms_key_id}

---

##### `microsoftSqlServerSettings`<sup>Optional</sup> <a name="microsoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.microsoftSqlServerSettings"></a>

```typescript
public readonly microsoftSqlServerSettings: DmsEndpointMicrosoftSqlServerSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

Settings in JSON format for the source and target Microsoft SQL Server endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#microsoft_sql_server_settings DmsEndpoint#microsoft_sql_server_settings}

---

##### `mongoDbSettings`<sup>Optional</sup> <a name="mongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mongoDbSettings"></a>

```typescript
public readonly mongoDbSettings: DmsEndpointMongoDbSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

Settings in JSON format for the source MongoDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#mongo_db_settings DmsEndpoint#mongo_db_settings}

---

##### `mySqlSettings`<sup>Optional</sup> <a name="mySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.mySqlSettings"></a>

```typescript
public readonly mySqlSettings: DmsEndpointMySqlSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

Settings in JSON format for the source and target MySQL endpoin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#my_sql_settings DmsEndpoint#my_sql_settings}

---

##### `neptuneSettings`<sup>Optional</sup> <a name="neptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.neptuneSettings"></a>

```typescript
public readonly neptuneSettings: DmsEndpointNeptuneSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

Settings in JSON format for the target Amazon Neptune endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#neptune_settings DmsEndpoint#neptune_settings}

---

##### `oracleSettings`<sup>Optional</sup> <a name="oracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.oracleSettings"></a>

```typescript
public readonly oracleSettings: DmsEndpointOracleSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

Settings in JSON format for the source and target Oracle endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#oracle_settings DmsEndpoint#oracle_settings}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password to be used to log in to the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port used by the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `postgreSqlSettings`<sup>Optional</sup> <a name="postgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.postgreSqlSettings"></a>

```typescript
public readonly postgreSqlSettings: DmsEndpointPostgreSqlSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

Settings in JSON format for the source and target PostgreSQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#postgre_sql_settings DmsEndpoint#postgre_sql_settings}

---

##### `redisSettings`<sup>Optional</sup> <a name="redisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redisSettings"></a>

```typescript
public readonly redisSettings: DmsEndpointRedisSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

Settings in JSON format for the target Redis endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#redis_settings DmsEndpoint#redis_settings}

---

##### `redshiftSettings`<sup>Optional</sup> <a name="redshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.redshiftSettings"></a>

```typescript
public readonly redshiftSettings: DmsEndpointRedshiftSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

Settings in JSON format for the Amazon Redshift endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#redshift_settings DmsEndpoint#redshift_settings}

---

##### `resourceIdentifier`<sup>Optional</sup> <a name="resourceIdentifier" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.resourceIdentifier"></a>

```typescript
public readonly resourceIdentifier: string;
```

- *Type:* string

A display name for the resource identifier at the end of the EndpointArn response parameter that is returned in the created Endpoint object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#resource_identifier DmsEndpoint#resource_identifier}

---

##### `s3Settings`<sup>Optional</sup> <a name="s3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.s3Settings"></a>

```typescript
public readonly s3Settings: DmsEndpointS3Settings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

Settings in JSON format for the source and target Amazon S3 endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#s3_settings DmsEndpoint#s3_settings}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

The name of the server where the endpoint database resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `sslMode`<sup>Optional</sup> <a name="sslMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sslMode"></a>

```typescript
public readonly sslMode: string;
```

- *Type:* string

The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is none.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#ssl_mode DmsEndpoint#ssl_mode}

---

##### `sybaseSettings`<sup>Optional</sup> <a name="sybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.sybaseSettings"></a>

```typescript
public readonly sybaseSettings: DmsEndpointSybaseSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

Settings in JSON format for the source and target SAP ASE endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#sybase_settings DmsEndpoint#sybase_settings}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | DmsEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]

One or more tags to be assigned to the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#tags DmsEndpoint#tags}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The user name to be used to log in to the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

### DmsEndpointDocDbSettings <a name="DmsEndpointDocDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointDocDbSettings: dmsEndpoint.DmsEndpointDocDbSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.docsToInvestigate">docsToInvestigate</a></code> | <code>number</code> | Indicates the number of documents to preview to determine the document organization. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.extractDocId">extractDocId</a></code> | <code>boolean \| cdktn.IResolvable</code> | Specifies the document ID. Use this setting when NestingLevel is set to "none". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.nestingLevel">nestingLevel</a></code> | <code>string</code> | Specifies either document or table mode. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |

---

##### `docsToInvestigate`<sup>Optional</sup> <a name="docsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.docsToInvestigate"></a>

```typescript
public readonly docsToInvestigate: number;
```

- *Type:* number

Indicates the number of documents to preview to determine the document organization.

Use this setting when NestingLevel is set to "one".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}

---

##### `extractDocId`<sup>Optional</sup> <a name="extractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.extractDocId"></a>

```typescript
public readonly extractDocId: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Specifies the document ID. Use this setting when NestingLevel is set to "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}

---

##### `nestingLevel`<sup>Optional</sup> <a name="nestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.nestingLevel"></a>

```typescript
public readonly nestingLevel: string;
```

- *Type:* string

Specifies either document or table mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the DocumentDB endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

### DmsEndpointDynamoDbSettings <a name="DmsEndpointDynamoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointDynamoDbSettings: dmsEndpoint.DmsEndpointDynamoDbSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) used by the service to access the IAM role. |

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) used by the service to access the IAM role.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

### DmsEndpointElasticsearchSettings <a name="DmsEndpointElasticsearchSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointElasticsearchSettings: dmsEndpoint.DmsEndpointElasticsearchSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri">endpointUri</a></code> | <code>string</code> | The endpoint for the OpenSearch cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration">errorRetryDuration</a></code> | <code>number</code> | The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage">fullLoadErrorPercentage</a></code> | <code>number</code> | The maximum percentage of records that can fail to be written before a full load operation stops. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) used by the service to access the IAM role. |

---

##### `endpointUri`<sup>Optional</sup> <a name="endpointUri" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

The endpoint for the OpenSearch cluster.

AWS DMS uses HTTPS if a transport protocol (either HTTP or HTTPS) isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#endpoint_uri DmsEndpoint#endpoint_uri}

---

##### `errorRetryDuration`<sup>Optional</sup> <a name="errorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.errorRetryDuration"></a>

```typescript
public readonly errorRetryDuration: number;
```

- *Type:* number

The maximum number of seconds for which DMS retries failed API requests to the OpenSearch cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}

---

##### `fullLoadErrorPercentage`<sup>Optional</sup> <a name="fullLoadErrorPercentage" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.fullLoadErrorPercentage"></a>

```typescript
public readonly fullLoadErrorPercentage: number;
```

- *Type:* number

The maximum percentage of records that can fail to be written before a full load operation stops.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#full_load_error_percentage DmsEndpoint#full_load_error_percentage}

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) used by the service to access the IAM role.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

### DmsEndpointGcpMySqlSettings <a name="DmsEndpointGcpMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointGcpMySqlSettings: dmsEndpoint.DmsEndpointGcpMySqlSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.afterConnectScript">afterConnectScript</a></code> | <code>string</code> | Specifies a script to run immediately after AWS DMS connects to the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.cleanSourceMetadataOnMismatch">cleanSourceMetadataOnMismatch</a></code> | <code>boolean \| cdktn.IResolvable</code> | Adjusts the behavior of AWS DMS when migrating from an SQL Server source database that is hosted as part of an Always On availability group cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.databaseName">databaseName</a></code> | <code>string</code> | Database name for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.eventsPollInterval">eventsPollInterval</a></code> | <code>number</code> | Specifies how often to check the binary log for new changes/events when the database is idle. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.parallelLoadThreads">parallelLoadThreads</a></code> | <code>number</code> | Improves performance when loading data into the MySQL-compatible target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.password">password</a></code> | <code>string</code> | Endpoint connection password. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.port">port</a></code> | <code>number</code> | The port used by the endpoint database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverName">serverName</a></code> | <code>string</code> | The MySQL host name. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverTimezone">serverTimezone</a></code> | <code>string</code> | Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.username">username</a></code> | <code>string</code> | Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks. |

---

##### `afterConnectScript`<sup>Optional</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.afterConnectScript"></a>

```typescript
public readonly afterConnectScript: string;
```

- *Type:* string

Specifies a script to run immediately after AWS DMS connects to the endpoint.

The migration task continues running regardless if the SQL statement succeeds or fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `cleanSourceMetadataOnMismatch`<sup>Optional</sup> <a name="cleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.cleanSourceMetadataOnMismatch"></a>

```typescript
public readonly cleanSourceMetadataOnMismatch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Adjusts the behavior of AWS DMS when migrating from an SQL Server source database that is hosted as part of an Always On availability group cluster.

If you need AWS DMS to poll all the nodes in the Always On cluster for transaction backups, set this attribute to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch DmsEndpoint#clean_source_metadata_on_mismatch}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Database name for the endpoint.

For a MySQL source or target endpoint, don't explicitly specify the database using the DatabaseName request parameter on either the CreateEndpoint or ModifyEndpoint API call. Specifying DatabaseName when you create or modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the AWS DMS task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `eventsPollInterval`<sup>Optional</sup> <a name="eventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.eventsPollInterval"></a>

```typescript
public readonly eventsPollInterval: number;
```

- *Type:* number

Specifies how often to check the binary log for new changes/events when the database is idle.

The default is five seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#events_poll_interval DmsEndpoint#events_poll_interval}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `parallelLoadThreads`<sup>Optional</sup> <a name="parallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.parallelLoadThreads"></a>

```typescript
public readonly parallelLoadThreads: number;
```

- *Type:* number

Improves performance when loading data into the MySQL-compatible target database.

Specifies how many threads to use to load the data into the MySQL-compatible target database. Setting a large number of threads can have an adverse effect on database performance, because a separate connection is required for each thread. The default is one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#parallel_load_threads DmsEndpoint#parallel_load_threads}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Endpoint connection password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port used by the endpoint database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value of the AWS Secrets Manager secret that allows access to the MySQL endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

The MySQL host name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `serverTimezone`<sup>Optional</sup> <a name="serverTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.serverTimezone"></a>

```typescript
public readonly serverTimezone: string;
```

- *Type:* string

Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#server_timezone DmsEndpoint#server_timezone}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Specifies the time zone for the source MySQL database. Don't enclose time zones in single quotation marks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

### DmsEndpointIbmDb2Settings <a name="DmsEndpointIbmDb2Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointIbmDb2Settings: dmsEndpoint.DmsEndpointIbmDb2Settings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.currentLsn">currentLsn</a></code> | <code>string</code> | For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.keepCsvFiles">keepCsvFiles</a></code> | <code>boolean \| cdktn.IResolvable</code> | If true, AWS DMS saves any .csv files to the Db2 LUW target that were used to replicate data. DMS uses these files for analysis and troubleshooting. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.loadTimeout">loadTimeout</a></code> | <code>number</code> | The amount of time (in milliseconds) before AWS DMS times out operations performed by DMS on the Db2 target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | Specifies the maximum size (in KB) of .csv files used to transfer data to Db2 LUW. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxKBytesPerRead">maxKBytesPerRead</a></code> | <code>number</code> | Maximum number of bytes per read, as a NUMBER value. The default is 64 KB. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the IBMDB2 endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.setDataCaptureChanges">setDataCaptureChanges</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables ongoing replication (CDC) as a BOOLEAN value. The default is true. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.writeBufferSize">writeBufferSize</a></code> | <code>number</code> | The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk on the DMS replication instance. The default value is 1024 (1 MB). |

---

##### `currentLsn`<sup>Optional</sup> <a name="currentLsn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.currentLsn"></a>

```typescript
public readonly currentLsn: string;
```

- *Type:* string

For ongoing replication (CDC), use CurrentLSN to specify a log sequence number (LSN) where you want the replication to start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#current_lsn DmsEndpoint#current_lsn}

---

##### `keepCsvFiles`<sup>Optional</sup> <a name="keepCsvFiles" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.keepCsvFiles"></a>

```typescript
public readonly keepCsvFiles: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If true, AWS DMS saves any .csv files to the Db2 LUW target that were used to replicate data. DMS uses these files for analysis and troubleshooting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#keep_csv_files DmsEndpoint#keep_csv_files}

---

##### `loadTimeout`<sup>Optional</sup> <a name="loadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.loadTimeout"></a>

```typescript
public readonly loadTimeout: number;
```

- *Type:* number

The amount of time (in milliseconds) before AWS DMS times out operations performed by DMS on the Db2 target.

The default value is 1200 (20 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#load_timeout DmsEndpoint#load_timeout}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

Specifies the maximum size (in KB) of .csv files used to transfer data to Db2 LUW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `maxKBytesPerRead`<sup>Optional</sup> <a name="maxKBytesPerRead" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.maxKBytesPerRead"></a>

```typescript
public readonly maxKBytesPerRead: number;
```

- *Type:* number

Maximum number of bytes per read, as a NUMBER value. The default is 64 KB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#max_k_bytes_per_read DmsEndpoint#max_k_bytes_per_read}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

The role must allow the iam:PassRole action. SecretsManagerSecret has the value ofthe AWS Secrets Manager secret that allows access to the Db2 LUW endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the IBMDB2 endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `setDataCaptureChanges`<sup>Optional</sup> <a name="setDataCaptureChanges" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.setDataCaptureChanges"></a>

```typescript
public readonly setDataCaptureChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables ongoing replication (CDC) as a BOOLEAN value. The default is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#set_data_capture_changes DmsEndpoint#set_data_capture_changes}

---

##### `writeBufferSize`<sup>Optional</sup> <a name="writeBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings.property.writeBufferSize"></a>

```typescript
public readonly writeBufferSize: number;
```

- *Type:* number

The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk on the DMS replication instance. The default value is 1024 (1 MB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#write_buffer_size DmsEndpoint#write_buffer_size}

---

### DmsEndpointKafkaSettings <a name="DmsEndpointKafkaSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointKafkaSettings: dmsEndpoint.DmsEndpointKafkaSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.broker">broker</a></code> | <code>string</code> | A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails">includeControlDetails</a></code> | <code>boolean \| cdktn.IResolvable</code> | Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>boolean \| cdktn.IResolvable</code> | Include NULL and empty columns for records migrated to the endpoint. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue">includePartitionValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | Shows the partition value within the Kafka message output unless the partition type is schema-table-type. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>boolean \| cdktn.IResolvable</code> | Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>boolean \| cdktn.IResolvable</code> | Provides detailed transaction information from the source database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat">messageFormat</a></code> | <code>string</code> | The output format for the records created on the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes">messageMaxBytes</a></code> | <code>number</code> | The maximum size in bytes for records created on the endpoint The default is 1,000,000. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix">noHexPrefix</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Prefixes schema and table names to partition values, when the partition type is primary-key-type. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword">saslPassword</a></code> | <code>string</code> | The secure password that you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUserName">saslUserName</a></code> | <code>string</code> | The secure user name you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol">securityProtocol</a></code> | <code>string</code> | Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn">sslClientCertificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn">sslClientKeyArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword">sslClientKeyPassword</a></code> | <code>string</code> | The password for the client private key used to securely connect to a Kafka target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.topic">topic</a></code> | <code>string</code> | The topic to which you migrate the data. |

---

##### `broker`<sup>Optional</sup> <a name="broker" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.broker"></a>

```typescript
public readonly broker: string;
```

- *Type:* string

A comma-separated list of one or more broker locations in your Kafka cluster that host your Kafka instance.

Specify each broker location in the form broker-hostname-or-ip:port 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#broker DmsEndpoint#broker}

---

##### `includeControlDetails`<sup>Optional</sup> <a name="includeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeControlDetails"></a>

```typescript
public readonly includeControlDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Shows detailed control information for table definition, column definition, and table and column changes in the Kafka message output.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeNullAndEmpty"></a>

```typescript
public readonly includeNullAndEmpty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Include NULL and empty columns for records migrated to the endpoint. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}

---

##### `includePartitionValue`<sup>Optional</sup> <a name="includePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includePartitionValue"></a>

```typescript
public readonly includePartitionValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Shows the partition value within the Kafka message output unless the partition type is schema-table-type. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTableAlterOperations"></a>

```typescript
public readonly includeTableAlterOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="includeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.includeTransactionDetails"></a>

```typescript
public readonly includeTransactionDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Provides detailed transaction information from the source database.

This information includes a commit timestamp, a log position, and values for transaction_id, previous transaction_id, and transaction_record_id (the record offset within a transaction). The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

The output format for the records created on the endpoint.

The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}

---

##### `messageMaxBytes`<sup>Optional</sup> <a name="messageMaxBytes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.messageMaxBytes"></a>

```typescript
public readonly messageMaxBytes: number;
```

- *Type:* number

The maximum size in bytes for records created on the endpoint The default is 1,000,000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#message_max_bytes DmsEndpoint#message_max_bytes}

---

##### `noHexPrefix`<sup>Optional</sup> <a name="noHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.noHexPrefix"></a>

```typescript
public readonly noHexPrefix: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format.

For example, by default, AWS DMS adds a '0x' prefix to the LOB column type in hexadecimal format moving from an Oracle source to a Kafka target. Use the NoHexPrefix endpoint setting to enable migration of RAW data type columns without adding the '0x' prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.partitionIncludeSchemaTable"></a>

```typescript
public readonly partitionIncludeSchemaTable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Prefixes schema and table names to partition values, when the partition type is primary-key-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}

---

##### `saslPassword`<sup>Optional</sup> <a name="saslPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslPassword"></a>

```typescript
public readonly saslPassword: string;
```

- *Type:* string

The secure password that you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#sasl_password DmsEndpoint#sasl_password}

---

##### `saslUserName`<sup>Optional</sup> <a name="saslUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.saslUserName"></a>

```typescript
public readonly saslUserName: string;
```

- *Type:* string

The secure user name you created when you first set up your Amazon MSK cluster to validate a client identity and make an encrypted connection between server and client using SASL-SSL authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#sasl_user_name DmsEndpoint#sasl_user_name}

---

##### `securityProtocol`<sup>Optional</sup> <a name="securityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.securityProtocol"></a>

```typescript
public readonly securityProtocol: string;
```

- *Type:* string

Set secure connection to a Kafka target endpoint using Transport Layer Security (TLS).

Options include ssl-encryption, ssl-authentication, and sasl-ssl. sasl-ssl requires SaslUsername and SaslPassword.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#security_protocol DmsEndpoint#security_protocol}

---

##### `sslCaCertificateArn`<sup>Optional</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslCaCertificateArn"></a>

```typescript
public readonly sslCaCertificateArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the private certificate authority (CA) cert that AWS DMS uses to securely connect to your Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}

---

##### `sslClientCertificateArn`<sup>Optional</sup> <a name="sslClientCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientCertificateArn"></a>

```typescript
public readonly sslClientCertificateArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the client certificate used to securely connect to a Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#ssl_client_certificate_arn DmsEndpoint#ssl_client_certificate_arn}

---

##### `sslClientKeyArn`<sup>Optional</sup> <a name="sslClientKeyArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyArn"></a>

```typescript
public readonly sslClientKeyArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the client private key used to securely connect to a Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#ssl_client_key_arn DmsEndpoint#ssl_client_key_arn}

---

##### `sslClientKeyPassword`<sup>Optional</sup> <a name="sslClientKeyPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.sslClientKeyPassword"></a>

```typescript
public readonly sslClientKeyPassword: string;
```

- *Type:* string

The password for the client private key used to securely connect to a Kafka target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#ssl_client_key_password DmsEndpoint#ssl_client_key_password}

---

##### `topic`<sup>Optional</sup> <a name="topic" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

The topic to which you migrate the data.

If you don't specify a topic, AWS DMS specifies "kafka-default-topic" as the migration topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#topic DmsEndpoint#topic}

---

### DmsEndpointKinesisSettings <a name="DmsEndpointKinesisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointKinesisSettings: dmsEndpoint.DmsEndpointKinesisSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails">includeControlDetails</a></code> | <code>boolean \| cdktn.IResolvable</code> | Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>boolean \| cdktn.IResolvable</code> | Include NULL and empty columns for records migrated to the endpoint. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue">includePartitionValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>boolean \| cdktn.IResolvable</code> | Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>boolean \| cdktn.IResolvable</code> | Provides detailed transaction information from the source database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat">messageFormat</a></code> | <code>string</code> | The output format for the records created on the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.noHexPrefix">noHexPrefix</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>boolean \| cdktn.IResolvable</code> | Prefixes schema and table names to partition values, when the partition type is primary-key-type. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the IAM role that AWS DMS uses to write to the Kinesis data stream. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn">streamArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint. |

---

##### `includeControlDetails`<sup>Optional</sup> <a name="includeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeControlDetails"></a>

```typescript
public readonly includeControlDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Shows detailed control information for table definition, column definition, and table and column changes in the Kinesis message output.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#include_control_details DmsEndpoint#include_control_details}

---

##### `includeNullAndEmpty`<sup>Optional</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeNullAndEmpty"></a>

```typescript
public readonly includeNullAndEmpty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Include NULL and empty columns for records migrated to the endpoint. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#include_null_and_empty DmsEndpoint#include_null_and_empty}

---

##### `includePartitionValue`<sup>Optional</sup> <a name="includePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includePartitionValue"></a>

```typescript
public readonly includePartitionValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Shows the partition value within the Kinesis message output, unless the partition type is schema-table-type. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#include_partition_value DmsEndpoint#include_partition_value}

---

##### `includeTableAlterOperations`<sup>Optional</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTableAlterOperations"></a>

```typescript
public readonly includeTableAlterOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Includes any data definition language (DDL) operations that change the table in the control data, such as rename-table, drop-table, add-column, drop-column, and rename-column.

The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#include_table_alter_operations DmsEndpoint#include_table_alter_operations}

---

##### `includeTransactionDetails`<sup>Optional</sup> <a name="includeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.includeTransactionDetails"></a>

```typescript
public readonly includeTransactionDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Provides detailed transaction information from the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#include_transaction_details DmsEndpoint#include_transaction_details}

---

##### `messageFormat`<sup>Optional</sup> <a name="messageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

The output format for the records created on the endpoint.

The message format is JSON (default) or JSON_UNFORMATTED (a single line with no tab).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#message_format DmsEndpoint#message_format}

---

##### `noHexPrefix`<sup>Optional</sup> <a name="noHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.noHexPrefix"></a>

```typescript
public readonly noHexPrefix: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set this optional parameter to true to avoid adding a '0x' prefix to raw data in hexadecimal format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#no_hex_prefix DmsEndpoint#no_hex_prefix}

---

##### `partitionIncludeSchemaTable`<sup>Optional</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.partitionIncludeSchemaTable"></a>

```typescript
public readonly partitionIncludeSchemaTable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Prefixes schema and table names to partition values, when the partition type is primary-key-type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#partition_include_schema_table DmsEndpoint#partition_include_schema_table}

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the IAM role that AWS DMS uses to write to the Kinesis data stream.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

##### `streamArn`<sup>Optional</sup> <a name="streamArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#stream_arn DmsEndpoint#stream_arn}

---

### DmsEndpointMicrosoftSqlServerSettings <a name="DmsEndpointMicrosoftSqlServerSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointMicrosoftSqlServerSettings: dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.bcpPacketSize">bcpPacketSize</a></code> | <code>number</code> | The maximum size of the packets (in bytes) used to transfer data using BCP. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.controlTablesFileGroup">controlTablesFileGroup</a></code> | <code>string</code> | Specifies a file group for the AWS DMS internal tables. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.databaseName">databaseName</a></code> | <code>string</code> | Database name for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.forceLobLookup">forceLobLookup</a></code> | <code>boolean \| cdktn.IResolvable</code> | Forces LOB lookup on inline LOB. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.password">password</a></code> | <code>string</code> | Endpoint connection password. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.port">port</a></code> | <code>number</code> | Endpoint TCP port. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.querySingleAlwaysOnNode">querySingleAlwaysOnNode</a></code> | <code>boolean \| cdktn.IResolvable</code> | Cleans and recreates table metadata information on the replication instance when a mismatch occurs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.readBackupOnly">readBackupOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | When this attribute is set to Y, AWS DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.safeguardPolicy">safeguardPolicy</a></code> | <code>string</code> | Use this attribute to minimize the need to access the backup log and enable AWS DMS to prevent truncation using one of the following two methods. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MicrosoftSQLServer endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.serverName">serverName</a></code> | <code>string</code> | Fully qualified domain name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.tlogAccessMode">tlogAccessMode</a></code> | <code>string</code> | Indicates the mode used to fetch CDC data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.trimSpaceInChar">trimSpaceInChar</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use the TrimSpaceInChar source endpoint setting to right-trim data on CHAR and NCHAR data types during migration. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useBcpFullLoad">useBcpFullLoad</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use this to attribute to transfer data for full-load operations using BCP. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.username">username</a></code> | <code>string</code> | Endpoint connection user name. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useThirdPartyBackupDevice">useThirdPartyBackupDevice</a></code> | <code>boolean \| cdktn.IResolvable</code> | When this attribute is set to Y, DMS processes third-party transaction log backups if they are created in native format. |

---

##### `bcpPacketSize`<sup>Optional</sup> <a name="bcpPacketSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.bcpPacketSize"></a>

```typescript
public readonly bcpPacketSize: number;
```

- *Type:* number

The maximum size of the packets (in bytes) used to transfer data using BCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#bcp_packet_size DmsEndpoint#bcp_packet_size}

---

##### `controlTablesFileGroup`<sup>Optional</sup> <a name="controlTablesFileGroup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.controlTablesFileGroup"></a>

```typescript
public readonly controlTablesFileGroup: string;
```

- *Type:* string

Specifies a file group for the AWS DMS internal tables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#control_tables_file_group DmsEndpoint#control_tables_file_group}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Database name for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `forceLobLookup`<sup>Optional</sup> <a name="forceLobLookup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.forceLobLookup"></a>

```typescript
public readonly forceLobLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Forces LOB lookup on inline LOB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#force_lob_lookup DmsEndpoint#force_lob_lookup}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Endpoint connection password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Endpoint TCP port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `querySingleAlwaysOnNode`<sup>Optional</sup> <a name="querySingleAlwaysOnNode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.querySingleAlwaysOnNode"></a>

```typescript
public readonly querySingleAlwaysOnNode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Cleans and recreates table metadata information on the replication instance when a mismatch occurs.

An example is a situation where running an alter DDL statement on a table might result in different information about the table cached in the replication instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#query_single_always_on_node DmsEndpoint#query_single_always_on_node}

---

##### `readBackupOnly`<sup>Optional</sup> <a name="readBackupOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.readBackupOnly"></a>

```typescript
public readonly readBackupOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When this attribute is set to Y, AWS DMS only reads changes from transaction log backups and doesn't read from the active transaction log file during ongoing replication.

Setting this parameter to Y enables you to control active transaction log file growth during full load and ongoing replication tasks. However, it can add some source latency to ongoing replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#read_backup_only DmsEndpoint#read_backup_only}

---

##### `safeguardPolicy`<sup>Optional</sup> <a name="safeguardPolicy" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.safeguardPolicy"></a>

```typescript
public readonly safeguardPolicy: string;
```

- *Type:* string

Use this attribute to minimize the need to access the backup log and enable AWS DMS to prevent truncation using one of the following two methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#safeguard_policy DmsEndpoint#safeguard_policy}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MicrosoftSQLServer endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Fully qualified domain name of the endpoint.

For an Amazon RDS SQL Server instance, this is the output of DescribeDBInstances, in the Endpoint.Address field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `tlogAccessMode`<sup>Optional</sup> <a name="tlogAccessMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.tlogAccessMode"></a>

```typescript
public readonly tlogAccessMode: string;
```

- *Type:* string

Indicates the mode used to fetch CDC data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#tlog_access_mode DmsEndpoint#tlog_access_mode}

---

##### `trimSpaceInChar`<sup>Optional</sup> <a name="trimSpaceInChar" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.trimSpaceInChar"></a>

```typescript
public readonly trimSpaceInChar: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use the TrimSpaceInChar source endpoint setting to right-trim data on CHAR and NCHAR data types during migration.

Setting TrimSpaceInChar does not left-trim data. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#trim_space_in_char DmsEndpoint#trim_space_in_char}

---

##### `useBcpFullLoad`<sup>Optional</sup> <a name="useBcpFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useBcpFullLoad"></a>

```typescript
public readonly useBcpFullLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use this to attribute to transfer data for full-load operations using BCP.

When the target table contains an identity column that does not exist in the source table, you must disable the use BCP for loading table option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#use_bcp_full_load DmsEndpoint#use_bcp_full_load}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Endpoint connection user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

##### `useThirdPartyBackupDevice`<sup>Optional</sup> <a name="useThirdPartyBackupDevice" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings.property.useThirdPartyBackupDevice"></a>

```typescript
public readonly useThirdPartyBackupDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When this attribute is set to Y, DMS processes third-party transaction log backups if they are created in native format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#use_third_party_backup_device DmsEndpoint#use_third_party_backup_device}

---

### DmsEndpointMongoDbSettings <a name="DmsEndpointMongoDbSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointMongoDbSettings: dmsEndpoint.DmsEndpointMongoDbSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authMechanism">authMechanism</a></code> | <code>string</code> | The authentication mechanism you use to access the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authSource">authSource</a></code> | <code>string</code> | The MongoDB database name. This setting isn't used when AuthType is set to "no". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authType">authType</a></code> | <code>string</code> | The authentication type you use to access the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.databaseName">databaseName</a></code> | <code>string</code> | The database name on the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.docsToInvestigate">docsToInvestigate</a></code> | <code>string</code> | Indicates the number of documents to preview to determine the document organization. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.extractDocId">extractDocId</a></code> | <code>string</code> | Specifies the document ID. Use this setting when NestingLevel is set to "none". |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.nestingLevel">nestingLevel</a></code> | <code>string</code> | Specifies either document or table mode. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.password">password</a></code> | <code>string</code> | The password for the user account you use to access the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.port">port</a></code> | <code>number</code> | The port value for the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MongoDB endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.serverName">serverName</a></code> | <code>string</code> | The name of the server on the MongoDB source endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.username">username</a></code> | <code>string</code> | The user name you use to access the MongoDB source endpoint. |

---

##### `authMechanism`<sup>Optional</sup> <a name="authMechanism" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authMechanism"></a>

```typescript
public readonly authMechanism: string;
```

- *Type:* string

The authentication mechanism you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#auth_mechanism DmsEndpoint#auth_mechanism}

---

##### `authSource`<sup>Optional</sup> <a name="authSource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authSource"></a>

```typescript
public readonly authSource: string;
```

- *Type:* string

The MongoDB database name. This setting isn't used when AuthType is set to "no".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#auth_source DmsEndpoint#auth_source}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

The authentication type you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The database name on the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#database_name DmsEndpoint#database_name}

---

##### `docsToInvestigate`<sup>Optional</sup> <a name="docsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.docsToInvestigate"></a>

```typescript
public readonly docsToInvestigate: string;
```

- *Type:* string

Indicates the number of documents to preview to determine the document organization.

Use this setting when NestingLevel is set to "one".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#docs_to_investigate DmsEndpoint#docs_to_investigate}

---

##### `extractDocId`<sup>Optional</sup> <a name="extractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.extractDocId"></a>

```typescript
public readonly extractDocId: string;
```

- *Type:* string

Specifies the document ID. Use this setting when NestingLevel is set to "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#extract_doc_id DmsEndpoint#extract_doc_id}

---

##### `nestingLevel`<sup>Optional</sup> <a name="nestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.nestingLevel"></a>

```typescript
public readonly nestingLevel: string;
```

- *Type:* string

Specifies either document or table mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#nesting_level DmsEndpoint#nesting_level}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The password for the user account you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#password DmsEndpoint#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port value for the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MongoDB endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

The name of the server on the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

The user name you use to access the MongoDB source endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#username DmsEndpoint#username}

---

### DmsEndpointMySqlSettings <a name="DmsEndpointMySqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointMySqlSettings: dmsEndpoint.DmsEndpointMySqlSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.afterConnectScript">afterConnectScript</a></code> | <code>string</code> | Specifies a script to run immediately after AWS DMS connects to the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.cleanSourceMetadataOnMismatch">cleanSourceMetadataOnMismatch</a></code> | <code>boolean \| cdktn.IResolvable</code> | Cleans and recreates table metadata information on the replication instance when a mismatch occurs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.eventsPollInterval">eventsPollInterval</a></code> | <code>number</code> | Specifies how often to check the binary log for new changes/events when the database is idle. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.parallelLoadThreads">parallelLoadThreads</a></code> | <code>number</code> | Improves performance when loading data into the MySQL-compatible target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.serverTimezone">serverTimezone</a></code> | <code>string</code> | Specifies the time zone for the source MySQL database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.targetDbType">targetDbType</a></code> | <code>string</code> | Specifies where to migrate source tables on the target, either to a single database or multiple databases. |

---

##### `afterConnectScript`<sup>Optional</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.afterConnectScript"></a>

```typescript
public readonly afterConnectScript: string;
```

- *Type:* string

Specifies a script to run immediately after AWS DMS connects to the endpoint.

The migration task continues running regardless if the SQL statement succeeds or fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `cleanSourceMetadataOnMismatch`<sup>Optional</sup> <a name="cleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.cleanSourceMetadataOnMismatch"></a>

```typescript
public readonly cleanSourceMetadataOnMismatch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Cleans and recreates table metadata information on the replication instance when a mismatch occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#clean_source_metadata_on_mismatch DmsEndpoint#clean_source_metadata_on_mismatch}

---

##### `eventsPollInterval`<sup>Optional</sup> <a name="eventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.eventsPollInterval"></a>

```typescript
public readonly eventsPollInterval: number;
```

- *Type:* number

Specifies how often to check the binary log for new changes/events when the database is idle.

The default is five seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#events_poll_interval DmsEndpoint#events_poll_interval}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

Specifies the maximum size (in KB) of any .csv file used to transfer data to a MySQL-compatible database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `parallelLoadThreads`<sup>Optional</sup> <a name="parallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.parallelLoadThreads"></a>

```typescript
public readonly parallelLoadThreads: number;
```

- *Type:* number

Improves performance when loading data into the MySQL-compatible target database.

Specifies how many threads to use to load the data into the MySQL-compatible target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#parallel_load_threads DmsEndpoint#parallel_load_threads}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the MySQL endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `serverTimezone`<sup>Optional</sup> <a name="serverTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.serverTimezone"></a>

```typescript
public readonly serverTimezone: string;
```

- *Type:* string

Specifies the time zone for the source MySQL database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#server_timezone DmsEndpoint#server_timezone}

---

##### `targetDbType`<sup>Optional</sup> <a name="targetDbType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings.property.targetDbType"></a>

```typescript
public readonly targetDbType: string;
```

- *Type:* string

Specifies where to migrate source tables on the target, either to a single database or multiple databases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#target_db_type DmsEndpoint#target_db_type}

---

### DmsEndpointNeptuneSettings <a name="DmsEndpointNeptuneSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointNeptuneSettings: dmsEndpoint.DmsEndpointNeptuneSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.errorRetryDuration">errorRetryDuration</a></code> | <code>number</code> | The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.iamAuthEnabled">iamAuthEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | If you want IAM authorization enabled for this endpoint, set this parameter to true. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS DMS bulk-loads the data to the Neptune target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxRetryCount">maxRetryCount</a></code> | <code>number</code> | The number of times for AWS DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketFolder">s3BucketFolder</a></code> | <code>string</code> | A folder path where you want AWS DMS to store migrated graph data in the S3 bucket specified by S3BucketName. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint. |

---

##### `errorRetryDuration`<sup>Optional</sup> <a name="errorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.errorRetryDuration"></a>

```typescript
public readonly errorRetryDuration: number;
```

- *Type:* number

The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph data to the Neptune target database before raising an error.

The default is 250.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#error_retry_duration DmsEndpoint#error_retry_duration}

---

##### `iamAuthEnabled`<sup>Optional</sup> <a name="iamAuthEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.iamAuthEnabled"></a>

```typescript
public readonly iamAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If you want IAM authorization enabled for this endpoint, set this parameter to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#iam_auth_enabled DmsEndpoint#iam_auth_enabled}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS DMS bulk-loads the data to the Neptune target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `maxRetryCount`<sup>Optional</sup> <a name="maxRetryCount" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.maxRetryCount"></a>

```typescript
public readonly maxRetryCount: number;
```

- *Type:* number

The number of times for AWS DMS to retry a bulk load of migrated graph data to the Neptune target database before raising an error.

The default is 5.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#max_retry_count DmsEndpoint#max_retry_count}

---

##### `s3BucketFolder`<sup>Optional</sup> <a name="s3BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketFolder"></a>

```typescript
public readonly s3BucketFolder: string;
```

- *Type:* string

A folder path where you want AWS DMS to store migrated graph data in the S3 bucket specified by S3BucketName.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#s3_bucket_folder DmsEndpoint#s3_bucket_folder}

---

##### `s3BucketName`<sup>Optional</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data in .csv files before bulk-loading it to the Neptune target database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#s3_bucket_name DmsEndpoint#s3_bucket_name}

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the service role that you created for the Neptune target endpoint.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

### DmsEndpointOracleSettings <a name="DmsEndpointOracleSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointOracleSettings: dmsEndpoint.DmsEndpointOracleSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.accessAlternateDirectly">accessAlternateDirectly</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set this attribute to false in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.additionalArchivedLogDestId">additionalArchivedLogDestId</a></code> | <code>number</code> | Set this attribute with ArchivedLogDestId in a primary/ standby setup. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.addSupplementalLogging">addSupplementalLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set this attribute to set up table-level supplemental logging for the Oracle database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.allowSelectNestedTables">allowSelectNestedTables</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set this attribute to true to enable replication of Oracle tables containing columns that are nested tables or defined types. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogDestId">archivedLogDestId</a></code> | <code>number</code> | Specifies the ID of the destination for the archived redo logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogsOnly">archivedLogsOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | When this field is set to True, AWS DMS only accesses the archived redo logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmPassword">asmPassword</a></code> | <code>string</code> | For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmServer">asmServer</a></code> | <code>string</code> | For an Oracle source endpoint, your ASM server address. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmUser">asmUser</a></code> | <code>string</code> | For an Oracle source endpoint, your ASM user name. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.charLengthSemantics">charLengthSemantics</a></code> | <code>string</code> | Specifies whether the length of a character column is in bytes or in characters. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathNoLog">directPathNoLog</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathParallelLoad">directPathParallelLoad</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, this attribute specifies a parallel load when useDirectPathFullLoad is set to Y. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.enableHomogenousTablespace">enableHomogenousTablespace</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.extraArchivedLogDestIds">extraArchivedLogDestIds</a></code> | <code>number[]</code> | Specifies the IDs of one more destinations for one or more archived redo logs. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified LobMaxSize. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.numberDatatypeScale">numberDatatypeScale</a></code> | <code>number</code> | Specifies the number scale. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.oraclePathPrefix">oraclePathPrefix</a></code> | <code>string</code> | Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.parallelAsmReadThreads">parallelAsmReadThreads</a></code> | <code>number</code> | Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readAheadBlocks">readAheadBlocks</a></code> | <code>number</code> | Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readTableSpaceName">readTableSpaceName</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, this attribute supports tablespace replication. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.replacePathPrefix">replacePathPrefix</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.retryInterval">retryInterval</a></code> | <code>number</code> | Specifies the number of seconds that the system waits before resending a query. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmAccessRoleArn">secretsManagerOracleAsmAccessRoleArn</a></code> | <code>string</code> | Required only if your Oracle endpoint uses Advanced Storage Manager (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmSecretId">secretsManagerOracleAsmSecretId</a></code> | <code>string</code> | Required only if your Oracle endpoint uses Advanced Storage Manager (ASM). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Oracle endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryption">securityDbEncryption</a></code> | <code>string</code> | For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryptionName">securityDbEncryptionName</a></code> | <code>string</code> | For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.spatialDataOptionToGeoJsonFunctionName">spatialDataOptionToGeoJsonFunctionName</a></code> | <code>string</code> | Use this attribute to convert SDO_GEOMETRY to GEOJSON format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.standbyDelayTime">standbyDelayTime</a></code> | <code>number</code> | Use this attribute to specify a time in minutes for the delay in standby sync. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useAlternateFolderForOnline">useAlternateFolderForOnline</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useBFile">useBFile</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set this attribute to True to capture change data using the Binary Reader utility. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useDirectPathFullLoad">useDirectPathFullLoad</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set this attribute to True to have AWS DMS use a direct path full load. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useLogminerReader">useLogminerReader</a></code> | <code>boolean \| cdktn.IResolvable</code> | Set this attribute to True to capture change data using the Oracle LogMiner utility (the default). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.usePathPrefix">usePathPrefix</a></code> | <code>string</code> | Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source. |

---

##### `accessAlternateDirectly`<sup>Optional</sup> <a name="accessAlternateDirectly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.accessAlternateDirectly"></a>

```typescript
public readonly accessAlternateDirectly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set this attribute to false in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#access_alternate_directly DmsEndpoint#access_alternate_directly}

---

##### `additionalArchivedLogDestId`<sup>Optional</sup> <a name="additionalArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.additionalArchivedLogDestId"></a>

```typescript
public readonly additionalArchivedLogDestId: number;
```

- *Type:* number

Set this attribute with ArchivedLogDestId in a primary/ standby setup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#additional_archived_log_dest_id DmsEndpoint#additional_archived_log_dest_id}

---

##### `addSupplementalLogging`<sup>Optional</sup> <a name="addSupplementalLogging" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.addSupplementalLogging"></a>

```typescript
public readonly addSupplementalLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set this attribute to set up table-level supplemental logging for the Oracle database.

This attribute enables PRIMARY KEY supplemental logging on all tables selected for a migration task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#add_supplemental_logging DmsEndpoint#add_supplemental_logging}

---

##### `allowSelectNestedTables`<sup>Optional</sup> <a name="allowSelectNestedTables" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.allowSelectNestedTables"></a>

```typescript
public readonly allowSelectNestedTables: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set this attribute to true to enable replication of Oracle tables containing columns that are nested tables or defined types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#allow_select_nested_tables DmsEndpoint#allow_select_nested_tables}

---

##### `archivedLogDestId`<sup>Optional</sup> <a name="archivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogDestId"></a>

```typescript
public readonly archivedLogDestId: number;
```

- *Type:* number

Specifies the ID of the destination for the archived redo logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#archived_log_dest_id DmsEndpoint#archived_log_dest_id}

---

##### `archivedLogsOnly`<sup>Optional</sup> <a name="archivedLogsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.archivedLogsOnly"></a>

```typescript
public readonly archivedLogsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When this field is set to True, AWS DMS only accesses the archived redo logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#archived_logs_only DmsEndpoint#archived_logs_only}

---

##### `asmPassword`<sup>Optional</sup> <a name="asmPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmPassword"></a>

```typescript
public readonly asmPassword: string;
```

- *Type:* string

For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#asm_password DmsEndpoint#asm_password}

---

##### `asmServer`<sup>Optional</sup> <a name="asmServer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmServer"></a>

```typescript
public readonly asmServer: string;
```

- *Type:* string

For an Oracle source endpoint, your ASM server address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#asm_server DmsEndpoint#asm_server}

---

##### `asmUser`<sup>Optional</sup> <a name="asmUser" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.asmUser"></a>

```typescript
public readonly asmUser: string;
```

- *Type:* string

For an Oracle source endpoint, your ASM user name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#asm_user DmsEndpoint#asm_user}

---

##### `charLengthSemantics`<sup>Optional</sup> <a name="charLengthSemantics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.charLengthSemantics"></a>

```typescript
public readonly charLengthSemantics: string;
```

- *Type:* string

Specifies whether the length of a character column is in bytes or in characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#char_length_semantics DmsEndpoint#char_length_semantics}

---

##### `directPathNoLog`<sup>Optional</sup> <a name="directPathNoLog" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathNoLog"></a>

```typescript
public readonly directPathNoLog: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, this attribute helps to increase the commit rate on the Oracle target database by writing directly to tables and not writing a trail to database logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#direct_path_no_log DmsEndpoint#direct_path_no_log}

---

##### `directPathParallelLoad`<sup>Optional</sup> <a name="directPathParallelLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.directPathParallelLoad"></a>

```typescript
public readonly directPathParallelLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, this attribute specifies a parallel load when useDirectPathFullLoad is set to Y.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#direct_path_parallel_load DmsEndpoint#direct_path_parallel_load}

---

##### `enableHomogenousTablespace`<sup>Optional</sup> <a name="enableHomogenousTablespace" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.enableHomogenousTablespace"></a>

```typescript
public readonly enableHomogenousTablespace: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set this attribute to enable homogenous tablespace replication and create existing tables or indexes under the same tablespace on the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#enable_homogenous_tablespace DmsEndpoint#enable_homogenous_tablespace}

---

##### `extraArchivedLogDestIds`<sup>Optional</sup> <a name="extraArchivedLogDestIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.extraArchivedLogDestIds"></a>

```typescript
public readonly extraArchivedLogDestIds: number[];
```

- *Type:* number[]

Specifies the IDs of one more destinations for one or more archived redo logs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#extra_archived_log_dest_ids DmsEndpoint#extra_archived_log_dest_ids}

---

##### `failTasksOnLobTruncation`<sup>Optional</sup> <a name="failTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.failTasksOnLobTruncation"></a>

```typescript
public readonly failTasksOnLobTruncation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, this attribute causes a task to fail if the actual size of an LOB column is greater than the specified LobMaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}

---

##### `numberDatatypeScale`<sup>Optional</sup> <a name="numberDatatypeScale" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.numberDatatypeScale"></a>

```typescript
public readonly numberDatatypeScale: number;
```

- *Type:* number

Specifies the number scale.

You can select a scale up to 38, or you can select FLOAT. By default, the NUMBER data type is converted to precision 38, scale 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#number_datatype_scale DmsEndpoint#number_datatype_scale}

---

##### `oraclePathPrefix`<sup>Optional</sup> <a name="oraclePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.oraclePathPrefix"></a>

```typescript
public readonly oraclePathPrefix: string;
```

- *Type:* string

Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#oracle_path_prefix DmsEndpoint#oracle_path_prefix}

---

##### `parallelAsmReadThreads`<sup>Optional</sup> <a name="parallelAsmReadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.parallelAsmReadThreads"></a>

```typescript
public readonly parallelAsmReadThreads: number;
```

- *Type:* number

Set this attribute to change the number of threads that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#parallel_asm_read_threads DmsEndpoint#parallel_asm_read_threads}

---

##### `readAheadBlocks`<sup>Optional</sup> <a name="readAheadBlocks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readAheadBlocks"></a>

```typescript
public readonly readAheadBlocks: number;
```

- *Type:* number

Set this attribute to change the number of read-ahead blocks that DMS configures to perform a change data capture (CDC) load using Oracle Automatic Storage Management (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#read_ahead_blocks DmsEndpoint#read_ahead_blocks}

---

##### `readTableSpaceName`<sup>Optional</sup> <a name="readTableSpaceName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.readTableSpaceName"></a>

```typescript
public readonly readTableSpaceName: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, this attribute supports tablespace replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#read_table_space_name DmsEndpoint#read_table_space_name}

---

##### `replacePathPrefix`<sup>Optional</sup> <a name="replacePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.replacePathPrefix"></a>

```typescript
public readonly replacePathPrefix: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#replace_path_prefix DmsEndpoint#replace_path_prefix}

---

##### `retryInterval`<sup>Optional</sup> <a name="retryInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.retryInterval"></a>

```typescript
public readonly retryInterval: number;
```

- *Type:* number

Specifies the number of seconds that the system waits before resending a query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#retry_interval DmsEndpoint#retry_interval}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerOracleAsmAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmAccessRoleArn"></a>

```typescript
public readonly secretsManagerOracleAsmAccessRoleArn: string;
```

- *Type:* string

Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_access_role_arn DmsEndpoint#secrets_manager_oracle_asm_access_role_arn}

---

##### `secretsManagerOracleAsmSecretId`<sup>Optional</sup> <a name="secretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerOracleAsmSecretId"></a>

```typescript
public readonly secretsManagerOracleAsmSecretId: string;
```

- *Type:* string

Required only if your Oracle endpoint uses Advanced Storage Manager (ASM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_oracle_asm_secret_id DmsEndpoint#secrets_manager_oracle_asm_secret_id}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Oracle endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `securityDbEncryption`<sup>Optional</sup> <a name="securityDbEncryption" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryption"></a>

```typescript
public readonly securityDbEncryption: string;
```

- *Type:* string

For an Oracle source endpoint, the transparent data encryption (TDE) password required by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#security_db_encryption DmsEndpoint#security_db_encryption}

---

##### `securityDbEncryptionName`<sup>Optional</sup> <a name="securityDbEncryptionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.securityDbEncryptionName"></a>

```typescript
public readonly securityDbEncryptionName: string;
```

- *Type:* string

For an Oracle source endpoint, the name of a key used for the transparent data encryption (TDE) of the columns and tablespaces in an Oracle source database that is encrypted using TDE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#security_db_encryption_name DmsEndpoint#security_db_encryption_name}

---

##### `spatialDataOptionToGeoJsonFunctionName`<sup>Optional</sup> <a name="spatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.spatialDataOptionToGeoJsonFunctionName"></a>

```typescript
public readonly spatialDataOptionToGeoJsonFunctionName: string;
```

- *Type:* string

Use this attribute to convert SDO_GEOMETRY to GEOJSON format.

By default, DMS calls the SDO2GEOJSON custom function if present and accessible. Or you can create your own custom function that mimics the operation of SDOGEOJSON and set SpatialDataOptionToGeoJsonFunctionName to call it instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#spatial_data_option_to_geo_json_function_name DmsEndpoint#spatial_data_option_to_geo_json_function_name}

---

##### `standbyDelayTime`<sup>Optional</sup> <a name="standbyDelayTime" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.standbyDelayTime"></a>

```typescript
public readonly standbyDelayTime: number;
```

- *Type:* number

Use this attribute to specify a time in minutes for the delay in standby sync.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#standby_delay_time DmsEndpoint#standby_delay_time}

---

##### `useAlternateFolderForOnline`<sup>Optional</sup> <a name="useAlternateFolderForOnline" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useAlternateFolderForOnline"></a>

```typescript
public readonly useAlternateFolderForOnline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set this attribute to true in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#use_alternate_folder_for_online DmsEndpoint#use_alternate_folder_for_online}

---

##### `useBFile`<sup>Optional</sup> <a name="useBFile" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useBFile"></a>

```typescript
public readonly useBFile: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set this attribute to True to capture change data using the Binary Reader utility.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#use_b_file DmsEndpoint#use_b_file}

---

##### `useDirectPathFullLoad`<sup>Optional</sup> <a name="useDirectPathFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useDirectPathFullLoad"></a>

```typescript
public readonly useDirectPathFullLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set this attribute to True to have AWS DMS use a direct path full load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#use_direct_path_full_load DmsEndpoint#use_direct_path_full_load}

---

##### `useLogminerReader`<sup>Optional</sup> <a name="useLogminerReader" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.useLogminerReader"></a>

```typescript
public readonly useLogminerReader: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Set this attribute to True to capture change data using the Oracle LogMiner utility (the default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#use_logminer_reader DmsEndpoint#use_logminer_reader}

---

##### `usePathPrefix`<sup>Optional</sup> <a name="usePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings.property.usePathPrefix"></a>

```typescript
public readonly usePathPrefix: string;
```

- *Type:* string

Set this string attribute to the required value in order to use the Binary Reader to capture change data for an Amazon RDS for Oracle as the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#use_path_prefix DmsEndpoint#use_path_prefix}

---

### DmsEndpointPostgreSqlSettings <a name="DmsEndpointPostgreSqlSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointPostgreSqlSettings: dmsEndpoint.DmsEndpointPostgreSqlSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.afterConnectScript">afterConnectScript</a></code> | <code>string</code> | For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.babelfishDatabaseName">babelfishDatabaseName</a></code> | <code>string</code> | The Babelfish for Aurora PostgreSQL database name for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.captureDdls">captureDdls</a></code> | <code>boolean \| cdktn.IResolvable</code> | To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.databaseMode">databaseMode</a></code> | <code>string</code> | Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.ddlArtifactsSchema">ddlArtifactsSchema</a></code> | <code>string</code> | The schema in which the operational DDL database artifacts are created. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.executeTimeout">executeTimeout</a></code> | <code>number</code> | Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, this value causes a task to fail if the actual size of a LOB column is greater than the specified LobMaxSize. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatEnable">heartbeatEnable</a></code> | <code>boolean \| cdktn.IResolvable</code> | The write-ahead log (WAL) heartbeat feature mimics a dummy transaction. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatFrequency">heartbeatFrequency</a></code> | <code>number</code> | Sets the WAL heartbeat frequency (in minutes). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatSchema">heartbeatSchema</a></code> | <code>string</code> | Sets the schema in which the heartbeat artifacts are created. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, lets PostgreSQL migrate the boolean type as boolean. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.pluginName">pluginName</a></code> | <code>string</code> | Specifies the plugin to use to create a replication slot. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the PostgreSQL endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.slotName">slotName</a></code> | <code>string</code> | Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance. |

---

##### `afterConnectScript`<sup>Optional</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.afterConnectScript"></a>

```typescript
public readonly afterConnectScript: string;
```

- *Type:* string

For use with change data capture (CDC) only, this attribute has AWS DMS bypass foreign keys and user triggers to reduce the time it takes to bulk load data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `babelfishDatabaseName`<sup>Optional</sup> <a name="babelfishDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.babelfishDatabaseName"></a>

```typescript
public readonly babelfishDatabaseName: string;
```

- *Type:* string

The Babelfish for Aurora PostgreSQL database name for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#babelfish_database_name DmsEndpoint#babelfish_database_name}

---

##### `captureDdls`<sup>Optional</sup> <a name="captureDdls" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.captureDdls"></a>

```typescript
public readonly captureDdls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

To capture DDL events, AWS DMS creates various artifacts in the PostgreSQL database when the task starts.

You can later remove these artifacts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#capture_ddls DmsEndpoint#capture_ddls}

---

##### `databaseMode`<sup>Optional</sup> <a name="databaseMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.databaseMode"></a>

```typescript
public readonly databaseMode: string;
```

- *Type:* string

Specifies the default behavior of the replication's handling of PostgreSQL- compatible endpoints that require some additional configuration, such as Babelfish endpoints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#database_mode DmsEndpoint#database_mode}

---

##### `ddlArtifactsSchema`<sup>Optional</sup> <a name="ddlArtifactsSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.ddlArtifactsSchema"></a>

```typescript
public readonly ddlArtifactsSchema: string;
```

- *Type:* string

The schema in which the operational DDL database artifacts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#ddl_artifacts_schema DmsEndpoint#ddl_artifacts_schema}

---

##### `executeTimeout`<sup>Optional</sup> <a name="executeTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.executeTimeout"></a>

```typescript
public readonly executeTimeout: number;
```

- *Type:* number

Sets the client statement timeout for the PostgreSQL instance, in seconds. The default value is 60 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#execute_timeout DmsEndpoint#execute_timeout}

---

##### `failTasksOnLobTruncation`<sup>Optional</sup> <a name="failTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.failTasksOnLobTruncation"></a>

```typescript
public readonly failTasksOnLobTruncation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, this value causes a task to fail if the actual size of a LOB column is greater than the specified LobMaxSize.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#fail_tasks_on_lob_truncation DmsEndpoint#fail_tasks_on_lob_truncation}

---

##### `heartbeatEnable`<sup>Optional</sup> <a name="heartbeatEnable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatEnable"></a>

```typescript
public readonly heartbeatEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

The write-ahead log (WAL) heartbeat feature mimics a dummy transaction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#heartbeat_enable DmsEndpoint#heartbeat_enable}

---

##### `heartbeatFrequency`<sup>Optional</sup> <a name="heartbeatFrequency" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatFrequency"></a>

```typescript
public readonly heartbeatFrequency: number;
```

- *Type:* number

Sets the WAL heartbeat frequency (in minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#heartbeat_frequency DmsEndpoint#heartbeat_frequency}

---

##### `heartbeatSchema`<sup>Optional</sup> <a name="heartbeatSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.heartbeatSchema"></a>

```typescript
public readonly heartbeatSchema: string;
```

- *Type:* string

Sets the schema in which the heartbeat artifacts are created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#heartbeat_schema DmsEndpoint#heartbeat_schema}

---

##### `mapBooleanAsBoolean`<sup>Optional</sup> <a name="mapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.mapBooleanAsBoolean"></a>

```typescript
public readonly mapBooleanAsBoolean: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, lets PostgreSQL migrate the boolean type as boolean.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

Specifies the maximum size (in KB) of any .csv file used to transfer data to PostgreSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `pluginName`<sup>Optional</sup> <a name="pluginName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

Specifies the plugin to use to create a replication slot.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#plugin_name DmsEndpoint#plugin_name}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the PostgreSQL endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `slotName`<sup>Optional</sup> <a name="slotName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings.property.slotName"></a>

```typescript
public readonly slotName: string;
```

- *Type:* string

Sets the name of a previously created logical replication slot for a change data capture (CDC) load of the PostgreSQL source instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#slot_name DmsEndpoint#slot_name}

---

### DmsEndpointRedisSettings <a name="DmsEndpointRedisSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointRedisSettings: dmsEndpoint.DmsEndpointRedisSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword">authPassword</a></code> | <code>string</code> | The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authType">authType</a></code> | <code>string</code> | The type of authentication to perform when connecting to a Redis target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName">authUserName</a></code> | <code>string</code> | The user name provided with the auth-role option of the AuthType setting for a Redis target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.port">port</a></code> | <code>number</code> | Transmission Control Protocol (TCP) port for the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.serverName">serverName</a></code> | <code>string</code> | Fully qualified domain name of the endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol">sslSecurityProtocol</a></code> | <code>string</code> | The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include plaintext and ssl-encryption. |

---

##### `authPassword`<sup>Optional</sup> <a name="authPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authPassword"></a>

```typescript
public readonly authPassword: string;
```

- *Type:* string

The password provided with the auth-role and auth-token options of the AuthType setting for a Redis target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#auth_password DmsEndpoint#auth_password}

---

##### `authType`<sup>Optional</sup> <a name="authType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

The type of authentication to perform when connecting to a Redis target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#auth_type DmsEndpoint#auth_type}

---

##### `authUserName`<sup>Optional</sup> <a name="authUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.authUserName"></a>

```typescript
public readonly authUserName: string;
```

- *Type:* string

The user name provided with the auth-role option of the AuthType setting for a Redis target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#auth_user_name DmsEndpoint#auth_user_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Transmission Control Protocol (TCP) port for the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#port DmsEndpoint#port}

---

##### `serverName`<sup>Optional</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Fully qualified domain name of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#server_name DmsEndpoint#server_name}

---

##### `sslCaCertificateArn`<sup>Optional</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslCaCertificateArn"></a>

```typescript
public readonly sslCaCertificateArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) for the certificate authority (CA) that DMS uses to connect to your Redis target endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#ssl_ca_certificate_arn DmsEndpoint#ssl_ca_certificate_arn}

---

##### `sslSecurityProtocol`<sup>Optional</sup> <a name="sslSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings.property.sslSecurityProtocol"></a>

```typescript
public readonly sslSecurityProtocol: string;
```

- *Type:* string

The connection to a Redis target endpoint using Transport Layer Security (TLS). Valid values include plaintext and ssl-encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#ssl_security_protocol DmsEndpoint#ssl_security_protocol}

---

### DmsEndpointRedshiftSettings <a name="DmsEndpointRedshiftSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointRedshiftSettings: dmsEndpoint.DmsEndpointRedshiftSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.acceptAnyDate">acceptAnyDate</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.afterConnectScript">afterConnectScript</a></code> | <code>string</code> | Code to run after connecting. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>boolean \| cdktn.IResolvable</code> | If Amazon Redshift is configured to support case sensitive schema names, set CaseSensitiveNames to true. The default is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.compUpdate">compUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | If you set CompUpdate to true Amazon Redshift applies automatic compression if the table is empty. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.connectionTimeout">connectionTimeout</a></code> | <code>number</code> | A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.dateFormat">dateFormat</a></code> | <code>string</code> | The date format that you are using. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.emptyAsNull">emptyAsNull</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | The type of server-side encryption that you want to use for your data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.explicitIds">explicitIds</a></code> | <code>boolean \| cdktn.IResolvable</code> | This setting is only valid for a full-load migration task. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.fileTransferUploadStreams">fileTransferUploadStreams</a></code> | <code>number</code> | The number of threads used to upload a single file. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.loadTimeout">loadTimeout</a></code> | <code>number</code> | The amount of time to wait (in milliseconds) before timing out of operations performed by AWS DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, lets Redshift migrate the boolean type as boolean. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB). |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.removeQuotes">removeQuotes</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that specifies to remove surrounding quotation marks from strings in the incoming data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceChars">replaceChars</a></code> | <code>string</code> | A value that specifies to replaces the invalid characters specified in ReplaceInvalidChars, substituting the specified characters instead. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceInvalidChars">replaceInvalidChars</a></code> | <code>string</code> | A list of characters that you want to replace. Use with ReplaceChars. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Amazon Redshift endpoint connection details. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>string</code> | The AWS KMS key ID. If you are using SSE_KMS for the EncryptionMode, provide this key ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.timeFormat">timeFormat</a></code> | <code>string</code> | The time format that you want to use. Valid values are auto (case-sensitive), 'timeformat_string', 'epochsecs', or 'epochmillisecs'. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.trimBlanks">trimBlanks</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that specifies to remove the trailing white space characters from a VARCHAR string. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.truncateColumns">truncateColumns</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.writeBufferSize">writeBufferSize</a></code> | <code>number</code> | The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB). |

---

##### `acceptAnyDate`<sup>Optional</sup> <a name="acceptAnyDate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.acceptAnyDate"></a>

```typescript
public readonly acceptAnyDate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that indicates to allow any date format, including invalid formats such as 00/00/00 00:00:00, to be loaded without generating an error.

You can choose true or false (the default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#accept_any_date DmsEndpoint#accept_any_date}

---

##### `afterConnectScript`<sup>Optional</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.afterConnectScript"></a>

```typescript
public readonly afterConnectScript: string;
```

- *Type:* string

Code to run after connecting.

This parameter should contain the code itself, not the name of a file containing the code.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#after_connect_script DmsEndpoint#after_connect_script}

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

An S3 folder where the comma-separated-value (.csv) files are stored before being uploaded to the target Redshift cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the intermediate S3 bucket used to store .csv files before uploading data to Redshift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}

---

##### `caseSensitiveNames`<sup>Optional</sup> <a name="caseSensitiveNames" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.caseSensitiveNames"></a>

```typescript
public readonly caseSensitiveNames: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If Amazon Redshift is configured to support case sensitive schema names, set CaseSensitiveNames to true. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#case_sensitive_names DmsEndpoint#case_sensitive_names}

---

##### `compUpdate`<sup>Optional</sup> <a name="compUpdate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.compUpdate"></a>

```typescript
public readonly compUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If you set CompUpdate to true Amazon Redshift applies automatic compression if the table is empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#comp_update DmsEndpoint#comp_update}

---

##### `connectionTimeout`<sup>Optional</sup> <a name="connectionTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.connectionTimeout"></a>

```typescript
public readonly connectionTimeout: number;
```

- *Type:* number

A value that sets the amount of time to wait (in milliseconds) before timing out, beginning from when you initially establish a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#connection_timeout DmsEndpoint#connection_timeout}

---

##### `dateFormat`<sup>Optional</sup> <a name="dateFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

The date format that you are using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#date_format DmsEndpoint#date_format}

---

##### `emptyAsNull`<sup>Optional</sup> <a name="emptyAsNull" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.emptyAsNull"></a>

```typescript
public readonly emptyAsNull: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as NULL.

A value of true sets empty CHAR and VARCHAR fields to null. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#empty_as_null DmsEndpoint#empty_as_null}

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

The type of server-side encryption that you want to use for your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}

---

##### `explicitIds`<sup>Optional</sup> <a name="explicitIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.explicitIds"></a>

```typescript
public readonly explicitIds: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This setting is only valid for a full-load migration task.

Set ExplicitIds to true to have tables with IDENTITY columns override their auto-generated values with explicit values loaded from the source data files used to populate the tables. The default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#explicit_ids DmsEndpoint#explicit_ids}

---

##### `fileTransferUploadStreams`<sup>Optional</sup> <a name="fileTransferUploadStreams" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.fileTransferUploadStreams"></a>

```typescript
public readonly fileTransferUploadStreams: number;
```

- *Type:* number

The number of threads used to upload a single file.

This parameter accepts a value from 1 through 64. It defaults to 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#file_transfer_upload_streams DmsEndpoint#file_transfer_upload_streams}

---

##### `loadTimeout`<sup>Optional</sup> <a name="loadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.loadTimeout"></a>

```typescript
public readonly loadTimeout: number;
```

- *Type:* number

The amount of time to wait (in milliseconds) before timing out of operations performed by AWS DMS on a Redshift cluster, such as Redshift COPY, INSERT, DELETE, and UPDATE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#load_timeout DmsEndpoint#load_timeout}

---

##### `mapBooleanAsBoolean`<sup>Optional</sup> <a name="mapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.mapBooleanAsBoolean"></a>

```typescript
public readonly mapBooleanAsBoolean: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, lets Redshift migrate the boolean type as boolean.

By default, Redshift migrates booleans as varchar(1). You must set this setting on both the source and target endpoints for it to take effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#map_boolean_as_boolean DmsEndpoint#map_boolean_as_boolean}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

The maximum size (in KB) of any .csv file used to load data on an S3 bucket and transfer data to Amazon Redshift. It defaults to 1048576KB (1 GB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `removeQuotes`<sup>Optional</sup> <a name="removeQuotes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.removeQuotes"></a>

```typescript
public readonly removeQuotes: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that specifies to remove surrounding quotation marks from strings in the incoming data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#remove_quotes DmsEndpoint#remove_quotes}

---

##### `replaceChars`<sup>Optional</sup> <a name="replaceChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceChars"></a>

```typescript
public readonly replaceChars: string;
```

- *Type:* string

A value that specifies to replaces the invalid characters specified in ReplaceInvalidChars, substituting the specified characters instead.

The default is "?".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#replace_chars DmsEndpoint#replace_chars}

---

##### `replaceInvalidChars`<sup>Optional</sup> <a name="replaceInvalidChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.replaceInvalidChars"></a>

```typescript
public readonly replaceInvalidChars: string;
```

- *Type:* string

A list of characters that you want to replace. Use with ReplaceChars.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#replace_invalid_chars DmsEndpoint#replace_invalid_chars}

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the Amazon Redshift endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serverSideEncryptionKmsKeyId"></a>

```typescript
public readonly serverSideEncryptionKmsKeyId: string;
```

- *Type:* string

The AWS KMS key ID. If you are using SSE_KMS for the EncryptionMode, provide this key ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift service.

The role must allow the iam:PassRole action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

##### `timeFormat`<sup>Optional</sup> <a name="timeFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

The time format that you want to use. Valid values are auto (case-sensitive), 'timeformat_string', 'epochsecs', or 'epochmillisecs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#time_format DmsEndpoint#time_format}

---

##### `trimBlanks`<sup>Optional</sup> <a name="trimBlanks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.trimBlanks"></a>

```typescript
public readonly trimBlanks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that specifies to remove the trailing white space characters from a VARCHAR string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#trim_blanks DmsEndpoint#trim_blanks}

---

##### `truncateColumns`<sup>Optional</sup> <a name="truncateColumns" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.truncateColumns"></a>

```typescript
public readonly truncateColumns: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that specifies to truncate data in columns to the appropriate number of characters, so that the data fits in the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#truncate_columns DmsEndpoint#truncate_columns}

---

##### `writeBufferSize`<sup>Optional</sup> <a name="writeBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings.property.writeBufferSize"></a>

```typescript
public readonly writeBufferSize: number;
```

- *Type:* number

The size (in KB) of the in-memory file write buffer used when generating .csv files on the local disk at the DMS replication instance. The default value is 1000 (buffer size is 1000KB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#write_buffer_size DmsEndpoint#write_buffer_size}

---

### DmsEndpointS3Settings <a name="DmsEndpointS3Settings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointS3Settings: dmsEndpoint.DmsEndpointS3Settings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName">addColumnName</a></code> | <code>boolean \| cdktn.IResolvable</code> | An optional parameter that, when set to true or y, you can use to add column name information to the .csv output file. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addTrailingPaddingCharacter">addTrailingPaddingCharacter</a></code> | <code>boolean \| cdktn.IResolvable</code> | Use the S3 target endpoint setting AddTrailingPaddingCharacter to add padding on string data. The default value is false. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | An optional parameter to set a folder name in the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketName">bucketName</a></code> | <code>string</code> | The name of the S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects">cannedAclForObjects</a></code> | <code>string</code> | A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates">cdcInsertsAndUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly">cdcInsertsOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the false setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval">cdcMaxBatchInterval</a></code> | <code>number</code> | Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize">cdcMinFileSize</a></code> | <code>number</code> | Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath">cdcPath</a></code> | <code>string</code> | Specifies the folder path of CDC files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.compressionType">compressionType</a></code> | <code>string</code> | An optional parameter. When set to GZIP it enables the service to compress the target files. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter">csvDelimiter</a></code> | <code>string</code> | The delimiter used to separate columns in the .csv file for both source and target. The default is a comma. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue">csvNoSupValue</a></code> | <code>string</code> | This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue">csvNullValue</a></code> | <code>string</code> | An optional parameter that specifies how AWS DMS treats null values. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>string</code> | The delimiter used to separate rows in the .csv file for both source and target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat">dataFormat</a></code> | <code>string</code> | The format of the data that you want to use for output. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize">dataPageSize</a></code> | <code>number</code> | The size of one data page in bytes. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter">datePartitionDelimiter</a></code> | <code>string</code> | Specifies a date separating delimiter to use during folder partitioning. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled">datePartitionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, this parameter partitions S3 bucket folders based on transaction commit dates. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence">datePartitionSequence</a></code> | <code>string</code> | Identifies the sequence of the date format to use during folder partitioning. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionTimezone">datePartitionTimezone</a></code> | <code>string</code> | When creating an S3 target endpoint, set DatePartitionTimezone to convert the current UTC time into a specified time zone. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit">dictPageSizeLimit</a></code> | <code>number</code> | The maximum size of an encoded dictionary page of a column. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics">enableStatistics</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that enables statistics for Parquet pages and row groups. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encodingType">encodingType</a></code> | <code>string</code> | The type of encoding that you're using. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | The type of server-side encryption that you want to use for your data. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | To specify a bucket owner and prevent sniping, you can use the ExpectedBucketOwner endpoint setting. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition">externalTableDefinition</a></code> | <code>string</code> | The external table definition. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.glueCatalogGeneration">glueCatalogGeneration</a></code> | <code>boolean \| cdktn.IResolvable</code> | When true, allows AWS Glue to catalog your S3 bucket. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows">ignoreHeaderRows</a></code> | <code>number</code> | When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad">includeOpForFullLoad</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>boolean \| cdktn.IResolvable</code> | A value that specifies the precision of any TIMESTAMP column values that are written to an Amazon S3 object file in .parquet format. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion">parquetVersion</a></code> | <code>string</code> | The version of the Apache Parquet format that you want to use: parquet_1_0 (the default) or parquet_2_0. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions">preserveTransactions</a></code> | <code>boolean \| cdktn.IResolvable</code> | If this setting is set to true, AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by CdcPath. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180">rfc4180</a></code> | <code>boolean \| cdktn.IResolvable</code> | For an S3 source, when this value is set to true or y, each leading double quotation mark has to be followed by an ending double quotation mark. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength">rowGroupLength</a></code> | <code>number</code> | The number of rows in a row group. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>string</code> | If you are using SSE_KMS for the EncryptionMode, provide the AWS KMS key ID. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | A required parameter that specifies the Amazon Resource Name (ARN) used by the service to access the IAM role. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName">timestampColumnName</a></code> | <code>string</code> | A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue">useCsvNoSupValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If this setting is set to true for columns not included in the supplemental log, AWS DMS uses the value specified by CsvNoSupValue. If this setting isn't set or is set to false, AWS DMS uses the null value for these columns. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp">useTaskStartTimeForFullLoadTimestamp</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target. |

---

##### `addColumnName`<sup>Optional</sup> <a name="addColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addColumnName"></a>

```typescript
public readonly addColumnName: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

An optional parameter that, when set to true or y, you can use to add column name information to the .csv output file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#add_column_name DmsEndpoint#add_column_name}

---

##### `addTrailingPaddingCharacter`<sup>Optional</sup> <a name="addTrailingPaddingCharacter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.addTrailingPaddingCharacter"></a>

```typescript
public readonly addTrailingPaddingCharacter: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Use the S3 target endpoint setting AddTrailingPaddingCharacter to add padding on string data. The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#add_trailing_padding_character DmsEndpoint#add_trailing_padding_character}

---

##### `bucketFolder`<sup>Optional</sup> <a name="bucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

An optional parameter to set a folder name in the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#bucket_folder DmsEndpoint#bucket_folder}

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

The name of the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#bucket_name DmsEndpoint#bucket_name}

---

##### `cannedAclForObjects`<sup>Optional</sup> <a name="cannedAclForObjects" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cannedAclForObjects"></a>

```typescript
public readonly cannedAclForObjects: string;
```

- *Type:* string

A value that enables AWS DMS to specify a predefined (canned) access control list (ACL) for objects created in an Amazon S3 bucket as .csv or .parquet files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#canned_acl_for_objects DmsEndpoint#canned_acl_for_objects}

---

##### `cdcInsertsAndUpdates`<sup>Optional</sup> <a name="cdcInsertsAndUpdates" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsAndUpdates"></a>

```typescript
public readonly cdcInsertsAndUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that enables a change data capture (CDC) load to write INSERT and UPDATE operations to .csv or .parquet (columnar storage) output files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#cdc_inserts_and_updates DmsEndpoint#cdc_inserts_and_updates}

---

##### `cdcInsertsOnly`<sup>Optional</sup> <a name="cdcInsertsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcInsertsOnly"></a>

```typescript
public readonly cdcInsertsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that enables a change data capture (CDC) load to write only INSERT operations to .csv or columnar storage (.parquet) output files. By default (the false setting), the first field in a .csv or .parquet record contains the letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was inserted, updated, or deleted at the source database for a CDC load to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#cdc_inserts_only DmsEndpoint#cdc_inserts_only}

---

##### `cdcMaxBatchInterval`<sup>Optional</sup> <a name="cdcMaxBatchInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMaxBatchInterval"></a>

```typescript
public readonly cdcMaxBatchInterval: number;
```

- *Type:* number

Maximum length of the interval, defined in seconds, after which to output a file to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#cdc_max_batch_interval DmsEndpoint#cdc_max_batch_interval}

---

##### `cdcMinFileSize`<sup>Optional</sup> <a name="cdcMinFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcMinFileSize"></a>

```typescript
public readonly cdcMinFileSize: number;
```

- *Type:* number

Minimum file size, defined in kilobytes, to reach for a file output to Amazon S3.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#cdc_min_file_size DmsEndpoint#cdc_min_file_size}

---

##### `cdcPath`<sup>Optional</sup> <a name="cdcPath" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.cdcPath"></a>

```typescript
public readonly cdcPath: string;
```

- *Type:* string

Specifies the folder path of CDC files.

For an S3 source, this setting is required if a task captures change data; otherwise, it's optional.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#cdc_path DmsEndpoint#cdc_path}

---

##### `compressionType`<sup>Optional</sup> <a name="compressionType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

An optional parameter. When set to GZIP it enables the service to compress the target files.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#compression_type DmsEndpoint#compression_type}

---

##### `csvDelimiter`<sup>Optional</sup> <a name="csvDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvDelimiter"></a>

```typescript
public readonly csvDelimiter: string;
```

- *Type:* string

The delimiter used to separate columns in the .csv file for both source and target. The default is a comma.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#csv_delimiter DmsEndpoint#csv_delimiter}

---

##### `csvNoSupValue`<sup>Optional</sup> <a name="csvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNoSupValue"></a>

```typescript
public readonly csvNoSupValue: string;
```

- *Type:* string

This setting only applies if your Amazon S3 output files during a change data capture (CDC) load are written in .csv format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#csv_no_sup_value DmsEndpoint#csv_no_sup_value}

---

##### `csvNullValue`<sup>Optional</sup> <a name="csvNullValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvNullValue"></a>

```typescript
public readonly csvNullValue: string;
```

- *Type:* string

An optional parameter that specifies how AWS DMS treats null values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#csv_null_value DmsEndpoint#csv_null_value}

---

##### `csvRowDelimiter`<sup>Optional</sup> <a name="csvRowDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.csvRowDelimiter"></a>

```typescript
public readonly csvRowDelimiter: string;
```

- *Type:* string

The delimiter used to separate rows in the .csv file for both source and target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#csv_row_delimiter DmsEndpoint#csv_row_delimiter}

---

##### `dataFormat`<sup>Optional</sup> <a name="dataFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

The format of the data that you want to use for output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#data_format DmsEndpoint#data_format}

---

##### `dataPageSize`<sup>Optional</sup> <a name="dataPageSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dataPageSize"></a>

```typescript
public readonly dataPageSize: number;
```

- *Type:* number

The size of one data page in bytes.

This parameter defaults to 1024 * 1024 bytes (1 MiB). This number is used for .parquet file format only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#data_page_size DmsEndpoint#data_page_size}

---

##### `datePartitionDelimiter`<sup>Optional</sup> <a name="datePartitionDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionDelimiter"></a>

```typescript
public readonly datePartitionDelimiter: string;
```

- *Type:* string

Specifies a date separating delimiter to use during folder partitioning.

The default value is SLASH. Use this parameter when DatePartitionedEnabled is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#date_partition_delimiter DmsEndpoint#date_partition_delimiter}

---

##### `datePartitionEnabled`<sup>Optional</sup> <a name="datePartitionEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionEnabled"></a>

```typescript
public readonly datePartitionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, this parameter partitions S3 bucket folders based on transaction commit dates.

The default value is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#date_partition_enabled DmsEndpoint#date_partition_enabled}

---

##### `datePartitionSequence`<sup>Optional</sup> <a name="datePartitionSequence" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionSequence"></a>

```typescript
public readonly datePartitionSequence: string;
```

- *Type:* string

Identifies the sequence of the date format to use during folder partitioning.

The default value is YYYYMMDD. Use this parameter when DatePartitionedEnabled is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#date_partition_sequence DmsEndpoint#date_partition_sequence}

---

##### `datePartitionTimezone`<sup>Optional</sup> <a name="datePartitionTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.datePartitionTimezone"></a>

```typescript
public readonly datePartitionTimezone: string;
```

- *Type:* string

When creating an S3 target endpoint, set DatePartitionTimezone to convert the current UTC time into a specified time zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#date_partition_timezone DmsEndpoint#date_partition_timezone}

---

##### `dictPageSizeLimit`<sup>Optional</sup> <a name="dictPageSizeLimit" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.dictPageSizeLimit"></a>

```typescript
public readonly dictPageSizeLimit: number;
```

- *Type:* number

The maximum size of an encoded dictionary page of a column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#dict_page_size_limit DmsEndpoint#dict_page_size_limit}

---

##### `enableStatistics`<sup>Optional</sup> <a name="enableStatistics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.enableStatistics"></a>

```typescript
public readonly enableStatistics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that enables statistics for Parquet pages and row groups.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#enable_statistics DmsEndpoint#enable_statistics}

---

##### `encodingType`<sup>Optional</sup> <a name="encodingType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encodingType"></a>

```typescript
public readonly encodingType: string;
```

- *Type:* string

The type of encoding that you're using.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#encoding_type DmsEndpoint#encoding_type}

---

##### `encryptionMode`<sup>Optional</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

The type of server-side encryption that you want to use for your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#encryption_mode DmsEndpoint#encryption_mode}

---

##### `expectedBucketOwner`<sup>Optional</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

To specify a bucket owner and prevent sniping, you can use the ExpectedBucketOwner endpoint setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#expected_bucket_owner DmsEndpoint#expected_bucket_owner}

---

##### `externalTableDefinition`<sup>Optional</sup> <a name="externalTableDefinition" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.externalTableDefinition"></a>

```typescript
public readonly externalTableDefinition: string;
```

- *Type:* string

The external table definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#external_table_definition DmsEndpoint#external_table_definition}

---

##### `glueCatalogGeneration`<sup>Optional</sup> <a name="glueCatalogGeneration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.glueCatalogGeneration"></a>

```typescript
public readonly glueCatalogGeneration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When true, allows AWS Glue to catalog your S3 bucket.

Creating an AWS Glue catalog lets you use Athena to query your data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#glue_catalog_generation DmsEndpoint#glue_catalog_generation}

---

##### `ignoreHeaderRows`<sup>Optional</sup> <a name="ignoreHeaderRows" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.ignoreHeaderRows"></a>

```typescript
public readonly ignoreHeaderRows: number;
```

- *Type:* number

When this value is set to 1, AWS DMS ignores the first row header in a .csv file. A value of 1 turns on the feature; a value of 0 turns off the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#ignore_header_rows DmsEndpoint#ignore_header_rows}

---

##### `includeOpForFullLoad`<sup>Optional</sup> <a name="includeOpForFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.includeOpForFullLoad"></a>

```typescript
public readonly includeOpForFullLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that enables a full load to write INSERT operations to the comma-separated value (.csv) output files only to indicate how the rows were added to the source database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#include_op_for_full_load DmsEndpoint#include_op_for_full_load}

---

##### `maxFileSize`<sup>Optional</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

A value that specifies the maximum size (in KB) of any .csv file to be created while migrating to an S3 target during full load.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#max_file_size DmsEndpoint#max_file_size}

---

##### `parquetTimestampInMillisecond`<sup>Optional</sup> <a name="parquetTimestampInMillisecond" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetTimestampInMillisecond"></a>

```typescript
public readonly parquetTimestampInMillisecond: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

A value that specifies the precision of any TIMESTAMP column values that are written to an Amazon S3 object file in .parquet format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#parquet_timestamp_in_millisecond DmsEndpoint#parquet_timestamp_in_millisecond}

---

##### `parquetVersion`<sup>Optional</sup> <a name="parquetVersion" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.parquetVersion"></a>

```typescript
public readonly parquetVersion: string;
```

- *Type:* string

The version of the Apache Parquet format that you want to use: parquet_1_0 (the default) or parquet_2_0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#parquet_version DmsEndpoint#parquet_version}

---

##### `preserveTransactions`<sup>Optional</sup> <a name="preserveTransactions" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.preserveTransactions"></a>

```typescript
public readonly preserveTransactions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

If this setting is set to true, AWS DMS saves the transaction order for a change data capture (CDC) load on the Amazon S3 target specified by CdcPath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#preserve_transactions DmsEndpoint#preserve_transactions}

---

##### `rfc4180`<sup>Optional</sup> <a name="rfc4180" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rfc4180"></a>

```typescript
public readonly rfc4180: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

For an S3 source, when this value is set to true or y, each leading double quotation mark has to be followed by an ending double quotation mark.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#rfc_4180 DmsEndpoint#rfc_4180}

---

##### `rowGroupLength`<sup>Optional</sup> <a name="rowGroupLength" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.rowGroupLength"></a>

```typescript
public readonly rowGroupLength: number;
```

- *Type:* number

The number of rows in a row group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#row_group_length DmsEndpoint#row_group_length}

---

##### `serverSideEncryptionKmsKeyId`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serverSideEncryptionKmsKeyId"></a>

```typescript
public readonly serverSideEncryptionKmsKeyId: string;
```

- *Type:* string

If you are using SSE_KMS for the EncryptionMode, provide the AWS KMS key ID.

The key that you use needs an attached policy that enables IAM user permissions and allows use of the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#server_side_encryption_kms_key_id DmsEndpoint#server_side_encryption_kms_key_id}

---

##### `serviceAccessRoleArn`<sup>Optional</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

A required parameter that specifies the Amazon Resource Name (ARN) used by the service to access the IAM role.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#service_access_role_arn DmsEndpoint#service_access_role_arn}

---

##### `timestampColumnName`<sup>Optional</sup> <a name="timestampColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.timestampColumnName"></a>

```typescript
public readonly timestampColumnName: string;
```

- *Type:* string

A value that when nonblank causes AWS DMS to add a column with timestamp information to the endpoint data for an Amazon S3 target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#timestamp_column_name DmsEndpoint#timestamp_column_name}

---

##### `useCsvNoSupValue`<sup>Optional</sup> <a name="useCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useCsvNoSupValue"></a>

```typescript
public readonly useCsvNoSupValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This setting applies if the S3 output files during a change data capture (CDC) load are written in .csv format. If this setting is set to true for columns not included in the supplemental log, AWS DMS uses the value specified by CsvNoSupValue. If this setting isn't set or is set to false, AWS DMS uses the null value for these columns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#use_csv_no_sup_value DmsEndpoint#use_csv_no_sup_value}

---

##### `useTaskStartTimeForFullLoadTimestamp`<sup>Optional</sup> <a name="useTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings.property.useTaskStartTimeForFullLoadTimestamp"></a>

```typescript
public readonly useTaskStartTimeForFullLoadTimestamp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, this parameter uses the task start time as the timestamp column value instead of the time data is written to target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#use_task_start_time_for_full_load_timestamp DmsEndpoint#use_task_start_time_for_full_load_timestamp}

---

### DmsEndpointSybaseSettings <a name="DmsEndpointSybaseSettings" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointSybaseSettings: dmsEndpoint.DmsEndpointSybaseSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the SAP SAE endpoint connection details. |

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

The full Amazon Resource Name (ARN) of the IAM role that specifies AWS DMS as the trusted entity and grants the required permissions to access the value in SecretsManagerSecret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_access_role_arn DmsEndpoint#secrets_manager_access_role_arn}

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

The full ARN, partial ARN, or display name of the SecretsManagerSecret that contains the SAP SAE endpoint connection details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#secrets_manager_secret_id DmsEndpoint#secrets_manager_secret_id}

---

### DmsEndpointTags <a name="DmsEndpointTags" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

const dmsEndpointTags: dmsEndpoint.DmsEndpointTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.key">key</a></code> | <code>string</code> | A key is the required name of the tag. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.value">value</a></code> | <code>string</code> | A value is the optional value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

A key is the required name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#key DmsEndpoint#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

A value is the optional value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/dms_endpoint#value DmsEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsEndpointDocDbSettingsOutputReference <a name="DmsEndpointDocDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointDocDbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetDocsToInvestigate">resetDocsToInvestigate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetExtractDocId">resetExtractDocId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetNestingLevel">resetNestingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDocsToInvestigate` <a name="resetDocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetDocsToInvestigate"></a>

```typescript
public resetDocsToInvestigate(): void
```

##### `resetExtractDocId` <a name="resetExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetExtractDocId"></a>

```typescript
public resetExtractDocId(): void
```

##### `resetNestingLevel` <a name="resetNestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetNestingLevel"></a>

```typescript
public resetNestingLevel(): void
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigateInput">docsToInvestigateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocIdInput">extractDocIdInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevelInput">nestingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate">docsToInvestigate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocId">extractDocId</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevel">nestingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `docsToInvestigateInput`<sup>Optional</sup> <a name="docsToInvestigateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigateInput"></a>

```typescript
public readonly docsToInvestigateInput: number;
```

- *Type:* number

---

##### `extractDocIdInput`<sup>Optional</sup> <a name="extractDocIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocIdInput"></a>

```typescript
public readonly extractDocIdInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nestingLevelInput`<sup>Optional</sup> <a name="nestingLevelInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevelInput"></a>

```typescript
public readonly nestingLevelInput: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `docsToInvestigate`<sup>Required</sup> <a name="docsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.docsToInvestigate"></a>

```typescript
public readonly docsToInvestigate: number;
```

- *Type:* number

---

##### `extractDocId`<sup>Required</sup> <a name="extractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.extractDocId"></a>

```typescript
public readonly extractDocId: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nestingLevel`<sup>Required</sup> <a name="nestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.nestingLevel"></a>

```typescript
public readonly nestingLevel: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointDocDbSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDocDbSettings">DmsEndpointDocDbSettings</a>

---


### DmsEndpointDynamoDbSettingsOutputReference <a name="DmsEndpointDynamoDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.resetServiceAccessRoleArn"></a>

```typescript
public resetServiceAccessRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointDynamoDbSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointDynamoDbSettings">DmsEndpointDynamoDbSettings</a>

---


### DmsEndpointElasticsearchSettingsOutputReference <a name="DmsEndpointElasticsearchSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetEndpointUri">resetEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration">resetErrorRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage">resetFullLoadErrorPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpointUri` <a name="resetEndpointUri" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetEndpointUri"></a>

```typescript
public resetEndpointUri(): void
```

##### `resetErrorRetryDuration` <a name="resetErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetErrorRetryDuration"></a>

```typescript
public resetErrorRetryDuration(): void
```

##### `resetFullLoadErrorPercentage` <a name="resetFullLoadErrorPercentage" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetFullLoadErrorPercentage"></a>

```typescript
public resetFullLoadErrorPercentage(): void
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.resetServiceAccessRoleArn"></a>

```typescript
public resetServiceAccessRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput">endpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput">errorRetryDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput">fullLoadErrorPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration">errorRetryDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage">fullLoadErrorPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointUriInput`<sup>Optional</sup> <a name="endpointUriInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUriInput"></a>

```typescript
public readonly endpointUriInput: string;
```

- *Type:* string

---

##### `errorRetryDurationInput`<sup>Optional</sup> <a name="errorRetryDurationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDurationInput"></a>

```typescript
public readonly errorRetryDurationInput: number;
```

- *Type:* number

---

##### `fullLoadErrorPercentageInput`<sup>Optional</sup> <a name="fullLoadErrorPercentageInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentageInput"></a>

```typescript
public readonly fullLoadErrorPercentageInput: number;
```

- *Type:* number

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `errorRetryDuration`<sup>Required</sup> <a name="errorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.errorRetryDuration"></a>

```typescript
public readonly errorRetryDuration: number;
```

- *Type:* number

---

##### `fullLoadErrorPercentage`<sup>Required</sup> <a name="fullLoadErrorPercentage" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.fullLoadErrorPercentage"></a>

```typescript
public readonly fullLoadErrorPercentage: number;
```

- *Type:* number

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointElasticsearchSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointElasticsearchSettings">DmsEndpointElasticsearchSettings</a>

---


### DmsEndpointGcpMySqlSettingsOutputReference <a name="DmsEndpointGcpMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetAfterConnectScript">resetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch">resetCleanSourceMetadataOnMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetEventsPollInterval">resetEventsPollInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetParallelLoadThreads">resetParallelLoadThreads</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerTimezone">resetServerTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterConnectScript` <a name="resetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetAfterConnectScript"></a>

```typescript
public resetAfterConnectScript(): void
```

##### `resetCleanSourceMetadataOnMismatch` <a name="resetCleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch"></a>

```typescript
public resetCleanSourceMetadataOnMismatch(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetEventsPollInterval` <a name="resetEventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetEventsPollInterval"></a>

```typescript
public resetEventsPollInterval(): void
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetMaxFileSize"></a>

```typescript
public resetMaxFileSize(): void
```

##### `resetParallelLoadThreads` <a name="resetParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetParallelLoadThreads"></a>

```typescript
public resetParallelLoadThreads(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetServerTimezone` <a name="resetServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetServerTimezone"></a>

```typescript
public resetServerTimezone(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScriptInput">afterConnectScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput">cleanSourceMetadataOnMismatchInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollIntervalInput">eventsPollIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreadsInput">parallelLoadThreadsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezoneInput">serverTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">cleanSourceMetadataOnMismatch</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval">eventsPollInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads">parallelLoadThreads</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone">serverTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterConnectScriptInput`<sup>Optional</sup> <a name="afterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```typescript
public readonly afterConnectScriptInput: string;
```

- *Type:* string

---

##### `cleanSourceMetadataOnMismatchInput`<sup>Optional</sup> <a name="cleanSourceMetadataOnMismatchInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput"></a>

```typescript
public readonly cleanSourceMetadataOnMismatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `eventsPollIntervalInput`<sup>Optional</sup> <a name="eventsPollIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollIntervalInput"></a>

```typescript
public readonly eventsPollIntervalInput: number;
```

- *Type:* number

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSizeInput"></a>

```typescript
public readonly maxFileSizeInput: number;
```

- *Type:* number

---

##### `parallelLoadThreadsInput`<sup>Optional</sup> <a name="parallelLoadThreadsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreadsInput"></a>

```typescript
public readonly parallelLoadThreadsInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `serverTimezoneInput`<sup>Optional</sup> <a name="serverTimezoneInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezoneInput"></a>

```typescript
public readonly serverTimezoneInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.afterConnectScript"></a>

```typescript
public readonly afterConnectScript: string;
```

- *Type:* string

---

##### `cleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="cleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```typescript
public readonly cleanSourceMetadataOnMismatch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `eventsPollInterval`<sup>Required</sup> <a name="eventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```typescript
public readonly eventsPollInterval: number;
```

- *Type:* number

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

---

##### `parallelLoadThreads`<sup>Required</sup> <a name="parallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```typescript
public readonly parallelLoadThreads: number;
```

- *Type:* number

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `serverTimezone`<sup>Required</sup> <a name="serverTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.serverTimezone"></a>

```typescript
public readonly serverTimezone: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointGcpMySqlSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointGcpMySqlSettings">DmsEndpointGcpMySqlSettings</a>

---


### DmsEndpointIbmDb2SettingsOutputReference <a name="DmsEndpointIbmDb2SettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetCurrentLsn">resetCurrentLsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetKeepCsvFiles">resetKeepCsvFiles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetLoadTimeout">resetLoadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxKBytesPerRead">resetMaxKBytesPerRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSetDataCaptureChanges">resetSetDataCaptureChanges</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetWriteBufferSize">resetWriteBufferSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCurrentLsn` <a name="resetCurrentLsn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetCurrentLsn"></a>

```typescript
public resetCurrentLsn(): void
```

##### `resetKeepCsvFiles` <a name="resetKeepCsvFiles" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetKeepCsvFiles"></a>

```typescript
public resetKeepCsvFiles(): void
```

##### `resetLoadTimeout` <a name="resetLoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetLoadTimeout"></a>

```typescript
public resetLoadTimeout(): void
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxFileSize"></a>

```typescript
public resetMaxFileSize(): void
```

##### `resetMaxKBytesPerRead` <a name="resetMaxKBytesPerRead" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetMaxKBytesPerRead"></a>

```typescript
public resetMaxKBytesPerRead(): void
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```

##### `resetSetDataCaptureChanges` <a name="resetSetDataCaptureChanges" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetSetDataCaptureChanges"></a>

```typescript
public resetSetDataCaptureChanges(): void
```

##### `resetWriteBufferSize` <a name="resetWriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.resetWriteBufferSize"></a>

```typescript
public resetWriteBufferSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsnInput">currentLsnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFilesInput">keepCsvFilesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeoutInput">loadTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerReadInput">maxKBytesPerReadInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChangesInput">setDataCaptureChangesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSizeInput">writeBufferSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsn">currentLsn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles">keepCsvFiles</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout">loadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead">maxKBytesPerRead</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges">setDataCaptureChanges</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize">writeBufferSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentLsnInput`<sup>Optional</sup> <a name="currentLsnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsnInput"></a>

```typescript
public readonly currentLsnInput: string;
```

- *Type:* string

---

##### `keepCsvFilesInput`<sup>Optional</sup> <a name="keepCsvFilesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFilesInput"></a>

```typescript
public readonly keepCsvFilesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loadTimeoutInput`<sup>Optional</sup> <a name="loadTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeoutInput"></a>

```typescript
public readonly loadTimeoutInput: number;
```

- *Type:* number

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSizeInput"></a>

```typescript
public readonly maxFileSizeInput: number;
```

- *Type:* number

---

##### `maxKBytesPerReadInput`<sup>Optional</sup> <a name="maxKBytesPerReadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerReadInput"></a>

```typescript
public readonly maxKBytesPerReadInput: number;
```

- *Type:* number

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `setDataCaptureChangesInput`<sup>Optional</sup> <a name="setDataCaptureChangesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChangesInput"></a>

```typescript
public readonly setDataCaptureChangesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `writeBufferSizeInput`<sup>Optional</sup> <a name="writeBufferSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSizeInput"></a>

```typescript
public readonly writeBufferSizeInput: number;
```

- *Type:* number

---

##### `currentLsn`<sup>Required</sup> <a name="currentLsn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.currentLsn"></a>

```typescript
public readonly currentLsn: string;
```

- *Type:* string

---

##### `keepCsvFiles`<sup>Required</sup> <a name="keepCsvFiles" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.keepCsvFiles"></a>

```typescript
public readonly keepCsvFiles: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loadTimeout`<sup>Required</sup> <a name="loadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.loadTimeout"></a>

```typescript
public readonly loadTimeout: number;
```

- *Type:* number

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

---

##### `maxKBytesPerRead`<sup>Required</sup> <a name="maxKBytesPerRead" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.maxKBytesPerRead"></a>

```typescript
public readonly maxKBytesPerRead: number;
```

- *Type:* number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `setDataCaptureChanges`<sup>Required</sup> <a name="setDataCaptureChanges" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.setDataCaptureChanges"></a>

```typescript
public readonly setDataCaptureChanges: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `writeBufferSize`<sup>Required</sup> <a name="writeBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.writeBufferSize"></a>

```typescript
public readonly writeBufferSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2SettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointIbmDb2Settings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointIbmDb2Settings">DmsEndpointIbmDb2Settings</a>

---


### DmsEndpointKafkaSettingsOutputReference <a name="DmsEndpointKafkaSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointKafkaSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetBroker">resetBroker</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails">resetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty">resetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue">resetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations">resetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails">resetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes">resetMessageMaxBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix">resetNoHexPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable">resetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword">resetSaslPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUserName">resetSaslUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol">resetSecurityProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn">resetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn">resetSslClientCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn">resetSslClientKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword">resetSslClientKeyPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic">resetTopic</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBroker` <a name="resetBroker" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetBroker"></a>

```typescript
public resetBroker(): void
```

##### `resetIncludeControlDetails` <a name="resetIncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeControlDetails"></a>

```typescript
public resetIncludeControlDetails(): void
```

##### `resetIncludeNullAndEmpty` <a name="resetIncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```typescript
public resetIncludeNullAndEmpty(): void
```

##### `resetIncludePartitionValue` <a name="resetIncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludePartitionValue"></a>

```typescript
public resetIncludePartitionValue(): void
```

##### `resetIncludeTableAlterOperations` <a name="resetIncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```typescript
public resetIncludeTableAlterOperations(): void
```

##### `resetIncludeTransactionDetails` <a name="resetIncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetIncludeTransactionDetails"></a>

```typescript
public resetIncludeTransactionDetails(): void
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageFormat"></a>

```typescript
public resetMessageFormat(): void
```

##### `resetMessageMaxBytes` <a name="resetMessageMaxBytes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetMessageMaxBytes"></a>

```typescript
public resetMessageMaxBytes(): void
```

##### `resetNoHexPrefix` <a name="resetNoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetNoHexPrefix"></a>

```typescript
public resetNoHexPrefix(): void
```

##### `resetPartitionIncludeSchemaTable` <a name="resetPartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```typescript
public resetPartitionIncludeSchemaTable(): void
```

##### `resetSaslPassword` <a name="resetSaslPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslPassword"></a>

```typescript
public resetSaslPassword(): void
```

##### `resetSaslUserName` <a name="resetSaslUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSaslUserName"></a>

```typescript
public resetSaslUserName(): void
```

##### `resetSecurityProtocol` <a name="resetSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSecurityProtocol"></a>

```typescript
public resetSecurityProtocol(): void
```

##### `resetSslCaCertificateArn` <a name="resetSslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslCaCertificateArn"></a>

```typescript
public resetSslCaCertificateArn(): void
```

##### `resetSslClientCertificateArn` <a name="resetSslClientCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientCertificateArn"></a>

```typescript
public resetSslClientCertificateArn(): void
```

##### `resetSslClientKeyArn` <a name="resetSslClientKeyArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyArn"></a>

```typescript
public resetSslClientKeyArn(): void
```

##### `resetSslClientKeyPassword` <a name="resetSslClientKeyPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetSslClientKeyPassword"></a>

```typescript
public resetSslClientKeyPassword(): void
```

##### `resetTopic` <a name="resetTopic" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.resetTopic"></a>

```typescript
public resetTopic(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput">brokerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput">includeControlDetailsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput">includeNullAndEmptyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput">includePartitionValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput">includeTableAlterOperationsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput">includeTransactionDetailsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput">messageMaxBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput">noHexPrefixInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput">partitionIncludeSchemaTableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput">saslPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserNameInput">saslUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput">securityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput">sslCaCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput">sslClientCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput">sslClientKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput">sslClientKeyPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput">topicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker">broker</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes">messageMaxBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix">noHexPrefix</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword">saslPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserName">saslUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol">securityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn">sslClientCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn">sslClientKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword">sslClientKeyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic">topic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `brokerInput`<sup>Optional</sup> <a name="brokerInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.brokerInput"></a>

```typescript
public readonly brokerInput: string;
```

- *Type:* string

---

##### `includeControlDetailsInput`<sup>Optional</sup> <a name="includeControlDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetailsInput"></a>

```typescript
public readonly includeControlDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeNullAndEmptyInput`<sup>Optional</sup> <a name="includeNullAndEmptyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```typescript
public readonly includeNullAndEmptyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includePartitionValueInput`<sup>Optional</sup> <a name="includePartitionValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValueInput"></a>

```typescript
public readonly includePartitionValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeTableAlterOperationsInput`<sup>Optional</sup> <a name="includeTableAlterOperationsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```typescript
public readonly includeTableAlterOperationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeTransactionDetailsInput`<sup>Optional</sup> <a name="includeTransactionDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```typescript
public readonly includeTransactionDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormatInput"></a>

```typescript
public readonly messageFormatInput: string;
```

- *Type:* string

---

##### `messageMaxBytesInput`<sup>Optional</sup> <a name="messageMaxBytesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytesInput"></a>

```typescript
public readonly messageMaxBytesInput: number;
```

- *Type:* number

---

##### `noHexPrefixInput`<sup>Optional</sup> <a name="noHexPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefixInput"></a>

```typescript
public readonly noHexPrefixInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `partitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="partitionIncludeSchemaTableInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```typescript
public readonly partitionIncludeSchemaTableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `saslPasswordInput`<sup>Optional</sup> <a name="saslPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPasswordInput"></a>

```typescript
public readonly saslPasswordInput: string;
```

- *Type:* string

---

##### `saslUserNameInput`<sup>Optional</sup> <a name="saslUserNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserNameInput"></a>

```typescript
public readonly saslUserNameInput: string;
```

- *Type:* string

---

##### `securityProtocolInput`<sup>Optional</sup> <a name="securityProtocolInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocolInput"></a>

```typescript
public readonly securityProtocolInput: string;
```

- *Type:* string

---

##### `sslCaCertificateArnInput`<sup>Optional</sup> <a name="sslCaCertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```typescript
public readonly sslCaCertificateArnInput: string;
```

- *Type:* string

---

##### `sslClientCertificateArnInput`<sup>Optional</sup> <a name="sslClientCertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArnInput"></a>

```typescript
public readonly sslClientCertificateArnInput: string;
```

- *Type:* string

---

##### `sslClientKeyArnInput`<sup>Optional</sup> <a name="sslClientKeyArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArnInput"></a>

```typescript
public readonly sslClientKeyArnInput: string;
```

- *Type:* string

---

##### `sslClientKeyPasswordInput`<sup>Optional</sup> <a name="sslClientKeyPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPasswordInput"></a>

```typescript
public readonly sslClientKeyPasswordInput: string;
```

- *Type:* string

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topicInput"></a>

```typescript
public readonly topicInput: string;
```

- *Type:* string

---

##### `broker`<sup>Required</sup> <a name="broker" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.broker"></a>

```typescript
public readonly broker: string;
```

- *Type:* string

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeControlDetails"></a>

```typescript
public readonly includeControlDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeNullAndEmpty"></a>

```typescript
public readonly includeNullAndEmpty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includePartitionValue"></a>

```typescript
public readonly includePartitionValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTableAlterOperations"></a>

```typescript
public readonly includeTableAlterOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.includeTransactionDetails"></a>

```typescript
public readonly includeTransactionDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

---

##### `messageMaxBytes`<sup>Required</sup> <a name="messageMaxBytes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.messageMaxBytes"></a>

```typescript
public readonly messageMaxBytes: number;
```

- *Type:* number

---

##### `noHexPrefix`<sup>Required</sup> <a name="noHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.noHexPrefix"></a>

```typescript
public readonly noHexPrefix: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```typescript
public readonly partitionIncludeSchemaTable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `saslPassword`<sup>Required</sup> <a name="saslPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslPassword"></a>

```typescript
public readonly saslPassword: string;
```

- *Type:* string

---

##### `saslUserName`<sup>Required</sup> <a name="saslUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.saslUserName"></a>

```typescript
public readonly saslUserName: string;
```

- *Type:* string

---

##### `securityProtocol`<sup>Required</sup> <a name="securityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.securityProtocol"></a>

```typescript
public readonly securityProtocol: string;
```

- *Type:* string

---

##### `sslCaCertificateArn`<sup>Required</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslCaCertificateArn"></a>

```typescript
public readonly sslCaCertificateArn: string;
```

- *Type:* string

---

##### `sslClientCertificateArn`<sup>Required</sup> <a name="sslClientCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientCertificateArn"></a>

```typescript
public readonly sslClientCertificateArn: string;
```

- *Type:* string

---

##### `sslClientKeyArn`<sup>Required</sup> <a name="sslClientKeyArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyArn"></a>

```typescript
public readonly sslClientKeyArn: string;
```

- *Type:* string

---

##### `sslClientKeyPassword`<sup>Required</sup> <a name="sslClientKeyPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.sslClientKeyPassword"></a>

```typescript
public readonly sslClientKeyPassword: string;
```

- *Type:* string

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.topic"></a>

```typescript
public readonly topic: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointKafkaSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKafkaSettings">DmsEndpointKafkaSettings</a>

---


### DmsEndpointKinesisSettingsOutputReference <a name="DmsEndpointKinesisSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointKinesisSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails">resetIncludeControlDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty">resetIncludeNullAndEmpty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue">resetIncludePartitionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations">resetIncludeTableAlterOperations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails">resetIncludeTransactionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat">resetMessageFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetNoHexPrefix">resetNoHexPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable">resetPartitionIncludeSchemaTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn">resetStreamArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeControlDetails` <a name="resetIncludeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeControlDetails"></a>

```typescript
public resetIncludeControlDetails(): void
```

##### `resetIncludeNullAndEmpty` <a name="resetIncludeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeNullAndEmpty"></a>

```typescript
public resetIncludeNullAndEmpty(): void
```

##### `resetIncludePartitionValue` <a name="resetIncludePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludePartitionValue"></a>

```typescript
public resetIncludePartitionValue(): void
```

##### `resetIncludeTableAlterOperations` <a name="resetIncludeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTableAlterOperations"></a>

```typescript
public resetIncludeTableAlterOperations(): void
```

##### `resetIncludeTransactionDetails` <a name="resetIncludeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetIncludeTransactionDetails"></a>

```typescript
public resetIncludeTransactionDetails(): void
```

##### `resetMessageFormat` <a name="resetMessageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetMessageFormat"></a>

```typescript
public resetMessageFormat(): void
```

##### `resetNoHexPrefix` <a name="resetNoHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetNoHexPrefix"></a>

```typescript
public resetNoHexPrefix(): void
```

##### `resetPartitionIncludeSchemaTable` <a name="resetPartitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetPartitionIncludeSchemaTable"></a>

```typescript
public resetPartitionIncludeSchemaTable(): void
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetServiceAccessRoleArn"></a>

```typescript
public resetServiceAccessRoleArn(): void
```

##### `resetStreamArn` <a name="resetStreamArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.resetStreamArn"></a>

```typescript
public resetStreamArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput">includeControlDetailsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput">includeNullAndEmptyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput">includePartitionValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput">includeTableAlterOperationsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput">includeTransactionDetailsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput">messageFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefixInput">noHexPrefixInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput">partitionIncludeSchemaTableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput">streamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails">includeControlDetails</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty">includeNullAndEmpty</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue">includePartitionValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations">includeTableAlterOperations</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails">includeTransactionDetails</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat">messageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefix">noHexPrefix</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable">partitionIncludeSchemaTable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn">streamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeControlDetailsInput`<sup>Optional</sup> <a name="includeControlDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetailsInput"></a>

```typescript
public readonly includeControlDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeNullAndEmptyInput`<sup>Optional</sup> <a name="includeNullAndEmptyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmptyInput"></a>

```typescript
public readonly includeNullAndEmptyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includePartitionValueInput`<sup>Optional</sup> <a name="includePartitionValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValueInput"></a>

```typescript
public readonly includePartitionValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeTableAlterOperationsInput`<sup>Optional</sup> <a name="includeTableAlterOperationsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperationsInput"></a>

```typescript
public readonly includeTableAlterOperationsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeTransactionDetailsInput`<sup>Optional</sup> <a name="includeTransactionDetailsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetailsInput"></a>

```typescript
public readonly includeTransactionDetailsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `messageFormatInput`<sup>Optional</sup> <a name="messageFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormatInput"></a>

```typescript
public readonly messageFormatInput: string;
```

- *Type:* string

---

##### `noHexPrefixInput`<sup>Optional</sup> <a name="noHexPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefixInput"></a>

```typescript
public readonly noHexPrefixInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `partitionIncludeSchemaTableInput`<sup>Optional</sup> <a name="partitionIncludeSchemaTableInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTableInput"></a>

```typescript
public readonly partitionIncludeSchemaTableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `streamArnInput`<sup>Optional</sup> <a name="streamArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArnInput"></a>

```typescript
public readonly streamArnInput: string;
```

- *Type:* string

---

##### `includeControlDetails`<sup>Required</sup> <a name="includeControlDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeControlDetails"></a>

```typescript
public readonly includeControlDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeNullAndEmpty`<sup>Required</sup> <a name="includeNullAndEmpty" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeNullAndEmpty"></a>

```typescript
public readonly includeNullAndEmpty: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includePartitionValue`<sup>Required</sup> <a name="includePartitionValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includePartitionValue"></a>

```typescript
public readonly includePartitionValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeTableAlterOperations`<sup>Required</sup> <a name="includeTableAlterOperations" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTableAlterOperations"></a>

```typescript
public readonly includeTableAlterOperations: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeTransactionDetails`<sup>Required</sup> <a name="includeTransactionDetails" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.includeTransactionDetails"></a>

```typescript
public readonly includeTransactionDetails: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `messageFormat`<sup>Required</sup> <a name="messageFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.messageFormat"></a>

```typescript
public readonly messageFormat: string;
```

- *Type:* string

---

##### `noHexPrefix`<sup>Required</sup> <a name="noHexPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.noHexPrefix"></a>

```typescript
public readonly noHexPrefix: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `partitionIncludeSchemaTable`<sup>Required</sup> <a name="partitionIncludeSchemaTable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.partitionIncludeSchemaTable"></a>

```typescript
public readonly partitionIncludeSchemaTable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `streamArn`<sup>Required</sup> <a name="streamArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.streamArn"></a>

```typescript
public readonly streamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointKinesisSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointKinesisSettings">DmsEndpointKinesisSettings</a>

---


### DmsEndpointMicrosoftSqlServerSettingsOutputReference <a name="DmsEndpointMicrosoftSqlServerSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetBcpPacketSize">resetBcpPacketSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetControlTablesFileGroup">resetControlTablesFileGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetForceLobLookup">resetForceLobLookup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetQuerySingleAlwaysOnNode">resetQuerySingleAlwaysOnNode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetReadBackupOnly">resetReadBackupOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSafeguardPolicy">resetSafeguardPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTlogAccessMode">resetTlogAccessMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTrimSpaceInChar">resetTrimSpaceInChar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseBcpFullLoad">resetUseBcpFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseThirdPartyBackupDevice">resetUseThirdPartyBackupDevice</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBcpPacketSize` <a name="resetBcpPacketSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetBcpPacketSize"></a>

```typescript
public resetBcpPacketSize(): void
```

##### `resetControlTablesFileGroup` <a name="resetControlTablesFileGroup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetControlTablesFileGroup"></a>

```typescript
public resetControlTablesFileGroup(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetForceLobLookup` <a name="resetForceLobLookup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetForceLobLookup"></a>

```typescript
public resetForceLobLookup(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetQuerySingleAlwaysOnNode` <a name="resetQuerySingleAlwaysOnNode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetQuerySingleAlwaysOnNode"></a>

```typescript
public resetQuerySingleAlwaysOnNode(): void
```

##### `resetReadBackupOnly` <a name="resetReadBackupOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetReadBackupOnly"></a>

```typescript
public resetReadBackupOnly(): void
```

##### `resetSafeguardPolicy` <a name="resetSafeguardPolicy" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSafeguardPolicy"></a>

```typescript
public resetSafeguardPolicy(): void
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetTlogAccessMode` <a name="resetTlogAccessMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTlogAccessMode"></a>

```typescript
public resetTlogAccessMode(): void
```

##### `resetTrimSpaceInChar` <a name="resetTrimSpaceInChar" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetTrimSpaceInChar"></a>

```typescript
public resetTrimSpaceInChar(): void
```

##### `resetUseBcpFullLoad` <a name="resetUseBcpFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseBcpFullLoad"></a>

```typescript
public resetUseBcpFullLoad(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetUseThirdPartyBackupDevice` <a name="resetUseThirdPartyBackupDevice" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.resetUseThirdPartyBackupDevice"></a>

```typescript
public resetUseThirdPartyBackupDevice(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSizeInput">bcpPacketSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroupInput">controlTablesFileGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookupInput">forceLobLookupInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNodeInput">querySingleAlwaysOnNodeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnlyInput">readBackupOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicyInput">safeguardPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessModeInput">tlogAccessModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInCharInput">trimSpaceInCharInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoadInput">useBcpFullLoadInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDeviceInput">useThirdPartyBackupDeviceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize">bcpPacketSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup">controlTablesFileGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup">forceLobLookup</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode">querySingleAlwaysOnNode</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly">readBackupOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy">safeguardPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode">tlogAccessMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar">trimSpaceInChar</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad">useBcpFullLoad</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice">useThirdPartyBackupDevice</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bcpPacketSizeInput`<sup>Optional</sup> <a name="bcpPacketSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSizeInput"></a>

```typescript
public readonly bcpPacketSizeInput: number;
```

- *Type:* number

---

##### `controlTablesFileGroupInput`<sup>Optional</sup> <a name="controlTablesFileGroupInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroupInput"></a>

```typescript
public readonly controlTablesFileGroupInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `forceLobLookupInput`<sup>Optional</sup> <a name="forceLobLookupInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookupInput"></a>

```typescript
public readonly forceLobLookupInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `querySingleAlwaysOnNodeInput`<sup>Optional</sup> <a name="querySingleAlwaysOnNodeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNodeInput"></a>

```typescript
public readonly querySingleAlwaysOnNodeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `readBackupOnlyInput`<sup>Optional</sup> <a name="readBackupOnlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnlyInput"></a>

```typescript
public readonly readBackupOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `safeguardPolicyInput`<sup>Optional</sup> <a name="safeguardPolicyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicyInput"></a>

```typescript
public readonly safeguardPolicyInput: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `tlogAccessModeInput`<sup>Optional</sup> <a name="tlogAccessModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessModeInput"></a>

```typescript
public readonly tlogAccessModeInput: string;
```

- *Type:* string

---

##### `trimSpaceInCharInput`<sup>Optional</sup> <a name="trimSpaceInCharInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInCharInput"></a>

```typescript
public readonly trimSpaceInCharInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useBcpFullLoadInput`<sup>Optional</sup> <a name="useBcpFullLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoadInput"></a>

```typescript
public readonly useBcpFullLoadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `useThirdPartyBackupDeviceInput`<sup>Optional</sup> <a name="useThirdPartyBackupDeviceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDeviceInput"></a>

```typescript
public readonly useThirdPartyBackupDeviceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bcpPacketSize`<sup>Required</sup> <a name="bcpPacketSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.bcpPacketSize"></a>

```typescript
public readonly bcpPacketSize: number;
```

- *Type:* number

---

##### `controlTablesFileGroup`<sup>Required</sup> <a name="controlTablesFileGroup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.controlTablesFileGroup"></a>

```typescript
public readonly controlTablesFileGroup: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `forceLobLookup`<sup>Required</sup> <a name="forceLobLookup" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.forceLobLookup"></a>

```typescript
public readonly forceLobLookup: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `querySingleAlwaysOnNode`<sup>Required</sup> <a name="querySingleAlwaysOnNode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.querySingleAlwaysOnNode"></a>

```typescript
public readonly querySingleAlwaysOnNode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `readBackupOnly`<sup>Required</sup> <a name="readBackupOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.readBackupOnly"></a>

```typescript
public readonly readBackupOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `safeguardPolicy`<sup>Required</sup> <a name="safeguardPolicy" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.safeguardPolicy"></a>

```typescript
public readonly safeguardPolicy: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `tlogAccessMode`<sup>Required</sup> <a name="tlogAccessMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.tlogAccessMode"></a>

```typescript
public readonly tlogAccessMode: string;
```

- *Type:* string

---

##### `trimSpaceInChar`<sup>Required</sup> <a name="trimSpaceInChar" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.trimSpaceInChar"></a>

```typescript
public readonly trimSpaceInChar: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useBcpFullLoad`<sup>Required</sup> <a name="useBcpFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useBcpFullLoad"></a>

```typescript
public readonly useBcpFullLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `useThirdPartyBackupDevice`<sup>Required</sup> <a name="useThirdPartyBackupDevice" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.useThirdPartyBackupDevice"></a>

```typescript
public readonly useThirdPartyBackupDevice: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointMicrosoftSqlServerSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMicrosoftSqlServerSettings">DmsEndpointMicrosoftSqlServerSettings</a>

---


### DmsEndpointMongoDbSettingsOutputReference <a name="DmsEndpointMongoDbSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthMechanism">resetAuthMechanism</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthSource">resetAuthSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDocsToInvestigate">resetDocsToInvestigate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetExtractDocId">resetExtractDocId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetNestingLevel">resetNestingLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthMechanism` <a name="resetAuthMechanism" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthMechanism"></a>

```typescript
public resetAuthMechanism(): void
```

##### `resetAuthSource` <a name="resetAuthSource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthSource"></a>

```typescript
public resetAuthSource(): void
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDatabaseName"></a>

```typescript
public resetDatabaseName(): void
```

##### `resetDocsToInvestigate` <a name="resetDocsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetDocsToInvestigate"></a>

```typescript
public resetDocsToInvestigate(): void
```

##### `resetExtractDocId` <a name="resetExtractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetExtractDocId"></a>

```typescript
public resetExtractDocId(): void
```

##### `resetNestingLevel` <a name="resetNestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetNestingLevel"></a>

```typescript
public resetNestingLevel(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanismInput">authMechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSourceInput">authSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigateInput">docsToInvestigateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocIdInput">extractDocIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevelInput">nestingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanism">authMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSource">authSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate">docsToInvestigate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocId">extractDocId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevel">nestingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authMechanismInput`<sup>Optional</sup> <a name="authMechanismInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanismInput"></a>

```typescript
public readonly authMechanismInput: string;
```

- *Type:* string

---

##### `authSourceInput`<sup>Optional</sup> <a name="authSourceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSourceInput"></a>

```typescript
public readonly authSourceInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `docsToInvestigateInput`<sup>Optional</sup> <a name="docsToInvestigateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigateInput"></a>

```typescript
public readonly docsToInvestigateInput: string;
```

- *Type:* string

---

##### `extractDocIdInput`<sup>Optional</sup> <a name="extractDocIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocIdInput"></a>

```typescript
public readonly extractDocIdInput: string;
```

- *Type:* string

---

##### `nestingLevelInput`<sup>Optional</sup> <a name="nestingLevelInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevelInput"></a>

```typescript
public readonly nestingLevelInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `authMechanism`<sup>Required</sup> <a name="authMechanism" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authMechanism"></a>

```typescript
public readonly authMechanism: string;
```

- *Type:* string

---

##### `authSource`<sup>Required</sup> <a name="authSource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authSource"></a>

```typescript
public readonly authSource: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `docsToInvestigate`<sup>Required</sup> <a name="docsToInvestigate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.docsToInvestigate"></a>

```typescript
public readonly docsToInvestigate: string;
```

- *Type:* string

---

##### `extractDocId`<sup>Required</sup> <a name="extractDocId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.extractDocId"></a>

```typescript
public readonly extractDocId: string;
```

- *Type:* string

---

##### `nestingLevel`<sup>Required</sup> <a name="nestingLevel" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.nestingLevel"></a>

```typescript
public readonly nestingLevel: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointMongoDbSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMongoDbSettings">DmsEndpointMongoDbSettings</a>

---


### DmsEndpointMySqlSettingsOutputReference <a name="DmsEndpointMySqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointMySqlSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetAfterConnectScript">resetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch">resetCleanSourceMetadataOnMismatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetEventsPollInterval">resetEventsPollInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetParallelLoadThreads">resetParallelLoadThreads</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetServerTimezone">resetServerTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetTargetDbType">resetTargetDbType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterConnectScript` <a name="resetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetAfterConnectScript"></a>

```typescript
public resetAfterConnectScript(): void
```

##### `resetCleanSourceMetadataOnMismatch` <a name="resetCleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetCleanSourceMetadataOnMismatch"></a>

```typescript
public resetCleanSourceMetadataOnMismatch(): void
```

##### `resetEventsPollInterval` <a name="resetEventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetEventsPollInterval"></a>

```typescript
public resetEventsPollInterval(): void
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetMaxFileSize"></a>

```typescript
public resetMaxFileSize(): void
```

##### `resetParallelLoadThreads` <a name="resetParallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetParallelLoadThreads"></a>

```typescript
public resetParallelLoadThreads(): void
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```

##### `resetServerTimezone` <a name="resetServerTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetServerTimezone"></a>

```typescript
public resetServerTimezone(): void
```

##### `resetTargetDbType` <a name="resetTargetDbType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.resetTargetDbType"></a>

```typescript
public resetTargetDbType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScriptInput">afterConnectScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput">cleanSourceMetadataOnMismatchInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollIntervalInput">eventsPollIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreadsInput">parallelLoadThreadsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezoneInput">serverTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbTypeInput">targetDbTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch">cleanSourceMetadataOnMismatch</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval">eventsPollInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads">parallelLoadThreads</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezone">serverTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbType">targetDbType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterConnectScriptInput`<sup>Optional</sup> <a name="afterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```typescript
public readonly afterConnectScriptInput: string;
```

- *Type:* string

---

##### `cleanSourceMetadataOnMismatchInput`<sup>Optional</sup> <a name="cleanSourceMetadataOnMismatchInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatchInput"></a>

```typescript
public readonly cleanSourceMetadataOnMismatchInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventsPollIntervalInput`<sup>Optional</sup> <a name="eventsPollIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollIntervalInput"></a>

```typescript
public readonly eventsPollIntervalInput: number;
```

- *Type:* number

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSizeInput"></a>

```typescript
public readonly maxFileSizeInput: number;
```

- *Type:* number

---

##### `parallelLoadThreadsInput`<sup>Optional</sup> <a name="parallelLoadThreadsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreadsInput"></a>

```typescript
public readonly parallelLoadThreadsInput: number;
```

- *Type:* number

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `serverTimezoneInput`<sup>Optional</sup> <a name="serverTimezoneInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezoneInput"></a>

```typescript
public readonly serverTimezoneInput: string;
```

- *Type:* string

---

##### `targetDbTypeInput`<sup>Optional</sup> <a name="targetDbTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbTypeInput"></a>

```typescript
public readonly targetDbTypeInput: string;
```

- *Type:* string

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.afterConnectScript"></a>

```typescript
public readonly afterConnectScript: string;
```

- *Type:* string

---

##### `cleanSourceMetadataOnMismatch`<sup>Required</sup> <a name="cleanSourceMetadataOnMismatch" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.cleanSourceMetadataOnMismatch"></a>

```typescript
public readonly cleanSourceMetadataOnMismatch: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `eventsPollInterval`<sup>Required</sup> <a name="eventsPollInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.eventsPollInterval"></a>

```typescript
public readonly eventsPollInterval: number;
```

- *Type:* number

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

---

##### `parallelLoadThreads`<sup>Required</sup> <a name="parallelLoadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.parallelLoadThreads"></a>

```typescript
public readonly parallelLoadThreads: number;
```

- *Type:* number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `serverTimezone`<sup>Required</sup> <a name="serverTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.serverTimezone"></a>

```typescript
public readonly serverTimezone: string;
```

- *Type:* string

---

##### `targetDbType`<sup>Required</sup> <a name="targetDbType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.targetDbType"></a>

```typescript
public readonly targetDbType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointMySqlSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointMySqlSettings">DmsEndpointMySqlSettings</a>

---


### DmsEndpointNeptuneSettingsOutputReference <a name="DmsEndpointNeptuneSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetErrorRetryDuration">resetErrorRetryDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetIamAuthEnabled">resetIamAuthEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxRetryCount">resetMaxRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketFolder">resetS3BucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketName">resetS3BucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetErrorRetryDuration` <a name="resetErrorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetErrorRetryDuration"></a>

```typescript
public resetErrorRetryDuration(): void
```

##### `resetIamAuthEnabled` <a name="resetIamAuthEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetIamAuthEnabled"></a>

```typescript
public resetIamAuthEnabled(): void
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxFileSize"></a>

```typescript
public resetMaxFileSize(): void
```

##### `resetMaxRetryCount` <a name="resetMaxRetryCount" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetMaxRetryCount"></a>

```typescript
public resetMaxRetryCount(): void
```

##### `resetS3BucketFolder` <a name="resetS3BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketFolder"></a>

```typescript
public resetS3BucketFolder(): void
```

##### `resetS3BucketName` <a name="resetS3BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetS3BucketName"></a>

```typescript
public resetS3BucketName(): void
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.resetServiceAccessRoleArn"></a>

```typescript
public resetServiceAccessRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDurationInput">errorRetryDurationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabledInput">iamAuthEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCountInput">maxRetryCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolderInput">s3BucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration">errorRetryDuration</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled">iamAuthEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount">maxRetryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder">s3BucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `errorRetryDurationInput`<sup>Optional</sup> <a name="errorRetryDurationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDurationInput"></a>

```typescript
public readonly errorRetryDurationInput: number;
```

- *Type:* number

---

##### `iamAuthEnabledInput`<sup>Optional</sup> <a name="iamAuthEnabledInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabledInput"></a>

```typescript
public readonly iamAuthEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSizeInput"></a>

```typescript
public readonly maxFileSizeInput: number;
```

- *Type:* number

---

##### `maxRetryCountInput`<sup>Optional</sup> <a name="maxRetryCountInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCountInput"></a>

```typescript
public readonly maxRetryCountInput: number;
```

- *Type:* number

---

##### `s3BucketFolderInput`<sup>Optional</sup> <a name="s3BucketFolderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolderInput"></a>

```typescript
public readonly s3BucketFolderInput: string;
```

- *Type:* string

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketNameInput"></a>

```typescript
public readonly s3BucketNameInput: string;
```

- *Type:* string

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `errorRetryDuration`<sup>Required</sup> <a name="errorRetryDuration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.errorRetryDuration"></a>

```typescript
public readonly errorRetryDuration: number;
```

- *Type:* number

---

##### `iamAuthEnabled`<sup>Required</sup> <a name="iamAuthEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.iamAuthEnabled"></a>

```typescript
public readonly iamAuthEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

---

##### `maxRetryCount`<sup>Required</sup> <a name="maxRetryCount" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.maxRetryCount"></a>

```typescript
public readonly maxRetryCount: number;
```

- *Type:* number

---

##### `s3BucketFolder`<sup>Required</sup> <a name="s3BucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketFolder"></a>

```typescript
public readonly s3BucketFolder: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointNeptuneSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointNeptuneSettings">DmsEndpointNeptuneSettings</a>

---


### DmsEndpointOracleSettingsOutputReference <a name="DmsEndpointOracleSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointOracleSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAccessAlternateDirectly">resetAccessAlternateDirectly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAdditionalArchivedLogDestId">resetAdditionalArchivedLogDestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAddSupplementalLogging">resetAddSupplementalLogging</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAllowSelectNestedTables">resetAllowSelectNestedTables</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogDestId">resetArchivedLogDestId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogsOnly">resetArchivedLogsOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmPassword">resetAsmPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmServer">resetAsmServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmUser">resetAsmUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetCharLengthSemantics">resetCharLengthSemantics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathNoLog">resetDirectPathNoLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathParallelLoad">resetDirectPathParallelLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetEnableHomogenousTablespace">resetEnableHomogenousTablespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetExtraArchivedLogDestIds">resetExtraArchivedLogDestIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetFailTasksOnLobTruncation">resetFailTasksOnLobTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetNumberDatatypeScale">resetNumberDatatypeScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOraclePathPrefix">resetOraclePathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetParallelAsmReadThreads">resetParallelAsmReadThreads</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadAheadBlocks">resetReadAheadBlocks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadTableSpaceName">resetReadTableSpaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReplacePathPrefix">resetReplacePathPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetRetryInterval">resetRetryInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn">resetSecretsManagerOracleAsmAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId">resetSecretsManagerOracleAsmSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryption">resetSecurityDbEncryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryptionName">resetSecurityDbEncryptionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSpatialDataOptionToGeoJsonFunctionName">resetSpatialDataOptionToGeoJsonFunctionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetStandbyDelayTime">resetStandbyDelayTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseAlternateFolderForOnline">resetUseAlternateFolderForOnline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseBFile">resetUseBFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseDirectPathFullLoad">resetUseDirectPathFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseLogminerReader">resetUseLogminerReader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUsePathPrefix">resetUsePathPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessAlternateDirectly` <a name="resetAccessAlternateDirectly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAccessAlternateDirectly"></a>

```typescript
public resetAccessAlternateDirectly(): void
```

##### `resetAdditionalArchivedLogDestId` <a name="resetAdditionalArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAdditionalArchivedLogDestId"></a>

```typescript
public resetAdditionalArchivedLogDestId(): void
```

##### `resetAddSupplementalLogging` <a name="resetAddSupplementalLogging" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAddSupplementalLogging"></a>

```typescript
public resetAddSupplementalLogging(): void
```

##### `resetAllowSelectNestedTables` <a name="resetAllowSelectNestedTables" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAllowSelectNestedTables"></a>

```typescript
public resetAllowSelectNestedTables(): void
```

##### `resetArchivedLogDestId` <a name="resetArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogDestId"></a>

```typescript
public resetArchivedLogDestId(): void
```

##### `resetArchivedLogsOnly` <a name="resetArchivedLogsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetArchivedLogsOnly"></a>

```typescript
public resetArchivedLogsOnly(): void
```

##### `resetAsmPassword` <a name="resetAsmPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmPassword"></a>

```typescript
public resetAsmPassword(): void
```

##### `resetAsmServer` <a name="resetAsmServer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmServer"></a>

```typescript
public resetAsmServer(): void
```

##### `resetAsmUser` <a name="resetAsmUser" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetAsmUser"></a>

```typescript
public resetAsmUser(): void
```

##### `resetCharLengthSemantics` <a name="resetCharLengthSemantics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetCharLengthSemantics"></a>

```typescript
public resetCharLengthSemantics(): void
```

##### `resetDirectPathNoLog` <a name="resetDirectPathNoLog" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathNoLog"></a>

```typescript
public resetDirectPathNoLog(): void
```

##### `resetDirectPathParallelLoad` <a name="resetDirectPathParallelLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetDirectPathParallelLoad"></a>

```typescript
public resetDirectPathParallelLoad(): void
```

##### `resetEnableHomogenousTablespace` <a name="resetEnableHomogenousTablespace" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetEnableHomogenousTablespace"></a>

```typescript
public resetEnableHomogenousTablespace(): void
```

##### `resetExtraArchivedLogDestIds` <a name="resetExtraArchivedLogDestIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetExtraArchivedLogDestIds"></a>

```typescript
public resetExtraArchivedLogDestIds(): void
```

##### `resetFailTasksOnLobTruncation` <a name="resetFailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetFailTasksOnLobTruncation"></a>

```typescript
public resetFailTasksOnLobTruncation(): void
```

##### `resetNumberDatatypeScale` <a name="resetNumberDatatypeScale" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetNumberDatatypeScale"></a>

```typescript
public resetNumberDatatypeScale(): void
```

##### `resetOraclePathPrefix` <a name="resetOraclePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetOraclePathPrefix"></a>

```typescript
public resetOraclePathPrefix(): void
```

##### `resetParallelAsmReadThreads` <a name="resetParallelAsmReadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetParallelAsmReadThreads"></a>

```typescript
public resetParallelAsmReadThreads(): void
```

##### `resetReadAheadBlocks` <a name="resetReadAheadBlocks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadAheadBlocks"></a>

```typescript
public resetReadAheadBlocks(): void
```

##### `resetReadTableSpaceName` <a name="resetReadTableSpaceName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReadTableSpaceName"></a>

```typescript
public resetReadTableSpaceName(): void
```

##### `resetReplacePathPrefix` <a name="resetReplacePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetReplacePathPrefix"></a>

```typescript
public resetReplacePathPrefix(): void
```

##### `resetRetryInterval` <a name="resetRetryInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetRetryInterval"></a>

```typescript
public resetRetryInterval(): void
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerOracleAsmAccessRoleArn` <a name="resetSecretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmAccessRoleArn"></a>

```typescript
public resetSecretsManagerOracleAsmAccessRoleArn(): void
```

##### `resetSecretsManagerOracleAsmSecretId` <a name="resetSecretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerOracleAsmSecretId"></a>

```typescript
public resetSecretsManagerOracleAsmSecretId(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```

##### `resetSecurityDbEncryption` <a name="resetSecurityDbEncryption" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryption"></a>

```typescript
public resetSecurityDbEncryption(): void
```

##### `resetSecurityDbEncryptionName` <a name="resetSecurityDbEncryptionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSecurityDbEncryptionName"></a>

```typescript
public resetSecurityDbEncryptionName(): void
```

##### `resetSpatialDataOptionToGeoJsonFunctionName` <a name="resetSpatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetSpatialDataOptionToGeoJsonFunctionName"></a>

```typescript
public resetSpatialDataOptionToGeoJsonFunctionName(): void
```

##### `resetStandbyDelayTime` <a name="resetStandbyDelayTime" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetStandbyDelayTime"></a>

```typescript
public resetStandbyDelayTime(): void
```

##### `resetUseAlternateFolderForOnline` <a name="resetUseAlternateFolderForOnline" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseAlternateFolderForOnline"></a>

```typescript
public resetUseAlternateFolderForOnline(): void
```

##### `resetUseBFile` <a name="resetUseBFile" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseBFile"></a>

```typescript
public resetUseBFile(): void
```

##### `resetUseDirectPathFullLoad` <a name="resetUseDirectPathFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseDirectPathFullLoad"></a>

```typescript
public resetUseDirectPathFullLoad(): void
```

##### `resetUseLogminerReader` <a name="resetUseLogminerReader" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUseLogminerReader"></a>

```typescript
public resetUseLogminerReader(): void
```

##### `resetUsePathPrefix` <a name="resetUsePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.resetUsePathPrefix"></a>

```typescript
public resetUsePathPrefix(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectlyInput">accessAlternateDirectlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestIdInput">additionalArchivedLogDestIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLoggingInput">addSupplementalLoggingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTablesInput">allowSelectNestedTablesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestIdInput">archivedLogDestIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnlyInput">archivedLogsOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPasswordInput">asmPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServerInput">asmServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUserInput">asmUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemanticsInput">charLengthSemanticsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLogInput">directPathNoLogInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoadInput">directPathParallelLoadInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespaceInput">enableHomogenousTablespaceInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIdsInput">extraArchivedLogDestIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncationInput">failTasksOnLobTruncationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScaleInput">numberDatatypeScaleInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefixInput">oraclePathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreadsInput">parallelAsmReadThreadsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocksInput">readAheadBlocksInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceNameInput">readTableSpaceNameInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefixInput">replacePathPrefixInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryIntervalInput">retryIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput">secretsManagerOracleAsmAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput">secretsManagerOracleAsmSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionInput">securityDbEncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionNameInput">securityDbEncryptionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionNameInput">spatialDataOptionToGeoJsonFunctionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTimeInput">standbyDelayTimeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnlineInput">useAlternateFolderForOnlineInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFileInput">useBFileInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoadInput">useDirectPathFullLoadInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReaderInput">useLogminerReaderInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefixInput">usePathPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly">accessAlternateDirectly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId">additionalArchivedLogDestId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging">addSupplementalLogging</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables">allowSelectNestedTables</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestId">archivedLogDestId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly">archivedLogsOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPassword">asmPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServer">asmServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUser">asmUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemantics">charLengthSemantics</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLog">directPathNoLog</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad">directPathParallelLoad</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace">enableHomogenousTablespace</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds">extraArchivedLogDestIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale">numberDatatypeScale</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix">oraclePathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads">parallelAsmReadThreads</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocks">readAheadBlocks</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceName">readTableSpaceName</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefix">replacePathPrefix</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryInterval">retryInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn">secretsManagerOracleAsmAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId">secretsManagerOracleAsmSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryption">securityDbEncryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName">securityDbEncryptionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName">spatialDataOptionToGeoJsonFunctionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTime">standbyDelayTime</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline">useAlternateFolderForOnline</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFile">useBFile</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad">useDirectPathFullLoad</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReader">useLogminerReader</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefix">usePathPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessAlternateDirectlyInput`<sup>Optional</sup> <a name="accessAlternateDirectlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectlyInput"></a>

```typescript
public readonly accessAlternateDirectlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `additionalArchivedLogDestIdInput`<sup>Optional</sup> <a name="additionalArchivedLogDestIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestIdInput"></a>

```typescript
public readonly additionalArchivedLogDestIdInput: number;
```

- *Type:* number

---

##### `addSupplementalLoggingInput`<sup>Optional</sup> <a name="addSupplementalLoggingInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLoggingInput"></a>

```typescript
public readonly addSupplementalLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowSelectNestedTablesInput`<sup>Optional</sup> <a name="allowSelectNestedTablesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTablesInput"></a>

```typescript
public readonly allowSelectNestedTablesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `archivedLogDestIdInput`<sup>Optional</sup> <a name="archivedLogDestIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestIdInput"></a>

```typescript
public readonly archivedLogDestIdInput: number;
```

- *Type:* number

---

##### `archivedLogsOnlyInput`<sup>Optional</sup> <a name="archivedLogsOnlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnlyInput"></a>

```typescript
public readonly archivedLogsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `asmPasswordInput`<sup>Optional</sup> <a name="asmPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPasswordInput"></a>

```typescript
public readonly asmPasswordInput: string;
```

- *Type:* string

---

##### `asmServerInput`<sup>Optional</sup> <a name="asmServerInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServerInput"></a>

```typescript
public readonly asmServerInput: string;
```

- *Type:* string

---

##### `asmUserInput`<sup>Optional</sup> <a name="asmUserInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUserInput"></a>

```typescript
public readonly asmUserInput: string;
```

- *Type:* string

---

##### `charLengthSemanticsInput`<sup>Optional</sup> <a name="charLengthSemanticsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemanticsInput"></a>

```typescript
public readonly charLengthSemanticsInput: string;
```

- *Type:* string

---

##### `directPathNoLogInput`<sup>Optional</sup> <a name="directPathNoLogInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLogInput"></a>

```typescript
public readonly directPathNoLogInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `directPathParallelLoadInput`<sup>Optional</sup> <a name="directPathParallelLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoadInput"></a>

```typescript
public readonly directPathParallelLoadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableHomogenousTablespaceInput`<sup>Optional</sup> <a name="enableHomogenousTablespaceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespaceInput"></a>

```typescript
public readonly enableHomogenousTablespaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `extraArchivedLogDestIdsInput`<sup>Optional</sup> <a name="extraArchivedLogDestIdsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIdsInput"></a>

```typescript
public readonly extraArchivedLogDestIdsInput: number[];
```

- *Type:* number[]

---

##### `failTasksOnLobTruncationInput`<sup>Optional</sup> <a name="failTasksOnLobTruncationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncationInput"></a>

```typescript
public readonly failTasksOnLobTruncationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberDatatypeScaleInput`<sup>Optional</sup> <a name="numberDatatypeScaleInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScaleInput"></a>

```typescript
public readonly numberDatatypeScaleInput: number;
```

- *Type:* number

---

##### `oraclePathPrefixInput`<sup>Optional</sup> <a name="oraclePathPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefixInput"></a>

```typescript
public readonly oraclePathPrefixInput: string;
```

- *Type:* string

---

##### `parallelAsmReadThreadsInput`<sup>Optional</sup> <a name="parallelAsmReadThreadsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreadsInput"></a>

```typescript
public readonly parallelAsmReadThreadsInput: number;
```

- *Type:* number

---

##### `readAheadBlocksInput`<sup>Optional</sup> <a name="readAheadBlocksInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocksInput"></a>

```typescript
public readonly readAheadBlocksInput: number;
```

- *Type:* number

---

##### `readTableSpaceNameInput`<sup>Optional</sup> <a name="readTableSpaceNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceNameInput"></a>

```typescript
public readonly readTableSpaceNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replacePathPrefixInput`<sup>Optional</sup> <a name="replacePathPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefixInput"></a>

```typescript
public readonly replacePathPrefixInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retryIntervalInput`<sup>Optional</sup> <a name="retryIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryIntervalInput"></a>

```typescript
public readonly retryIntervalInput: number;
```

- *Type:* number

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerOracleAsmAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerOracleAsmAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerOracleAsmAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerOracleAsmSecretIdInput`<sup>Optional</sup> <a name="secretsManagerOracleAsmSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretIdInput"></a>

```typescript
public readonly secretsManagerOracleAsmSecretIdInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `securityDbEncryptionInput`<sup>Optional</sup> <a name="securityDbEncryptionInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionInput"></a>

```typescript
public readonly securityDbEncryptionInput: string;
```

- *Type:* string

---

##### `securityDbEncryptionNameInput`<sup>Optional</sup> <a name="securityDbEncryptionNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionNameInput"></a>

```typescript
public readonly securityDbEncryptionNameInput: string;
```

- *Type:* string

---

##### `spatialDataOptionToGeoJsonFunctionNameInput`<sup>Optional</sup> <a name="spatialDataOptionToGeoJsonFunctionNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionNameInput"></a>

```typescript
public readonly spatialDataOptionToGeoJsonFunctionNameInput: string;
```

- *Type:* string

---

##### `standbyDelayTimeInput`<sup>Optional</sup> <a name="standbyDelayTimeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTimeInput"></a>

```typescript
public readonly standbyDelayTimeInput: number;
```

- *Type:* number

---

##### `useAlternateFolderForOnlineInput`<sup>Optional</sup> <a name="useAlternateFolderForOnlineInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnlineInput"></a>

```typescript
public readonly useAlternateFolderForOnlineInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useBFileInput`<sup>Optional</sup> <a name="useBFileInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFileInput"></a>

```typescript
public readonly useBFileInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useDirectPathFullLoadInput`<sup>Optional</sup> <a name="useDirectPathFullLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoadInput"></a>

```typescript
public readonly useDirectPathFullLoadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useLogminerReaderInput`<sup>Optional</sup> <a name="useLogminerReaderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReaderInput"></a>

```typescript
public readonly useLogminerReaderInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `usePathPrefixInput`<sup>Optional</sup> <a name="usePathPrefixInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefixInput"></a>

```typescript
public readonly usePathPrefixInput: string;
```

- *Type:* string

---

##### `accessAlternateDirectly`<sup>Required</sup> <a name="accessAlternateDirectly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.accessAlternateDirectly"></a>

```typescript
public readonly accessAlternateDirectly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `additionalArchivedLogDestId`<sup>Required</sup> <a name="additionalArchivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.additionalArchivedLogDestId"></a>

```typescript
public readonly additionalArchivedLogDestId: number;
```

- *Type:* number

---

##### `addSupplementalLogging`<sup>Required</sup> <a name="addSupplementalLogging" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.addSupplementalLogging"></a>

```typescript
public readonly addSupplementalLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `allowSelectNestedTables`<sup>Required</sup> <a name="allowSelectNestedTables" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.allowSelectNestedTables"></a>

```typescript
public readonly allowSelectNestedTables: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `archivedLogDestId`<sup>Required</sup> <a name="archivedLogDestId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogDestId"></a>

```typescript
public readonly archivedLogDestId: number;
```

- *Type:* number

---

##### `archivedLogsOnly`<sup>Required</sup> <a name="archivedLogsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.archivedLogsOnly"></a>

```typescript
public readonly archivedLogsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `asmPassword`<sup>Required</sup> <a name="asmPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmPassword"></a>

```typescript
public readonly asmPassword: string;
```

- *Type:* string

---

##### `asmServer`<sup>Required</sup> <a name="asmServer" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmServer"></a>

```typescript
public readonly asmServer: string;
```

- *Type:* string

---

##### `asmUser`<sup>Required</sup> <a name="asmUser" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.asmUser"></a>

```typescript
public readonly asmUser: string;
```

- *Type:* string

---

##### `charLengthSemantics`<sup>Required</sup> <a name="charLengthSemantics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.charLengthSemantics"></a>

```typescript
public readonly charLengthSemantics: string;
```

- *Type:* string

---

##### `directPathNoLog`<sup>Required</sup> <a name="directPathNoLog" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathNoLog"></a>

```typescript
public readonly directPathNoLog: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `directPathParallelLoad`<sup>Required</sup> <a name="directPathParallelLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.directPathParallelLoad"></a>

```typescript
public readonly directPathParallelLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableHomogenousTablespace`<sup>Required</sup> <a name="enableHomogenousTablespace" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.enableHomogenousTablespace"></a>

```typescript
public readonly enableHomogenousTablespace: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `extraArchivedLogDestIds`<sup>Required</sup> <a name="extraArchivedLogDestIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.extraArchivedLogDestIds"></a>

```typescript
public readonly extraArchivedLogDestIds: number[];
```

- *Type:* number[]

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="failTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```typescript
public readonly failTasksOnLobTruncation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `numberDatatypeScale`<sup>Required</sup> <a name="numberDatatypeScale" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.numberDatatypeScale"></a>

```typescript
public readonly numberDatatypeScale: number;
```

- *Type:* number

---

##### `oraclePathPrefix`<sup>Required</sup> <a name="oraclePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.oraclePathPrefix"></a>

```typescript
public readonly oraclePathPrefix: string;
```

- *Type:* string

---

##### `parallelAsmReadThreads`<sup>Required</sup> <a name="parallelAsmReadThreads" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.parallelAsmReadThreads"></a>

```typescript
public readonly parallelAsmReadThreads: number;
```

- *Type:* number

---

##### `readAheadBlocks`<sup>Required</sup> <a name="readAheadBlocks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readAheadBlocks"></a>

```typescript
public readonly readAheadBlocks: number;
```

- *Type:* number

---

##### `readTableSpaceName`<sup>Required</sup> <a name="readTableSpaceName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.readTableSpaceName"></a>

```typescript
public readonly readTableSpaceName: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replacePathPrefix`<sup>Required</sup> <a name="replacePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.replacePathPrefix"></a>

```typescript
public readonly replacePathPrefix: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `retryInterval`<sup>Required</sup> <a name="retryInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.retryInterval"></a>

```typescript
public readonly retryInterval: number;
```

- *Type:* number

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerOracleAsmAccessRoleArn`<sup>Required</sup> <a name="secretsManagerOracleAsmAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmAccessRoleArn"></a>

```typescript
public readonly secretsManagerOracleAsmAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerOracleAsmSecretId`<sup>Required</sup> <a name="secretsManagerOracleAsmSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerOracleAsmSecretId"></a>

```typescript
public readonly secretsManagerOracleAsmSecretId: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `securityDbEncryption`<sup>Required</sup> <a name="securityDbEncryption" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryption"></a>

```typescript
public readonly securityDbEncryption: string;
```

- *Type:* string

---

##### `securityDbEncryptionName`<sup>Required</sup> <a name="securityDbEncryptionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.securityDbEncryptionName"></a>

```typescript
public readonly securityDbEncryptionName: string;
```

- *Type:* string

---

##### `spatialDataOptionToGeoJsonFunctionName`<sup>Required</sup> <a name="spatialDataOptionToGeoJsonFunctionName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.spatialDataOptionToGeoJsonFunctionName"></a>

```typescript
public readonly spatialDataOptionToGeoJsonFunctionName: string;
```

- *Type:* string

---

##### `standbyDelayTime`<sup>Required</sup> <a name="standbyDelayTime" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.standbyDelayTime"></a>

```typescript
public readonly standbyDelayTime: number;
```

- *Type:* number

---

##### `useAlternateFolderForOnline`<sup>Required</sup> <a name="useAlternateFolderForOnline" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useAlternateFolderForOnline"></a>

```typescript
public readonly useAlternateFolderForOnline: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useBFile`<sup>Required</sup> <a name="useBFile" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useBFile"></a>

```typescript
public readonly useBFile: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useDirectPathFullLoad`<sup>Required</sup> <a name="useDirectPathFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useDirectPathFullLoad"></a>

```typescript
public readonly useDirectPathFullLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useLogminerReader`<sup>Required</sup> <a name="useLogminerReader" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.useLogminerReader"></a>

```typescript
public readonly useLogminerReader: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `usePathPrefix`<sup>Required</sup> <a name="usePathPrefix" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.usePathPrefix"></a>

```typescript
public readonly usePathPrefix: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointOracleSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointOracleSettings">DmsEndpointOracleSettings</a>

---


### DmsEndpointPostgreSqlSettingsOutputReference <a name="DmsEndpointPostgreSqlSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetAfterConnectScript">resetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetBabelfishDatabaseName">resetBabelfishDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetCaptureDdls">resetCaptureDdls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDatabaseMode">resetDatabaseMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDdlArtifactsSchema">resetDdlArtifactsSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetExecuteTimeout">resetExecuteTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetFailTasksOnLobTruncation">resetFailTasksOnLobTruncation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatEnable">resetHeartbeatEnable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatFrequency">resetHeartbeatFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatSchema">resetHeartbeatSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMapBooleanAsBoolean">resetMapBooleanAsBoolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetPluginName">resetPluginName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSlotName">resetSlotName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAfterConnectScript` <a name="resetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetAfterConnectScript"></a>

```typescript
public resetAfterConnectScript(): void
```

##### `resetBabelfishDatabaseName` <a name="resetBabelfishDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetBabelfishDatabaseName"></a>

```typescript
public resetBabelfishDatabaseName(): void
```

##### `resetCaptureDdls` <a name="resetCaptureDdls" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetCaptureDdls"></a>

```typescript
public resetCaptureDdls(): void
```

##### `resetDatabaseMode` <a name="resetDatabaseMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDatabaseMode"></a>

```typescript
public resetDatabaseMode(): void
```

##### `resetDdlArtifactsSchema` <a name="resetDdlArtifactsSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetDdlArtifactsSchema"></a>

```typescript
public resetDdlArtifactsSchema(): void
```

##### `resetExecuteTimeout` <a name="resetExecuteTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetExecuteTimeout"></a>

```typescript
public resetExecuteTimeout(): void
```

##### `resetFailTasksOnLobTruncation` <a name="resetFailTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetFailTasksOnLobTruncation"></a>

```typescript
public resetFailTasksOnLobTruncation(): void
```

##### `resetHeartbeatEnable` <a name="resetHeartbeatEnable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatEnable"></a>

```typescript
public resetHeartbeatEnable(): void
```

##### `resetHeartbeatFrequency` <a name="resetHeartbeatFrequency" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatFrequency"></a>

```typescript
public resetHeartbeatFrequency(): void
```

##### `resetHeartbeatSchema` <a name="resetHeartbeatSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetHeartbeatSchema"></a>

```typescript
public resetHeartbeatSchema(): void
```

##### `resetMapBooleanAsBoolean` <a name="resetMapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMapBooleanAsBoolean"></a>

```typescript
public resetMapBooleanAsBoolean(): void
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetMaxFileSize"></a>

```typescript
public resetMaxFileSize(): void
```

##### `resetPluginName` <a name="resetPluginName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetPluginName"></a>

```typescript
public resetPluginName(): void
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```

##### `resetSlotName` <a name="resetSlotName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.resetSlotName"></a>

```typescript
public resetSlotName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScriptInput">afterConnectScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseNameInput">babelfishDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdlsInput">captureDdlsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseModeInput">databaseModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchemaInput">ddlArtifactsSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeoutInput">executeTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncationInput">failTasksOnLobTruncationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnableInput">heartbeatEnableInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequencyInput">heartbeatFrequencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchemaInput">heartbeatSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBooleanInput">mapBooleanAsBooleanInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginNameInput">pluginNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotNameInput">slotNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName">babelfishDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls">captureDdls</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode">databaseMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema">ddlArtifactsSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout">executeTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation">failTasksOnLobTruncation</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable">heartbeatEnable</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency">heartbeatFrequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema">heartbeatSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginName">pluginName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotName">slotName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `afterConnectScriptInput`<sup>Optional</sup> <a name="afterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScriptInput"></a>

```typescript
public readonly afterConnectScriptInput: string;
```

- *Type:* string

---

##### `babelfishDatabaseNameInput`<sup>Optional</sup> <a name="babelfishDatabaseNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseNameInput"></a>

```typescript
public readonly babelfishDatabaseNameInput: string;
```

- *Type:* string

---

##### `captureDdlsInput`<sup>Optional</sup> <a name="captureDdlsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdlsInput"></a>

```typescript
public readonly captureDdlsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseModeInput`<sup>Optional</sup> <a name="databaseModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseModeInput"></a>

```typescript
public readonly databaseModeInput: string;
```

- *Type:* string

---

##### `ddlArtifactsSchemaInput`<sup>Optional</sup> <a name="ddlArtifactsSchemaInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchemaInput"></a>

```typescript
public readonly ddlArtifactsSchemaInput: string;
```

- *Type:* string

---

##### `executeTimeoutInput`<sup>Optional</sup> <a name="executeTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeoutInput"></a>

```typescript
public readonly executeTimeoutInput: number;
```

- *Type:* number

---

##### `failTasksOnLobTruncationInput`<sup>Optional</sup> <a name="failTasksOnLobTruncationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncationInput"></a>

```typescript
public readonly failTasksOnLobTruncationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `heartbeatEnableInput`<sup>Optional</sup> <a name="heartbeatEnableInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnableInput"></a>

```typescript
public readonly heartbeatEnableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `heartbeatFrequencyInput`<sup>Optional</sup> <a name="heartbeatFrequencyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequencyInput"></a>

```typescript
public readonly heartbeatFrequencyInput: number;
```

- *Type:* number

---

##### `heartbeatSchemaInput`<sup>Optional</sup> <a name="heartbeatSchemaInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchemaInput"></a>

```typescript
public readonly heartbeatSchemaInput: string;
```

- *Type:* string

---

##### `mapBooleanAsBooleanInput`<sup>Optional</sup> <a name="mapBooleanAsBooleanInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBooleanInput"></a>

```typescript
public readonly mapBooleanAsBooleanInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSizeInput"></a>

```typescript
public readonly maxFileSizeInput: number;
```

- *Type:* number

---

##### `pluginNameInput`<sup>Optional</sup> <a name="pluginNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginNameInput"></a>

```typescript
public readonly pluginNameInput: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `slotNameInput`<sup>Optional</sup> <a name="slotNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotNameInput"></a>

```typescript
public readonly slotNameInput: string;
```

- *Type:* string

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.afterConnectScript"></a>

```typescript
public readonly afterConnectScript: string;
```

- *Type:* string

---

##### `babelfishDatabaseName`<sup>Required</sup> <a name="babelfishDatabaseName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.babelfishDatabaseName"></a>

```typescript
public readonly babelfishDatabaseName: string;
```

- *Type:* string

---

##### `captureDdls`<sup>Required</sup> <a name="captureDdls" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.captureDdls"></a>

```typescript
public readonly captureDdls: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `databaseMode`<sup>Required</sup> <a name="databaseMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.databaseMode"></a>

```typescript
public readonly databaseMode: string;
```

- *Type:* string

---

##### `ddlArtifactsSchema`<sup>Required</sup> <a name="ddlArtifactsSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.ddlArtifactsSchema"></a>

```typescript
public readonly ddlArtifactsSchema: string;
```

- *Type:* string

---

##### `executeTimeout`<sup>Required</sup> <a name="executeTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.executeTimeout"></a>

```typescript
public readonly executeTimeout: number;
```

- *Type:* number

---

##### `failTasksOnLobTruncation`<sup>Required</sup> <a name="failTasksOnLobTruncation" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.failTasksOnLobTruncation"></a>

```typescript
public readonly failTasksOnLobTruncation: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `heartbeatEnable`<sup>Required</sup> <a name="heartbeatEnable" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatEnable"></a>

```typescript
public readonly heartbeatEnable: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `heartbeatFrequency`<sup>Required</sup> <a name="heartbeatFrequency" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatFrequency"></a>

```typescript
public readonly heartbeatFrequency: number;
```

- *Type:* number

---

##### `heartbeatSchema`<sup>Required</sup> <a name="heartbeatSchema" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.heartbeatSchema"></a>

```typescript
public readonly heartbeatSchema: string;
```

- *Type:* string

---

##### `mapBooleanAsBoolean`<sup>Required</sup> <a name="mapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```typescript
public readonly mapBooleanAsBoolean: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

---

##### `pluginName`<sup>Required</sup> <a name="pluginName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.pluginName"></a>

```typescript
public readonly pluginName: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `slotName`<sup>Required</sup> <a name="slotName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.slotName"></a>

```typescript
public readonly slotName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointPostgreSqlSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointPostgreSqlSettings">DmsEndpointPostgreSqlSettings</a>

---


### DmsEndpointRedisSettingsOutputReference <a name="DmsEndpointRedisSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointRedisSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword">resetAuthPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthType">resetAuthType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName">resetAuthUserName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetServerName">resetServerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn">resetSslCaCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol">resetSslSecurityProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthPassword` <a name="resetAuthPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthPassword"></a>

```typescript
public resetAuthPassword(): void
```

##### `resetAuthType` <a name="resetAuthType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthType"></a>

```typescript
public resetAuthType(): void
```

##### `resetAuthUserName` <a name="resetAuthUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetAuthUserName"></a>

```typescript
public resetAuthUserName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetServerName` <a name="resetServerName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetServerName"></a>

```typescript
public resetServerName(): void
```

##### `resetSslCaCertificateArn` <a name="resetSslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslCaCertificateArn"></a>

```typescript
public resetSslCaCertificateArn(): void
```

##### `resetSslSecurityProtocol` <a name="resetSslSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.resetSslSecurityProtocol"></a>

```typescript
public resetSslSecurityProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput">authPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput">authTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput">authUserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput">sslCaCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput">sslSecurityProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword">authPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType">authType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName">authUserName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn">sslCaCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol">sslSecurityProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authPasswordInput`<sup>Optional</sup> <a name="authPasswordInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPasswordInput"></a>

```typescript
public readonly authPasswordInput: string;
```

- *Type:* string

---

##### `authTypeInput`<sup>Optional</sup> <a name="authTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authTypeInput"></a>

```typescript
public readonly authTypeInput: string;
```

- *Type:* string

---

##### `authUserNameInput`<sup>Optional</sup> <a name="authUserNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserNameInput"></a>

```typescript
public readonly authUserNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `sslCaCertificateArnInput`<sup>Optional</sup> <a name="sslCaCertificateArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArnInput"></a>

```typescript
public readonly sslCaCertificateArnInput: string;
```

- *Type:* string

---

##### `sslSecurityProtocolInput`<sup>Optional</sup> <a name="sslSecurityProtocolInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocolInput"></a>

```typescript
public readonly sslSecurityProtocolInput: string;
```

- *Type:* string

---

##### `authPassword`<sup>Required</sup> <a name="authPassword" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authPassword"></a>

```typescript
public readonly authPassword: string;
```

- *Type:* string

---

##### `authType`<sup>Required</sup> <a name="authType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authType"></a>

```typescript
public readonly authType: string;
```

- *Type:* string

---

##### `authUserName`<sup>Required</sup> <a name="authUserName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.authUserName"></a>

```typescript
public readonly authUserName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `sslCaCertificateArn`<sup>Required</sup> <a name="sslCaCertificateArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslCaCertificateArn"></a>

```typescript
public readonly sslCaCertificateArn: string;
```

- *Type:* string

---

##### `sslSecurityProtocol`<sup>Required</sup> <a name="sslSecurityProtocol" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.sslSecurityProtocol"></a>

```typescript
public readonly sslSecurityProtocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointRedisSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedisSettings">DmsEndpointRedisSettings</a>

---


### DmsEndpointRedshiftSettingsOutputReference <a name="DmsEndpointRedshiftSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAcceptAnyDate">resetAcceptAnyDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAfterConnectScript">resetAfterConnectScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder">resetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCaseSensitiveNames">resetCaseSensitiveNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCompUpdate">resetCompUpdate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetConnectionTimeout">resetConnectionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetDateFormat">resetDateFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEmptyAsNull">resetEmptyAsNull</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetExplicitIds">resetExplicitIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetFileTransferUploadStreams">resetFileTransferUploadStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetLoadTimeout">resetLoadTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMapBooleanAsBoolean">resetMapBooleanAsBoolean</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetRemoveQuotes">resetRemoveQuotes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceChars">resetReplaceChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceInvalidChars">resetReplaceInvalidChars</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId">resetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTimeFormat">resetTimeFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTrimBlanks">resetTrimBlanks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTruncateColumns">resetTruncateColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetWriteBufferSize">resetWriteBufferSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceptAnyDate` <a name="resetAcceptAnyDate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAcceptAnyDate"></a>

```typescript
public resetAcceptAnyDate(): void
```

##### `resetAfterConnectScript` <a name="resetAfterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetAfterConnectScript"></a>

```typescript
public resetAfterConnectScript(): void
```

##### `resetBucketFolder` <a name="resetBucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketFolder"></a>

```typescript
public resetBucketFolder(): void
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetCaseSensitiveNames` <a name="resetCaseSensitiveNames" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCaseSensitiveNames"></a>

```typescript
public resetCaseSensitiveNames(): void
```

##### `resetCompUpdate` <a name="resetCompUpdate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetCompUpdate"></a>

```typescript
public resetCompUpdate(): void
```

##### `resetConnectionTimeout` <a name="resetConnectionTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetConnectionTimeout"></a>

```typescript
public resetConnectionTimeout(): void
```

##### `resetDateFormat` <a name="resetDateFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetDateFormat"></a>

```typescript
public resetDateFormat(): void
```

##### `resetEmptyAsNull` <a name="resetEmptyAsNull" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEmptyAsNull"></a>

```typescript
public resetEmptyAsNull(): void
```

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetEncryptionMode"></a>

```typescript
public resetEncryptionMode(): void
```

##### `resetExplicitIds` <a name="resetExplicitIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetExplicitIds"></a>

```typescript
public resetExplicitIds(): void
```

##### `resetFileTransferUploadStreams` <a name="resetFileTransferUploadStreams" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetFileTransferUploadStreams"></a>

```typescript
public resetFileTransferUploadStreams(): void
```

##### `resetLoadTimeout` <a name="resetLoadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetLoadTimeout"></a>

```typescript
public resetLoadTimeout(): void
```

##### `resetMapBooleanAsBoolean` <a name="resetMapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMapBooleanAsBoolean"></a>

```typescript
public resetMapBooleanAsBoolean(): void
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetMaxFileSize"></a>

```typescript
public resetMaxFileSize(): void
```

##### `resetRemoveQuotes` <a name="resetRemoveQuotes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetRemoveQuotes"></a>

```typescript
public resetRemoveQuotes(): void
```

##### `resetReplaceChars` <a name="resetReplaceChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceChars"></a>

```typescript
public resetReplaceChars(): void
```

##### `resetReplaceInvalidChars` <a name="resetReplaceInvalidChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetReplaceInvalidChars"></a>

```typescript
public resetReplaceInvalidChars(): void
```

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```

##### `resetServerSideEncryptionKmsKeyId` <a name="resetServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```typescript
public resetServerSideEncryptionKmsKeyId(): void
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetServiceAccessRoleArn"></a>

```typescript
public resetServiceAccessRoleArn(): void
```

##### `resetTimeFormat` <a name="resetTimeFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTimeFormat"></a>

```typescript
public resetTimeFormat(): void
```

##### `resetTrimBlanks` <a name="resetTrimBlanks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTrimBlanks"></a>

```typescript
public resetTrimBlanks(): void
```

##### `resetTruncateColumns` <a name="resetTruncateColumns" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetTruncateColumns"></a>

```typescript
public resetTruncateColumns(): void
```

##### `resetWriteBufferSize` <a name="resetWriteBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.resetWriteBufferSize"></a>

```typescript
public resetWriteBufferSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDateInput">acceptAnyDateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScriptInput">afterConnectScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput">bucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNamesInput">caseSensitiveNamesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdateInput">compUpdateInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeoutInput">connectionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormatInput">dateFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNullInput">emptyAsNullInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput">encryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIdsInput">explicitIdsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreamsInput">fileTransferUploadStreamsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeoutInput">loadTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBooleanInput">mapBooleanAsBooleanInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotesInput">removeQuotesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceCharsInput">replaceCharsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidCharsInput">replaceInvalidCharsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">serverSideEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormatInput">timeFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanksInput">trimBlanksInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumnsInput">truncateColumnsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSizeInput">writeBufferSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate">acceptAnyDate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript">afterConnectScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames">caseSensitiveNames</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdate">compUpdate</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout">connectionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormat">dateFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull">emptyAsNull</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIds">explicitIds</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams">fileTransferUploadStreams</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeout">loadTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean">mapBooleanAsBoolean</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotes">removeQuotes</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceChars">replaceChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars">replaceInvalidChars</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormat">timeFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanks">trimBlanks</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumns">truncateColumns</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize">writeBufferSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceptAnyDateInput`<sup>Optional</sup> <a name="acceptAnyDateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDateInput"></a>

```typescript
public readonly acceptAnyDateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `afterConnectScriptInput`<sup>Optional</sup> <a name="afterConnectScriptInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScriptInput"></a>

```typescript
public readonly afterConnectScriptInput: string;
```

- *Type:* string

---

##### `bucketFolderInput`<sup>Optional</sup> <a name="bucketFolderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolderInput"></a>

```typescript
public readonly bucketFolderInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `caseSensitiveNamesInput`<sup>Optional</sup> <a name="caseSensitiveNamesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNamesInput"></a>

```typescript
public readonly caseSensitiveNamesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `compUpdateInput`<sup>Optional</sup> <a name="compUpdateInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdateInput"></a>

```typescript
public readonly compUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `connectionTimeoutInput`<sup>Optional</sup> <a name="connectionTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeoutInput"></a>

```typescript
public readonly connectionTimeoutInput: number;
```

- *Type:* number

---

##### `dateFormatInput`<sup>Optional</sup> <a name="dateFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormatInput"></a>

```typescript
public readonly dateFormatInput: string;
```

- *Type:* string

---

##### `emptyAsNullInput`<sup>Optional</sup> <a name="emptyAsNullInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNullInput"></a>

```typescript
public readonly emptyAsNullInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionModeInput"></a>

```typescript
public readonly encryptionModeInput: string;
```

- *Type:* string

---

##### `explicitIdsInput`<sup>Optional</sup> <a name="explicitIdsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIdsInput"></a>

```typescript
public readonly explicitIdsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fileTransferUploadStreamsInput`<sup>Optional</sup> <a name="fileTransferUploadStreamsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreamsInput"></a>

```typescript
public readonly fileTransferUploadStreamsInput: number;
```

- *Type:* number

---

##### `loadTimeoutInput`<sup>Optional</sup> <a name="loadTimeoutInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeoutInput"></a>

```typescript
public readonly loadTimeoutInput: number;
```

- *Type:* number

---

##### `mapBooleanAsBooleanInput`<sup>Optional</sup> <a name="mapBooleanAsBooleanInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBooleanInput"></a>

```typescript
public readonly mapBooleanAsBooleanInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSizeInput"></a>

```typescript
public readonly maxFileSizeInput: number;
```

- *Type:* number

---

##### `removeQuotesInput`<sup>Optional</sup> <a name="removeQuotesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotesInput"></a>

```typescript
public readonly removeQuotesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replaceCharsInput`<sup>Optional</sup> <a name="replaceCharsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceCharsInput"></a>

```typescript
public readonly replaceCharsInput: string;
```

- *Type:* string

---

##### `replaceInvalidCharsInput`<sup>Optional</sup> <a name="replaceInvalidCharsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidCharsInput"></a>

```typescript
public readonly replaceInvalidCharsInput: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `serverSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```typescript
public readonly serverSideEncryptionKmsKeyIdInput: string;
```

- *Type:* string

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `timeFormatInput`<sup>Optional</sup> <a name="timeFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormatInput"></a>

```typescript
public readonly timeFormatInput: string;
```

- *Type:* string

---

##### `trimBlanksInput`<sup>Optional</sup> <a name="trimBlanksInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanksInput"></a>

```typescript
public readonly trimBlanksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `truncateColumnsInput`<sup>Optional</sup> <a name="truncateColumnsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumnsInput"></a>

```typescript
public readonly truncateColumnsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `writeBufferSizeInput`<sup>Optional</sup> <a name="writeBufferSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSizeInput"></a>

```typescript
public readonly writeBufferSizeInput: number;
```

- *Type:* number

---

##### `acceptAnyDate`<sup>Required</sup> <a name="acceptAnyDate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.acceptAnyDate"></a>

```typescript
public readonly acceptAnyDate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `afterConnectScript`<sup>Required</sup> <a name="afterConnectScript" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.afterConnectScript"></a>

```typescript
public readonly afterConnectScript: string;
```

- *Type:* string

---

##### `bucketFolder`<sup>Required</sup> <a name="bucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `caseSensitiveNames`<sup>Required</sup> <a name="caseSensitiveNames" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.caseSensitiveNames"></a>

```typescript
public readonly caseSensitiveNames: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `compUpdate`<sup>Required</sup> <a name="compUpdate" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.compUpdate"></a>

```typescript
public readonly compUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `connectionTimeout`<sup>Required</sup> <a name="connectionTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.connectionTimeout"></a>

```typescript
public readonly connectionTimeout: number;
```

- *Type:* number

---

##### `dateFormat`<sup>Required</sup> <a name="dateFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.dateFormat"></a>

```typescript
public readonly dateFormat: string;
```

- *Type:* string

---

##### `emptyAsNull`<sup>Required</sup> <a name="emptyAsNull" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.emptyAsNull"></a>

```typescript
public readonly emptyAsNull: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

---

##### `explicitIds`<sup>Required</sup> <a name="explicitIds" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.explicitIds"></a>

```typescript
public readonly explicitIds: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `fileTransferUploadStreams`<sup>Required</sup> <a name="fileTransferUploadStreams" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.fileTransferUploadStreams"></a>

```typescript
public readonly fileTransferUploadStreams: number;
```

- *Type:* number

---

##### `loadTimeout`<sup>Required</sup> <a name="loadTimeout" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.loadTimeout"></a>

```typescript
public readonly loadTimeout: number;
```

- *Type:* number

---

##### `mapBooleanAsBoolean`<sup>Required</sup> <a name="mapBooleanAsBoolean" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.mapBooleanAsBoolean"></a>

```typescript
public readonly mapBooleanAsBoolean: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

---

##### `removeQuotes`<sup>Required</sup> <a name="removeQuotes" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.removeQuotes"></a>

```typescript
public readonly removeQuotes: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `replaceChars`<sup>Required</sup> <a name="replaceChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceChars"></a>

```typescript
public readonly replaceChars: string;
```

- *Type:* string

---

##### `replaceInvalidChars`<sup>Required</sup> <a name="replaceInvalidChars" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.replaceInvalidChars"></a>

```typescript
public readonly replaceInvalidChars: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```typescript
public readonly serverSideEncryptionKmsKeyId: string;
```

- *Type:* string

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `timeFormat`<sup>Required</sup> <a name="timeFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.timeFormat"></a>

```typescript
public readonly timeFormat: string;
```

- *Type:* string

---

##### `trimBlanks`<sup>Required</sup> <a name="trimBlanks" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.trimBlanks"></a>

```typescript
public readonly trimBlanks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `truncateColumns`<sup>Required</sup> <a name="truncateColumns" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.truncateColumns"></a>

```typescript
public readonly truncateColumns: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `writeBufferSize`<sup>Required</sup> <a name="writeBufferSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.writeBufferSize"></a>

```typescript
public readonly writeBufferSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointRedshiftSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointRedshiftSettings">DmsEndpointRedshiftSettings</a>

---


### DmsEndpointS3SettingsOutputReference <a name="DmsEndpointS3SettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointS3SettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddColumnName">resetAddColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddTrailingPaddingCharacter">resetAddTrailingPaddingCharacter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder">resetBucketFolder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCannedAclForObjects">resetCannedAclForObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsAndUpdates">resetCdcInsertsAndUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsOnly">resetCdcInsertsOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMaxBatchInterval">resetCdcMaxBatchInterval</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMinFileSize">resetCdcMinFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcPath">resetCdcPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType">resetCompressionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter">resetCsvDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNoSupValue">resetCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNullValue">resetCsvNullValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter">resetCsvRowDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat">resetDataFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataPageSize">resetDataPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionDelimiter">resetDatePartitionDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled">resetDatePartitionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionSequence">resetDatePartitionSequence</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionTimezone">resetDatePartitionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDictPageSizeLimit">resetDictPageSizeLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEnableStatistics">resetEnableStatistics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncodingType">resetEncodingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode">resetEncryptionMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExpectedBucketOwner">resetExpectedBucketOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition">resetExternalTableDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetGlueCatalogGeneration">resetGlueCatalogGeneration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeaderRows">resetIgnoreHeaderRows</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIncludeOpForFullLoad">resetIncludeOpForFullLoad</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetMaxFileSize">resetMaxFileSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond">resetParquetTimestampInMillisecond</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion">resetParquetVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetPreserveTransactions">resetPreserveTransactions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRfc4180">resetRfc4180</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRowGroupLength">resetRowGroupLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId">resetServerSideEncryptionKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn">resetServiceAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetTimestampColumnName">resetTimestampColumnName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseCsvNoSupValue">resetUseCsvNoSupValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseTaskStartTimeForFullLoadTimestamp">resetUseTaskStartTimeForFullLoadTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddColumnName` <a name="resetAddColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddColumnName"></a>

```typescript
public resetAddColumnName(): void
```

##### `resetAddTrailingPaddingCharacter` <a name="resetAddTrailingPaddingCharacter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetAddTrailingPaddingCharacter"></a>

```typescript
public resetAddTrailingPaddingCharacter(): void
```

##### `resetBucketFolder` <a name="resetBucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketFolder"></a>

```typescript
public resetBucketFolder(): void
```

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetBucketName"></a>

```typescript
public resetBucketName(): void
```

##### `resetCannedAclForObjects` <a name="resetCannedAclForObjects" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCannedAclForObjects"></a>

```typescript
public resetCannedAclForObjects(): void
```

##### `resetCdcInsertsAndUpdates` <a name="resetCdcInsertsAndUpdates" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsAndUpdates"></a>

```typescript
public resetCdcInsertsAndUpdates(): void
```

##### `resetCdcInsertsOnly` <a name="resetCdcInsertsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcInsertsOnly"></a>

```typescript
public resetCdcInsertsOnly(): void
```

##### `resetCdcMaxBatchInterval` <a name="resetCdcMaxBatchInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMaxBatchInterval"></a>

```typescript
public resetCdcMaxBatchInterval(): void
```

##### `resetCdcMinFileSize` <a name="resetCdcMinFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcMinFileSize"></a>

```typescript
public resetCdcMinFileSize(): void
```

##### `resetCdcPath` <a name="resetCdcPath" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCdcPath"></a>

```typescript
public resetCdcPath(): void
```

##### `resetCompressionType` <a name="resetCompressionType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCompressionType"></a>

```typescript
public resetCompressionType(): void
```

##### `resetCsvDelimiter` <a name="resetCsvDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvDelimiter"></a>

```typescript
public resetCsvDelimiter(): void
```

##### `resetCsvNoSupValue` <a name="resetCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNoSupValue"></a>

```typescript
public resetCsvNoSupValue(): void
```

##### `resetCsvNullValue` <a name="resetCsvNullValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvNullValue"></a>

```typescript
public resetCsvNullValue(): void
```

##### `resetCsvRowDelimiter` <a name="resetCsvRowDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetCsvRowDelimiter"></a>

```typescript
public resetCsvRowDelimiter(): void
```

##### `resetDataFormat` <a name="resetDataFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataFormat"></a>

```typescript
public resetDataFormat(): void
```

##### `resetDataPageSize` <a name="resetDataPageSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDataPageSize"></a>

```typescript
public resetDataPageSize(): void
```

##### `resetDatePartitionDelimiter` <a name="resetDatePartitionDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionDelimiter"></a>

```typescript
public resetDatePartitionDelimiter(): void
```

##### `resetDatePartitionEnabled` <a name="resetDatePartitionEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionEnabled"></a>

```typescript
public resetDatePartitionEnabled(): void
```

##### `resetDatePartitionSequence` <a name="resetDatePartitionSequence" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionSequence"></a>

```typescript
public resetDatePartitionSequence(): void
```

##### `resetDatePartitionTimezone` <a name="resetDatePartitionTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDatePartitionTimezone"></a>

```typescript
public resetDatePartitionTimezone(): void
```

##### `resetDictPageSizeLimit` <a name="resetDictPageSizeLimit" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetDictPageSizeLimit"></a>

```typescript
public resetDictPageSizeLimit(): void
```

##### `resetEnableStatistics` <a name="resetEnableStatistics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEnableStatistics"></a>

```typescript
public resetEnableStatistics(): void
```

##### `resetEncodingType` <a name="resetEncodingType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncodingType"></a>

```typescript
public resetEncodingType(): void
```

##### `resetEncryptionMode` <a name="resetEncryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetEncryptionMode"></a>

```typescript
public resetEncryptionMode(): void
```

##### `resetExpectedBucketOwner` <a name="resetExpectedBucketOwner" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExpectedBucketOwner"></a>

```typescript
public resetExpectedBucketOwner(): void
```

##### `resetExternalTableDefinition` <a name="resetExternalTableDefinition" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetExternalTableDefinition"></a>

```typescript
public resetExternalTableDefinition(): void
```

##### `resetGlueCatalogGeneration` <a name="resetGlueCatalogGeneration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetGlueCatalogGeneration"></a>

```typescript
public resetGlueCatalogGeneration(): void
```

##### `resetIgnoreHeaderRows` <a name="resetIgnoreHeaderRows" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIgnoreHeaderRows"></a>

```typescript
public resetIgnoreHeaderRows(): void
```

##### `resetIncludeOpForFullLoad` <a name="resetIncludeOpForFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetIncludeOpForFullLoad"></a>

```typescript
public resetIncludeOpForFullLoad(): void
```

##### `resetMaxFileSize` <a name="resetMaxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetMaxFileSize"></a>

```typescript
public resetMaxFileSize(): void
```

##### `resetParquetTimestampInMillisecond` <a name="resetParquetTimestampInMillisecond" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetTimestampInMillisecond"></a>

```typescript
public resetParquetTimestampInMillisecond(): void
```

##### `resetParquetVersion` <a name="resetParquetVersion" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetParquetVersion"></a>

```typescript
public resetParquetVersion(): void
```

##### `resetPreserveTransactions` <a name="resetPreserveTransactions" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetPreserveTransactions"></a>

```typescript
public resetPreserveTransactions(): void
```

##### `resetRfc4180` <a name="resetRfc4180" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRfc4180"></a>

```typescript
public resetRfc4180(): void
```

##### `resetRowGroupLength` <a name="resetRowGroupLength" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetRowGroupLength"></a>

```typescript
public resetRowGroupLength(): void
```

##### `resetServerSideEncryptionKmsKeyId` <a name="resetServerSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServerSideEncryptionKmsKeyId"></a>

```typescript
public resetServerSideEncryptionKmsKeyId(): void
```

##### `resetServiceAccessRoleArn` <a name="resetServiceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetServiceAccessRoleArn"></a>

```typescript
public resetServiceAccessRoleArn(): void
```

##### `resetTimestampColumnName` <a name="resetTimestampColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetTimestampColumnName"></a>

```typescript
public resetTimestampColumnName(): void
```

##### `resetUseCsvNoSupValue` <a name="resetUseCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseCsvNoSupValue"></a>

```typescript
public resetUseCsvNoSupValue(): void
```

##### `resetUseTaskStartTimeForFullLoadTimestamp` <a name="resetUseTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.resetUseTaskStartTimeForFullLoadTimestamp"></a>

```typescript
public resetUseTaskStartTimeForFullLoadTimestamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput">addColumnNameInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacterInput">addTrailingPaddingCharacterInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput">bucketFolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput">cannedAclForObjectsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput">cdcInsertsAndUpdatesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput">cdcInsertsOnlyInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput">cdcMaxBatchIntervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput">cdcMinFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput">cdcPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput">compressionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput">csvDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput">csvNoSupValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput">csvNullValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput">csvRowDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput">dataFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput">dataPageSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput">datePartitionDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput">datePartitionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput">datePartitionSequenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezoneInput">datePartitionTimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput">dictPageSizeLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput">enableStatisticsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput">encodingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput">encryptionModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwnerInput">expectedBucketOwnerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput">externalTableDefinitionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGenerationInput">glueCatalogGenerationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput">ignoreHeaderRowsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput">includeOpForFullLoadInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput">maxFileSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput">parquetTimestampInMillisecondInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput">parquetVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput">preserveTransactionsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input">rfc4180Input</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput">rowGroupLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput">serverSideEncryptionKmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput">serviceAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput">timestampColumnNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput">useCsvNoSupValueInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput">useTaskStartTimeForFullLoadTimestampInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName">addColumnName</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter">addTrailingPaddingCharacter</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder">bucketFolder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName">bucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects">cannedAclForObjects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates">cdcInsertsAndUpdates</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly">cdcInsertsOnly</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval">cdcMaxBatchInterval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize">cdcMinFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath">cdcPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType">compressionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter">csvDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue">csvNoSupValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue">csvNullValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter">csvRowDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat">dataFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize">dataPageSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter">datePartitionDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled">datePartitionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence">datePartitionSequence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezone">datePartitionTimezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit">dictPageSizeLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics">enableStatistics</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType">encodingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode">encryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwner">expectedBucketOwner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition">externalTableDefinition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration">glueCatalogGeneration</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows">ignoreHeaderRows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad">includeOpForFullLoad</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize">maxFileSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond">parquetTimestampInMillisecond</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion">parquetVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions">preserveTransactions</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180">rfc4180</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength">rowGroupLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId">serverSideEncryptionKmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn">serviceAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName">timestampColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue">useCsvNoSupValue</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp">useTaskStartTimeForFullLoadTimestamp</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addColumnNameInput`<sup>Optional</sup> <a name="addColumnNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnNameInput"></a>

```typescript
public readonly addColumnNameInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `addTrailingPaddingCharacterInput`<sup>Optional</sup> <a name="addTrailingPaddingCharacterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacterInput"></a>

```typescript
public readonly addTrailingPaddingCharacterInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bucketFolderInput`<sup>Optional</sup> <a name="bucketFolderInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolderInput"></a>

```typescript
public readonly bucketFolderInput: string;
```

- *Type:* string

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketNameInput"></a>

```typescript
public readonly bucketNameInput: string;
```

- *Type:* string

---

##### `cannedAclForObjectsInput`<sup>Optional</sup> <a name="cannedAclForObjectsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjectsInput"></a>

```typescript
public readonly cannedAclForObjectsInput: string;
```

- *Type:* string

---

##### `cdcInsertsAndUpdatesInput`<sup>Optional</sup> <a name="cdcInsertsAndUpdatesInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdatesInput"></a>

```typescript
public readonly cdcInsertsAndUpdatesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cdcInsertsOnlyInput`<sup>Optional</sup> <a name="cdcInsertsOnlyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnlyInput"></a>

```typescript
public readonly cdcInsertsOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cdcMaxBatchIntervalInput`<sup>Optional</sup> <a name="cdcMaxBatchIntervalInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchIntervalInput"></a>

```typescript
public readonly cdcMaxBatchIntervalInput: number;
```

- *Type:* number

---

##### `cdcMinFileSizeInput`<sup>Optional</sup> <a name="cdcMinFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSizeInput"></a>

```typescript
public readonly cdcMinFileSizeInput: number;
```

- *Type:* number

---

##### `cdcPathInput`<sup>Optional</sup> <a name="cdcPathInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPathInput"></a>

```typescript
public readonly cdcPathInput: string;
```

- *Type:* string

---

##### `compressionTypeInput`<sup>Optional</sup> <a name="compressionTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionTypeInput"></a>

```typescript
public readonly compressionTypeInput: string;
```

- *Type:* string

---

##### `csvDelimiterInput`<sup>Optional</sup> <a name="csvDelimiterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiterInput"></a>

```typescript
public readonly csvDelimiterInput: string;
```

- *Type:* string

---

##### `csvNoSupValueInput`<sup>Optional</sup> <a name="csvNoSupValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValueInput"></a>

```typescript
public readonly csvNoSupValueInput: string;
```

- *Type:* string

---

##### `csvNullValueInput`<sup>Optional</sup> <a name="csvNullValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValueInput"></a>

```typescript
public readonly csvNullValueInput: string;
```

- *Type:* string

---

##### `csvRowDelimiterInput`<sup>Optional</sup> <a name="csvRowDelimiterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiterInput"></a>

```typescript
public readonly csvRowDelimiterInput: string;
```

- *Type:* string

---

##### `dataFormatInput`<sup>Optional</sup> <a name="dataFormatInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormatInput"></a>

```typescript
public readonly dataFormatInput: string;
```

- *Type:* string

---

##### `dataPageSizeInput`<sup>Optional</sup> <a name="dataPageSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSizeInput"></a>

```typescript
public readonly dataPageSizeInput: number;
```

- *Type:* number

---

##### `datePartitionDelimiterInput`<sup>Optional</sup> <a name="datePartitionDelimiterInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiterInput"></a>

```typescript
public readonly datePartitionDelimiterInput: string;
```

- *Type:* string

---

##### `datePartitionEnabledInput`<sup>Optional</sup> <a name="datePartitionEnabledInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabledInput"></a>

```typescript
public readonly datePartitionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `datePartitionSequenceInput`<sup>Optional</sup> <a name="datePartitionSequenceInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequenceInput"></a>

```typescript
public readonly datePartitionSequenceInput: string;
```

- *Type:* string

---

##### `datePartitionTimezoneInput`<sup>Optional</sup> <a name="datePartitionTimezoneInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezoneInput"></a>

```typescript
public readonly datePartitionTimezoneInput: string;
```

- *Type:* string

---

##### `dictPageSizeLimitInput`<sup>Optional</sup> <a name="dictPageSizeLimitInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimitInput"></a>

```typescript
public readonly dictPageSizeLimitInput: number;
```

- *Type:* number

---

##### `enableStatisticsInput`<sup>Optional</sup> <a name="enableStatisticsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatisticsInput"></a>

```typescript
public readonly enableStatisticsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encodingTypeInput`<sup>Optional</sup> <a name="encodingTypeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingTypeInput"></a>

```typescript
public readonly encodingTypeInput: string;
```

- *Type:* string

---

##### `encryptionModeInput`<sup>Optional</sup> <a name="encryptionModeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionModeInput"></a>

```typescript
public readonly encryptionModeInput: string;
```

- *Type:* string

---

##### `expectedBucketOwnerInput`<sup>Optional</sup> <a name="expectedBucketOwnerInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwnerInput"></a>

```typescript
public readonly expectedBucketOwnerInput: string;
```

- *Type:* string

---

##### `externalTableDefinitionInput`<sup>Optional</sup> <a name="externalTableDefinitionInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinitionInput"></a>

```typescript
public readonly externalTableDefinitionInput: string;
```

- *Type:* string

---

##### `glueCatalogGenerationInput`<sup>Optional</sup> <a name="glueCatalogGenerationInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGenerationInput"></a>

```typescript
public readonly glueCatalogGenerationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreHeaderRowsInput`<sup>Optional</sup> <a name="ignoreHeaderRowsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRowsInput"></a>

```typescript
public readonly ignoreHeaderRowsInput: number;
```

- *Type:* number

---

##### `includeOpForFullLoadInput`<sup>Optional</sup> <a name="includeOpForFullLoadInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoadInput"></a>

```typescript
public readonly includeOpForFullLoadInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxFileSizeInput`<sup>Optional</sup> <a name="maxFileSizeInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSizeInput"></a>

```typescript
public readonly maxFileSizeInput: number;
```

- *Type:* number

---

##### `parquetTimestampInMillisecondInput`<sup>Optional</sup> <a name="parquetTimestampInMillisecondInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecondInput"></a>

```typescript
public readonly parquetTimestampInMillisecondInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `parquetVersionInput`<sup>Optional</sup> <a name="parquetVersionInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersionInput"></a>

```typescript
public readonly parquetVersionInput: string;
```

- *Type:* string

---

##### `preserveTransactionsInput`<sup>Optional</sup> <a name="preserveTransactionsInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactionsInput"></a>

```typescript
public readonly preserveTransactionsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rfc4180Input`<sup>Optional</sup> <a name="rfc4180Input" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180Input"></a>

```typescript
public readonly rfc4180Input: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rowGroupLengthInput`<sup>Optional</sup> <a name="rowGroupLengthInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLengthInput"></a>

```typescript
public readonly rowGroupLengthInput: number;
```

- *Type:* number

---

##### `serverSideEncryptionKmsKeyIdInput`<sup>Optional</sup> <a name="serverSideEncryptionKmsKeyIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyIdInput"></a>

```typescript
public readonly serverSideEncryptionKmsKeyIdInput: string;
```

- *Type:* string

---

##### `serviceAccessRoleArnInput`<sup>Optional</sup> <a name="serviceAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArnInput"></a>

```typescript
public readonly serviceAccessRoleArnInput: string;
```

- *Type:* string

---

##### `timestampColumnNameInput`<sup>Optional</sup> <a name="timestampColumnNameInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnNameInput"></a>

```typescript
public readonly timestampColumnNameInput: string;
```

- *Type:* string

---

##### `useCsvNoSupValueInput`<sup>Optional</sup> <a name="useCsvNoSupValueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValueInput"></a>

```typescript
public readonly useCsvNoSupValueInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useTaskStartTimeForFullLoadTimestampInput`<sup>Optional</sup> <a name="useTaskStartTimeForFullLoadTimestampInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestampInput"></a>

```typescript
public readonly useTaskStartTimeForFullLoadTimestampInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `addColumnName`<sup>Required</sup> <a name="addColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addColumnName"></a>

```typescript
public readonly addColumnName: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `addTrailingPaddingCharacter`<sup>Required</sup> <a name="addTrailingPaddingCharacter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.addTrailingPaddingCharacter"></a>

```typescript
public readonly addTrailingPaddingCharacter: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `bucketFolder`<sup>Required</sup> <a name="bucketFolder" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketFolder"></a>

```typescript
public readonly bucketFolder: string;
```

- *Type:* string

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.bucketName"></a>

```typescript
public readonly bucketName: string;
```

- *Type:* string

---

##### `cannedAclForObjects`<sup>Required</sup> <a name="cannedAclForObjects" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cannedAclForObjects"></a>

```typescript
public readonly cannedAclForObjects: string;
```

- *Type:* string

---

##### `cdcInsertsAndUpdates`<sup>Required</sup> <a name="cdcInsertsAndUpdates" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsAndUpdates"></a>

```typescript
public readonly cdcInsertsAndUpdates: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cdcInsertsOnly`<sup>Required</sup> <a name="cdcInsertsOnly" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcInsertsOnly"></a>

```typescript
public readonly cdcInsertsOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cdcMaxBatchInterval`<sup>Required</sup> <a name="cdcMaxBatchInterval" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMaxBatchInterval"></a>

```typescript
public readonly cdcMaxBatchInterval: number;
```

- *Type:* number

---

##### `cdcMinFileSize`<sup>Required</sup> <a name="cdcMinFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcMinFileSize"></a>

```typescript
public readonly cdcMinFileSize: number;
```

- *Type:* number

---

##### `cdcPath`<sup>Required</sup> <a name="cdcPath" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.cdcPath"></a>

```typescript
public readonly cdcPath: string;
```

- *Type:* string

---

##### `compressionType`<sup>Required</sup> <a name="compressionType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.compressionType"></a>

```typescript
public readonly compressionType: string;
```

- *Type:* string

---

##### `csvDelimiter`<sup>Required</sup> <a name="csvDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvDelimiter"></a>

```typescript
public readonly csvDelimiter: string;
```

- *Type:* string

---

##### `csvNoSupValue`<sup>Required</sup> <a name="csvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNoSupValue"></a>

```typescript
public readonly csvNoSupValue: string;
```

- *Type:* string

---

##### `csvNullValue`<sup>Required</sup> <a name="csvNullValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvNullValue"></a>

```typescript
public readonly csvNullValue: string;
```

- *Type:* string

---

##### `csvRowDelimiter`<sup>Required</sup> <a name="csvRowDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.csvRowDelimiter"></a>

```typescript
public readonly csvRowDelimiter: string;
```

- *Type:* string

---

##### `dataFormat`<sup>Required</sup> <a name="dataFormat" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataFormat"></a>

```typescript
public readonly dataFormat: string;
```

- *Type:* string

---

##### `dataPageSize`<sup>Required</sup> <a name="dataPageSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dataPageSize"></a>

```typescript
public readonly dataPageSize: number;
```

- *Type:* number

---

##### `datePartitionDelimiter`<sup>Required</sup> <a name="datePartitionDelimiter" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionDelimiter"></a>

```typescript
public readonly datePartitionDelimiter: string;
```

- *Type:* string

---

##### `datePartitionEnabled`<sup>Required</sup> <a name="datePartitionEnabled" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionEnabled"></a>

```typescript
public readonly datePartitionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `datePartitionSequence`<sup>Required</sup> <a name="datePartitionSequence" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionSequence"></a>

```typescript
public readonly datePartitionSequence: string;
```

- *Type:* string

---

##### `datePartitionTimezone`<sup>Required</sup> <a name="datePartitionTimezone" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.datePartitionTimezone"></a>

```typescript
public readonly datePartitionTimezone: string;
```

- *Type:* string

---

##### `dictPageSizeLimit`<sup>Required</sup> <a name="dictPageSizeLimit" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.dictPageSizeLimit"></a>

```typescript
public readonly dictPageSizeLimit: number;
```

- *Type:* number

---

##### `enableStatistics`<sup>Required</sup> <a name="enableStatistics" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.enableStatistics"></a>

```typescript
public readonly enableStatistics: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `encodingType`<sup>Required</sup> <a name="encodingType" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encodingType"></a>

```typescript
public readonly encodingType: string;
```

- *Type:* string

---

##### `encryptionMode`<sup>Required</sup> <a name="encryptionMode" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.encryptionMode"></a>

```typescript
public readonly encryptionMode: string;
```

- *Type:* string

---

##### `expectedBucketOwner`<sup>Required</sup> <a name="expectedBucketOwner" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.expectedBucketOwner"></a>

```typescript
public readonly expectedBucketOwner: string;
```

- *Type:* string

---

##### `externalTableDefinition`<sup>Required</sup> <a name="externalTableDefinition" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.externalTableDefinition"></a>

```typescript
public readonly externalTableDefinition: string;
```

- *Type:* string

---

##### `glueCatalogGeneration`<sup>Required</sup> <a name="glueCatalogGeneration" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.glueCatalogGeneration"></a>

```typescript
public readonly glueCatalogGeneration: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ignoreHeaderRows`<sup>Required</sup> <a name="ignoreHeaderRows" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.ignoreHeaderRows"></a>

```typescript
public readonly ignoreHeaderRows: number;
```

- *Type:* number

---

##### `includeOpForFullLoad`<sup>Required</sup> <a name="includeOpForFullLoad" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.includeOpForFullLoad"></a>

```typescript
public readonly includeOpForFullLoad: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxFileSize`<sup>Required</sup> <a name="maxFileSize" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.maxFileSize"></a>

```typescript
public readonly maxFileSize: number;
```

- *Type:* number

---

##### `parquetTimestampInMillisecond`<sup>Required</sup> <a name="parquetTimestampInMillisecond" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetTimestampInMillisecond"></a>

```typescript
public readonly parquetTimestampInMillisecond: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `parquetVersion`<sup>Required</sup> <a name="parquetVersion" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.parquetVersion"></a>

```typescript
public readonly parquetVersion: string;
```

- *Type:* string

---

##### `preserveTransactions`<sup>Required</sup> <a name="preserveTransactions" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.preserveTransactions"></a>

```typescript
public readonly preserveTransactions: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rfc4180`<sup>Required</sup> <a name="rfc4180" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rfc4180"></a>

```typescript
public readonly rfc4180: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `rowGroupLength`<sup>Required</sup> <a name="rowGroupLength" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.rowGroupLength"></a>

```typescript
public readonly rowGroupLength: number;
```

- *Type:* number

---

##### `serverSideEncryptionKmsKeyId`<sup>Required</sup> <a name="serverSideEncryptionKmsKeyId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serverSideEncryptionKmsKeyId"></a>

```typescript
public readonly serverSideEncryptionKmsKeyId: string;
```

- *Type:* string

---

##### `serviceAccessRoleArn`<sup>Required</sup> <a name="serviceAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.serviceAccessRoleArn"></a>

```typescript
public readonly serviceAccessRoleArn: string;
```

- *Type:* string

---

##### `timestampColumnName`<sup>Required</sup> <a name="timestampColumnName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.timestampColumnName"></a>

```typescript
public readonly timestampColumnName: string;
```

- *Type:* string

---

##### `useCsvNoSupValue`<sup>Required</sup> <a name="useCsvNoSupValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useCsvNoSupValue"></a>

```typescript
public readonly useCsvNoSupValue: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `useTaskStartTimeForFullLoadTimestamp`<sup>Required</sup> <a name="useTaskStartTimeForFullLoadTimestamp" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.useTaskStartTimeForFullLoadTimestamp"></a>

```typescript
public readonly useTaskStartTimeForFullLoadTimestamp: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3SettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointS3Settings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointS3Settings">DmsEndpointS3Settings</a>

---


### DmsEndpointSybaseSettingsOutputReference <a name="DmsEndpointSybaseSettingsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointSybaseSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointSybaseSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointSybaseSettings">DmsEndpointSybaseSettings</a>

---


### DmsEndpointTagsList <a name="DmsEndpointTagsList" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.get"></a>

```typescript
public get(index: number): DmsEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>[]

---


### DmsEndpointTagsOutputReference <a name="DmsEndpointTagsOutputReference" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer"></a>

```typescript
import { dmsEndpoint } from '@cdktn/provider-awscc'

new dmsEndpoint.DmsEndpointTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsEndpointTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.dmsEndpoint.DmsEndpointTags">DmsEndpointTags</a>

---



