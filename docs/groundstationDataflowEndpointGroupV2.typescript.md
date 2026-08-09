# `groundstationDataflowEndpointGroupV2` Submodule <a name="`groundstationDataflowEndpointGroupV2` Submodule" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationDataflowEndpointGroupV2 <a name="GroundstationDataflowEndpointGroupV2" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2 awscc_groundstation_dataflow_endpoint_group_v2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2(scope: Construct, id: string, config?: GroundstationDataflowEndpointGroupV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config">GroundstationDataflowEndpointGroupV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config">GroundstationDataflowEndpointGroupV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putEndpoints">putEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetContactPostPassDurationSeconds">resetContactPostPassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetContactPrePassDurationSeconds">resetContactPrePassDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetEndpoints">resetEndpoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpoints` <a name="putEndpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putEndpoints"></a>

```typescript
public putEndpoints(value: IResolvable | GroundstationDataflowEndpointGroupV2Endpoints[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putEndpoints.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putTags"></a>

```typescript
public putTags(value: IResolvable | GroundstationDataflowEndpointGroupV2Tags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]

---

##### `resetContactPostPassDurationSeconds` <a name="resetContactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetContactPostPassDurationSeconds"></a>

```typescript
public resetContactPostPassDurationSeconds(): void
```

##### `resetContactPrePassDurationSeconds` <a name="resetContactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetContactPrePassDurationSeconds"></a>

```typescript
public resetContactPrePassDurationSeconds(): void
```

##### `resetEndpoints` <a name="resetEndpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetEndpoints"></a>

```typescript
public resetEndpoints(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GroundstationDataflowEndpointGroupV2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isConstruct"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformElement"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformResource"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GroundstationDataflowEndpointGroupV2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GroundstationDataflowEndpointGroupV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GroundstationDataflowEndpointGroupV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationDataflowEndpointGroupV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.dataflowEndpointGroupV2Id">dataflowEndpointGroupV2Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpointDetails">endpointDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList">GroundstationDataflowEndpointGroupV2EndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList">GroundstationDataflowEndpointGroupV2EndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList">GroundstationDataflowEndpointGroupV2TagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSecondsInput">contactPostPassDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSecondsInput">contactPrePassDurationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpointsInput">endpointsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSeconds">contactPostPassDurationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSeconds">contactPrePassDurationSeconds</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `dataflowEndpointGroupV2Id`<sup>Required</sup> <a name="dataflowEndpointGroupV2Id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.dataflowEndpointGroupV2Id"></a>

```typescript
public readonly dataflowEndpointGroupV2Id: string;
```

- *Type:* string

---

##### `endpointDetails`<sup>Required</sup> <a name="endpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpointDetails"></a>

```typescript
public readonly endpointDetails: GroundstationDataflowEndpointGroupV2EndpointDetailsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList">GroundstationDataflowEndpointGroupV2EndpointDetailsList</a>

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpoints"></a>

```typescript
public readonly endpoints: GroundstationDataflowEndpointGroupV2EndpointsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList">GroundstationDataflowEndpointGroupV2EndpointsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tags"></a>

```typescript
public readonly tags: GroundstationDataflowEndpointGroupV2TagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList">GroundstationDataflowEndpointGroupV2TagsList</a>

---

##### `contactPostPassDurationSecondsInput`<sup>Optional</sup> <a name="contactPostPassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSecondsInput"></a>

```typescript
public readonly contactPostPassDurationSecondsInput: number;
```

- *Type:* number

---

##### `contactPrePassDurationSecondsInput`<sup>Optional</sup> <a name="contactPrePassDurationSecondsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSecondsInput"></a>

```typescript
public readonly contactPrePassDurationSecondsInput: number;
```

- *Type:* number

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.endpointsInput"></a>

