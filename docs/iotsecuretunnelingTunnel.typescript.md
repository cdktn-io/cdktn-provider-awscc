# `iotsecuretunnelingTunnel` Submodule <a name="`iotsecuretunnelingTunnel` Submodule" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsecuretunnelingTunnel <a name="IotsecuretunnelingTunnel" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel awscc_iotsecuretunneling_tunnel}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer"></a>

```typescript
import { iotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

new iotsecuretunnelingTunnel.IotsecuretunnelingTunnel(scope: Construct, id: string, config?: IotsecuretunnelingTunnelConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig">IotsecuretunnelingTunnelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig">IotsecuretunnelingTunnelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putDestinationConfig">putDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTimeoutConfig">putTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDestinationConfig">resetDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTimeoutConfig">resetTimeoutConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDestinationConfig` <a name="putDestinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putDestinationConfig"></a>

```typescript
public putDestinationConfig(value: IotsecuretunnelingTunnelDestinationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putDestinationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTags"></a>

```typescript
public putTags(value: IResolvable | IotsecuretunnelingTunnelTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]

---

##### `putTimeoutConfig` <a name="putTimeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTimeoutConfig"></a>

```typescript
public putTimeoutConfig(value: IotsecuretunnelingTunnelTimeoutConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.putTimeoutConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDestinationConfig` <a name="resetDestinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetDestinationConfig"></a>

```typescript
public resetDestinationConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeoutConfig` <a name="resetTimeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.resetTimeoutConfig"></a>

