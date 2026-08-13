# `iotDomainConfiguration` Submodule <a name="`iotDomainConfiguration` Submodule" id="@cdktn/provider-awscc.iotDomainConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotDomainConfiguration <a name="IotDomainConfiguration" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration awscc_iot_domain_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

new iotDomainConfiguration.IotDomainConfiguration(scope: Construct, id: string, config?: IotDomainConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig">IotDomainConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig">IotDomainConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig">putAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putClientCertificateConfig">putClientCertificateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putServerCertificateConfig">putServerCertificateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetApplicationProtocol">resetApplicationProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetAuthorizerConfig">resetAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetClientCertificateConfig">resetClientCertificateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetDomainConfigurationName">resetDomainConfigurationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetDomainConfigurationStatus">resetDomainConfigurationStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateArns">resetServerCertificateArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateConfig">resetServerCertificateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetValidationCertificateArn">resetValidationCertificateArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorizerConfig` <a name="putAuthorizerConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig"></a>

```typescript
public putAuthorizerConfig(value: IotDomainConfigurationAuthorizerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---

##### `putClientCertificateConfig` <a name="putClientCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putClientCertificateConfig"></a>

```typescript
public putClientCertificateConfig(value: IotDomainConfigurationClientCertificateConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putClientCertificateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a>

---

##### `putServerCertificateConfig` <a name="putServerCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putServerCertificateConfig"></a>

```typescript
public putServerCertificateConfig(value: IotDomainConfigurationServerCertificateConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putServerCertificateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putTags"></a>

```typescript
public putTags(value: IResolvable | IotDomainConfigurationTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>[]

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig"></a>

```typescript
public putTlsConfig(value: IotDomainConfigurationTlsConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---

##### `resetApplicationProtocol` <a name="resetApplicationProtocol" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetApplicationProtocol"></a>

```typescript
public resetApplicationProtocol(): void
```

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetAuthenticationType"></a>

```typescript
public resetAuthenticationType(): void
```

##### `resetAuthorizerConfig` <a name="resetAuthorizerConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetAuthorizerConfig"></a>

```typescript
public resetAuthorizerConfig(): void
```

##### `resetClientCertificateConfig` <a name="resetClientCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetClientCertificateConfig"></a>

```typescript
public resetClientCertificateConfig(): void
```

##### `resetDomainConfigurationName` <a name="resetDomainConfigurationName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetDomainConfigurationName"></a>

```typescript
public resetDomainConfigurationName(): void
```

##### `resetDomainConfigurationStatus` <a name="resetDomainConfigurationStatus" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetDomainConfigurationStatus"></a>

```typescript
public resetDomainConfigurationStatus(): void
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetServerCertificateArns` <a name="resetServerCertificateArns" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateArns"></a>

```typescript
public resetServerCertificateArns(): void
```

##### `resetServerCertificateConfig` <a name="resetServerCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateConfig"></a>

```typescript
public resetServerCertificateConfig(): void
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetServiceType"></a>

```typescript
public resetServiceType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetTlsConfig"></a>

```typescript
public resetTlsConfig(): void
```

##### `resetValidationCertificateArn` <a name="resetValidationCertificateArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.resetValidationCertificateArn"></a>

```typescript
public resetValidationCertificateArn(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotDomainConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isConstruct"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

iotDomainConfiguration.IotDomainConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

iotDomainConfiguration.IotDomainConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

iotDomainConfiguration.IotDomainConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotDomainConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotDomainConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotDomainConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotDomainConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfig">authorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference">IotDomainConfigurationAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.clientCertificateConfig">clientCertificateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference">IotDomainConfigurationClientCertificateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainType">domainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateConfig">serverCertificateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference">IotDomainConfigurationServerCertificateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificates">serverCertificates</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList">IotDomainConfigurationServerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList">IotDomainConfigurationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference">IotDomainConfigurationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.applicationProtocolInput">applicationProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfigInput">authorizerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.clientCertificateConfigInput">clientCertificateConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationNameInput">domainConfigurationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationStatusInput">domainConfigurationStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArnsInput">serverCertificateArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateConfigInput">serverCertificateConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serviceTypeInput">serviceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfigInput">tlsConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArnInput">validationCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.applicationProtocol">applicationProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationName">domainConfigurationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationStatus">domainConfigurationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArns">serverCertificateArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serviceType">serviceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArn">validationCertificateArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authorizerConfig`<sup>Required</sup> <a name="authorizerConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfig"></a>

```typescript
public readonly authorizerConfig: IotDomainConfigurationAuthorizerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference">IotDomainConfigurationAuthorizerConfigOutputReference</a>

---

##### `clientCertificateConfig`<sup>Required</sup> <a name="clientCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.clientCertificateConfig"></a>

```typescript
public readonly clientCertificateConfig: IotDomainConfigurationClientCertificateConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference">IotDomainConfigurationClientCertificateConfigOutputReference</a>

---

##### `domainType`<sup>Required</sup> <a name="domainType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainType"></a>

```typescript
public readonly domainType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `serverCertificateConfig`<sup>Required</sup> <a name="serverCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateConfig"></a>

```typescript
public readonly serverCertificateConfig: IotDomainConfigurationServerCertificateConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference">IotDomainConfigurationServerCertificateConfigOutputReference</a>

---

##### `serverCertificates`<sup>Required</sup> <a name="serverCertificates" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificates"></a>

```typescript
public readonly serverCertificates: IotDomainConfigurationServerCertificatesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList">IotDomainConfigurationServerCertificatesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tags"></a>

```typescript
public readonly tags: IotDomainConfigurationTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList">IotDomainConfigurationTagsList</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: IotDomainConfigurationTlsConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference">IotDomainConfigurationTlsConfigOutputReference</a>

---

##### `applicationProtocolInput`<sup>Optional</sup> <a name="applicationProtocolInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.applicationProtocolInput"></a>

```typescript
public readonly applicationProtocolInput: string;
```

- *Type:* string

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `authorizerConfigInput`<sup>Optional</sup> <a name="authorizerConfigInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfigInput"></a>

```typescript
public readonly authorizerConfigInput: IResolvable | IotDomainConfigurationAuthorizerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---

##### `clientCertificateConfigInput`<sup>Optional</sup> <a name="clientCertificateConfigInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.clientCertificateConfigInput"></a>

```typescript
public readonly clientCertificateConfigInput: IResolvable | IotDomainConfigurationClientCertificateConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a>

---

##### `domainConfigurationNameInput`<sup>Optional</sup> <a name="domainConfigurationNameInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationNameInput"></a>

```typescript
public readonly domainConfigurationNameInput: string;
```

- *Type:* string

---

##### `domainConfigurationStatusInput`<sup>Optional</sup> <a name="domainConfigurationStatusInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationStatusInput"></a>

```typescript
public readonly domainConfigurationStatusInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `serverCertificateArnsInput`<sup>Optional</sup> <a name="serverCertificateArnsInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArnsInput"></a>

```typescript
public readonly serverCertificateArnsInput: string[];
```

- *Type:* string[]

---

##### `serverCertificateConfigInput`<sup>Optional</sup> <a name="serverCertificateConfigInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateConfigInput"></a>

```typescript
public readonly serverCertificateConfigInput: IResolvable | IotDomainConfigurationServerCertificateConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a>

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serviceTypeInput"></a>

```typescript
public readonly serviceTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotDomainConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>[]

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfigInput"></a>

```typescript
public readonly tlsConfigInput: IResolvable | IotDomainConfigurationTlsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---

##### `validationCertificateArnInput`<sup>Optional</sup> <a name="validationCertificateArnInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArnInput"></a>

```typescript
public readonly validationCertificateArnInput: string;
```

- *Type:* string

---

##### `applicationProtocol`<sup>Required</sup> <a name="applicationProtocol" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.applicationProtocol"></a>

```typescript
public readonly applicationProtocol: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `domainConfigurationName`<sup>Required</sup> <a name="domainConfigurationName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationName"></a>

```typescript
public readonly domainConfigurationName: string;
```

- *Type:* string

---

##### `domainConfigurationStatus`<sup>Required</sup> <a name="domainConfigurationStatus" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainConfigurationStatus"></a>

```typescript
public readonly domainConfigurationStatus: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `serverCertificateArns`<sup>Required</sup> <a name="serverCertificateArns" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArns"></a>

```typescript
public readonly serverCertificateArns: string[];
```

- *Type:* string[]

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

---

##### `validationCertificateArn`<sup>Required</sup> <a name="validationCertificateArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArn"></a>

```typescript
public readonly validationCertificateArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotDomainConfigurationAuthorizerConfig <a name="IotDomainConfigurationAuthorizerConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

const iotDomainConfigurationAuthorizerConfig: iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.allowAuthorizerOverride">allowAuthorizerOverride</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.defaultAuthorizerName">defaultAuthorizerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}. |

---

##### `allowAuthorizerOverride`<sup>Optional</sup> <a name="allowAuthorizerOverride" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.allowAuthorizerOverride"></a>

```typescript
public readonly allowAuthorizerOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}.

---

##### `defaultAuthorizerName`<sup>Optional</sup> <a name="defaultAuthorizerName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.defaultAuthorizerName"></a>

```typescript
public readonly defaultAuthorizerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}.

---

### IotDomainConfigurationClientCertificateConfig <a name="IotDomainConfigurationClientCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

const iotDomainConfigurationClientCertificateConfig: iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig.property.clientCertificateCallbackArn">clientCertificateCallbackArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#client_certificate_callback_arn IotDomainConfiguration#client_certificate_callback_arn}. |

---

##### `clientCertificateCallbackArn`<sup>Optional</sup> <a name="clientCertificateCallbackArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig.property.clientCertificateCallbackArn"></a>

```typescript
public readonly clientCertificateCallbackArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#client_certificate_callback_arn IotDomainConfiguration#client_certificate_callback_arn}.

---

### IotDomainConfigurationConfig <a name="IotDomainConfigurationConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

const iotDomainConfigurationConfig: iotDomainConfiguration.IotDomainConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.applicationProtocol">applicationProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#application_protocol IotDomainConfiguration#application_protocol}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#authentication_type IotDomainConfiguration#authentication_type}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.authorizerConfig">authorizerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.clientCertificateConfig">clientCertificateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#client_certificate_config IotDomainConfiguration#client_certificate_config}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainConfigurationName">domainConfigurationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#domain_configuration_name IotDomainConfiguration#domain_configuration_name}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainConfigurationStatus">domainConfigurationStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#domain_configuration_status IotDomainConfiguration#domain_configuration_status}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateArns">serverCertificateArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateConfig">serverCertificateConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#server_certificate_config IotDomainConfiguration#server_certificate_config}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.serviceType">serviceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.validationCertificateArn">validationCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationProtocol`<sup>Optional</sup> <a name="applicationProtocol" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.applicationProtocol"></a>

```typescript
public readonly applicationProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#application_protocol IotDomainConfiguration#application_protocol}.

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#authentication_type IotDomainConfiguration#authentication_type}.

---

##### `authorizerConfig`<sup>Optional</sup> <a name="authorizerConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.authorizerConfig"></a>

```typescript
public readonly authorizerConfig: IotDomainConfigurationAuthorizerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}.

---

##### `clientCertificateConfig`<sup>Optional</sup> <a name="clientCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.clientCertificateConfig"></a>

```typescript
public readonly clientCertificateConfig: IotDomainConfigurationClientCertificateConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#client_certificate_config IotDomainConfiguration#client_certificate_config}.

---

##### `domainConfigurationName`<sup>Optional</sup> <a name="domainConfigurationName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainConfigurationName"></a>

```typescript
public readonly domainConfigurationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#domain_configuration_name IotDomainConfiguration#domain_configuration_name}.

---

##### `domainConfigurationStatus`<sup>Optional</sup> <a name="domainConfigurationStatus" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainConfigurationStatus"></a>

```typescript
public readonly domainConfigurationStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#domain_configuration_status IotDomainConfiguration#domain_configuration_status}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}.

---

##### `serverCertificateArns`<sup>Optional</sup> <a name="serverCertificateArns" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateArns"></a>

```typescript
public readonly serverCertificateArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}.

---

##### `serverCertificateConfig`<sup>Optional</sup> <a name="serverCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateConfig"></a>

```typescript
public readonly serverCertificateConfig: IotDomainConfigurationServerCertificateConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#server_certificate_config IotDomainConfiguration#server_certificate_config}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.serviceType"></a>

```typescript
public readonly serviceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotDomainConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}.

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.tlsConfig"></a>

