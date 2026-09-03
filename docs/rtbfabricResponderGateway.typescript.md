# `rtbfabricResponderGateway` Submodule <a name="`rtbfabricResponderGateway` Submodule" id="@cdktn/provider-awscc.rtbfabricResponderGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricResponderGateway <a name="RtbfabricResponderGateway" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway awscc_rtbfabric_responder_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

new rtbfabricResponderGateway.RtbfabricResponderGateway(scope: Construct, id: string, config: RtbfabricResponderGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig">RtbfabricResponderGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig">RtbfabricResponderGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig">putListenerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration">putManagedEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration">putTrustStoreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetAcmCertificateArn">resetAcmCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetGatewayType">resetGatewayType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetListenerConfig">resetListenerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetManagedEndpointConfiguration">resetManagedEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTrustStoreConfiguration">resetTrustStoreConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putListenerConfig` <a name="putListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig"></a>

```typescript
public putListenerConfig(value: RtbfabricResponderGatewayListenerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

---

##### `putManagedEndpointConfiguration` <a name="putManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration"></a>

```typescript
public putManagedEndpointConfiguration(value: RtbfabricResponderGatewayManagedEndpointConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags"></a>

```typescript
public putTags(value: IResolvable | RtbfabricResponderGatewayTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]

---

##### `putTrustStoreConfiguration` <a name="putTrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration"></a>

```typescript
public putTrustStoreConfiguration(value: RtbfabricResponderGatewayTrustStoreConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

---

##### `resetAcmCertificateArn` <a name="resetAcmCertificateArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetAcmCertificateArn"></a>

```typescript
public resetAcmCertificateArn(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDomainName"></a>

```typescript
public resetDomainName(): void
```

##### `resetGatewayType` <a name="resetGatewayType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetGatewayType"></a>

```typescript
public resetGatewayType(): void
```

##### `resetListenerConfig` <a name="resetListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetListenerConfig"></a>

```typescript
public resetListenerConfig(): void
```

##### `resetManagedEndpointConfiguration` <a name="resetManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetManagedEndpointConfiguration"></a>

```typescript
public resetManagedEndpointConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTrustStoreConfiguration` <a name="resetTrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTrustStoreConfiguration"></a>

```typescript
public resetTrustStoreConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricResponderGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a RtbfabricResponderGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the RtbfabricResponderGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing RtbfabricResponderGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricResponderGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.certificateAssociationStatus">certificateAssociationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.externalInboundEndpoint">externalInboundEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayId">gatewayId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfig">listenerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference">RtbfabricResponderGatewayListenerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfiguration">managedEndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.responderGatewayStatus">responderGatewayStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList">RtbfabricResponderGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfiguration">trustStoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference">RtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.updatedTimestamp">updatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArnInput">acmCertificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainNameInput">domainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayTypeInput">gatewayTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfigInput">listenerConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfigurationInput">managedEndpointConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfigurationInput">trustStoreConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArn">acmCertificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayType">gatewayType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `certificateAssociationStatus`<sup>Required</sup> <a name="certificateAssociationStatus" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.certificateAssociationStatus"></a>

```typescript
public readonly certificateAssociationStatus: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `externalInboundEndpoint`<sup>Required</sup> <a name="externalInboundEndpoint" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.externalInboundEndpoint"></a>

```typescript
public readonly externalInboundEndpoint: string;
```

- *Type:* string

---

##### `gatewayId`<sup>Required</sup> <a name="gatewayId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayId"></a>

```typescript
public readonly gatewayId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listenerConfig`<sup>Required</sup> <a name="listenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfig"></a>

```typescript
public readonly listenerConfig: RtbfabricResponderGatewayListenerConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference">RtbfabricResponderGatewayListenerConfigOutputReference</a>

---

##### `managedEndpointConfiguration`<sup>Required</sup> <a name="managedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfiguration"></a>

```typescript
public readonly managedEndpointConfiguration: RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a>

---

##### `responderGatewayStatus`<sup>Required</sup> <a name="responderGatewayStatus" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.responderGatewayStatus"></a>

```typescript
public readonly responderGatewayStatus: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tags"></a>

```typescript
public readonly tags: RtbfabricResponderGatewayTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList">RtbfabricResponderGatewayTagsList</a>

---

##### `trustStoreConfiguration`<sup>Required</sup> <a name="trustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfiguration"></a>

```typescript
public readonly trustStoreConfiguration: RtbfabricResponderGatewayTrustStoreConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference">RtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a>

---

##### `updatedTimestamp`<sup>Required</sup> <a name="updatedTimestamp" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.updatedTimestamp"></a>

```typescript
public readonly updatedTimestamp: string;
```

- *Type:* string

---

##### `acmCertificateArnInput`<sup>Optional</sup> <a name="acmCertificateArnInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArnInput"></a>

```typescript
public readonly acmCertificateArnInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainNameInput"></a>

```typescript
public readonly domainNameInput: string;
```

- *Type:* string

---

##### `gatewayTypeInput`<sup>Optional</sup> <a name="gatewayTypeInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayTypeInput"></a>

```typescript
public readonly gatewayTypeInput: string;
```

- *Type:* string

---

##### `listenerConfigInput`<sup>Optional</sup> <a name="listenerConfigInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfigInput"></a>

```typescript
public readonly listenerConfigInput: IResolvable | RtbfabricResponderGatewayListenerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

---

##### `managedEndpointConfigurationInput`<sup>Optional</sup> <a name="managedEndpointConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfigurationInput"></a>

```typescript
public readonly managedEndpointConfigurationInput: IResolvable | RtbfabricResponderGatewayManagedEndpointConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | RtbfabricResponderGatewayTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]

---

##### `trustStoreConfigurationInput`<sup>Optional</sup> <a name="trustStoreConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfigurationInput"></a>

```typescript
public readonly trustStoreConfigurationInput: IResolvable | RtbfabricResponderGatewayTrustStoreConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `acmCertificateArn`<sup>Required</sup> <a name="acmCertificateArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArn"></a>

```typescript
public readonly acmCertificateArn: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `gatewayType`<sup>Required</sup> <a name="gatewayType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayType"></a>

```typescript
public readonly gatewayType: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricResponderGatewayConfig <a name="RtbfabricResponderGatewayConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

const rtbfabricResponderGatewayConfig: rtbfabricResponderGateway.RtbfabricResponderGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | The ID of one or more security groups in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | The ID of one or more subnets in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.acmCertificateArn">acmCertificateArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.domainName">domainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.gatewayType">gatewayType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.listenerConfig">listenerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.managedEndpointConfiguration">managedEndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]</code> | Tags to assign to the Responder Gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.trustStoreConfiguration">trustStoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

The ID of one or more security groups in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#security_group_ids RtbfabricResponderGateway#security_group_ids}

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

The ID of one or more subnets in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#subnet_ids RtbfabricResponderGateway#subnet_ids}

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}.

---

##### `acmCertificateArn`<sup>Optional</sup> <a name="acmCertificateArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.acmCertificateArn"></a>

```typescript
public readonly acmCertificateArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}.

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}.

