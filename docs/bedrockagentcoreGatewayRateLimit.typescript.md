# `bedrockagentcoreGatewayRateLimit` Submodule <a name="`bedrockagentcoreGatewayRateLimit` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreGatewayRateLimit <a name="BedrockagentcoreGatewayRateLimit" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit awscc_bedrockagentcore_gateway_rate_limit}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

new bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit(scope: Construct, id: string, config: BedrockagentcoreGatewayRateLimitConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig">BedrockagentcoreGatewayRateLimitConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig">BedrockagentcoreGatewayRateLimitConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.putEntries">putEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetGatewayIdentifier">resetGatewayIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetRateLimitId">resetRateLimitId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEntries` <a name="putEntries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.putEntries"></a>

```typescript
public putEntries(value: IResolvable | BedrockagentcoreGatewayRateLimitEntries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.putEntries.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGatewayIdentifier` <a name="resetGatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetGatewayIdentifier"></a>

```typescript
public resetGatewayIdentifier(): void
```

##### `resetRateLimitId` <a name="resetRateLimitId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.resetRateLimitId"></a>

```typescript
public resetRateLimitId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreGatewayRateLimit resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isConstruct"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformElement"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformResource"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a BedrockagentcoreGatewayRateLimit resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BedrockagentcoreGatewayRateLimit to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BedrockagentcoreGatewayRateLimit that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreGatewayRateLimit to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList">BedrockagentcoreGatewayRateLimitEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeysInput">dimensionKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entriesInput">entriesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifierInput">gatewayIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitIdInput">rateLimitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeys">dimensionKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifier">gatewayIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitId">rateLimitId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entries"></a>

```typescript
public readonly entries: BedrockagentcoreGatewayRateLimitEntriesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList">BedrockagentcoreGatewayRateLimitEntriesList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dimensionKeysInput`<sup>Optional</sup> <a name="dimensionKeysInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeysInput"></a>

```typescript
public readonly dimensionKeysInput: string[];
```

- *Type:* string[]

---

##### `entriesInput`<sup>Optional</sup> <a name="entriesInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.entriesInput"></a>

```typescript
public readonly entriesInput: IResolvable | BedrockagentcoreGatewayRateLimitEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]

---

##### `gatewayIdentifierInput`<sup>Optional</sup> <a name="gatewayIdentifierInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifierInput"></a>

```typescript
public readonly gatewayIdentifierInput: string;
```

- *Type:* string

---

##### `rateLimitIdInput`<sup>Optional</sup> <a name="rateLimitIdInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitIdInput"></a>

```typescript
public readonly rateLimitIdInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dimensionKeys`<sup>Required</sup> <a name="dimensionKeys" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.dimensionKeys"></a>

```typescript
public readonly dimensionKeys: string[];
```

- *Type:* string[]

---

##### `gatewayIdentifier`<sup>Required</sup> <a name="gatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.gatewayIdentifier"></a>

```typescript
public readonly gatewayIdentifier: string;
```

- *Type:* string

---

##### `rateLimitId`<sup>Required</sup> <a name="rateLimitId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.rateLimitId"></a>

```typescript
public readonly rateLimitId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimit.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreGatewayRateLimitConfig <a name="BedrockagentcoreGatewayRateLimitConfig" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayRateLimitConfig: bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dimensionKeys">dimensionKeys</a></code> | <code>string[]</code> | Ordered list of dimension names defining the scope of this limit. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.entries">entries</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]</code> | Rule entries mapping dimension values to rate configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.description">description</a></code> | <code>string</code> | Optional human-readable description for this limit. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.gatewayIdentifier">gatewayIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#gateway_identifier BedrockagentcoreGatewayRateLimit#gateway_identifier}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.rateLimitId">rateLimitId</a></code> | <code>string</code> | Limit identifier. Optional on Create (system-generates if not provided by customer). Always present in responses. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dimensionKeys`<sup>Required</sup> <a name="dimensionKeys" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.dimensionKeys"></a>

```typescript
public readonly dimensionKeys: string[];
```

- *Type:* string[]

Ordered list of dimension names defining the scope of this limit.

Unique per gateway — no two limits can share the same dimensionKeys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#dimension_keys BedrockagentcoreGatewayRateLimit#dimension_keys}

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.entries"></a>

```typescript
public readonly entries: IResolvable | BedrockagentcoreGatewayRateLimitEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]

Rule entries mapping dimension values to rate configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#entries BedrockagentcoreGatewayRateLimit#entries}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Optional human-readable description for this limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#description BedrockagentcoreGatewayRateLimit#description}

---

##### `gatewayIdentifier`<sup>Optional</sup> <a name="gatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.gatewayIdentifier"></a>

```typescript
public readonly gatewayIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#gateway_identifier BedrockagentcoreGatewayRateLimit#gateway_identifier}.