```typescript
public readonly tlsConfig: IotDomainConfigurationTlsConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}.

---

##### `validationCertificateArn`<sup>Optional</sup> <a name="validationCertificateArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationConfig.property.validationCertificateArn"></a>

```typescript
public readonly validationCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}.

---

### IotDomainConfigurationServerCertificateConfig <a name="IotDomainConfigurationServerCertificateConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

const iotDomainConfigurationServerCertificateConfig: iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.property.enableOcspCheck">enableOcspCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#enable_ocsp_check IotDomainConfiguration#enable_ocsp_check}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.property.ocspAuthorizedResponderArn">ocspAuthorizedResponderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#ocsp_authorized_responder_arn IotDomainConfiguration#ocsp_authorized_responder_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.property.ocspLambdaArn">ocspLambdaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#ocsp_lambda_arn IotDomainConfiguration#ocsp_lambda_arn}. |

---

##### `enableOcspCheck`<sup>Optional</sup> <a name="enableOcspCheck" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.property.enableOcspCheck"></a>

```typescript
public readonly enableOcspCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#enable_ocsp_check IotDomainConfiguration#enable_ocsp_check}.

---

##### `ocspAuthorizedResponderArn`<sup>Optional</sup> <a name="ocspAuthorizedResponderArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.property.ocspAuthorizedResponderArn"></a>

```typescript
public readonly ocspAuthorizedResponderArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#ocsp_authorized_responder_arn IotDomainConfiguration#ocsp_authorized_responder_arn}.

