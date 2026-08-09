# `bedrockagentcoreGateway` Submodule <a name="`bedrockagentcoreGateway` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreGateway <a name="BedrockagentcoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway awscc_bedrockagentcore_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGateway(scope: Construct, id: string, config: BedrockagentcoreGatewayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig">BedrockagentcoreGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig">BedrockagentcoreGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putAuthorizerConfiguration">putAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putInterceptorConfigurations">putInterceptorConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putPolicyEngineConfiguration">putPolicyEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putProtocolConfiguration">putProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetAuthorizerConfiguration">resetAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetExceptionLevel">resetExceptionLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetInterceptorConfigurations">resetInterceptorConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetPolicyEngineConfiguration">resetPolicyEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolConfiguration">resetProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolType">resetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorizerConfiguration` <a name="putAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putAuthorizerConfiguration"></a>

```typescript
public putAuthorizerConfiguration(value: BedrockagentcoreGatewayAuthorizerConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>

---

##### `putInterceptorConfigurations` <a name="putInterceptorConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putInterceptorConfigurations"></a>

```typescript
public putInterceptorConfigurations(value: IResolvable | BedrockagentcoreGatewayInterceptorConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putInterceptorConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations">BedrockagentcoreGatewayInterceptorConfigurations</a>[]

---

##### `putPolicyEngineConfiguration` <a name="putPolicyEngineConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putPolicyEngineConfiguration"></a>

```typescript
public putPolicyEngineConfiguration(value: BedrockagentcoreGatewayPolicyEngineConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putPolicyEngineConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>

---

##### `putProtocolConfiguration` <a name="putProtocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putProtocolConfiguration"></a>

```typescript
public putProtocolConfiguration(value: BedrockagentcoreGatewayProtocolConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putProtocolConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>

---

##### `resetAuthorizerConfiguration` <a name="resetAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetAuthorizerConfiguration"></a>

```typescript
public resetAuthorizerConfiguration(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExceptionLevel` <a name="resetExceptionLevel" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetExceptionLevel"></a>

```typescript
public resetExceptionLevel(): void
```

##### `resetInterceptorConfigurations` <a name="resetInterceptorConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetInterceptorConfigurations"></a>

```typescript
public resetInterceptorConfigurations(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetPolicyEngineConfiguration` <a name="resetPolicyEngineConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetPolicyEngineConfiguration"></a>

```typescript
public resetPolicyEngineConfiguration(): void
```

##### `resetProtocolConfiguration` <a name="resetProtocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolConfiguration"></a>

```typescript
public resetProtocolConfiguration(): void
```

##### `resetProtocolType` <a name="resetProtocolType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolType"></a>

```typescript
public resetProtocolType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockagentcoreGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfiguration">authorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayArn">gatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayIdentifier">gatewayIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayUrl">gatewayUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.interceptorConfigurations">interceptorConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList">BedrockagentcoreGatewayInterceptorConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.policyEngineConfiguration">policyEngineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference">BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfiguration">protocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference">BedrockagentcoreGatewayProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.statusReasons">statusReasons</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.workloadIdentityDetails">workloadIdentityDetails</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference">BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfigurationInput">authorizerConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerTypeInput">authorizerTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevelInput">exceptionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.interceptorConfigurationsInput">interceptorConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations">BedrockagentcoreGatewayInterceptorConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.policyEngineConfigurationInput">policyEngineConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfigurationInput">protocolConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolTypeInput">protocolTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerType">authorizerType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevel">exceptionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolType">protocolType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorizerConfiguration`<sup>Required</sup> <a name="authorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfiguration"></a>

```typescript
public readonly authorizerConfiguration: BedrockagentcoreGatewayAuthorizerConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `gatewayArn`<sup>Required</sup> <a name="gatewayArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayArn"></a>

```typescript
public readonly gatewayArn: string;
```

- *Type:* string

---

##### `gatewayIdentifier`<sup>Required</sup> <a name="gatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayIdentifier"></a>

```typescript
public readonly gatewayIdentifier: string;
```

- *Type:* string

---

##### `gatewayUrl`<sup>Required</sup> <a name="gatewayUrl" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayUrl"></a>

```typescript
public readonly gatewayUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `interceptorConfigurations`<sup>Required</sup> <a name="interceptorConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.interceptorConfigurations"></a>

```typescript
public readonly interceptorConfigurations: BedrockagentcoreGatewayInterceptorConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList">BedrockagentcoreGatewayInterceptorConfigurationsList</a>

---

##### `policyEngineConfiguration`<sup>Required</sup> <a name="policyEngineConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.policyEngineConfiguration"></a>

```typescript
public readonly policyEngineConfiguration: BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference">BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference</a>

---

##### `protocolConfiguration`<sup>Required</sup> <a name="protocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfiguration"></a>

```typescript
public readonly protocolConfiguration: BedrockagentcoreGatewayProtocolConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference">BedrockagentcoreGatewayProtocolConfigurationOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReasons`<sup>Required</sup> <a name="statusReasons" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.statusReasons"></a>

```typescript
public readonly statusReasons: string[];
```

- *Type:* string[]

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `workloadIdentityDetails`<sup>Required</sup> <a name="workloadIdentityDetails" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.workloadIdentityDetails"></a>

```typescript
public readonly workloadIdentityDetails: BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference">BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference</a>

---

##### `authorizerConfigurationInput`<sup>Optional</sup> <a name="authorizerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfigurationInput"></a>

```typescript
public readonly authorizerConfigurationInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>

---

##### `authorizerTypeInput`<sup>Optional</sup> <a name="authorizerTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerTypeInput"></a>

```typescript
public readonly authorizerTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `exceptionLevelInput`<sup>Optional</sup> <a name="exceptionLevelInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevelInput"></a>

```typescript
public readonly exceptionLevelInput: string;
```

- *Type:* string

---

##### `interceptorConfigurationsInput`<sup>Optional</sup> <a name="interceptorConfigurationsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.interceptorConfigurationsInput"></a>

```typescript
public readonly interceptorConfigurationsInput: IResolvable | BedrockagentcoreGatewayInterceptorConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations">BedrockagentcoreGatewayInterceptorConfigurations</a>[]

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policyEngineConfigurationInput`<sup>Optional</sup> <a name="policyEngineConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.policyEngineConfigurationInput"></a>

```typescript
public readonly policyEngineConfigurationInput: IResolvable | BedrockagentcoreGatewayPolicyEngineConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>

---

##### `protocolConfigurationInput`<sup>Optional</sup> <a name="protocolConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfigurationInput"></a>

```typescript
public readonly protocolConfigurationInput: IResolvable | BedrockagentcoreGatewayProtocolConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>

---

##### `protocolTypeInput`<sup>Optional</sup> <a name="protocolTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolTypeInput"></a>

```typescript
public readonly protocolTypeInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizerType`<sup>Required</sup> <a name="authorizerType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerType"></a>

```typescript
public readonly authorizerType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `exceptionLevel`<sup>Required</sup> <a name="exceptionLevel" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevel"></a>

```typescript
public readonly exceptionLevel: string;
```

- *Type:* string

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocolType`<sup>Required</sup> <a name="protocolType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreGatewayAuthorizerConfiguration <a name="BedrockagentcoreGatewayAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayAuthorizerConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration.property.customJwtAuthorizer">customJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#custom_jwt_authorizer BedrockagentcoreGateway#custom_jwt_authorizer}. |

---

##### `customJwtAuthorizer`<sup>Optional</sup> <a name="customJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```typescript
public readonly customJwtAuthorizer: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#custom_jwt_authorizer BedrockagentcoreGateway#custom_jwt_authorizer}.

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">allowedAudience</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#allowed_audience BedrockagentcoreGateway#allowed_audience}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">allowedClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#allowed_clients BedrockagentcoreGateway#allowed_clients}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes">allowedScopes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#allowed_scopes BedrockagentcoreGateway#allowed_scopes}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims">customClaims</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#custom_claims BedrockagentcoreGateway#custom_claims}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#discovery_url BedrockagentcoreGateway#discovery_url}. |

---

##### `allowedAudience`<sup>Optional</sup> <a name="allowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```typescript
public readonly allowedAudience: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#allowed_audience BedrockagentcoreGateway#allowed_audience}.

---

##### `allowedClients`<sup>Optional</sup> <a name="allowedClients" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```typescript
public readonly allowedClients: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#allowed_clients BedrockagentcoreGateway#allowed_clients}.

---

##### `allowedScopes`<sup>Optional</sup> <a name="allowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes"></a>

```typescript
public readonly allowedScopes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#allowed_scopes BedrockagentcoreGateway#allowed_scopes}.

---

##### `customClaims`<sup>Optional</sup> <a name="customClaims" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims"></a>

```typescript
public readonly customClaims: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#custom_claims BedrockagentcoreGateway#custom_claims}.

---

##### `discoveryUrl`<sup>Optional</sup> <a name="discoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#discovery_url BedrockagentcoreGateway#discovery_url}.

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue">authorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | The value or values in the custom claim to match and relationship of match. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName">inboundTokenClaimName</a></code> | <code>string</code> | The name of the custom claim to validate. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType">inboundTokenClaimValueType</a></code> | <code>string</code> | Token claim data type. |

---

##### `authorizingClaimMatchValue`<sup>Optional</sup> <a name="authorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue"></a>

```typescript
public readonly authorizingClaimMatchValue: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

The value or values in the custom claim to match and relationship of match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#authorizing_claim_match_value BedrockagentcoreGateway#authorizing_claim_match_value}

---

##### `inboundTokenClaimName`<sup>Optional</sup> <a name="inboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName"></a>

```typescript
public readonly inboundTokenClaimName: string;
```

- *Type:* string

The name of the custom claim to validate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#inbound_token_claim_name BedrockagentcoreGateway#inbound_token_claim_name}

---

##### `inboundTokenClaimValueType`<sup>Optional</sup> <a name="inboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType"></a>

```typescript
public readonly inboundTokenClaimValueType: string;
```

- *Type:* string

Token claim data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#inbound_token_claim_value_type BedrockagentcoreGateway#inbound_token_claim_value_type}

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator">claimMatchOperator</a></code> | <code>string</code> | The relationship between the claim field value and the value or values being matched. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue">claimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | The value or values in the custom claim to match for. |

---

##### `claimMatchOperator`<sup>Optional</sup> <a name="claimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator"></a>

```typescript
public readonly claimMatchOperator: string;
```

- *Type:* string

The relationship between the claim field value and the value or values being matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#claim_match_operator BedrockagentcoreGateway#claim_match_operator}

---

##### `claimMatchValue`<sup>Optional</sup> <a name="claimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue"></a>

```typescript
public readonly claimMatchValue: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

The value or values in the custom claim to match for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#claim_match_value BedrockagentcoreGateway#claim_match_value}

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue: bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString">matchValueString</a></code> | <code>string</code> | The string value to match for. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList">matchValueStringList</a></code> | <code>string[]</code> | The list of strings to check for a match. |

---

##### `matchValueString`<sup>Optional</sup> <a name="matchValueString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString"></a>

```typescript
public readonly matchValueString: string;
```

- *Type:* string

The string value to match for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#match_value_string BedrockagentcoreGateway#match_value_string}

---

##### `matchValueStringList`<sup>Optional</sup> <a name="matchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList"></a>

```typescript
public readonly matchValueStringList: string[];
```

- *Type:* string[]

The list of strings to check for a match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#match_value_string_list BedrockagentcoreGateway#match_value_string_list}

---

### BedrockagentcoreGatewayConfig <a name="BedrockagentcoreGatewayConfig" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayConfig: bedrockagentcoreGateway.BedrockagentcoreGatewayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerType">authorizerType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#authorizer_type BedrockagentcoreGateway#authorizer_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#name BedrockagentcoreGateway#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#role_arn BedrockagentcoreGateway#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerConfiguration">authorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#authorizer_configuration BedrockagentcoreGateway#authorizer_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#description BedrockagentcoreGateway#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.exceptionLevel">exceptionLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#exception_level BedrockagentcoreGateway#exception_level}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.interceptorConfigurations">interceptorConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations">BedrockagentcoreGatewayInterceptorConfigurations</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#interceptor_configurations BedrockagentcoreGateway#interceptor_configurations}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#kms_key_arn BedrockagentcoreGateway#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.policyEngineConfiguration">policyEngineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a></code> | The configuration for a policy engine associated with a gateway. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolConfiguration">protocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#protocol_configuration BedrockagentcoreGateway#protocol_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolType">protocolType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#protocol_type BedrockagentcoreGateway#protocol_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `authorizerType`<sup>Required</sup> <a name="authorizerType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerType"></a>

```typescript
public readonly authorizerType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#authorizer_type BedrockagentcoreGateway#authorizer_type}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#name BedrockagentcoreGateway#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#role_arn BedrockagentcoreGateway#role_arn}.

---

##### `authorizerConfiguration`<sup>Optional</sup> <a name="authorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerConfiguration"></a>

```typescript
public readonly authorizerConfiguration: BedrockagentcoreGatewayAuthorizerConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#authorizer_configuration BedrockagentcoreGateway#authorizer_configuration}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#description BedrockagentcoreGateway#description}.

---

##### `exceptionLevel`<sup>Optional</sup> <a name="exceptionLevel" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.exceptionLevel"></a>

```typescript
public readonly exceptionLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#exception_level BedrockagentcoreGateway#exception_level}.

---

##### `interceptorConfigurations`<sup>Optional</sup> <a name="interceptorConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.interceptorConfigurations"></a>

```typescript
public readonly interceptorConfigurations: IResolvable | BedrockagentcoreGatewayInterceptorConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations">BedrockagentcoreGatewayInterceptorConfigurations</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#interceptor_configurations BedrockagentcoreGateway#interceptor_configurations}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#kms_key_arn BedrockagentcoreGateway#kms_key_arn}.

---

##### `policyEngineConfiguration`<sup>Optional</sup> <a name="policyEngineConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.policyEngineConfiguration"></a>

```typescript
public readonly policyEngineConfiguration: BedrockagentcoreGatewayPolicyEngineConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>

The configuration for a policy engine associated with a gateway.

A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with a gateway, the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#policy_engine_configuration BedrockagentcoreGateway#policy_engine_configuration}

---

##### `protocolConfiguration`<sup>Optional</sup> <a name="protocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolConfiguration"></a>

```typescript
public readonly protocolConfiguration: BedrockagentcoreGatewayProtocolConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#protocol_configuration BedrockagentcoreGateway#protocol_configuration}.

---

##### `protocolType`<sup>Optional</sup> <a name="protocolType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolType"></a>

```typescript
public readonly protocolType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#protocol_type BedrockagentcoreGateway#protocol_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}.

---

### BedrockagentcoreGatewayInterceptorConfigurations <a name="BedrockagentcoreGatewayInterceptorConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayInterceptorConfigurations: bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.property.inputConfiguration">inputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#input_configuration BedrockagentcoreGateway#input_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.property.interceptionPoints">interceptionPoints</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#interception_points BedrockagentcoreGateway#interception_points}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.property.interceptor">interceptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor">BedrockagentcoreGatewayInterceptorConfigurationsInterceptor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#interceptor BedrockagentcoreGateway#interceptor}. |

---

##### `inputConfiguration`<sup>Optional</sup> <a name="inputConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.property.inputConfiguration"></a>

```typescript
public readonly inputConfiguration: BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#input_configuration BedrockagentcoreGateway#input_configuration}.

---

##### `interceptionPoints`<sup>Optional</sup> <a name="interceptionPoints" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.property.interceptionPoints"></a>

```typescript
public readonly interceptionPoints: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#interception_points BedrockagentcoreGateway#interception_points}.

---

##### `interceptor`<sup>Optional</sup> <a name="interceptor" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.property.interceptor"></a>

```typescript
public readonly interceptor: BedrockagentcoreGatewayInterceptorConfigurationsInterceptor;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor">BedrockagentcoreGatewayInterceptorConfigurationsInterceptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#interceptor BedrockagentcoreGateway#interceptor}.

---

### BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration <a name="BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration.property.passRequestHeaders">passRequestHeaders</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#pass_request_headers BedrockagentcoreGateway#pass_request_headers}. |

---

##### `passRequestHeaders`<sup>Optional</sup> <a name="passRequestHeaders" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration.property.passRequestHeaders"></a>

```typescript
public readonly passRequestHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#pass_request_headers BedrockagentcoreGateway#pass_request_headers}.

---

### BedrockagentcoreGatewayInterceptorConfigurationsInterceptor <a name="BedrockagentcoreGatewayInterceptorConfigurationsInterceptor" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayInterceptorConfigurationsInterceptor: bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#lambda BedrockagentcoreGateway#lambda}. |

---

##### `lambda`<sup>Optional</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor.property.lambda"></a>

```typescript
public readonly lambda: BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#lambda BedrockagentcoreGateway#lambda}.

---

### BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda <a name="BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda: bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}.

---

### BedrockagentcoreGatewayPolicyEngineConfiguration <a name="BedrockagentcoreGatewayPolicyEngineConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayPolicyEngineConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.property.arn">arn</a></code> | <code>string</code> | The ARN of the policy engine. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.property.mode">mode</a></code> | <code>string</code> | The enforcement mode for the policy engine. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

The ARN of the policy engine.

The policy engine contains Cedar policies that define fine-grained authorization rules specifying who can perform what actions on which resources as agents interact through the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The enforcement mode for the policy engine.

LOG_ONLY - The policy engine evaluates each action against your policies and adds traces on whether tool calls would be allowed or denied, but does not enforce the decision. Use this mode to test and validate policies before enabling enforcement. ENFORCE - The policy engine evaluates actions against your policies and enforces decisions by allowing or denying agent operations. Test and validate policies in LOG_ONLY mode before enabling enforcement to avoid unintended denials or adversely affecting production traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#mode BedrockagentcoreGateway#mode}

---

### BedrockagentcoreGatewayProtocolConfiguration <a name="BedrockagentcoreGatewayProtocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayProtocolConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration.property.mcp">mcp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#mcp BedrockagentcoreGateway#mcp}. |

---

##### `mcp`<sup>Optional</sup> <a name="mcp" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration.property.mcp"></a>

```typescript
public readonly mcp: BedrockagentcoreGatewayProtocolConfigurationMcp;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#mcp BedrockagentcoreGateway#mcp}.

---

### BedrockagentcoreGatewayProtocolConfigurationMcp <a name="BedrockagentcoreGatewayProtocolConfigurationMcp" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayProtocolConfigurationMcp: bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.instructions">instructions</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#instructions BedrockagentcoreGateway#instructions}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.searchType">searchType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#search_type BedrockagentcoreGateway#search_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.sessionConfiguration">sessionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#session_configuration BedrockagentcoreGateway#session_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.streamingConfiguration">streamingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#streaming_configuration BedrockagentcoreGateway#streaming_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.supportedVersions">supportedVersions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#supported_versions BedrockagentcoreGateway#supported_versions}. |

---

##### `instructions`<sup>Optional</sup> <a name="instructions" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.instructions"></a>

```typescript
public readonly instructions: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#instructions BedrockagentcoreGateway#instructions}.

---

##### `searchType`<sup>Optional</sup> <a name="searchType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.searchType"></a>

```typescript
public readonly searchType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#search_type BedrockagentcoreGateway#search_type}.

---

##### `sessionConfiguration`<sup>Optional</sup> <a name="sessionConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.sessionConfiguration"></a>

```typescript
public readonly sessionConfiguration: BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#session_configuration BedrockagentcoreGateway#session_configuration}.

---

##### `streamingConfiguration`<sup>Optional</sup> <a name="streamingConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.streamingConfiguration"></a>

```typescript
public readonly streamingConfiguration: BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#streaming_configuration BedrockagentcoreGateway#streaming_configuration}.

---

##### `supportedVersions`<sup>Optional</sup> <a name="supportedVersions" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.supportedVersions"></a>

```typescript
public readonly supportedVersions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#supported_versions BedrockagentcoreGateway#supported_versions}.

---

### BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration <a name="BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration.property.sessionTimeoutInSeconds">sessionTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#session_timeout_in_seconds BedrockagentcoreGateway#session_timeout_in_seconds}. |

---

##### `sessionTimeoutInSeconds`<sup>Optional</sup> <a name="sessionTimeoutInSeconds" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration.property.sessionTimeoutInSeconds"></a>

```typescript
public readonly sessionTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#session_timeout_in_seconds BedrockagentcoreGateway#session_timeout_in_seconds}.

---

### BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration <a name="BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration: bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration.property.enableResponseStreaming">enableResponseStreaming</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#enable_response_streaming BedrockagentcoreGateway#enable_response_streaming}. |

---

##### `enableResponseStreaming`<sup>Optional</sup> <a name="enableResponseStreaming" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration.property.enableResponseStreaming"></a>

```typescript
public readonly enableResponseStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#enable_response_streaming BedrockagentcoreGateway#enable_response_streaming}.

---

### BedrockagentcoreGatewayWorkloadIdentityDetails <a name="BedrockagentcoreGatewayWorkloadIdentityDetails" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayWorkloadIdentityDetails: bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString">resetMatchValueString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList">resetMatchValueStringList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchValueString` <a name="resetMatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString"></a>

```typescript
public resetMatchValueString(): void
```

##### `resetMatchValueStringList` <a name="resetMatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList"></a>

```typescript
public resetMatchValueStringList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput">matchValueStringInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput">matchValueStringListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">matchValueString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">matchValueStringList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchValueStringInput`<sup>Optional</sup> <a name="matchValueStringInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput"></a>

```typescript
public readonly matchValueStringInput: string;
```

- *Type:* string

---

##### `matchValueStringListInput`<sup>Optional</sup> <a name="matchValueStringListInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput"></a>

```typescript
public readonly matchValueStringListInput: string[];
```

- *Type:* string[]

---

##### `matchValueString`<sup>Required</sup> <a name="matchValueString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```typescript
public readonly matchValueString: string;
```

- *Type:* string

---

##### `matchValueStringList`<sup>Required</sup> <a name="matchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```typescript
public readonly matchValueStringList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue">putClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator">resetClaimMatchOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue">resetClaimMatchValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClaimMatchValue` <a name="putClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue"></a>

```typescript
public putClaimMatchValue(value: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `resetClaimMatchOperator` <a name="resetClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator"></a>

```typescript
public resetClaimMatchOperator(): void
```

##### `resetClaimMatchValue` <a name="resetClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue"></a>

```typescript
public resetClaimMatchValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">claimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput">claimMatchOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput">claimMatchValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">claimMatchOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `claimMatchValue`<sup>Required</sup> <a name="claimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```typescript
public readonly claimMatchValue: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a>

---

##### `claimMatchOperatorInput`<sup>Optional</sup> <a name="claimMatchOperatorInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput"></a>

```typescript
public readonly claimMatchOperatorInput: string;
```

- *Type:* string

---

##### `claimMatchValueInput`<sup>Optional</sup> <a name="claimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput"></a>

```typescript
public readonly claimMatchValueInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `claimMatchOperator`<sup>Required</sup> <a name="claimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```typescript
public readonly claimMatchOperator: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue">putAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue">resetAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName">resetInboundTokenClaimName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType">resetInboundTokenClaimValueType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizingClaimMatchValue` <a name="putAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue"></a>

```typescript
public putAuthorizingClaimMatchValue(value: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `resetAuthorizingClaimMatchValue` <a name="resetAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue"></a>

```typescript
public resetAuthorizingClaimMatchValue(): void
```

##### `resetInboundTokenClaimName` <a name="resetInboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName"></a>

```typescript
public resetInboundTokenClaimName(): void
```

##### `resetInboundTokenClaimValueType` <a name="resetInboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType"></a>

```typescript
public resetInboundTokenClaimValueType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue">authorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput">authorizingClaimMatchValueInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput">inboundTokenClaimNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput">inboundTokenClaimValueTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName">inboundTokenClaimName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType">inboundTokenClaimValueType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizingClaimMatchValue`<sup>Required</sup> <a name="authorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue"></a>

```typescript
public readonly authorizingClaimMatchValue: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a>

---

##### `authorizingClaimMatchValueInput`<sup>Optional</sup> <a name="authorizingClaimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput"></a>

```typescript
public readonly authorizingClaimMatchValueInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `inboundTokenClaimNameInput`<sup>Optional</sup> <a name="inboundTokenClaimNameInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput"></a>

```typescript
public readonly inboundTokenClaimNameInput: string;
```

- *Type:* string

---

##### `inboundTokenClaimValueTypeInput`<sup>Optional</sup> <a name="inboundTokenClaimValueTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput"></a>

```typescript
public readonly inboundTokenClaimValueTypeInput: string;
```

- *Type:* string

---

##### `inboundTokenClaimName`<sup>Required</sup> <a name="inboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName"></a>

```typescript
public readonly inboundTokenClaimName: string;
```

- *Type:* string

---

##### `inboundTokenClaimValueType`<sup>Required</sup> <a name="inboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType"></a>

```typescript
public readonly inboundTokenClaimValueType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims">putCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">resetAllowedAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">resetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes">resetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims">resetCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl">resetDiscoveryUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomClaims` <a name="putCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims"></a>

```typescript
public putCustomClaims(value: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

---

##### `resetAllowedAudience` <a name="resetAllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```typescript
public resetAllowedAudience(): void
```

##### `resetAllowedClients` <a name="resetAllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```typescript
public resetAllowedClients(): void
```

##### `resetAllowedScopes` <a name="resetAllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes"></a>

```typescript
public resetAllowedScopes(): void
```

##### `resetCustomClaims` <a name="resetCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims"></a>

```typescript
public resetCustomClaims(): void
```

##### `resetDiscoveryUrl` <a name="resetDiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl"></a>

```typescript
public resetDiscoveryUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims">customClaims</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">allowedAudienceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">allowedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput">allowedScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput">customClaimsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">discoveryUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">allowedAudience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">allowedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">allowedScopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">discoveryUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customClaims`<sup>Required</sup> <a name="customClaims" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims"></a>

```typescript
public readonly customClaims: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a>

---

##### `allowedAudienceInput`<sup>Optional</sup> <a name="allowedAudienceInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```typescript
public readonly allowedAudienceInput: string[];
```

- *Type:* string[]

---

##### `allowedClientsInput`<sup>Optional</sup> <a name="allowedClientsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```typescript
public readonly allowedClientsInput: string[];
```

- *Type:* string[]

---

##### `allowedScopesInput`<sup>Optional</sup> <a name="allowedScopesInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput"></a>

```typescript
public readonly allowedScopesInput: string[];
```

- *Type:* string[]

---

##### `customClaimsInput`<sup>Optional</sup> <a name="customClaimsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput"></a>

```typescript
public readonly customClaimsInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims</a>[]

---

##### `discoveryUrlInput`<sup>Optional</sup> <a name="discoveryUrlInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```typescript
public readonly discoveryUrlInput: string;
```

- *Type:* string

---

##### `allowedAudience`<sup>Required</sup> <a name="allowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```typescript
public readonly allowedAudience: string[];
```

- *Type:* string[]

---

##### `allowedClients`<sup>Required</sup> <a name="allowedClients" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```typescript
public readonly allowedClients: string[];
```

- *Type:* string[]

---

##### `allowedScopes`<sup>Required</sup> <a name="allowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```typescript
public readonly allowedScopes: string[];
```

- *Type:* string[]

---

##### `discoveryUrl`<sup>Required</sup> <a name="discoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```typescript
public readonly discoveryUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>

---


### BedrockagentcoreGatewayAuthorizerConfigurationOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">putCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">resetCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomJwtAuthorizer` <a name="putCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```typescript
public putCustomJwtAuthorizer(value: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `resetCustomJwtAuthorizer` <a name="resetCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```typescript
public resetCustomJwtAuthorizer(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">customJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">customJwtAuthorizerInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customJwtAuthorizer`<sup>Required</sup> <a name="customJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```typescript
public readonly customJwtAuthorizer: BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a>

---

##### `customJwtAuthorizerInput`<sup>Optional</sup> <a name="customJwtAuthorizerInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```typescript
public readonly customJwtAuthorizerInput: IResolvable | BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayAuthorizerConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>

---


### BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference <a name="BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.resetPassRequestHeaders">resetPassRequestHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassRequestHeaders` <a name="resetPassRequestHeaders" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.resetPassRequestHeaders"></a>

```typescript
public resetPassRequestHeaders(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.passRequestHeadersInput">passRequestHeadersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.passRequestHeaders">passRequestHeaders</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passRequestHeadersInput`<sup>Optional</sup> <a name="passRequestHeadersInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.passRequestHeadersInput"></a>

```typescript
public readonly passRequestHeadersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `passRequestHeaders`<sup>Required</sup> <a name="passRequestHeaders" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.passRequestHeaders"></a>

```typescript
public readonly passRequestHeaders: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration</a>

---


### BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference <a name="BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda</a>

---


### BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference <a name="BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.putLambda">putLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.resetLambda">resetLambda</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambda` <a name="putLambda" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.putLambda"></a>

```typescript
public putLambda(value: BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda</a>

---

##### `resetLambda` <a name="resetLambda" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.resetLambda"></a>

```typescript
public resetLambda(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.lambda">lambda</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.lambdaInput">lambdaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor">BedrockagentcoreGatewayInterceptorConfigurationsInterceptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambda`<sup>Required</sup> <a name="lambda" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.lambda"></a>

```typescript
public readonly lambda: BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference</a>

---

##### `lambdaInput`<sup>Optional</sup> <a name="lambdaInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.lambdaInput"></a>

```typescript
public readonly lambdaInput: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationsInterceptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor">BedrockagentcoreGatewayInterceptorConfigurationsInterceptor</a>

---


### BedrockagentcoreGatewayInterceptorConfigurationsList <a name="BedrockagentcoreGatewayInterceptorConfigurationsList" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayInterceptorConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations">BedrockagentcoreGatewayInterceptorConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayInterceptorConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations">BedrockagentcoreGatewayInterceptorConfigurations</a>[]

---


### BedrockagentcoreGatewayInterceptorConfigurationsOutputReference <a name="BedrockagentcoreGatewayInterceptorConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.putInputConfiguration">putInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.putInterceptor">putInterceptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resetInputConfiguration">resetInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resetInterceptionPoints">resetInterceptionPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resetInterceptor">resetInterceptor</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputConfiguration` <a name="putInputConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.putInputConfiguration"></a>

```typescript
public putInputConfiguration(value: BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.putInputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration</a>

---

##### `putInterceptor` <a name="putInterceptor" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.putInterceptor"></a>

```typescript
public putInterceptor(value: BedrockagentcoreGatewayInterceptorConfigurationsInterceptor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.putInterceptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor">BedrockagentcoreGatewayInterceptorConfigurationsInterceptor</a>

---

##### `resetInputConfiguration` <a name="resetInputConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resetInputConfiguration"></a>

```typescript
public resetInputConfiguration(): void
```

##### `resetInterceptionPoints` <a name="resetInterceptionPoints" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resetInterceptionPoints"></a>

```typescript
public resetInterceptionPoints(): void
```

##### `resetInterceptor` <a name="resetInterceptor" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resetInterceptor"></a>

```typescript
public resetInterceptor(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.inputConfiguration">inputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference">BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptor">interceptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.inputConfigurationInput">inputConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptionPointsInput">interceptionPointsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptorInput">interceptorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor">BedrockagentcoreGatewayInterceptorConfigurationsInterceptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptionPoints">interceptionPoints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations">BedrockagentcoreGatewayInterceptorConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputConfiguration`<sup>Required</sup> <a name="inputConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.inputConfiguration"></a>

```typescript
public readonly inputConfiguration: BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference">BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference</a>

---

##### `interceptor`<sup>Required</sup> <a name="interceptor" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptor"></a>

```typescript
public readonly interceptor: BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference</a>

---

##### `inputConfigurationInput`<sup>Optional</sup> <a name="inputConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.inputConfigurationInput"></a>

```typescript
public readonly inputConfigurationInput: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration</a>

---

##### `interceptionPointsInput`<sup>Optional</sup> <a name="interceptionPointsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptionPointsInput"></a>

```typescript
public readonly interceptionPointsInput: string[];
```

- *Type:* string[]

---

##### `interceptorInput`<sup>Optional</sup> <a name="interceptorInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptorInput"></a>

```typescript
public readonly interceptorInput: IResolvable | BedrockagentcoreGatewayInterceptorConfigurationsInterceptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor">BedrockagentcoreGatewayInterceptorConfigurationsInterceptor</a>

---

##### `interceptionPoints`<sup>Required</sup> <a name="interceptionPoints" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptionPoints"></a>

```typescript
public readonly interceptionPoints: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayInterceptorConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations">BedrockagentcoreGatewayInterceptorConfigurations</a>

---


### BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference <a name="BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resetArn">resetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resetMode">resetMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayPolicyEngineConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>

---


### BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putSessionConfiguration">putSessionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putStreamingConfiguration">putStreamingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetInstructions">resetInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSearchType">resetSearchType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSessionConfiguration">resetSessionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetStreamingConfiguration">resetStreamingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSupportedVersions">resetSupportedVersions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSessionConfiguration` <a name="putSessionConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putSessionConfiguration"></a>

```typescript
public putSessionConfiguration(value: BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putSessionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>

---

##### `putStreamingConfiguration` <a name="putStreamingConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putStreamingConfiguration"></a>

```typescript
public putStreamingConfiguration(value: BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putStreamingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>

---

##### `resetInstructions` <a name="resetInstructions" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetInstructions"></a>

```typescript
public resetInstructions(): void
```

##### `resetSearchType` <a name="resetSearchType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSearchType"></a>

```typescript
public resetSearchType(): void
```

##### `resetSessionConfiguration` <a name="resetSessionConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSessionConfiguration"></a>

```typescript
public resetSessionConfiguration(): void
```

##### `resetStreamingConfiguration` <a name="resetStreamingConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetStreamingConfiguration"></a>

```typescript
public resetStreamingConfiguration(): void
```

##### `resetSupportedVersions` <a name="resetSupportedVersions" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSupportedVersions"></a>

```typescript
public resetSupportedVersions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.sessionConfiguration">sessionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.streamingConfiguration">streamingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructionsInput">instructionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchTypeInput">searchTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.sessionConfigurationInput">sessionConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.streamingConfigurationInput">streamingConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersionsInput">supportedVersionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructions">instructions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchType">searchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersions">supportedVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionConfiguration`<sup>Required</sup> <a name="sessionConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.sessionConfiguration"></a>

```typescript
public readonly sessionConfiguration: BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference</a>

---

##### `streamingConfiguration`<sup>Required</sup> <a name="streamingConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.streamingConfiguration"></a>

```typescript
public readonly streamingConfiguration: BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference</a>

---

##### `instructionsInput`<sup>Optional</sup> <a name="instructionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructionsInput"></a>

```typescript
public readonly instructionsInput: string;
```

- *Type:* string

---

##### `searchTypeInput`<sup>Optional</sup> <a name="searchTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchTypeInput"></a>

```typescript
public readonly searchTypeInput: string;
```

- *Type:* string

---

##### `sessionConfigurationInput`<sup>Optional</sup> <a name="sessionConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.sessionConfigurationInput"></a>

```typescript
public readonly sessionConfigurationInput: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>

---

##### `streamingConfigurationInput`<sup>Optional</sup> <a name="streamingConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.streamingConfigurationInput"></a>

```typescript
public readonly streamingConfigurationInput: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>

---

##### `supportedVersionsInput`<sup>Optional</sup> <a name="supportedVersionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersionsInput"></a>

```typescript
public readonly supportedVersionsInput: string[];
```

- *Type:* string[]

---

##### `instructions`<sup>Required</sup> <a name="instructions" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructions"></a>

```typescript
public readonly instructions: string;
```

- *Type:* string

---

##### `searchType`<sup>Required</sup> <a name="searchType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchType"></a>

```typescript
public readonly searchType: string;
```

- *Type:* string

---

##### `supportedVersions`<sup>Required</sup> <a name="supportedVersions" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersions"></a>

```typescript
public readonly supportedVersions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>

---


### BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resetSessionTimeoutInSeconds">resetSessionTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSessionTimeoutInSeconds` <a name="resetSessionTimeoutInSeconds" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resetSessionTimeoutInSeconds"></a>

```typescript
public resetSessionTimeoutInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.sessionTimeoutInSecondsInput">sessionTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.sessionTimeoutInSeconds">sessionTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sessionTimeoutInSecondsInput`<sup>Optional</sup> <a name="sessionTimeoutInSecondsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.sessionTimeoutInSecondsInput"></a>

```typescript
public readonly sessionTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `sessionTimeoutInSeconds`<sup>Required</sup> <a name="sessionTimeoutInSeconds" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.sessionTimeoutInSeconds"></a>

```typescript
public readonly sessionTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>

---


### BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resetEnableResponseStreaming">resetEnableResponseStreaming</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableResponseStreaming` <a name="resetEnableResponseStreaming" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resetEnableResponseStreaming"></a>

```typescript
public resetEnableResponseStreaming(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.enableResponseStreamingInput">enableResponseStreamingInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.enableResponseStreaming">enableResponseStreaming</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableResponseStreamingInput`<sup>Optional</sup> <a name="enableResponseStreamingInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.enableResponseStreamingInput"></a>

```typescript
public readonly enableResponseStreamingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableResponseStreaming`<sup>Required</sup> <a name="enableResponseStreaming" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.enableResponseStreaming"></a>

```typescript
public readonly enableResponseStreaming: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>

---


### BedrockagentcoreGatewayProtocolConfigurationOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.putMcp">putMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resetMcp">resetMcp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMcp` <a name="putMcp" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.putMcp"></a>

```typescript
public putMcp(value: BedrockagentcoreGatewayProtocolConfigurationMcp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.putMcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>

---

##### `resetMcp` <a name="resetMcp" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resetMcp"></a>

```typescript
public resetMcp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcp">mcp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference">BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcpInput">mcpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mcp`<sup>Required</sup> <a name="mcp" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcp"></a>

```typescript
public readonly mcp: BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference">BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference</a>

---

##### `mcpInput`<sup>Optional</sup> <a name="mcpInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcpInput"></a>

```typescript
public readonly mcpInput: IResolvable | BedrockagentcoreGatewayProtocolConfigurationMcp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayProtocolConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>

---


### BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference <a name="BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGateway } from '@cdktn/provider-awscc'

new bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn">workloadIdentityArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails">BedrockagentcoreGatewayWorkloadIdentityDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workloadIdentityArn`<sup>Required</sup> <a name="workloadIdentityArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn"></a>

```typescript
public readonly workloadIdentityArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: BedrockagentcoreGatewayWorkloadIdentityDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails">BedrockagentcoreGatewayWorkloadIdentityDetails</a>

---