---

##### `rateLimitId`<sup>Optional</sup> <a name="rateLimitId" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitConfig.property.rateLimitId"></a>

```typescript
public readonly rateLimitId: string;
```

- *Type:* string

Limit identifier. Optional on Create (system-generates if not provided by customer). Always present in responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate_limit_id BedrockagentcoreGatewayRateLimit#rate_limit_id}

---

### BedrockagentcoreGatewayRateLimitEntries <a name="BedrockagentcoreGatewayRateLimitEntries" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayRateLimitEntries: bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | Map of dimension name to dimension value for a rule entry. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.connections">connections</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]</code> | Connection rate limits (per second only). Limited to 1 entry for now. — P2. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.requests">requests</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]</code> | Request rate limits (RPS or RPM). Limited to 1 entry for now. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.tokens">tokens</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]</code> | Token rate limits (TPM). Limited to 1 entry for now. — P1. |

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Map of dimension name to dimension value for a rule entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#dimensions BedrockagentcoreGatewayRateLimit#dimensions}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.connections"></a>

```typescript
public readonly connections: IResolvable | BedrockagentcoreGatewayRateLimitEntriesConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]

Connection rate limits (per second only). Limited to 1 entry for now. — P2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#connections BedrockagentcoreGatewayRateLimit#connections}

---

##### `requests`<sup>Optional</sup> <a name="requests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.requests"></a>

```typescript
public readonly requests: IResolvable | BedrockagentcoreGatewayRateLimitEntriesRequests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]

Request rate limits (RPS or RPM). Limited to 1 entry for now.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#requests BedrockagentcoreGatewayRateLimit#requests}

---

##### `tokens`<sup>Optional</sup> <a name="tokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries.property.tokens"></a>

```typescript
public readonly tokens: IResolvable | BedrockagentcoreGatewayRateLimitEntriesTokens[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]

Token rate limits (TPM). Limited to 1 entry for now. — P1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#tokens BedrockagentcoreGatewayRateLimit#tokens}

---

### BedrockagentcoreGatewayRateLimitEntriesConnections <a name="BedrockagentcoreGatewayRateLimitEntriesConnections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayRateLimitEntriesConnections: bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.period">period</a></code> | <code>string</code> | Time period for rate limiting. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.rate">rate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Time period for rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#period BedrockagentcoreGatewayRateLimit#period}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections.property.rate"></a>

```typescript
public readonly rate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}.

---

### BedrockagentcoreGatewayRateLimitEntriesRequests <a name="BedrockagentcoreGatewayRateLimitEntriesRequests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayRateLimitEntriesRequests: bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.period">period</a></code> | <code>string</code> | Time period for rate limiting. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.rate">rate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Time period for rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#period BedrockagentcoreGatewayRateLimit#period}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests.property.rate"></a>

```typescript
public readonly rate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}.

---

### BedrockagentcoreGatewayRateLimitEntriesTokens <a name="BedrockagentcoreGatewayRateLimitEntriesTokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

const bedrockagentcoreGatewayRateLimitEntriesTokens: bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.period">period</a></code> | <code>string</code> | Time period for rate limiting. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.rate">rate</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}. |

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

Time period for rate limiting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#period BedrockagentcoreGatewayRateLimit#period}

---

##### `rate`<sup>Optional</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens.property.rate"></a>

```typescript
public readonly rate: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_gateway_rate_limit#rate BedrockagentcoreGatewayRateLimit#rate}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreGatewayRateLimitEntriesConnectionsList <a name="BedrockagentcoreGatewayRateLimitEntriesConnectionsList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

new bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayRateLimitEntriesConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]

---


### BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

new bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetRate">resetRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetRate` <a name="resetRate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.resetRate"></a>

```typescript
public resetRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rateInput">rateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rate">rate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `rateInput`<sup>Optional</sup> <a name="rateInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rateInput"></a>

```typescript
public readonly rateInput: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.rate"></a>

```typescript
public readonly rate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayRateLimitEntriesConnections;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>

---


### BedrockagentcoreGatewayRateLimitEntriesList <a name="BedrockagentcoreGatewayRateLimitEntriesList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

new bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayRateLimitEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayRateLimitEntries[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>[]

---


### BedrockagentcoreGatewayRateLimitEntriesOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

new bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putConnections">putConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putRequests">putRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putTokens">putTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetConnections">resetConnections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetRequests">resetRequests</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetTokens">resetTokens</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnections` <a name="putConnections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putConnections"></a>