---

##### `ocspLambdaArn`<sup>Optional</sup> <a name="ocspLambdaArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig.property.ocspLambdaArn"></a>

```typescript
public readonly ocspLambdaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#ocsp_lambda_arn IotDomainConfiguration#ocsp_lambda_arn}.

---

### IotDomainConfigurationServerCertificates <a name="IotDomainConfigurationServerCertificates" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificates.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

const iotDomainConfigurationServerCertificates: iotDomainConfiguration.IotDomainConfigurationServerCertificates = { ... }
```


### IotDomainConfigurationTags <a name="IotDomainConfigurationTags" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

const iotDomainConfigurationTags: iotDomainConfiguration.IotDomainConfigurationTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#key IotDomainConfiguration#key}. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#value IotDomainConfiguration#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#key IotDomainConfiguration#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#value IotDomainConfiguration#value}.

---

### IotDomainConfigurationTlsConfig <a name="IotDomainConfigurationTlsConfig" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

const iotDomainConfigurationTlsConfig: iotDomainConfiguration.IotDomainConfigurationTlsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}. |

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotDomainConfigurationAuthorizerConfigOutputReference <a name="IotDomainConfigurationAuthorizerConfigOutputReference" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

new iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetAllowAuthorizerOverride">resetAllowAuthorizerOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetDefaultAuthorizerName">resetDefaultAuthorizerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAuthorizerOverride` <a name="resetAllowAuthorizerOverride" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetAllowAuthorizerOverride"></a>

```typescript
public resetAllowAuthorizerOverride(): void
```

##### `resetDefaultAuthorizerName` <a name="resetDefaultAuthorizerName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetDefaultAuthorizerName"></a>

```typescript
public resetDefaultAuthorizerName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverrideInput">allowAuthorizerOverrideInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerNameInput">defaultAuthorizerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride">allowAuthorizerOverride</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName">defaultAuthorizerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowAuthorizerOverrideInput`<sup>Optional</sup> <a name="allowAuthorizerOverrideInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverrideInput"></a>

```typescript
public readonly allowAuthorizerOverrideInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `defaultAuthorizerNameInput`<sup>Optional</sup> <a name="defaultAuthorizerNameInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerNameInput"></a>