```typescript
public readonly endpointsInput: IResolvable | GroundstationDataflowEndpointGroupV2Endpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | GroundstationDataflowEndpointGroupV2Tags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]

---

##### `contactPostPassDurationSeconds`<sup>Required</sup> <a name="contactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPostPassDurationSeconds"></a>

```typescript
public readonly contactPostPassDurationSeconds: number;
```

- *Type:* number

---

##### `contactPrePassDurationSeconds`<sup>Required</sup> <a name="contactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.contactPrePassDurationSeconds"></a>

```typescript
public readonly contactPrePassDurationSeconds: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationDataflowEndpointGroupV2Config <a name="GroundstationDataflowEndpointGroupV2Config" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2Config: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.contactPostPassDurationSeconds">contactPostPassDurationSeconds</a></code> | <code>number</code> | Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.contactPrePassDurationSeconds">contactPrePassDurationSeconds</a></code> | <code>number</code> | Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.endpoints">endpoints</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#endpoints GroundstationDataflowEndpointGroupV2#endpoints}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#tags GroundstationDataflowEndpointGroupV2#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `contactPostPassDurationSeconds`<sup>Optional</sup> <a name="contactPostPassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.contactPostPassDurationSeconds"></a>

```typescript
public readonly contactPostPassDurationSeconds: number;
```

- *Type:* number

Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a POSTPASS state.

A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the POSTPASS state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#contact_post_pass_duration_seconds GroundstationDataflowEndpointGroupV2#contact_post_pass_duration_seconds}

---

##### `contactPrePassDurationSeconds`<sup>Optional</sup> <a name="contactPrePassDurationSeconds" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.contactPrePassDurationSeconds"></a>

```typescript
public readonly contactPrePassDurationSeconds: number;
```

- *Type:* number

Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a PREPASS state.

A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the PREPASS state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#contact_pre_pass_duration_seconds GroundstationDataflowEndpointGroupV2#contact_pre_pass_duration_seconds}

---

##### `endpoints`<sup>Optional</sup> <a name="endpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.endpoints"></a>

```typescript
public readonly endpoints: IResolvable | GroundstationDataflowEndpointGroupV2Endpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#endpoints GroundstationDataflowEndpointGroupV2#endpoints}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Config.property.tags"></a>

```typescript
public readonly tags: IResolvable | GroundstationDataflowEndpointGroupV2Tags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#tags GroundstationDataflowEndpointGroupV2#tags}.

---

### GroundstationDataflowEndpointGroupV2EndpointDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetails.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetails: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetails = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort = { ... }
```


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress = { ... }
```


### GroundstationDataflowEndpointGroupV2Endpoints <a name="GroundstationDataflowEndpointGroupV2Endpoints" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2Endpoints: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.property.downlinkAwsGroundStationAgentEndpoint">downlinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a></code> | Information about DownlinkAwsGroundStationAgentEndpoint used for create. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.property.uplinkAwsGroundStationAgentEndpoint">uplinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a></code> | Information about UplinkAwsGroundStationAgentEndpoint used for create. |

---

##### `downlinkAwsGroundStationAgentEndpoint`<sup>Optional</sup> <a name="downlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.property.downlinkAwsGroundStationAgentEndpoint"></a>

```typescript
public readonly downlinkAwsGroundStationAgentEndpoint: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a>

Information about DownlinkAwsGroundStationAgentEndpoint used for create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#downlink_aws_ground_station_agent_endpoint GroundstationDataflowEndpointGroupV2#downlink_aws_ground_station_agent_endpoint}

---

##### `uplinkAwsGroundStationAgentEndpoint`<sup>Optional</sup> <a name="uplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints.property.uplinkAwsGroundStationAgentEndpoint"></a>

```typescript
public readonly uplinkAwsGroundStationAgentEndpoint: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a>

Information about UplinkAwsGroundStationAgentEndpoint used for create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#uplink_aws_ground_station_agent_endpoint GroundstationDataflowEndpointGroupV2#uplink_aws_ground_station_agent_endpoint}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.property.dataflowDetails">dataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | Dataflow details for downlink. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}. |

---