```typescript
public putConnections(value: IResolvable | BedrockagentcoreGatewayRateLimitEntriesConnections[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putConnections.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]

---

##### `putRequests` <a name="putRequests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putRequests"></a>

```typescript
public putRequests(value: IResolvable | BedrockagentcoreGatewayRateLimitEntriesRequests[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putRequests.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]

---

##### `putTokens` <a name="putTokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putTokens"></a>

```typescript
public putTokens(value: IResolvable | BedrockagentcoreGatewayRateLimitEntriesTokens[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.putTokens.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]

---

##### `resetConnections` <a name="resetConnections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetConnections"></a>

```typescript
public resetConnections(): void
```

##### `resetRequests` <a name="resetRequests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetRequests"></a>

```typescript
public resetRequests(): void
```

##### `resetTokens` <a name="resetTokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.resetTokens"></a>

```typescript
public resetTokens(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connections">connections</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList">BedrockagentcoreGatewayRateLimitEntriesConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requests">requests</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList">BedrockagentcoreGatewayRateLimitEntriesRequestsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokens">tokens</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList">BedrockagentcoreGatewayRateLimitEntriesTokensList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connectionsInput">connectionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requestsInput">requestsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokensInput">tokensInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensions">dimensions</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connections"></a>

```typescript
public readonly connections: BedrockagentcoreGatewayRateLimitEntriesConnectionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnectionsList">BedrockagentcoreGatewayRateLimitEntriesConnectionsList</a>

---

##### `requests`<sup>Required</sup> <a name="requests" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requests"></a>

```typescript
public readonly requests: BedrockagentcoreGatewayRateLimitEntriesRequestsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList">BedrockagentcoreGatewayRateLimitEntriesRequestsList</a>

---

##### `tokens`<sup>Required</sup> <a name="tokens" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokens"></a>

```typescript
public readonly tokens: BedrockagentcoreGatewayRateLimitEntriesTokensList;
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList">BedrockagentcoreGatewayRateLimitEntriesTokensList</a>

---

##### `connectionsInput`<sup>Optional</sup> <a name="connectionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.connectionsInput"></a>

```typescript
public readonly connectionsInput: IResolvable | BedrockagentcoreGatewayRateLimitEntriesConnections[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesConnections">BedrockagentcoreGatewayRateLimitEntriesConnections</a>[]

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `requestsInput`<sup>Optional</sup> <a name="requestsInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.requestsInput"></a>

```typescript
public readonly requestsInput: IResolvable | BedrockagentcoreGatewayRateLimitEntriesRequests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]

---

##### `tokensInput`<sup>Optional</sup> <a name="tokensInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.tokensInput"></a>

```typescript
public readonly tokensInput: IResolvable | BedrockagentcoreGatewayRateLimitEntriesTokens[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayRateLimitEntries;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntries">BedrockagentcoreGatewayRateLimitEntries</a>

---


### BedrockagentcoreGatewayRateLimitEntriesRequestsList <a name="BedrockagentcoreGatewayRateLimitEntriesRequestsList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

new bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayRateLimitEntriesRequests[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>[]

---


### BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

new bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetRate">resetRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetRate` <a name="resetRate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.resetRate"></a>

```typescript
public resetRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rateInput">rateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rate">rate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `rateInput`<sup>Optional</sup> <a name="rateInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rateInput"></a>

```typescript
public readonly rateInput: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.rate"></a>

```typescript
public readonly rate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequestsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayRateLimitEntriesRequests;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesRequests">BedrockagentcoreGatewayRateLimitEntriesRequests</a>

---


### BedrockagentcoreGatewayRateLimitEntriesTokensList <a name="BedrockagentcoreGatewayRateLimitEntriesTokensList" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

new bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.get"></a>

```typescript
public get(index: number): BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayRateLimitEntriesTokens[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>[]

---


### BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference <a name="BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer"></a>

```typescript
import { bedrockagentcoreGatewayRateLimit } from '@cdktn/provider-awscc'

new bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetRate">resetRate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPeriod` <a name="resetPeriod" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetRate` <a name="resetRate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.resetRate"></a>

```typescript
public resetRate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.periodInput">periodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rateInput">rateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.period">period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rate">rate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: string;
```

- *Type:* string

---

##### `rateInput`<sup>Optional</sup> <a name="rateInput" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rateInput"></a>

```typescript
public readonly rateInput: number;
```

- *Type:* number

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.period"></a>

```typescript
public readonly period: string;
```

- *Type:* string

---

##### `rate`<sup>Required</sup> <a name="rate" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.rate"></a>

```typescript
public readonly rate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokensOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | BedrockagentcoreGatewayRateLimitEntriesTokens;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.bedrockagentcoreGatewayRateLimit.BedrockagentcoreGatewayRateLimitEntriesTokens">BedrockagentcoreGatewayRateLimitEntriesTokens</a>

---