```typescript
public readonly defaultAuthorizerNameInput: string;
```

- *Type:* string

---

##### `allowAuthorizerOverride`<sup>Required</sup> <a name="allowAuthorizerOverride" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride"></a>

```typescript
public readonly allowAuthorizerOverride: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `defaultAuthorizerName`<sup>Required</sup> <a name="defaultAuthorizerName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName"></a>

```typescript
public readonly defaultAuthorizerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotDomainConfigurationAuthorizerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---


### IotDomainConfigurationClientCertificateConfigOutputReference <a name="IotDomainConfigurationClientCertificateConfigOutputReference" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

new iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.resetClientCertificateCallbackArn">resetClientCertificateCallbackArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientCertificateCallbackArn` <a name="resetClientCertificateCallbackArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.resetClientCertificateCallbackArn"></a>

```typescript
public resetClientCertificateCallbackArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.clientCertificateCallbackArnInput">clientCertificateCallbackArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.clientCertificateCallbackArn">clientCertificateCallbackArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clientCertificateCallbackArnInput`<sup>Optional</sup> <a name="clientCertificateCallbackArnInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.clientCertificateCallbackArnInput"></a>

```typescript
public readonly clientCertificateCallbackArnInput: string;
```

- *Type:* string

---

##### `clientCertificateCallbackArn`<sup>Required</sup> <a name="clientCertificateCallbackArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.clientCertificateCallbackArn"></a>

```typescript
public readonly clientCertificateCallbackArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotDomainConfigurationClientCertificateConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationClientCertificateConfig">IotDomainConfigurationClientCertificateConfig</a>

---


### IotDomainConfigurationServerCertificateConfigOutputReference <a name="IotDomainConfigurationServerCertificateConfigOutputReference" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

new iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resetEnableOcspCheck">resetEnableOcspCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resetOcspAuthorizedResponderArn">resetOcspAuthorizedResponderArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resetOcspLambdaArn">resetOcspLambdaArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableOcspCheck` <a name="resetEnableOcspCheck" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resetEnableOcspCheck"></a>