##### `dataflowDetails`<sup>Optional</sup> <a name="dataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.property.dataflowDetails"></a>

```typescript
public readonly dataflowDetails: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

Dataflow details for downlink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#dataflow_details GroundstationDataflowEndpointGroupV2#dataflow_details}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}.

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails.property.agentConnectionDetails">agentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | Connection details for downlink, from ground station to agent, and customer to agent. |

---

##### `agentConnectionDetails`<sup>Optional</sup> <a name="agentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails.property.agentConnectionDetails"></a>

```typescript
public readonly agentConnectionDetails: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

Connection details for downlink, from ground station to agent, and customer to agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_connection_details GroundstationDataflowEndpointGroupV2#agent_connection_details}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.agentIpAndPortAddress">agentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.egressAddressAndPort">egressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a></code> | Socket address of an uplink or downlink agent endpoint with an optional mtu. |

---

##### `agentIpAndPortAddress`<sup>Optional</sup> <a name="agentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.agentIpAndPortAddress"></a>

```typescript
public readonly agentIpAndPortAddress: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_ip_and_port_address GroundstationDataflowEndpointGroupV2#agent_ip_and_port_address}

---

##### `egressAddressAndPort`<sup>Optional</sup> <a name="egressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.egressAddressAndPort"></a>

```typescript
public readonly egressAddressAndPort: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

Socket address of an uplink or downlink agent endpoint with an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#egress_address_and_port GroundstationDataflowEndpointGroupV2#egress_address_and_port}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.mtu">mtu</a></code> | <code>number</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | A socket address with a port range. |

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}

---

##### `socketAddress`<sup>Optional</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

A socket address with a port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.name">name</a></code> | <code>string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.portRange">portRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | Port range of a socket address. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.portRange"></a>

```typescript
public readonly portRange: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

Port range of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port_range GroundstationDataflowEndpointGroupV2#port_range}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.maximum">maximum</a></code> | <code>number</code> | A maximum value. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.minimum">minimum</a></code> | <code>number</code> | A minimum value. |

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

A maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#maximum GroundstationDataflowEndpointGroupV2#maximum}

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

A minimum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#minimum GroundstationDataflowEndpointGroupV2#minimum}

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.property.mtu">mtu</a></code> | <code>number</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}. |

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}

---

##### `socketAddress`<sup>Optional</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}.

---

### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.property.name">name</a></code> | <code>string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.property.port">port</a></code> | <code>number</code> | Port of a socket address. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port GroundstationDataflowEndpointGroupV2#port}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.property.dataflowDetails">dataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | Dataflow details for uplink. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}. |

---

##### `dataflowDetails`<sup>Optional</sup> <a name="dataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.property.dataflowDetails"></a>

```typescript
public readonly dataflowDetails: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

Dataflow details for uplink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#dataflow_details GroundstationDataflowEndpointGroupV2#dataflow_details}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}.

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails.property.agentConnectionDetails">agentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | Connection details for uplink, from ground station to agent, and customer to agent. |

---

##### `agentConnectionDetails`<sup>Optional</sup> <a name="agentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails.property.agentConnectionDetails"></a>

```typescript
public readonly agentConnectionDetails: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

Connection details for uplink, from ground station to agent, and customer to agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_connection_details GroundstationDataflowEndpointGroupV2#agent_connection_details}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.agentIpAndPortAddress">agentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.ingressAddressAndPort">ingressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a></code> | Socket address of an uplink or downlink agent endpoint with an optional mtu. |

---

##### `agentIpAndPortAddress`<sup>Optional</sup> <a name="agentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.agentIpAndPortAddress"></a>

```typescript
public readonly agentIpAndPortAddress: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

Socket address of an uplink or downlink agent endpoint with a port range and an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#agent_ip_and_port_address GroundstationDataflowEndpointGroupV2#agent_ip_and_port_address}

---