---

##### `gatewayType`<sup>Optional</sup> <a name="gatewayType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.gatewayType"></a>

```typescript
public readonly gatewayType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}.

---

##### `listenerConfig`<sup>Optional</sup> <a name="listenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.listenerConfig"></a>

```typescript
public readonly listenerConfig: RtbfabricResponderGatewayListenerConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}.

---

##### `managedEndpointConfiguration`<sup>Optional</sup> <a name="managedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.managedEndpointConfiguration"></a>

```typescript
public readonly managedEndpointConfiguration: RtbfabricResponderGatewayManagedEndpointConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | RtbfabricResponderGatewayTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]

Tags to assign to the Responder Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#tags RtbfabricResponderGateway#tags}

---

##### `trustStoreConfiguration`<sup>Optional</sup> <a name="trustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.trustStoreConfiguration"></a>

```typescript
public readonly trustStoreConfiguration: RtbfabricResponderGatewayTrustStoreConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}.

---

### RtbfabricResponderGatewayListenerConfig <a name="RtbfabricResponderGatewayListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

const rtbfabricResponderGatewayListenerConfig: rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.property.protocols">protocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#protocols RtbfabricResponderGateway#protocols}. |

---

##### `protocols`<sup>Optional</sup> <a name="protocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#protocols RtbfabricResponderGateway#protocols}.

---

### RtbfabricResponderGatewayManagedEndpointConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

const rtbfabricResponderGatewayManagedEndpointConfiguration: rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.autoScalingGroupsConfiguration">autoScalingGroupsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_groups_configuration RtbfabricResponderGateway#auto_scaling_groups_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.eksEndpointsConfiguration">eksEndpointsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#eks_endpoints_configuration RtbfabricResponderGateway#eks_endpoints_configuration}. |