```typescript
public resetEnableOcspCheck(): void
```

##### `resetOcspAuthorizedResponderArn` <a name="resetOcspAuthorizedResponderArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resetOcspAuthorizedResponderArn"></a>

```typescript
public resetOcspAuthorizedResponderArn(): void
```

##### `resetOcspLambdaArn` <a name="resetOcspLambdaArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.resetOcspLambdaArn"></a>

```typescript
public resetOcspLambdaArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.enableOcspCheckInput">enableOcspCheckInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspAuthorizedResponderArnInput">ocspAuthorizedResponderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspLambdaArnInput">ocspLambdaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.enableOcspCheck">enableOcspCheck</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspAuthorizedResponderArn">ocspAuthorizedResponderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspLambdaArn">ocspLambdaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableOcspCheckInput`<sup>Optional</sup> <a name="enableOcspCheckInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.enableOcspCheckInput"></a>

```typescript
public readonly enableOcspCheckInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ocspAuthorizedResponderArnInput`<sup>Optional</sup> <a name="ocspAuthorizedResponderArnInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspAuthorizedResponderArnInput"></a>

```typescript
public readonly ocspAuthorizedResponderArnInput: string;
```

- *Type:* string

---

##### `ocspLambdaArnInput`<sup>Optional</sup> <a name="ocspLambdaArnInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspLambdaArnInput"></a>

```typescript
public readonly ocspLambdaArnInput: string;
```

- *Type:* string

---

##### `enableOcspCheck`<sup>Required</sup> <a name="enableOcspCheck" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.enableOcspCheck"></a>

```typescript
public readonly enableOcspCheck: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `ocspAuthorizedResponderArn`<sup>Required</sup> <a name="ocspAuthorizedResponderArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspAuthorizedResponderArn"></a>

```typescript
public readonly ocspAuthorizedResponderArn: string;
```

- *Type:* string

---

##### `ocspLambdaArn`<sup>Required</sup> <a name="ocspLambdaArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.ocspLambdaArn"></a>

```typescript
public readonly ocspLambdaArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotDomainConfigurationServerCertificateConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificateConfig">IotDomainConfigurationServerCertificateConfig</a>

---


### IotDomainConfigurationServerCertificatesList <a name="IotDomainConfigurationServerCertificatesList" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

new iotDomainConfiguration.IotDomainConfigurationServerCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.get"></a>

```typescript
public get(index: number): IotDomainConfigurationServerCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### IotDomainConfigurationServerCertificatesOutputReference <a name="IotDomainConfigurationServerCertificatesOutputReference" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

new iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateArn">serverCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateStatus">serverCertificateStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateStatusDetail">serverCertificateStatusDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificates">IotDomainConfigurationServerCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `serverCertificateArn`<sup>Required</sup> <a name="serverCertificateArn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateArn"></a>

```typescript
public readonly serverCertificateArn: string;
```

- *Type:* string

---

##### `serverCertificateStatus`<sup>Required</sup> <a name="serverCertificateStatus" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateStatus"></a>

```typescript
public readonly serverCertificateStatus: string;
```

- *Type:* string

---

##### `serverCertificateStatusDetail`<sup>Required</sup> <a name="serverCertificateStatusDetail" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.serverCertificateStatusDetail"></a>

```typescript
public readonly serverCertificateStatusDetail: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IotDomainConfigurationServerCertificates;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationServerCertificates">IotDomainConfigurationServerCertificates</a>

---


### IotDomainConfigurationTagsList <a name="IotDomainConfigurationTagsList" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

new iotDomainConfiguration.IotDomainConfigurationTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.get"></a>

```typescript
public get(index: number): IotDomainConfigurationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotDomainConfigurationTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>[]

---


### IotDomainConfigurationTagsOutputReference <a name="IotDomainConfigurationTagsOutputReference" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

new iotDomainConfiguration.IotDomainConfigurationTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotDomainConfigurationTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTags">IotDomainConfigurationTags</a>

---


### IotDomainConfigurationTlsConfigOutputReference <a name="IotDomainConfigurationTlsConfigOutputReference" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer"></a>

```typescript
import { iotDomainConfiguration } from '@cdktn/provider-awscc'

new iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resetSecurityPolicy"></a>

```typescript
public resetSecurityPolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicyInput">securityPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicyInput"></a>

```typescript
public readonly securityPolicyInput: string;
```

- *Type:* string

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicy"></a>

```typescript
public readonly securityPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotDomainConfigurationTlsConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---