##### `ingressAddressAndPort`<sup>Optional</sup> <a name="ingressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails.property.ingressAddressAndPort"></a>

```typescript
public readonly ingressAddressAndPort: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

Socket address of an uplink or downlink agent endpoint with an optional mtu.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#ingress_address_and_port GroundstationDataflowEndpointGroupV2#ingress_address_and_port}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.mtu">mtu</a></code> | <code>number</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | A socket address with a port range. |

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}

---

##### `socketAddress`<sup>Optional</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

A socket address with a port range.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.name">name</a></code> | <code>string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.portRange">portRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | Port range of a socket address. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}

---

##### `portRange`<sup>Optional</sup> <a name="portRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress.property.portRange"></a>

```typescript
public readonly portRange: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

Port range of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port_range GroundstationDataflowEndpointGroupV2#port_range}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.maximum">maximum</a></code> | <code>number</code> | A maximum value. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.minimum">minimum</a></code> | <code>number</code> | A minimum value. |

---

##### `maximum`<sup>Optional</sup> <a name="maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

A maximum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#maximum GroundstationDataflowEndpointGroupV2#maximum}

---

##### `minimum`<sup>Optional</sup> <a name="minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

A minimum value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#minimum GroundstationDataflowEndpointGroupV2#minimum}

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.property.mtu">mtu</a></code> | <code>number</code> | Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}. |

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#mtu GroundstationDataflowEndpointGroupV2#mtu}

---

##### `socketAddress`<sup>Optional</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#socket_address GroundstationDataflowEndpointGroupV2#socket_address}.

---

### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.property.name">name</a></code> | <code>string</code> | IPv4 socket address. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.property.port">port</a></code> | <code>number</code> | Port of a socket address. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

IPv4 socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#name GroundstationDataflowEndpointGroupV2#name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Port of a socket address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#port GroundstationDataflowEndpointGroupV2#port}

---

### GroundstationDataflowEndpointGroupV2Tags <a name="GroundstationDataflowEndpointGroupV2Tags" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

const groundstationDataflowEndpointGroupV2Tags: groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#key GroundstationDataflowEndpointGroupV2#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#value GroundstationDataflowEndpointGroupV2#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#key GroundstationDataflowEndpointGroupV2#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/groundstation_dataflow_endpoint_group_v2#value GroundstationDataflowEndpointGroupV2#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `socketAddress`<sup>Required</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">portRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```typescript
public readonly portRange: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `socketAddress`<sup>Required</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">agentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort">egressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentIpAndPortAddress`<sup>Required</sup> <a name="agentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```typescript
public readonly agentIpAndPortAddress: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `egressAddressAndPort`<sup>Required</sup> <a name="egressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort"></a>

```typescript
public readonly egressAddressAndPort: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">agentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentConnectionDetails`<sup>Required</sup> <a name="agentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```typescript
public readonly agentConnectionDetails: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus">agentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.auditResults">auditResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">dataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentStatus`<sup>Required</sup> <a name="agentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus"></a>

```typescript
public readonly agentStatus: string;
```

- *Type:* string

---

##### `auditResults`<sup>Required</sup> <a name="auditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.auditResults"></a>

```typescript
public readonly auditResults: string;
```

- *Type:* string

---

##### `dataflowDetails`<sup>Required</sup> <a name="dataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```typescript
public readonly dataflowDetails: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpoint</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsList <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.get"></a>

```typescript
public get(index: number): GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.downlinkAwsGroundStationAgentEndpoint">downlinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.uplinkAwsGroundStationAgentEndpoint">uplinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetails">GroundstationDataflowEndpointGroupV2EndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downlinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="downlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.downlinkAwsGroundStationAgentEndpoint"></a>

```typescript
public readonly downlinkAwsGroundStationAgentEndpoint: GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsDownlinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `uplinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="uplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.uplinkAwsGroundStationAgentEndpoint"></a>

```typescript
public readonly uplinkAwsGroundStationAgentEndpoint: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetails">GroundstationDataflowEndpointGroupV2EndpointDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `socketAddress`<sup>Required</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">portRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```typescript
public readonly portRange: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `socketAddress`<sup>Required</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">agentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort">ingressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentIpAndPortAddress`<sup>Required</sup> <a name="agentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```typescript
public readonly agentIpAndPortAddress: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `ingressAddressAndPort`<sup>Required</sup> <a name="ingressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort"></a>