---

##### `autoScalingGroupsConfiguration`<sup>Optional</sup> <a name="autoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.autoScalingGroupsConfiguration"></a>

```typescript
public readonly autoScalingGroupsConfiguration: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_groups_configuration RtbfabricResponderGateway#auto_scaling_groups_configuration}.

---

##### `eksEndpointsConfiguration`<sup>Optional</sup> <a name="eksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.eksEndpointsConfiguration"></a>

```typescript
public readonly eksEndpointsConfiguration: RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#eks_endpoints_configuration RtbfabricResponderGateway#eks_endpoints_configuration}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

const rtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration: rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.autoScalingGroupNameList">autoScalingGroupNameList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_group_name_list RtbfabricResponderGateway#auto_scaling_group_name_list}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#health_check_config RtbfabricResponderGateway#health_check_config}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}. |

---

##### `autoScalingGroupNameList`<sup>Optional</sup> <a name="autoScalingGroupNameList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.autoScalingGroupNameList"></a>

```typescript
public readonly autoScalingGroupNameList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_group_name_list RtbfabricResponderGateway#auto_scaling_group_name_list}.

---

##### `healthCheckConfig`<sup>Optional</sup> <a name="healthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.healthCheckConfig"></a>

```typescript
public readonly healthCheckConfig: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#health_check_config RtbfabricResponderGateway#health_check_config}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

const rtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig: rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#healthy_threshold_count RtbfabricResponderGateway#healthy_threshold_count}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#interval_seconds RtbfabricResponderGateway#interval_seconds}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#path RtbfabricResponderGateway#path}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.statusCodeMatcher">statusCodeMatcher</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#status_code_matcher RtbfabricResponderGateway#status_code_matcher}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.timeoutMs">timeoutMs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#timeout_ms RtbfabricResponderGateway#timeout_ms}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#unhealthy_threshold_count RtbfabricResponderGateway#unhealthy_threshold_count}. |

---

##### `healthyThresholdCount`<sup>Optional</sup> <a name="healthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.healthyThresholdCount"></a>

```typescript
public readonly healthyThresholdCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#healthy_threshold_count RtbfabricResponderGateway#healthy_threshold_count}.

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#interval_seconds RtbfabricResponderGateway#interval_seconds}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#path RtbfabricResponderGateway#path}.

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}.

---

##### `statusCodeMatcher`<sup>Optional</sup> <a name="statusCodeMatcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.statusCodeMatcher"></a>

```typescript
public readonly statusCodeMatcher: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#status_code_matcher RtbfabricResponderGateway#status_code_matcher}.

---

##### `timeoutMs`<sup>Optional</sup> <a name="timeoutMs" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.timeoutMs"></a>

```typescript
public readonly timeoutMs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#timeout_ms RtbfabricResponderGateway#timeout_ms}.

---

##### `unhealthyThresholdCount`<sup>Optional</sup> <a name="unhealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.unhealthyThresholdCount"></a>

```typescript
public readonly unhealthyThresholdCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#unhealthy_threshold_count RtbfabricResponderGateway#unhealthy_threshold_count}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

const rtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration: rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerCaCertificateChain">clusterApiServerCaCertificateChain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_ca_certificate_chain RtbfabricResponderGateway#cluster_api_server_ca_certificate_chain}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerEndpointUri">clusterApiServerEndpointUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_endpoint_uri RtbfabricResponderGateway#cluster_api_server_endpoint_uri}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterName">clusterName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#cluster_name RtbfabricResponderGateway#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceName">endpointsResourceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_name RtbfabricResponderGateway#endpoints_resource_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceNamespace">endpointsResourceNamespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_namespace RtbfabricResponderGateway#endpoints_resource_namespace}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}. |

---

##### `clusterApiServerCaCertificateChain`<sup>Optional</sup> <a name="clusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerCaCertificateChain"></a>

```typescript
public readonly clusterApiServerCaCertificateChain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_ca_certificate_chain RtbfabricResponderGateway#cluster_api_server_ca_certificate_chain}.

---

##### `clusterApiServerEndpointUri`<sup>Optional</sup> <a name="clusterApiServerEndpointUri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerEndpointUri"></a>

```typescript
public readonly clusterApiServerEndpointUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_endpoint_uri RtbfabricResponderGateway#cluster_api_server_endpoint_uri}.

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#cluster_name RtbfabricResponderGateway#cluster_name}.