```typescript
public resetTimeoutConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a IotsecuretunnelingTunnel resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isConstruct"></a>

```typescript
import { iotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformElement"></a>

```typescript
import { iotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformResource"></a>

```typescript
import { iotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport"></a>

```typescript
import { iotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a IotsecuretunnelingTunnel resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IotsecuretunnelingTunnel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IotsecuretunnelingTunnel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the IotsecuretunnelingTunnel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference">IotsecuretunnelingTunnelDestinationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList">IotsecuretunnelingTunnelTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference">IotsecuretunnelingTunnelTimeoutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelArn">tunnelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelId">tunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfigInput">destinationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfigInput">timeoutConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destinationConfig`<sup>Required</sup> <a name="destinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfig"></a>

```typescript
public readonly destinationConfig: IotsecuretunnelingTunnelDestinationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference">IotsecuretunnelingTunnelDestinationConfigOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tags"></a>

```typescript
public readonly tags: IotsecuretunnelingTunnelTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList">IotsecuretunnelingTunnelTagsList</a>

---

##### `timeoutConfig`<sup>Required</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfig"></a>

```typescript
public readonly timeoutConfig: IotsecuretunnelingTunnelTimeoutConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference">IotsecuretunnelingTunnelTimeoutConfigOutputReference</a>

---

##### `tunnelArn`<sup>Required</sup> <a name="tunnelArn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelArn"></a>

```typescript
public readonly tunnelArn: string;
```

- *Type:* string

---

##### `tunnelId`<sup>Required</sup> <a name="tunnelId" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tunnelId"></a>

```typescript
public readonly tunnelId: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `destinationConfigInput`<sup>Optional</sup> <a name="destinationConfigInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.destinationConfigInput"></a>

```typescript
public readonly destinationConfigInput: IResolvable | IotsecuretunnelingTunnelDestinationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | IotsecuretunnelingTunnelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]

---

##### `timeoutConfigInput`<sup>Optional</sup> <a name="timeoutConfigInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.timeoutConfigInput"></a>

```typescript
public readonly timeoutConfigInput: IResolvable | IotsecuretunnelingTunnelTimeoutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnel.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IotsecuretunnelingTunnelConfig <a name="IotsecuretunnelingTunnelConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.Initializer"></a>

```typescript
import { iotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

const iotsecuretunnelingTunnelConfig: iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.description">description</a></code> | <code>string</code> | A short text description of the tunnel. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.destinationConfig">destinationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | The destination configuration for the tunnel. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]</code> | A collection of tag metadata. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.timeoutConfig">timeoutConfig</a></code> | <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | Timeout configuration for the tunnel. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A short text description of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#description IotsecuretunnelingTunnel#description}

---

##### `destinationConfig`<sup>Optional</sup> <a name="destinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.destinationConfig"></a>

```typescript
public readonly destinationConfig: IotsecuretunnelingTunnelDestinationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

The destination configuration for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#destination_config IotsecuretunnelingTunnel#destination_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | IotsecuretunnelingTunnelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]

A collection of tag metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#tags IotsecuretunnelingTunnel#tags}

---

##### `timeoutConfig`<sup>Optional</sup> <a name="timeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelConfig.property.timeoutConfig"></a>

```typescript
public readonly timeoutConfig: IotsecuretunnelingTunnelTimeoutConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

Timeout configuration for the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#timeout_config IotsecuretunnelingTunnel#timeout_config}

---

### IotsecuretunnelingTunnelDestinationConfig <a name="IotsecuretunnelingTunnelDestinationConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.Initializer"></a>

```typescript
import { iotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

const iotsecuretunnelingTunnelDestinationConfig: iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.services">services</a></code> | <code>string[]</code> | A list of service names that identify the target application. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.thingName">thingName</a></code> | <code>string</code> | The name of the IoT thing to which you want to connect. |

---

##### `services`<sup>Optional</sup> <a name="services" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

A list of service names that identify the target application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#services IotsecuretunnelingTunnel#services}

---

##### `thingName`<sup>Optional</sup> <a name="thingName" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

The name of the IoT thing to which you want to connect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#thing_name IotsecuretunnelingTunnel#thing_name}

---

### IotsecuretunnelingTunnelTags <a name="IotsecuretunnelingTunnelTags" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.Initializer"></a>

```typescript
import { iotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

const iotsecuretunnelingTunnelTags: iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#key IotsecuretunnelingTunnel#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#value IotsecuretunnelingTunnel#value}

---

### IotsecuretunnelingTunnelTimeoutConfig <a name="IotsecuretunnelingTunnelTimeoutConfig" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig.Initializer"></a>

```typescript
import { iotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

const iotsecuretunnelingTunnelTimeoutConfig: iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig.property.maxLifetimeTimeoutMinutes">maxLifetimeTimeoutMinutes</a></code> | <code>number</code> | The maximum amount of time (in minutes) a tunnel can remain open. |

---

##### `maxLifetimeTimeoutMinutes`<sup>Optional</sup> <a name="maxLifetimeTimeoutMinutes" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig.property.maxLifetimeTimeoutMinutes"></a>

```typescript
public readonly maxLifetimeTimeoutMinutes: number;
```

- *Type:* number

The maximum amount of time (in minutes) a tunnel can remain open.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/iotsecuretunneling_tunnel#max_lifetime_timeout_minutes IotsecuretunnelingTunnel#max_lifetime_timeout_minutes}

---

## Classes <a name="Classes" id="Classes"></a>

### IotsecuretunnelingTunnelDestinationConfigOutputReference <a name="IotsecuretunnelingTunnelDestinationConfigOutputReference" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer"></a>

```typescript
import { iotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

new iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetServices">resetServices</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetThingName">resetThingName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServices` <a name="resetServices" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetServices"></a>

```typescript
public resetServices(): void
```

##### `resetThingName` <a name="resetThingName" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.resetThingName"></a>

```typescript
public resetThingName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.servicesInput">servicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingNameInput">thingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.services">services</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingName">thingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `servicesInput`<sup>Optional</sup> <a name="servicesInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.servicesInput"></a>

```typescript
public readonly servicesInput: string[];
```

- *Type:* string[]

---

##### `thingNameInput`<sup>Optional</sup> <a name="thingNameInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingNameInput"></a>

```typescript
public readonly thingNameInput: string;
```

- *Type:* string

---

##### `services`<sup>Required</sup> <a name="services" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.services"></a>

```typescript
public readonly services: string[];
```

- *Type:* string[]

---

##### `thingName`<sup>Required</sup> <a name="thingName" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.thingName"></a>

```typescript
public readonly thingName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsecuretunnelingTunnelDestinationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelDestinationConfig">IotsecuretunnelingTunnelDestinationConfig</a>

---


### IotsecuretunnelingTunnelTagsList <a name="IotsecuretunnelingTunnelTagsList" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer"></a>

```typescript
import { iotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

new iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.get"></a>

```typescript
public get(index: number): IotsecuretunnelingTunnelTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsecuretunnelingTunnelTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>[]

---


### IotsecuretunnelingTunnelTagsOutputReference <a name="IotsecuretunnelingTunnelTagsOutputReference" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer"></a>

```typescript
import { iotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

new iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsecuretunnelingTunnelTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTags">IotsecuretunnelingTunnelTags</a>

---


### IotsecuretunnelingTunnelTimeoutConfigOutputReference <a name="IotsecuretunnelingTunnelTimeoutConfigOutputReference" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer"></a>

```typescript
import { iotsecuretunnelingTunnel } from '@cdktn/provider-awscc'

new iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resetMaxLifetimeTimeoutMinutes">resetMaxLifetimeTimeoutMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxLifetimeTimeoutMinutes` <a name="resetMaxLifetimeTimeoutMinutes" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.resetMaxLifetimeTimeoutMinutes"></a>

```typescript
public resetMaxLifetimeTimeoutMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutesInput">maxLifetimeTimeoutMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutes">maxLifetimeTimeoutMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxLifetimeTimeoutMinutesInput`<sup>Optional</sup> <a name="maxLifetimeTimeoutMinutesInput" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutesInput"></a>

```typescript
public readonly maxLifetimeTimeoutMinutesInput: number;
```

- *Type:* number

---

##### `maxLifetimeTimeoutMinutes`<sup>Required</sup> <a name="maxLifetimeTimeoutMinutes" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.maxLifetimeTimeoutMinutes"></a>

```typescript
public readonly maxLifetimeTimeoutMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | IotsecuretunnelingTunnelTimeoutConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.iotsecuretunnelingTunnel.IotsecuretunnelingTunnelTimeoutConfig">IotsecuretunnelingTunnelTimeoutConfig</a>

---