```typescript
public readonly ingressAddressAndPort: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">agentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentConnectionDetails`<sup>Required</sup> <a name="agentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```typescript
public readonly agentConnectionDetails: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus">agentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.auditResults">auditResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">dataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentStatus`<sup>Required</sup> <a name="agentStatus" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.agentStatus"></a>

```typescript
public readonly agentStatus: string;
```

- *Type:* string

---

##### `auditResults`<sup>Required</sup> <a name="auditResults" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.auditResults"></a>

```typescript
public readonly auditResults: string;
```

- *Type:* string

---

##### `dataflowDetails`<sup>Required</sup> <a name="dataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```typescript
public readonly dataflowDetails: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointDetailsUplinkAwsGroundStationAgentEndpoint</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress">putSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetSocketAddress">resetSocketAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSocketAddress` <a name="putSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress"></a>

```typescript
public putSocketAddress(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetSocketAddress` <a name="resetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetSocketAddress"></a>

```typescript
public resetSocketAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddressInput">socketAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `socketAddress`<sup>Required</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `socketAddressInput`<sup>Optional</sup> <a name="socketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddressInput"></a>

```typescript
public readonly socketAddressInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange">putPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPortRange` <a name="putPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange"></a>

```typescript
public putPortRange(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPortRange` <a name="resetPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetPortRange"></a>

```typescript
public resetPortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">portRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRangeInput">portRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```typescript
public readonly portRange: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximum` <a name="resetMaximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximumInput">maximumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimumInput">minimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: number;
```

- *Type:* number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: number;
```

- *Type:* number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.putSocketAddress">putSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resetSocketAddress">resetSocketAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSocketAddress` <a name="putSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.putSocketAddress"></a>

```typescript
public putSocketAddress(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

---

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetSocketAddress` <a name="resetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.resetSocketAddress"></a>

```typescript
public resetSocketAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddressInput">socketAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `socketAddress`<sup>Required</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference</a>

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `socketAddressInput`<sup>Optional</sup> <a name="socketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.socketAddressInput"></a>

```typescript
public readonly socketAddressInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress">putAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putEgressAddressAndPort">putEgressAddressAndPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetAgentIpAndPortAddress">resetAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetEgressAddressAndPort">resetEgressAddressAndPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentIpAndPortAddress` <a name="putAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress"></a>

```typescript
public putAgentIpAndPortAddress(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---

##### `putEgressAddressAndPort` <a name="putEgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putEgressAddressAndPort"></a>

```typescript
public putEgressAddressAndPort(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putEgressAddressAndPort.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

---

##### `resetAgentIpAndPortAddress` <a name="resetAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetAgentIpAndPortAddress"></a>

```typescript
public resetAgentIpAndPortAddress(): void
```

##### `resetEgressAddressAndPort` <a name="resetEgressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetEgressAddressAndPort"></a>

```typescript
public resetEgressAddressAndPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">agentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort">egressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddressInput">agentIpAndPortAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPortInput">egressAddressAndPortInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentIpAndPortAddress`<sup>Required</sup> <a name="agentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```typescript
public readonly agentIpAndPortAddress: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `egressAddressAndPort`<sup>Required</sup> <a name="egressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPort"></a>

```typescript
public readonly egressAddressAndPort: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPortOutputReference</a>

---

##### `agentIpAndPortAddressInput`<sup>Optional</sup> <a name="agentIpAndPortAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddressInput"></a>

```typescript
public readonly agentIpAndPortAddressInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---

##### `egressAddressAndPortInput`<sup>Optional</sup> <a name="egressAddressAndPortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.egressAddressAndPortInput"></a>

```typescript
public readonly egressAddressAndPortInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsEgressAddressAndPort</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails">putAgentConnectionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resetAgentConnectionDetails">resetAgentConnectionDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentConnectionDetails` <a name="putAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails"></a>

```typescript
public putAgentConnectionDetails(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---

##### `resetAgentConnectionDetails` <a name="resetAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resetAgentConnectionDetails"></a>

```typescript
public resetAgentConnectionDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">agentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetailsInput">agentConnectionDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentConnectionDetails`<sup>Required</sup> <a name="agentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```typescript
public readonly agentConnectionDetails: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `agentConnectionDetailsInput`<sup>Optional</sup> <a name="agentConnectionDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetailsInput"></a>

```typescript
public readonly agentConnectionDetailsInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails">putDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resetDataflowDetails">resetDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataflowDetails` <a name="putDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails"></a>

```typescript
public putDataflowDetails(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

---

##### `resetDataflowDetails` <a name="resetDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resetDataflowDetails"></a>

```typescript
public resetDataflowDetails(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">dataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetailsInput">dataflowDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataflowDetails`<sup>Required</sup> <a name="dataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```typescript
public readonly dataflowDetails: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `dataflowDetailsInput`<sup>Optional</sup> <a name="dataflowDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetailsInput"></a>

```typescript
public readonly dataflowDetailsInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointDataflowDetails</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsList <a name="GroundstationDataflowEndpointGroupV2EndpointsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.get"></a>

```typescript
public get(index: number): GroundstationDataflowEndpointGroupV2EndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2Endpoints[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>[]

---


### GroundstationDataflowEndpointGroupV2EndpointsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putDownlinkAwsGroundStationAgentEndpoint">putDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putUplinkAwsGroundStationAgentEndpoint">putUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resetDownlinkAwsGroundStationAgentEndpoint">resetDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resetUplinkAwsGroundStationAgentEndpoint">resetUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDownlinkAwsGroundStationAgentEndpoint` <a name="putDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putDownlinkAwsGroundStationAgentEndpoint"></a>

```typescript
public putDownlinkAwsGroundStationAgentEndpoint(value: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putDownlinkAwsGroundStationAgentEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a>

---

##### `putUplinkAwsGroundStationAgentEndpoint` <a name="putUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putUplinkAwsGroundStationAgentEndpoint"></a>

```typescript
public putUplinkAwsGroundStationAgentEndpoint(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.putUplinkAwsGroundStationAgentEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a>

---

##### `resetDownlinkAwsGroundStationAgentEndpoint` <a name="resetDownlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resetDownlinkAwsGroundStationAgentEndpoint"></a>

```typescript
public resetDownlinkAwsGroundStationAgentEndpoint(): void
```

##### `resetUplinkAwsGroundStationAgentEndpoint` <a name="resetUplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.resetUplinkAwsGroundStationAgentEndpoint"></a>

```typescript
public resetUplinkAwsGroundStationAgentEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpoint">downlinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpoint">uplinkAwsGroundStationAgentEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpointInput">downlinkAwsGroundStationAgentEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpointInput">uplinkAwsGroundStationAgentEndpointInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downlinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="downlinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpoint"></a>

```typescript
public readonly downlinkAwsGroundStationAgentEndpoint: GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `uplinkAwsGroundStationAgentEndpoint`<sup>Required</sup> <a name="uplinkAwsGroundStationAgentEndpoint" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpoint"></a>

```typescript
public readonly uplinkAwsGroundStationAgentEndpoint: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference</a>

---

##### `downlinkAwsGroundStationAgentEndpointInput`<sup>Optional</sup> <a name="downlinkAwsGroundStationAgentEndpointInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.downlinkAwsGroundStationAgentEndpointInput"></a>

```typescript
public readonly downlinkAwsGroundStationAgentEndpointInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsDownlinkAwsGroundStationAgentEndpoint</a>

---

##### `uplinkAwsGroundStationAgentEndpointInput`<sup>Optional</sup> <a name="uplinkAwsGroundStationAgentEndpointInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.uplinkAwsGroundStationAgentEndpointInput"></a>

```typescript
public readonly uplinkAwsGroundStationAgentEndpointInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2Endpoints;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Endpoints">GroundstationDataflowEndpointGroupV2Endpoints</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress">putSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetSocketAddress">resetSocketAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSocketAddress` <a name="putSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress"></a>

```typescript
public putSocketAddress(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetSocketAddress` <a name="resetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.resetSocketAddress"></a>

```typescript
public resetSocketAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddressInput">socketAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `socketAddress`<sup>Required</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference</a>

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `socketAddressInput`<sup>Optional</sup> <a name="socketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.socketAddressInput"></a>

```typescript
public readonly socketAddressInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange">putPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetPortRange">resetPortRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPortRange` <a name="putPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange"></a>

```typescript
public putPortRange(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.putPortRange.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPortRange` <a name="resetPortRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.resetPortRange"></a>

```typescript
public resetPortRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange">portRange</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRangeInput">portRangeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portRange`<sup>Required</sup> <a name="portRange" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRange"></a>

```typescript
public readonly portRange: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portRangeInput`<sup>Optional</sup> <a name="portRangeInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.portRangeInput"></a>

```typescript
public readonly portRangeInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMaximum">resetMaximum</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMinimum">resetMinimum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaximum` <a name="resetMaximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMaximum"></a>

```typescript
public resetMaximum(): void
```

##### `resetMinimum` <a name="resetMinimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.resetMinimum"></a>

```typescript
public resetMinimum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximumInput">maximumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimumInput">minimumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum">maximum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum">minimum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maximumInput`<sup>Optional</sup> <a name="maximumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximumInput"></a>

```typescript
public readonly maximumInput: number;
```

- *Type:* number

---

##### `minimumInput`<sup>Optional</sup> <a name="minimumInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimumInput"></a>

```typescript
public readonly minimumInput: number;
```

- *Type:* number

---

##### `maximum`<sup>Required</sup> <a name="maximum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.maximum"></a>

```typescript
public readonly maximum: number;
```

- *Type:* number

---

##### `minimum`<sup>Required</sup> <a name="minimum" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.minimum"></a>

```typescript
public readonly minimum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRangeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressSocketAddressPortRange</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.putSocketAddress">putSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resetSocketAddress">resetSocketAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSocketAddress` <a name="putSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.putSocketAddress"></a>

```typescript
public putSocketAddress(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.putSocketAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

---

##### `resetMtu` <a name="resetMtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetSocketAddress` <a name="resetSocketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.resetSocketAddress"></a>

```typescript
public resetSocketAddress(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress">socketAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddressInput">socketAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `socketAddress`<sup>Required</sup> <a name="socketAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddress"></a>

```typescript
public readonly socketAddress: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference</a>

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `socketAddressInput`<sup>Optional</sup> <a name="socketAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.socketAddressInput"></a>

```typescript
public readonly socketAddressInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resetPort">resetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortSocketAddress</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress">putAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putIngressAddressAndPort">putIngressAddressAndPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetAgentIpAndPortAddress">resetAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetIngressAddressAndPort">resetIngressAddressAndPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentIpAndPortAddress` <a name="putAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress"></a>

```typescript
public putAgentIpAndPortAddress(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putAgentIpAndPortAddress.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---

##### `putIngressAddressAndPort` <a name="putIngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putIngressAddressAndPort"></a>

```typescript
public putIngressAddressAndPort(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.putIngressAddressAndPort.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

---

##### `resetAgentIpAndPortAddress` <a name="resetAgentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetAgentIpAndPortAddress"></a>

```typescript
public resetAgentIpAndPortAddress(): void
```

##### `resetIngressAddressAndPort` <a name="resetIngressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.resetIngressAddressAndPort"></a>

```typescript
public resetIngressAddressAndPort(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress">agentIpAndPortAddress</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort">ingressAddressAndPort</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddressInput">agentIpAndPortAddressInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPortInput">ingressAddressAndPortInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentIpAndPortAddress`<sup>Required</sup> <a name="agentIpAndPortAddress" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddress"></a>

```typescript
public readonly agentIpAndPortAddress: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddressOutputReference</a>

---

##### `ingressAddressAndPort`<sup>Required</sup> <a name="ingressAddressAndPort" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPort"></a>

```typescript
public readonly ingressAddressAndPort: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPortOutputReference</a>

---

##### `agentIpAndPortAddressInput`<sup>Optional</sup> <a name="agentIpAndPortAddressInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.agentIpAndPortAddressInput"></a>

```typescript
public readonly agentIpAndPortAddressInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsAgentIpAndPortAddress</a>

---

##### `ingressAddressAndPortInput`<sup>Optional</sup> <a name="ingressAddressAndPortInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.ingressAddressAndPortInput"></a>

```typescript
public readonly ingressAddressAndPortInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsIngressAddressAndPort</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails">putAgentConnectionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resetAgentConnectionDetails">resetAgentConnectionDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAgentConnectionDetails` <a name="putAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails"></a>

```typescript
public putAgentConnectionDetails(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.putAgentConnectionDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---

##### `resetAgentConnectionDetails` <a name="resetAgentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.resetAgentConnectionDetails"></a>

```typescript
public resetAgentConnectionDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails">agentConnectionDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetailsInput">agentConnectionDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentConnectionDetails`<sup>Required</sup> <a name="agentConnectionDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetails"></a>

```typescript
public readonly agentConnectionDetails: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetailsOutputReference</a>

---

##### `agentConnectionDetailsInput`<sup>Optional</sup> <a name="agentConnectionDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.agentConnectionDetailsInput"></a>

```typescript
public readonly agentConnectionDetailsInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsAgentConnectionDetails</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

---


### GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference <a name="GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails">putDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resetDataflowDetails">resetDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataflowDetails` <a name="putDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails"></a>

```typescript
public putDataflowDetails(value: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.putDataflowDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

---

##### `resetDataflowDetails` <a name="resetDataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resetDataflowDetails"></a>

```typescript
public resetDataflowDetails(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails">dataflowDetails</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetailsInput">dataflowDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataflowDetails`<sup>Required</sup> <a name="dataflowDetails" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetails"></a>

```typescript
public readonly dataflowDetails: GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetailsOutputReference</a>

---

##### `dataflowDetailsInput`<sup>Optional</sup> <a name="dataflowDetailsInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.dataflowDetailsInput"></a>

```typescript
public readonly dataflowDetailsInput: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointDataflowDetails</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint">GroundstationDataflowEndpointGroupV2EndpointsUplinkAwsGroundStationAgentEndpoint</a>

---


### GroundstationDataflowEndpointGroupV2TagsList <a name="GroundstationDataflowEndpointGroupV2TagsList" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.get"></a>

```typescript
public get(index: number): GroundstationDataflowEndpointGroupV2TagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2Tags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>[]

---


### GroundstationDataflowEndpointGroupV2TagsOutputReference <a name="GroundstationDataflowEndpointGroupV2TagsOutputReference" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer"></a>

```typescript
import { groundstationDataflowEndpointGroupV2 } from '@cdktn/provider-awscc'

new groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2TagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GroundstationDataflowEndpointGroupV2Tags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.groundstationDataflowEndpointGroupV2.GroundstationDataflowEndpointGroupV2Tags">GroundstationDataflowEndpointGroupV2Tags</a>

---