---

##### `endpointsResourceName`<sup>Optional</sup> <a name="endpointsResourceName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceName"></a>

```typescript
public readonly endpointsResourceName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_name RtbfabricResponderGateway#endpoints_resource_name}.

---

##### `endpointsResourceNamespace`<sup>Optional</sup> <a name="endpointsResourceNamespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceNamespace"></a>

```typescript
public readonly endpointsResourceNamespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_namespace RtbfabricResponderGateway#endpoints_resource_namespace}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}.

---

### RtbfabricResponderGatewayTags <a name="RtbfabricResponderGatewayTags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

const rtbfabricResponderGatewayTags: rtbfabricResponderGateway.RtbfabricResponderGatewayTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#key RtbfabricResponderGateway#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -. 

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#value RtbfabricResponderGateway#value}

---

### RtbfabricResponderGatewayTrustStoreConfiguration <a name="RtbfabricResponderGatewayTrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

const rtbfabricResponderGatewayTrustStoreConfiguration: rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.property.certificateAuthorityCertificates">certificateAuthorityCertificates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#certificate_authority_certificates RtbfabricResponderGateway#certificate_authority_certificates}. |

---

##### `certificateAuthorityCertificates`<sup>Optional</sup> <a name="certificateAuthorityCertificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.property.certificateAuthorityCertificates"></a>

```typescript
public readonly certificateAuthorityCertificates: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/rtbfabric_responder_gateway#certificate_authority_certificates RtbfabricResponderGateway#certificate_authority_certificates}.

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricResponderGatewayListenerConfigOutputReference <a name="RtbfabricResponderGatewayListenerConfigOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

new rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resetProtocols">resetProtocols</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProtocols` <a name="resetProtocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resetProtocols"></a>

```typescript
public resetProtocols(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocolsInput">protocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocols">protocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `protocolsInput`<sup>Optional</sup> <a name="protocolsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocolsInput"></a>

```typescript
public readonly protocolsInput: string[];
```

- *Type:* string[]

---

##### `protocols`<sup>Required</sup> <a name="protocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocols"></a>

```typescript
public readonly protocols: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricResponderGatewayListenerConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

new rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetHealthyThresholdCount">resetHealthyThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetStatusCodeMatcher">resetStatusCodeMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetTimeoutMs">resetTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetUnhealthyThresholdCount">resetUnhealthyThresholdCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHealthyThresholdCount` <a name="resetHealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetHealthyThresholdCount"></a>

```typescript
public resetHealthyThresholdCount(): void
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetIntervalSeconds"></a>

```typescript
public resetIntervalSeconds(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetStatusCodeMatcher` <a name="resetStatusCodeMatcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetStatusCodeMatcher"></a>

```typescript
public resetStatusCodeMatcher(): void
```

##### `resetTimeoutMs` <a name="resetTimeoutMs" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetTimeoutMs"></a>

```typescript
public resetTimeoutMs(): void
```

##### `resetUnhealthyThresholdCount` <a name="resetUnhealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetUnhealthyThresholdCount"></a>

```typescript
public resetUnhealthyThresholdCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCountInput">healthyThresholdCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcherInput">statusCodeMatcherInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMsInput">timeoutMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCountInput">unhealthyThresholdCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount">healthyThresholdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher">statusCodeMatcher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs">timeoutMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount">unhealthyThresholdCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthyThresholdCountInput`<sup>Optional</sup> <a name="healthyThresholdCountInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCountInput"></a>

```typescript
public readonly healthyThresholdCountInput: number;
```

- *Type:* number

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSecondsInput"></a>

```typescript
public readonly intervalSecondsInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `statusCodeMatcherInput`<sup>Optional</sup> <a name="statusCodeMatcherInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcherInput"></a>

```typescript
public readonly statusCodeMatcherInput: string;
```

- *Type:* string

---

##### `timeoutMsInput`<sup>Optional</sup> <a name="timeoutMsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMsInput"></a>

```typescript
public readonly timeoutMsInput: number;
```

- *Type:* number

---

##### `unhealthyThresholdCountInput`<sup>Optional</sup> <a name="unhealthyThresholdCountInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCountInput"></a>

```typescript
public readonly unhealthyThresholdCountInput: number;
```

- *Type:* number

---

##### `healthyThresholdCount`<sup>Required</sup> <a name="healthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount"></a>

```typescript
public readonly healthyThresholdCount: number;
```

- *Type:* number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds"></a>

```typescript
public readonly intervalSeconds: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `statusCodeMatcher`<sup>Required</sup> <a name="statusCodeMatcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher"></a>

```typescript
public readonly statusCodeMatcher: string;
```

- *Type:* string

---

##### `timeoutMs`<sup>Required</sup> <a name="timeoutMs" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs"></a>

```typescript
public readonly timeoutMs: number;
```

- *Type:* number

---

##### `unhealthyThresholdCount`<sup>Required</sup> <a name="unhealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount"></a>

```typescript
public readonly unhealthyThresholdCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

new rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig">putHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetAutoScalingGroupNameList">resetAutoScalingGroupNameList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetHealthCheckConfig">resetHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHealthCheckConfig` <a name="putHealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig"></a>

```typescript
public putHealthCheckConfig(value: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---

##### `resetAutoScalingGroupNameList` <a name="resetAutoScalingGroupNameList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetAutoScalingGroupNameList"></a>

```typescript
public resetAutoScalingGroupNameList(): void
```

##### `resetHealthCheckConfig` <a name="resetHealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetHealthCheckConfig"></a>

```typescript
public resetHealthCheckConfig(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig">healthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameListInput">autoScalingGroupNameListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfigInput">healthCheckConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList">autoScalingGroupNameList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthCheckConfig`<sup>Required</sup> <a name="healthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig"></a>

```typescript
public readonly healthCheckConfig: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a>

---

##### `autoScalingGroupNameListInput`<sup>Optional</sup> <a name="autoScalingGroupNameListInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameListInput"></a>

```typescript
public readonly autoScalingGroupNameListInput: string[];
```

- *Type:* string[]

---

##### `healthCheckConfigInput`<sup>Optional</sup> <a name="healthCheckConfigInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfigInput"></a>

```typescript
public readonly healthCheckConfigInput: IResolvable | RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `autoScalingGroupNameList`<sup>Required</sup> <a name="autoScalingGroupNameList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList"></a>

```typescript
public readonly autoScalingGroupNameList: string[];
```

- *Type:* string[]

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

new rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerCaCertificateChain">resetClusterApiServerCaCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerEndpointUri">resetClusterApiServerEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceName">resetEndpointsResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceNamespace">resetEndpointsResourceNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterApiServerCaCertificateChain` <a name="resetClusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerCaCertificateChain"></a>

```typescript
public resetClusterApiServerCaCertificateChain(): void
```

##### `resetClusterApiServerEndpointUri` <a name="resetClusterApiServerEndpointUri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerEndpointUri"></a>

```typescript
public resetClusterApiServerEndpointUri(): void
```

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterName"></a>

```typescript
public resetClusterName(): void
```

##### `resetEndpointsResourceName` <a name="resetEndpointsResourceName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceName"></a>

```typescript
public resetEndpointsResourceName(): void
```

##### `resetEndpointsResourceNamespace` <a name="resetEndpointsResourceNamespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceNamespace"></a>

```typescript
public resetEndpointsResourceNamespace(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChainInput">clusterApiServerCaCertificateChainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUriInput">clusterApiServerEndpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNameInput">endpointsResourceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespaceInput">endpointsResourceNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain">clusterApiServerCaCertificateChain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri">clusterApiServerEndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName">clusterName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName">endpointsResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace">endpointsResourceNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `clusterApiServerCaCertificateChainInput`<sup>Optional</sup> <a name="clusterApiServerCaCertificateChainInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChainInput"></a>

```typescript
public readonly clusterApiServerCaCertificateChainInput: string;
```

- *Type:* string

---

##### `clusterApiServerEndpointUriInput`<sup>Optional</sup> <a name="clusterApiServerEndpointUriInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUriInput"></a>

```typescript
public readonly clusterApiServerEndpointUriInput: string;
```

- *Type:* string

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterNameInput"></a>

```typescript
public readonly clusterNameInput: string;
```

- *Type:* string

---

##### `endpointsResourceNameInput`<sup>Optional</sup> <a name="endpointsResourceNameInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNameInput"></a>

```typescript
public readonly endpointsResourceNameInput: string;
```

- *Type:* string

---

##### `endpointsResourceNamespaceInput`<sup>Optional</sup> <a name="endpointsResourceNamespaceInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespaceInput"></a>

```typescript
public readonly endpointsResourceNamespaceInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `clusterApiServerCaCertificateChain`<sup>Required</sup> <a name="clusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain"></a>

```typescript
public readonly clusterApiServerCaCertificateChain: string;
```

- *Type:* string

---

##### `clusterApiServerEndpointUri`<sup>Required</sup> <a name="clusterApiServerEndpointUri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri"></a>

```typescript
public readonly clusterApiServerEndpointUri: string;
```

- *Type:* string

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName"></a>

```typescript
public readonly clusterName: string;
```

- *Type:* string

---

##### `endpointsResourceName`<sup>Required</sup> <a name="endpointsResourceName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName"></a>

```typescript
public readonly endpointsResourceName: string;
```

- *Type:* string

---

##### `endpointsResourceNamespace`<sup>Required</sup> <a name="endpointsResourceNamespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace"></a>

```typescript
public readonly endpointsResourceNamespace: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---


### RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

new rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration">putAutoScalingGroupsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration">putEksEndpointsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetAutoScalingGroupsConfiguration">resetAutoScalingGroupsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetEksEndpointsConfiguration">resetEksEndpointsConfiguration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoScalingGroupsConfiguration` <a name="putAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration"></a>

```typescript
public putAutoScalingGroupsConfiguration(value: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---

##### `putEksEndpointsConfiguration` <a name="putEksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration"></a>

```typescript
public putEksEndpointsConfiguration(value: RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---

##### `resetAutoScalingGroupsConfiguration` <a name="resetAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetAutoScalingGroupsConfiguration"></a>

```typescript
public resetAutoScalingGroupsConfiguration(): void
```

##### `resetEksEndpointsConfiguration` <a name="resetEksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetEksEndpointsConfiguration"></a>

```typescript
public resetEksEndpointsConfiguration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration">autoScalingGroupsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration">eksEndpointsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfigurationInput">autoScalingGroupsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfigurationInput">eksEndpointsConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `autoScalingGroupsConfiguration`<sup>Required</sup> <a name="autoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration"></a>

```typescript
public readonly autoScalingGroupsConfiguration: RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a>

---

##### `eksEndpointsConfiguration`<sup>Required</sup> <a name="eksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration"></a>

```typescript
public readonly eksEndpointsConfiguration: RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a>

---

##### `autoScalingGroupsConfigurationInput`<sup>Optional</sup> <a name="autoScalingGroupsConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfigurationInput"></a>

```typescript
public readonly autoScalingGroupsConfigurationInput: IResolvable | RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---

##### `eksEndpointsConfigurationInput`<sup>Optional</sup> <a name="eksEndpointsConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfigurationInput"></a>

```typescript
public readonly eksEndpointsConfigurationInput: IResolvable | RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricResponderGatewayManagedEndpointConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

---


### RtbfabricResponderGatewayTagsList <a name="RtbfabricResponderGatewayTagsList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

new rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get"></a>

```typescript
public get(index: number): RtbfabricResponderGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricResponderGatewayTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>[]

---


### RtbfabricResponderGatewayTagsOutputReference <a name="RtbfabricResponderGatewayTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

new rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricResponderGatewayTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags">RtbfabricResponderGatewayTags</a>

---


### RtbfabricResponderGatewayTrustStoreConfigurationOutputReference <a name="RtbfabricResponderGatewayTrustStoreConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer"></a>

```typescript
import { rtbfabricResponderGateway } from '@cdktn/provider-awscc'

new rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resetCertificateAuthorityCertificates">resetCertificateAuthorityCertificates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateAuthorityCertificates` <a name="resetCertificateAuthorityCertificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resetCertificateAuthorityCertificates"></a>

```typescript
public resetCertificateAuthorityCertificates(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificatesInput">certificateAuthorityCertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates">certificateAuthorityCertificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateAuthorityCertificatesInput`<sup>Optional</sup> <a name="certificateAuthorityCertificatesInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificatesInput"></a>

```typescript
public readonly certificateAuthorityCertificatesInput: string[];
```

- *Type:* string[]

---

##### `certificateAuthorityCertificates`<sup>Required</sup> <a name="certificateAuthorityCertificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates"></a>

```typescript
public readonly certificateAuthorityCertificates: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | RtbfabricResponderGatewayTrustStoreConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

---



