# `mediaconnectFlow` Submodule <a name="`mediaconnectFlow` Submodule" id="@cdktn/provider-awscc.mediaconnectFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectFlow <a name="MediaconnectFlow" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow awscc_mediaconnect_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlow(scope: Construct, id: string, config: MediaconnectFlowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig">MediaconnectFlowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig">MediaconnectFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMaintenance">putMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMediaStreams">putMediaStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig">putSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig">putSourceMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putVpcInterfaces">putVpcInterfaces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMaintenance">resetMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMediaStreams">resetMediaStreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceFailoverConfig">resetSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceMonitoringConfig">resetSourceMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetVpcInterfaces">resetVpcInterfaces</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMaintenance` <a name="putMaintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMaintenance"></a>

```typescript
public putMaintenance(value: MediaconnectFlowMaintenance): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMaintenance.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

---

##### `putMediaStreams` <a name="putMediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMediaStreams"></a>

```typescript
public putMediaStreams(value: IResolvable | MediaconnectFlowMediaStreams[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putMediaStreams.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]

---

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource"></a>

```typescript
public putSource(value: MediaconnectFlowSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

---

##### `putSourceFailoverConfig` <a name="putSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig"></a>

```typescript
public putSourceFailoverConfig(value: MediaconnectFlowSourceFailoverConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

---

##### `putSourceMonitoringConfig` <a name="putSourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig"></a>

```typescript
public putSourceMonitoringConfig(value: MediaconnectFlowSourceMonitoringConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putSourceMonitoringConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

---

##### `putVpcInterfaces` <a name="putVpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putVpcInterfaces"></a>

```typescript
public putVpcInterfaces(value: IResolvable | MediaconnectFlowVpcInterfaces[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.putVpcInterfaces.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetMaintenance` <a name="resetMaintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMaintenance"></a>

```typescript
public resetMaintenance(): void
```

##### `resetMediaStreams` <a name="resetMediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetMediaStreams"></a>

```typescript
public resetMediaStreams(): void
```

##### `resetSourceFailoverConfig` <a name="resetSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceFailoverConfig"></a>

```typescript
public resetSourceFailoverConfig(): void
```

##### `resetSourceMonitoringConfig` <a name="resetSourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetSourceMonitoringConfig"></a>

```typescript
public resetSourceMonitoringConfig(): void
```

##### `resetVpcInterfaces` <a name="resetVpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.resetVpcInterfaces"></a>

```typescript
public resetVpcInterfaces(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectFlow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isConstruct"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

mediaconnectFlow.MediaconnectFlow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformElement"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

mediaconnectFlow.MediaconnectFlow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformResource"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

mediaconnectFlow.MediaconnectFlow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

mediaconnectFlow.MediaconnectFlow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MediaconnectFlow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconnectFlow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconnectFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.egressIp">egressIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowArn">flowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowAvailabilityZone">flowAvailabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenance">maintenance</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference">MediaconnectFlowMaintenanceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreams">mediaStreams</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList">MediaconnectFlowMediaStreamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference">MediaconnectFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfig">sourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference">MediaconnectFlowSourceFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfig">sourceMonitoringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference">MediaconnectFlowSourceMonitoringConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfaces">vpcInterfaces</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList">MediaconnectFlowVpcInterfacesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenanceInput">maintenanceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreamsInput">mediaStreamsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfigInput">sourceFailoverConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceInput">sourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfigInput">sourceMonitoringConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfacesInput">vpcInterfacesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `egressIp`<sup>Required</sup> <a name="egressIp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.egressIp"></a>

```typescript
public readonly egressIp: string;
```

- *Type:* string

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

---

##### `flowAvailabilityZone`<sup>Required</sup> <a name="flowAvailabilityZone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.flowAvailabilityZone"></a>

```typescript
public readonly flowAvailabilityZone: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenance"></a>

```typescript
public readonly maintenance: MediaconnectFlowMaintenanceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference">MediaconnectFlowMaintenanceOutputReference</a>

---

##### `mediaStreams`<sup>Required</sup> <a name="mediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreams"></a>

```typescript
public readonly mediaStreams: MediaconnectFlowMediaStreamsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList">MediaconnectFlowMediaStreamsList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.source"></a>

```typescript
public readonly source: MediaconnectFlowSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference">MediaconnectFlowSourceOutputReference</a>

---

##### `sourceFailoverConfig`<sup>Required</sup> <a name="sourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfig"></a>

```typescript
public readonly sourceFailoverConfig: MediaconnectFlowSourceFailoverConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference">MediaconnectFlowSourceFailoverConfigOutputReference</a>

---

##### `sourceMonitoringConfig`<sup>Required</sup> <a name="sourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfig"></a>

```typescript
public readonly sourceMonitoringConfig: MediaconnectFlowSourceMonitoringConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference">MediaconnectFlowSourceMonitoringConfigOutputReference</a>

---

##### `vpcInterfaces`<sup>Required</sup> <a name="vpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfaces"></a>

```typescript
public readonly vpcInterfaces: MediaconnectFlowVpcInterfacesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList">MediaconnectFlowVpcInterfacesList</a>

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `maintenanceInput`<sup>Optional</sup> <a name="maintenanceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.maintenanceInput"></a>

```typescript
public readonly maintenanceInput: IResolvable | MediaconnectFlowMaintenance;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

---

##### `mediaStreamsInput`<sup>Optional</sup> <a name="mediaStreamsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.mediaStreamsInput"></a>

```typescript
public readonly mediaStreamsInput: IResolvable | MediaconnectFlowMediaStreams[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceFailoverConfigInput`<sup>Optional</sup> <a name="sourceFailoverConfigInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceFailoverConfigInput"></a>

```typescript
public readonly sourceFailoverConfigInput: IResolvable | MediaconnectFlowSourceFailoverConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceInput"></a>

```typescript
public readonly sourceInput: IResolvable | MediaconnectFlowSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

---

##### `sourceMonitoringConfigInput`<sup>Optional</sup> <a name="sourceMonitoringConfigInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.sourceMonitoringConfigInput"></a>

```typescript
public readonly sourceMonitoringConfigInput: IResolvable | MediaconnectFlowSourceMonitoringConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

---

##### `vpcInterfacesInput`<sup>Optional</sup> <a name="vpcInterfacesInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.vpcInterfacesInput"></a>

```typescript
public readonly vpcInterfacesInput: IResolvable | MediaconnectFlowVpcInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectFlowConfig <a name="MediaconnectFlowConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowConfig: mediaconnectFlow.MediaconnectFlowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.name">name</a></code> | <code>string</code> | The name of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a></code> | The source of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The Availability Zone that you want to create the flow in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.maintenance">maintenance</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a></code> | The maintenance settings you want to use for the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.mediaStreams">mediaStreams</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]</code> | The media streams associated with the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceFailoverConfig">sourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a></code> | The source failover config of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceMonitoringConfig">sourceMonitoringConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a></code> | The source monitoring config of the flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.vpcInterfaces">vpcInterfaces</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]</code> | The VPC interfaces that you added to this flow. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.source"></a>

```typescript
public readonly source: MediaconnectFlowSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

The source of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#source MediaconnectFlow#source}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The Availability Zone that you want to create the flow in.

These options are limited to the Availability Zones within the current AWS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#availability_zone MediaconnectFlow#availability_zone}

---

##### `maintenance`<sup>Optional</sup> <a name="maintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.maintenance"></a>

```typescript
public readonly maintenance: MediaconnectFlowMaintenance;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

The maintenance settings you want to use for the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#maintenance MediaconnectFlow#maintenance}

---

##### `mediaStreams`<sup>Optional</sup> <a name="mediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.mediaStreams"></a>

```typescript
public readonly mediaStreams: IResolvable | MediaconnectFlowMediaStreams[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]

The media streams associated with the flow.

You can associate any of these media streams with sources and outputs on the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#media_streams MediaconnectFlow#media_streams}

---

##### `sourceFailoverConfig`<sup>Optional</sup> <a name="sourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceFailoverConfig"></a>

```typescript
public readonly sourceFailoverConfig: MediaconnectFlowSourceFailoverConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

The source failover config of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#source_failover_config MediaconnectFlow#source_failover_config}

---

##### `sourceMonitoringConfig`<sup>Optional</sup> <a name="sourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.sourceMonitoringConfig"></a>

```typescript
public readonly sourceMonitoringConfig: MediaconnectFlowSourceMonitoringConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

The source monitoring config of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#source_monitoring_config MediaconnectFlow#source_monitoring_config}

---

##### `vpcInterfaces`<sup>Optional</sup> <a name="vpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowConfig.property.vpcInterfaces"></a>

```typescript
public readonly vpcInterfaces: IResolvable | MediaconnectFlowVpcInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]

The VPC interfaces that you added to this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#vpc_interfaces MediaconnectFlow#vpc_interfaces}

---

### MediaconnectFlowMaintenance <a name="MediaconnectFlowMaintenance" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowMaintenance: mediaconnectFlow.MediaconnectFlowMaintenance = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceDay">maintenanceDay</a></code> | <code>string</code> | A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceStartHour">maintenanceStartHour</a></code> | <code>string</code> | UTC time when the maintenance will happen. |

---

##### `maintenanceDay`<sup>Optional</sup> <a name="maintenanceDay" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceDay"></a>

```typescript
public readonly maintenanceDay: string;
```

- *Type:* string

A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#maintenance_day MediaconnectFlow#maintenance_day}

---

##### `maintenanceStartHour`<sup>Optional</sup> <a name="maintenanceStartHour" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance.property.maintenanceStartHour"></a>

```typescript
public readonly maintenanceStartHour: string;
```

- *Type:* string

UTC time when the maintenance will happen.

Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#maintenance_start_hour MediaconnectFlow#maintenance_start_hour}

---

### MediaconnectFlowMediaStreams <a name="MediaconnectFlowMediaStreams" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowMediaStreams: mediaconnectFlow.MediaconnectFlowMediaStreams = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a></code> | Attributes that are related to the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.clockRate">clockRate</a></code> | <code>number</code> | The sample rate for the stream. This value in measured in kHz. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.description">description</a></code> | <code>string</code> | A description that can help you quickly identify what your media stream is used for. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.fmt">fmt</a></code> | <code>number</code> | The format type number (sometimes referred to as RTP payload type) of the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamId">mediaStreamId</a></code> | <code>number</code> | A unique identifier for the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamName">mediaStreamName</a></code> | <code>string</code> | A name that helps you distinguish one media stream from another. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamType">mediaStreamType</a></code> | <code>string</code> | The type of media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.videoFormat">videoFormat</a></code> | <code>string</code> | The resolution of the video. |

---

##### `attributes`<sup>Optional</sup> <a name="attributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.attributes"></a>

```typescript
public readonly attributes: MediaconnectFlowMediaStreamsAttributes;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a>

Attributes that are related to the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#attributes MediaconnectFlow#attributes}

---

##### `clockRate`<sup>Optional</sup> <a name="clockRate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.clockRate"></a>

```typescript
public readonly clockRate: number;
```

- *Type:* number

The sample rate for the stream. This value in measured in kHz.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#clock_rate MediaconnectFlow#clock_rate}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description that can help you quickly identify what your media stream is used for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#description MediaconnectFlow#description}

---

##### `fmt`<sup>Optional</sup> <a name="fmt" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.fmt"></a>

```typescript
public readonly fmt: number;
```

- *Type:* number

The format type number (sometimes referred to as RTP payload type) of the media stream.

MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#fmt MediaconnectFlow#fmt}

---

##### `mediaStreamId`<sup>Optional</sup> <a name="mediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamId"></a>

```typescript
public readonly mediaStreamId: number;
```

- *Type:* number

A unique identifier for the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#media_stream_id MediaconnectFlow#media_stream_id}

---

##### `mediaStreamName`<sup>Optional</sup> <a name="mediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamName"></a>

```typescript
public readonly mediaStreamName: string;
```

- *Type:* string

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#media_stream_name MediaconnectFlow#media_stream_name}

---

##### `mediaStreamType`<sup>Optional</sup> <a name="mediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.mediaStreamType"></a>

```typescript
public readonly mediaStreamType: string;
```

- *Type:* string

The type of media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#media_stream_type MediaconnectFlow#media_stream_type}

---

##### `videoFormat`<sup>Optional</sup> <a name="videoFormat" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams.property.videoFormat"></a>

```typescript
public readonly videoFormat: string;
```

- *Type:* string

The resolution of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#video_format MediaconnectFlow#video_format}

---

### MediaconnectFlowMediaStreamsAttributes <a name="MediaconnectFlowMediaStreamsAttributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowMediaStreamsAttributes: mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.fmtp">fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a></code> | A set of parameters that define the media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.lang">lang</a></code> | <code>string</code> | The audio language, in a format that is recognized by the receiver. |

---

##### `fmtp`<sup>Optional</sup> <a name="fmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.fmtp"></a>

```typescript
public readonly fmtp: MediaconnectFlowMediaStreamsAttributesFmtp;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

A set of parameters that define the media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#fmtp MediaconnectFlow#fmtp}

---

##### `lang`<sup>Optional</sup> <a name="lang" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes.property.lang"></a>

```typescript
public readonly lang: string;
```

- *Type:* string

The audio language, in a format that is recognized by the receiver.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#lang MediaconnectFlow#lang}

---

### MediaconnectFlowMediaStreamsAttributesFmtp <a name="MediaconnectFlowMediaStreamsAttributesFmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowMediaStreamsAttributesFmtp: mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.channelOrder">channelOrder</a></code> | <code>string</code> | The format of the audio channel. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.colorimetry">colorimetry</a></code> | <code>string</code> | The format used for the representation of color. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.exactFramerate">exactFramerate</a></code> | <code>string</code> | The frame rate for the video stream, in frames/second. For example: 60000/1001. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.par">par</a></code> | <code>string</code> | The pixel aspect ratio (PAR) of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.range">range</a></code> | <code>string</code> | The encoding range of the video. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.scanMode">scanMode</a></code> | <code>string</code> | The type of compression that was used to smooth the video's appearance. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.tcs">tcs</a></code> | <code>string</code> | The transfer characteristic system (TCS) that is used in the video. |

---

##### `channelOrder`<sup>Optional</sup> <a name="channelOrder" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.channelOrder"></a>

```typescript
public readonly channelOrder: string;
```

- *Type:* string

The format of the audio channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#channel_order MediaconnectFlow#channel_order}

---

##### `colorimetry`<sup>Optional</sup> <a name="colorimetry" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.colorimetry"></a>

```typescript
public readonly colorimetry: string;
```

- *Type:* string

The format used for the representation of color.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#colorimetry MediaconnectFlow#colorimetry}

---

##### `exactFramerate`<sup>Optional</sup> <a name="exactFramerate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.exactFramerate"></a>

```typescript
public readonly exactFramerate: string;
```

- *Type:* string

The frame rate for the video stream, in frames/second. For example: 60000/1001.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#exact_framerate MediaconnectFlow#exact_framerate}

---

##### `par`<sup>Optional</sup> <a name="par" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.par"></a>

```typescript
public readonly par: string;
```

- *Type:* string

The pixel aspect ratio (PAR) of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#par MediaconnectFlow#par}

---

##### `range`<sup>Optional</sup> <a name="range" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

The encoding range of the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#range MediaconnectFlow#range}

---

##### `scanMode`<sup>Optional</sup> <a name="scanMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.scanMode"></a>

```typescript
public readonly scanMode: string;
```

- *Type:* string

The type of compression that was used to smooth the video's appearance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#scan_mode MediaconnectFlow#scan_mode}

---

##### `tcs`<sup>Optional</sup> <a name="tcs" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp.property.tcs"></a>

```typescript
public readonly tcs: string;
```

- *Type:* string

The transfer characteristic system (TCS) that is used in the video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#tcs MediaconnectFlow#tcs}

---

### MediaconnectFlowSource <a name="MediaconnectFlowSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSource: mediaconnectFlow.MediaconnectFlowSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a></code> | The type of decryption that is used on the content ingested from this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.description">description</a></code> | <code>string</code> | A description for the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.entitlementArn">entitlementArn</a></code> | <code>string</code> | The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.gatewayBridgeSource">gatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a></code> | The source configuration for cloud flows receiving a stream from a bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.ingestPort">ingestPort</a></code> | <code>number</code> | The port that the flow will be listening on for incoming content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxBitrate">maxBitrate</a></code> | <code>number</code> | The smoothing max bitrate for RIST, RTP, and RTP-FEC streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxLatency">maxLatency</a></code> | <code>number</code> | The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxSyncBuffer">maxSyncBuffer</a></code> | <code>number</code> | The size of the buffer (in milliseconds) to use to sync incoming source data. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.mediaStreamSourceConfigurations">mediaStreamSourceConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]</code> | The media stream that is associated with the source, and the parameters for that association. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.minLatency">minLatency</a></code> | <code>number</code> | The minimum latency in milliseconds. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.name">name</a></code> | <code>string</code> | The name of the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.protocol">protocol</a></code> | <code>string</code> | The protocol that is used by the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderControlPort">senderControlPort</a></code> | <code>number</code> | The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderIpAddress">senderIpAddress</a></code> | <code>string</code> | The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerAddress">sourceListenerAddress</a></code> | <code>string</code> | Source IP or domain name for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerPort">sourceListenerPort</a></code> | <code>number</code> | Source port for SRT-caller protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.streamId">streamId</a></code> | <code>string</code> | The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | The name of the VPC Interface this Source is configured with. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.whitelistCidr">whitelistCidr</a></code> | <code>string</code> | The range of IP addresses that should be allowed to contribute content to your source. |

---

##### `decryption`<sup>Optional</sup> <a name="decryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.decryption"></a>

```typescript
public readonly decryption: MediaconnectFlowSourceDecryption;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

The type of decryption that is used on the content ingested from this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#decryption MediaconnectFlow#decryption}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

A description for the source.

This value is not used or seen outside of the current AWS Elemental MediaConnect account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#description MediaconnectFlow#description}

---

##### `entitlementArn`<sup>Optional</sup> <a name="entitlementArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.entitlementArn"></a>

```typescript
public readonly entitlementArn: string;
```

- *Type:* string

The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account.

The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#entitlement_arn MediaconnectFlow#entitlement_arn}

---

##### `gatewayBridgeSource`<sup>Optional</sup> <a name="gatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.gatewayBridgeSource"></a>

```typescript
public readonly gatewayBridgeSource: MediaconnectFlowSourceGatewayBridgeSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

The source configuration for cloud flows receiving a stream from a bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#gateway_bridge_source MediaconnectFlow#gateway_bridge_source}

---

##### `ingestPort`<sup>Optional</sup> <a name="ingestPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.ingestPort"></a>

```typescript
public readonly ingestPort: number;
```

- *Type:* number

The port that the flow will be listening on for incoming content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#ingest_port MediaconnectFlow#ingest_port}

---

##### `maxBitrate`<sup>Optional</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxBitrate"></a>

```typescript
public readonly maxBitrate: number;
```

- *Type:* number

The smoothing max bitrate for RIST, RTP, and RTP-FEC streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#max_bitrate MediaconnectFlow#max_bitrate}

---

##### `maxLatency`<sup>Optional</sup> <a name="maxLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxLatency"></a>

```typescript
public readonly maxLatency: number;
```

- *Type:* number

The maximum latency in milliseconds. This parameter applies only to RIST-based and Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#max_latency MediaconnectFlow#max_latency}

---

##### `maxSyncBuffer`<sup>Optional</sup> <a name="maxSyncBuffer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.maxSyncBuffer"></a>

```typescript
public readonly maxSyncBuffer: number;
```

- *Type:* number

The size of the buffer (in milliseconds) to use to sync incoming source data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#max_sync_buffer MediaconnectFlow#max_sync_buffer}

---

##### `mediaStreamSourceConfigurations`<sup>Optional</sup> <a name="mediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.mediaStreamSourceConfigurations"></a>

```typescript
public readonly mediaStreamSourceConfigurations: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]

The media stream that is associated with the source, and the parameters for that association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#media_stream_source_configurations MediaconnectFlow#media_stream_source_configurations}

---

##### `minLatency`<sup>Optional</sup> <a name="minLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.minLatency"></a>

```typescript
public readonly minLatency: number;
```

- *Type:* number

The minimum latency in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#min_latency MediaconnectFlow#min_latency}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol that is used by the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#protocol MediaconnectFlow#protocol}

---

##### `senderControlPort`<sup>Optional</sup> <a name="senderControlPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderControlPort"></a>

```typescript
public readonly senderControlPort: number;
```

- *Type:* number

The port that the flow uses to send outbound requests to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#sender_control_port MediaconnectFlow#sender_control_port}

---

##### `senderIpAddress`<sup>Optional</sup> <a name="senderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.senderIpAddress"></a>

```typescript
public readonly senderIpAddress: string;
```

- *Type:* string

The IP address that the flow communicates with to initiate connection with the sender for fujitsu-qos protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#sender_ip_address MediaconnectFlow#sender_ip_address}

---

##### `sourceListenerAddress`<sup>Optional</sup> <a name="sourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerAddress"></a>

```typescript
public readonly sourceListenerAddress: string;
```

- *Type:* string

Source IP or domain name for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#source_listener_address MediaconnectFlow#source_listener_address}

---

##### `sourceListenerPort`<sup>Optional</sup> <a name="sourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.sourceListenerPort"></a>

```typescript
public readonly sourceListenerPort: number;
```

- *Type:* number

Source port for SRT-caller protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#source_listener_port MediaconnectFlow#source_listener_port}

---

##### `streamId`<sup>Optional</sup> <a name="streamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

The stream ID that you want to use for this transport. This parameter applies only to Zixi-based streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#stream_id MediaconnectFlow#stream_id}

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

The name of the VPC Interface this Source is configured with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#vpc_interface_name MediaconnectFlow#vpc_interface_name}

---

##### `whitelistCidr`<sup>Optional</sup> <a name="whitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource.property.whitelistCidr"></a>

```typescript
public readonly whitelistCidr: string;
```

- *Type:* string

The range of IP addresses that should be allowed to contribute content to your source.

These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#whitelist_cidr MediaconnectFlow#whitelist_cidr}

---

### MediaconnectFlowSourceDecryption <a name="MediaconnectFlowSourceDecryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceDecryption: mediaconnectFlow.MediaconnectFlowSourceDecryption = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.algorithm">algorithm</a></code> | <code>string</code> | The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.constantInitializationVector">constantInitializationVector</a></code> | <code>string</code> | A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.deviceId">deviceId</a></code> | <code>string</code> | The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.keyType">keyType</a></code> | <code>string</code> | The type of key that is used for the encryption. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.region">region</a></code> | <code>string</code> | The AWS Region that the API Gateway proxy endpoint was created in. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.resourceId">resourceId</a></code> | <code>string</code> | An identifier for the content. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.roleArn">roleArn</a></code> | <code>string</code> | The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity). |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.secretArn">secretArn</a></code> | <code>string</code> | The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.url">url</a></code> | <code>string</code> | The URL from the API Gateway proxy that you set up to talk to your key server. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

The type of algorithm that is used for the encryption (such as aes128, aes192, or aes256).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#algorithm MediaconnectFlow#algorithm}

---

##### `constantInitializationVector`<sup>Optional</sup> <a name="constantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.constantInitializationVector"></a>

```typescript
public readonly constantInitializationVector: string;
```

- *Type:* string

A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content.

This parameter is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#constant_initialization_vector MediaconnectFlow#constant_initialization_vector}

---

##### `deviceId`<sup>Optional</sup> <a name="deviceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

The value of one of the devices that you configured with your digital rights management (DRM) platform key provider.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#device_id MediaconnectFlow#device_id}

---

##### `keyType`<sup>Optional</sup> <a name="keyType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

The type of key that is used for the encryption.

If no keyType is provided, the service will use the default setting (static-key).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#key_type MediaconnectFlow#key_type}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The AWS Region that the API Gateway proxy endpoint was created in.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#region MediaconnectFlow#region}

---

##### `resourceId`<sup>Optional</sup> <a name="resourceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

An identifier for the content.

The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#resource_id MediaconnectFlow#resource_id}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

The ARN of the role that you created during setup (when you set up AWS Elemental MediaConnect as a trusted entity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#role_arn MediaconnectFlow#role_arn}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

The ARN of the secret that you created in AWS Secrets Manager to store the encryption key.

This parameter is required for static key encryption and is not valid for SPEKE encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#secret_arn MediaconnectFlow#secret_arn}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL from the API Gateway proxy that you set up to talk to your key server.

This parameter is required for SPEKE encryption and is not valid for static key encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#url MediaconnectFlow#url}

---

### MediaconnectFlowSourceFailoverConfig <a name="MediaconnectFlowSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceFailoverConfig: mediaconnectFlow.MediaconnectFlowSourceFailoverConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.failoverMode">failoverMode</a></code> | <code>string</code> | The type of failover you choose for this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.recoveryWindow">recoveryWindow</a></code> | <code>number</code> | Search window time to look for dash-7 packets. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.sourcePriority">sourcePriority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a></code> | The priority you want to assign to a source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}. |

---

##### `failoverMode`<sup>Optional</sup> <a name="failoverMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.failoverMode"></a>

```typescript
public readonly failoverMode: string;
```

- *Type:* string

The type of failover you choose for this flow.

MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#failover_mode MediaconnectFlow#failover_mode}

---

##### `recoveryWindow`<sup>Optional</sup> <a name="recoveryWindow" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.recoveryWindow"></a>

```typescript
public readonly recoveryWindow: number;
```

- *Type:* number

Search window time to look for dash-7 packets.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#recovery_window MediaconnectFlow#recovery_window}

---

##### `sourcePriority`<sup>Optional</sup> <a name="sourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.sourcePriority"></a>

```typescript
public readonly sourcePriority: MediaconnectFlowSourceFailoverConfigSourcePriority;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

The priority you want to assign to a source.

You can have a primary stream and a backup stream or two equally prioritized streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#source_priority MediaconnectFlow#source_priority}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}.

---

### MediaconnectFlowSourceFailoverConfigSourcePriority <a name="MediaconnectFlowSourceFailoverConfigSourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceFailoverConfigSourcePriority: mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority.property.primarySource">primarySource</a></code> | <code>string</code> | The name of the source you choose as the primary source for this flow. |

---

##### `primarySource`<sup>Optional</sup> <a name="primarySource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority.property.primarySource"></a>

```typescript
public readonly primarySource: string;
```

- *Type:* string

The name of the source you choose as the primary source for this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#primary_source MediaconnectFlow#primary_source}

---

### MediaconnectFlowSourceGatewayBridgeSource <a name="MediaconnectFlowSourceGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceGatewayBridgeSource: mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.bridgeArn">bridgeArn</a></code> | <code>string</code> | The ARN of the bridge feeding this flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.vpcInterfaceAttachment">vpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this bridge source. |

---

##### `bridgeArn`<sup>Optional</sup> <a name="bridgeArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.bridgeArn"></a>

```typescript
public readonly bridgeArn: string;
```

- *Type:* string

The ARN of the bridge feeding this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#bridge_arn MediaconnectFlow#bridge_arn}

---

##### `vpcInterfaceAttachment`<sup>Optional</sup> <a name="vpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource.property.vpcInterfaceAttachment"></a>

```typescript
public readonly vpcInterfaceAttachment: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this bridge source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#vpc_interface_attachment MediaconnectFlow#vpc_interface_attachment}

---

### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment: mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | The name of the VPC interface to use for this resource. |

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#vpc_interface_name MediaconnectFlow#vpc_interface_name}

---

### MediaconnectFlowSourceMediaStreamSourceConfigurations <a name="MediaconnectFlowSourceMediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceMediaStreamSourceConfigurations: mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.encodingName">encodingName</a></code> | <code>string</code> | The format that was used to encode the data. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.inputConfigurations">inputConfigurations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]</code> | The media streams that you want to associate with the source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.mediaStreamName">mediaStreamName</a></code> | <code>string</code> | A name that helps you distinguish one media stream from another. |

---

##### `encodingName`<sup>Optional</sup> <a name="encodingName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.encodingName"></a>

```typescript
public readonly encodingName: string;
```

- *Type:* string

The format that was used to encode the data.

For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#encoding_name MediaconnectFlow#encoding_name}

---

##### `inputConfigurations`<sup>Optional</sup> <a name="inputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.inputConfigurations"></a>

```typescript
public readonly inputConfigurations: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]

The media streams that you want to associate with the source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#input_configurations MediaconnectFlow#input_configurations}

---

##### `mediaStreamName`<sup>Optional</sup> <a name="mediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations.property.mediaStreamName"></a>

```typescript
public readonly mediaStreamName: string;
```

- *Type:* string

A name that helps you distinguish one media stream from another.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#media_stream_name MediaconnectFlow#media_stream_name}

---

### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations: mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.inputPort">inputPort</a></code> | <code>number</code> | The port that the flow listens on for an incoming media stream. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.interface">interface</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a></code> | The VPC interface where the media stream comes in from. |

---

##### `inputPort`<sup>Optional</sup> <a name="inputPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.inputPort"></a>

```typescript
public readonly inputPort: number;
```

- *Type:* number

The port that the flow listens on for an incoming media stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#input_port MediaconnectFlow#input_port}

---

##### `interface`<sup>Optional</sup> <a name="interface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations.property.interface"></a>

```typescript
public readonly interface: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

The VPC interface where the media stream comes in from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#interface MediaconnectFlow#interface}

---

### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface: mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface.property.name">name</a></code> | <code>string</code> | The name of the VPC interface that you want to use for the media stream associated with the output. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the VPC interface that you want to use for the media stream associated with the output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

### MediaconnectFlowSourceMonitoringConfig <a name="MediaconnectFlowSourceMonitoringConfig" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceMonitoringConfig: mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.audioMonitoringSettings">audioMonitoringSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]</code> | Contains the settings for audio stream metrics monitoring. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.contentQualityAnalysisState">contentQualityAnalysisState</a></code> | <code>string</code> | Indicates whether content quality analysis is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.thumbnailState">thumbnailState</a></code> | <code>string</code> | The state of thumbnail monitoring. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.videoMonitoringSettings">videoMonitoringSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]</code> | Contains the settings for video stream metrics monitoring. |

---

##### `audioMonitoringSettings`<sup>Optional</sup> <a name="audioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.audioMonitoringSettings"></a>

```typescript
public readonly audioMonitoringSettings: IResolvable | MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]

Contains the settings for audio stream metrics monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#audio_monitoring_settings MediaconnectFlow#audio_monitoring_settings}

---

##### `contentQualityAnalysisState`<sup>Optional</sup> <a name="contentQualityAnalysisState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.contentQualityAnalysisState"></a>

```typescript
public readonly contentQualityAnalysisState: string;
```

- *Type:* string

Indicates whether content quality analysis is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#content_quality_analysis_state MediaconnectFlow#content_quality_analysis_state}

---

##### `thumbnailState`<sup>Optional</sup> <a name="thumbnailState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.thumbnailState"></a>

```typescript
public readonly thumbnailState: string;
```

- *Type:* string

The state of thumbnail monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#thumbnail_state MediaconnectFlow#thumbnail_state}

---

##### `videoMonitoringSettings`<sup>Optional</sup> <a name="videoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig.property.videoMonitoringSettings"></a>

```typescript
public readonly videoMonitoringSettings: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]

Contains the settings for video stream metrics monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#video_monitoring_settings MediaconnectFlow#video_monitoring_settings}

---

### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings: mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings.property.silentAudio">silentAudio</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a></code> | Configures settings for the SilentAudio metric. |

---

##### `silentAudio`<sup>Optional</sup> <a name="silentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings.property.silentAudio"></a>

```typescript
public readonly silentAudio: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

Configures settings for the SilentAudio metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#silent_audio MediaconnectFlow#silent_audio}

---

### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio: mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.state">state</a></code> | <code>string</code> | Indicates whether the SilentAudio metric is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.thresholdSeconds">thresholdSeconds</a></code> | <code>number</code> | Specifies the number of consecutive seconds of silence that triggers an event or alert. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Indicates whether the SilentAudio metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

##### `thresholdSeconds`<sup>Optional</sup> <a name="thresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio.property.thresholdSeconds"></a>

```typescript
public readonly thresholdSeconds: number;
```

- *Type:* number

Specifies the number of consecutive seconds of silence that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings: mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.blackFrames">blackFrames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a></code> | Configures settings for the BlackFrames metric. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.frozenFrames">frozenFrames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a></code> | Configures settings for the FrozenFrames metric. |

---

##### `blackFrames`<sup>Optional</sup> <a name="blackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.blackFrames"></a>

```typescript
public readonly blackFrames: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

Configures settings for the BlackFrames metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#black_frames MediaconnectFlow#black_frames}

---

##### `frozenFrames`<sup>Optional</sup> <a name="frozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings.property.frozenFrames"></a>

```typescript
public readonly frozenFrames: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

Configures settings for the FrozenFrames metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#frozen_frames MediaconnectFlow#frozen_frames}

---

### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames: mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.state">state</a></code> | <code>string</code> | Indicates whether the BlackFrames metric is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.thresholdSeconds">thresholdSeconds</a></code> | <code>number</code> | Specifies the number of consecutive seconds of black frames that triggers an event or alert. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Indicates whether the BlackFrames metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

##### `thresholdSeconds`<sup>Optional</sup> <a name="thresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames.property.thresholdSeconds"></a>

```typescript
public readonly thresholdSeconds: number;
```

- *Type:* number

Specifies the number of consecutive seconds of black frames that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames: mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.state">state</a></code> | <code>string</code> | Indicates whether the FrozenFrames metric is enabled or disabled. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.thresholdSeconds">thresholdSeconds</a></code> | <code>number</code> | Specifies the number of consecutive seconds of a static image that triggers an event or alert. |

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Indicates whether the FrozenFrames metric is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#state MediaconnectFlow#state}

---

##### `thresholdSeconds`<sup>Optional</sup> <a name="thresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames.property.thresholdSeconds"></a>

```typescript
public readonly thresholdSeconds: number;
```

- *Type:* number

Specifies the number of consecutive seconds of a static image that triggers an event or alert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#threshold_seconds MediaconnectFlow#threshold_seconds}

---

### MediaconnectFlowVpcInterfaces <a name="MediaconnectFlowVpcInterfaces" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

const mediaconnectFlowVpcInterfaces: mediaconnectFlow.MediaconnectFlowVpcInterfaces = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.name">name</a></code> | <code>string</code> | Immutable and has to be a unique against other VpcInterfaces in this Flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | IDs of the network interfaces created in customer's account by MediaConnect. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceType">networkInterfaceType</a></code> | <code>string</code> | The type of network adapter that you want MediaConnect to use on this interface. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.roleArn">roleArn</a></code> | <code>string</code> | Role Arn MediaConnect can assume to create ENIs in customer's account. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Security Group IDs to be used on ENI. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.subnetId">subnetId</a></code> | <code>string</code> | Subnet must be in the AZ of the Flow. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Immutable and has to be a unique against other VpcInterfaces in this Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#name MediaconnectFlow#name}

---

##### `networkInterfaceIds`<sup>Optional</sup> <a name="networkInterfaceIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

IDs of the network interfaces created in customer's account by MediaConnect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#network_interface_ids MediaconnectFlow#network_interface_ids}

---

##### `networkInterfaceType`<sup>Optional</sup> <a name="networkInterfaceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.networkInterfaceType"></a>

```typescript
public readonly networkInterfaceType: string;
```

- *Type:* string

The type of network adapter that you want MediaConnect to use on this interface.

If you don't set this value, it defaults to ENA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#network_interface_type MediaconnectFlow#network_interface_type}

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Role Arn MediaConnect can assume to create ENIs in customer's account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#role_arn MediaconnectFlow#role_arn}

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Security Group IDs to be used on ENI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#security_group_ids MediaconnectFlow#security_group_ids}

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Subnet must be in the AZ of the Flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconnect_flow#subnet_id MediaconnectFlow#subnet_id}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectFlowMaintenanceOutputReference <a name="MediaconnectFlowMaintenanceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceDay">resetMaintenanceDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceStartHour">resetMaintenanceStartHour</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaintenanceDay` <a name="resetMaintenanceDay" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceDay"></a>

```typescript
public resetMaintenanceDay(): void
```

##### `resetMaintenanceStartHour` <a name="resetMaintenanceStartHour" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.resetMaintenanceStartHour"></a>

```typescript
public resetMaintenanceStartHour(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDayInput">maintenanceDayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHourInput">maintenanceStartHourInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDay">maintenanceDay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHour">maintenanceStartHour</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maintenanceDayInput`<sup>Optional</sup> <a name="maintenanceDayInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDayInput"></a>

```typescript
public readonly maintenanceDayInput: string;
```

- *Type:* string

---

##### `maintenanceStartHourInput`<sup>Optional</sup> <a name="maintenanceStartHourInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHourInput"></a>

```typescript
public readonly maintenanceStartHourInput: string;
```

- *Type:* string

---

##### `maintenanceDay`<sup>Required</sup> <a name="maintenanceDay" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceDay"></a>

```typescript
public readonly maintenanceDay: string;
```

- *Type:* string

---

##### `maintenanceStartHour`<sup>Required</sup> <a name="maintenanceStartHour" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.maintenanceStartHour"></a>

```typescript
public readonly maintenanceStartHour: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowMaintenance;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMaintenance">MediaconnectFlowMaintenance</a>

---


### MediaconnectFlowMediaStreamsAttributesFmtpOutputReference <a name="MediaconnectFlowMediaStreamsAttributesFmtpOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetChannelOrder">resetChannelOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetColorimetry">resetColorimetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetExactFramerate">resetExactFramerate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetPar">resetPar</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetRange">resetRange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetScanMode">resetScanMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetTcs">resetTcs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChannelOrder` <a name="resetChannelOrder" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetChannelOrder"></a>

```typescript
public resetChannelOrder(): void
```

##### `resetColorimetry` <a name="resetColorimetry" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetColorimetry"></a>

```typescript
public resetColorimetry(): void
```

##### `resetExactFramerate` <a name="resetExactFramerate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetExactFramerate"></a>

```typescript
public resetExactFramerate(): void
```

##### `resetPar` <a name="resetPar" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetPar"></a>

```typescript
public resetPar(): void
```

##### `resetRange` <a name="resetRange" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetRange"></a>

```typescript
public resetRange(): void
```

##### `resetScanMode` <a name="resetScanMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetScanMode"></a>

```typescript
public resetScanMode(): void
```

##### `resetTcs` <a name="resetTcs" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.resetTcs"></a>

```typescript
public resetTcs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrderInput">channelOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetryInput">colorimetryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerateInput">exactFramerateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.parInput">parInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.rangeInput">rangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanModeInput">scanModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcsInput">tcsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrder">channelOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetry">colorimetry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerate">exactFramerate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.par">par</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.range">range</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanMode">scanMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcs">tcs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `channelOrderInput`<sup>Optional</sup> <a name="channelOrderInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrderInput"></a>

```typescript
public readonly channelOrderInput: string;
```

- *Type:* string

---

##### `colorimetryInput`<sup>Optional</sup> <a name="colorimetryInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetryInput"></a>

```typescript
public readonly colorimetryInput: string;
```

- *Type:* string

---

##### `exactFramerateInput`<sup>Optional</sup> <a name="exactFramerateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerateInput"></a>

```typescript
public readonly exactFramerateInput: string;
```

- *Type:* string

---

##### `parInput`<sup>Optional</sup> <a name="parInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.parInput"></a>

```typescript
public readonly parInput: string;
```

- *Type:* string

---

##### `rangeInput`<sup>Optional</sup> <a name="rangeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.rangeInput"></a>

```typescript
public readonly rangeInput: string;
```

- *Type:* string

---

##### `scanModeInput`<sup>Optional</sup> <a name="scanModeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanModeInput"></a>

```typescript
public readonly scanModeInput: string;
```

- *Type:* string

---

##### `tcsInput`<sup>Optional</sup> <a name="tcsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcsInput"></a>

```typescript
public readonly tcsInput: string;
```

- *Type:* string

---

##### `channelOrder`<sup>Required</sup> <a name="channelOrder" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.channelOrder"></a>

```typescript
public readonly channelOrder: string;
```

- *Type:* string

---

##### `colorimetry`<sup>Required</sup> <a name="colorimetry" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.colorimetry"></a>

```typescript
public readonly colorimetry: string;
```

- *Type:* string

---

##### `exactFramerate`<sup>Required</sup> <a name="exactFramerate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.exactFramerate"></a>

```typescript
public readonly exactFramerate: string;
```

- *Type:* string

---

##### `par`<sup>Required</sup> <a name="par" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.par"></a>

```typescript
public readonly par: string;
```

- *Type:* string

---

##### `range`<sup>Required</sup> <a name="range" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.range"></a>

```typescript
public readonly range: string;
```

- *Type:* string

---

##### `scanMode`<sup>Required</sup> <a name="scanMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.scanMode"></a>

```typescript
public readonly scanMode: string;
```

- *Type:* string

---

##### `tcs`<sup>Required</sup> <a name="tcs" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.tcs"></a>

```typescript
public readonly tcs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowMediaStreamsAttributesFmtp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

---


### MediaconnectFlowMediaStreamsAttributesOutputReference <a name="MediaconnectFlowMediaStreamsAttributesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp">putFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetFmtp">resetFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetLang">resetLang</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFmtp` <a name="putFmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp"></a>

```typescript
public putFmtp(value: MediaconnectFlowMediaStreamsAttributesFmtp): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.putFmtp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

---

##### `resetFmtp` <a name="resetFmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetFmtp"></a>

```typescript
public resetFmtp(): void
```

##### `resetLang` <a name="resetLang" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.resetLang"></a>

```typescript
public resetLang(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtp">fmtp</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference">MediaconnectFlowMediaStreamsAttributesFmtpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtpInput">fmtpInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.langInput">langInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.lang">lang</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fmtp`<sup>Required</sup> <a name="fmtp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtp"></a>

```typescript
public readonly fmtp: MediaconnectFlowMediaStreamsAttributesFmtpOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtpOutputReference">MediaconnectFlowMediaStreamsAttributesFmtpOutputReference</a>

---

##### `fmtpInput`<sup>Optional</sup> <a name="fmtpInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.fmtpInput"></a>

```typescript
public readonly fmtpInput: IResolvable | MediaconnectFlowMediaStreamsAttributesFmtp;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesFmtp">MediaconnectFlowMediaStreamsAttributesFmtp</a>

---

##### `langInput`<sup>Optional</sup> <a name="langInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.langInput"></a>

```typescript
public readonly langInput: string;
```

- *Type:* string

---

##### `lang`<sup>Required</sup> <a name="lang" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.lang"></a>

```typescript
public readonly lang: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowMediaStreamsAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a>

---


### MediaconnectFlowMediaStreamsList <a name="MediaconnectFlowMediaStreamsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowMediaStreamsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.get"></a>

```typescript
public get(index: number): MediaconnectFlowMediaStreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowMediaStreams[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>[]

---


### MediaconnectFlowMediaStreamsOutputReference <a name="MediaconnectFlowMediaStreamsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.putAttributes">putAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetAttributes">resetAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetClockRate">resetClockRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetFmt">resetFmt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamId">resetMediaStreamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamName">resetMediaStreamName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamType">resetMediaStreamType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetVideoFormat">resetVideoFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributes` <a name="putAttributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.putAttributes"></a>

```typescript
public putAttributes(value: MediaconnectFlowMediaStreamsAttributes): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.putAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a>

---

##### `resetAttributes` <a name="resetAttributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetAttributes"></a>

```typescript
public resetAttributes(): void
```

##### `resetClockRate` <a name="resetClockRate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetClockRate"></a>

```typescript
public resetClockRate(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFmt` <a name="resetFmt" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetFmt"></a>

```typescript
public resetFmt(): void
```

##### `resetMediaStreamId` <a name="resetMediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamId"></a>

```typescript
public resetMediaStreamId(): void
```

##### `resetMediaStreamName` <a name="resetMediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamName"></a>

```typescript
public resetMediaStreamName(): void
```

##### `resetMediaStreamType` <a name="resetMediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetMediaStreamType"></a>

```typescript
public resetMediaStreamType(): void
```

##### `resetVideoFormat` <a name="resetVideoFormat" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.resetVideoFormat"></a>

```typescript
public resetVideoFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributes">attributes</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference">MediaconnectFlowMediaStreamsAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributesInput">attributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRateInput">clockRateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmtInput">fmtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamIdInput">mediaStreamIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamNameInput">mediaStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamTypeInput">mediaStreamTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormatInput">videoFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRate">clockRate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmt">fmt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamId">mediaStreamId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamName">mediaStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamType">mediaStreamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormat">videoFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributes"></a>

```typescript
public readonly attributes: MediaconnectFlowMediaStreamsAttributesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributesOutputReference">MediaconnectFlowMediaStreamsAttributesOutputReference</a>

---

##### `attributesInput`<sup>Optional</sup> <a name="attributesInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.attributesInput"></a>

```typescript
public readonly attributesInput: IResolvable | MediaconnectFlowMediaStreamsAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsAttributes">MediaconnectFlowMediaStreamsAttributes</a>

---

##### `clockRateInput`<sup>Optional</sup> <a name="clockRateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRateInput"></a>

```typescript
public readonly clockRateInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `fmtInput`<sup>Optional</sup> <a name="fmtInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmtInput"></a>

```typescript
public readonly fmtInput: number;
```

- *Type:* number

---

##### `mediaStreamIdInput`<sup>Optional</sup> <a name="mediaStreamIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamIdInput"></a>

```typescript
public readonly mediaStreamIdInput: number;
```

- *Type:* number

---

##### `mediaStreamNameInput`<sup>Optional</sup> <a name="mediaStreamNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamNameInput"></a>

```typescript
public readonly mediaStreamNameInput: string;
```

- *Type:* string

---

##### `mediaStreamTypeInput`<sup>Optional</sup> <a name="mediaStreamTypeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamTypeInput"></a>

```typescript
public readonly mediaStreamTypeInput: string;
```

- *Type:* string

---

##### `videoFormatInput`<sup>Optional</sup> <a name="videoFormatInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormatInput"></a>

```typescript
public readonly videoFormatInput: string;
```

- *Type:* string

---

##### `clockRate`<sup>Required</sup> <a name="clockRate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.clockRate"></a>

```typescript
public readonly clockRate: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `fmt`<sup>Required</sup> <a name="fmt" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.fmt"></a>

```typescript
public readonly fmt: number;
```

- *Type:* number

---

##### `mediaStreamId`<sup>Required</sup> <a name="mediaStreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamId"></a>

```typescript
public readonly mediaStreamId: number;
```

- *Type:* number

---

##### `mediaStreamName`<sup>Required</sup> <a name="mediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamName"></a>

```typescript
public readonly mediaStreamName: string;
```

- *Type:* string

---

##### `mediaStreamType`<sup>Required</sup> <a name="mediaStreamType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.mediaStreamType"></a>

```typescript
public readonly mediaStreamType: string;
```

- *Type:* string

---

##### `videoFormat`<sup>Required</sup> <a name="videoFormat" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.videoFormat"></a>

```typescript
public readonly videoFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreamsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowMediaStreams;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowMediaStreams">MediaconnectFlowMediaStreams</a>

---


### MediaconnectFlowSourceDecryptionOutputReference <a name="MediaconnectFlowSourceDecryptionOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetConstantInitializationVector">resetConstantInitializationVector</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetDeviceId">resetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetKeyType">resetKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetResourceId">resetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetConstantInitializationVector` <a name="resetConstantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetConstantInitializationVector"></a>

```typescript
public resetConstantInitializationVector(): void
```

##### `resetDeviceId` <a name="resetDeviceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetDeviceId"></a>

```typescript
public resetDeviceId(): void
```

##### `resetKeyType` <a name="resetKeyType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetKeyType"></a>

```typescript
public resetKeyType(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResourceId` <a name="resetResourceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetResourceId"></a>

```typescript
public resetResourceId(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVectorInput">constantInitializationVectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceIdInput">deviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyTypeInput">keyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVector">constantInitializationVector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceId">deviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyType">keyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `constantInitializationVectorInput`<sup>Optional</sup> <a name="constantInitializationVectorInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVectorInput"></a>

```typescript
public readonly constantInitializationVectorInput: string;
```

- *Type:* string

---

##### `deviceIdInput`<sup>Optional</sup> <a name="deviceIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceIdInput"></a>

```typescript
public readonly deviceIdInput: string;
```

- *Type:* string

---

##### `keyTypeInput`<sup>Optional</sup> <a name="keyTypeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyTypeInput"></a>

```typescript
public readonly keyTypeInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `constantInitializationVector`<sup>Required</sup> <a name="constantInitializationVector" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.constantInitializationVector"></a>

```typescript
public readonly constantInitializationVector: string;
```

- *Type:* string

---

##### `deviceId`<sup>Required</sup> <a name="deviceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.deviceId"></a>

```typescript
public readonly deviceId: string;
```

- *Type:* string

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.keyType"></a>

```typescript
public readonly keyType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceDecryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

---


### MediaconnectFlowSourceFailoverConfigOutputReference <a name="MediaconnectFlowSourceFailoverConfigOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.putSourcePriority">putSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetFailoverMode">resetFailoverMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetRecoveryWindow">resetRecoveryWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetSourcePriority">resetSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePriority` <a name="putSourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.putSourcePriority"></a>

```typescript
public putSourcePriority(value: MediaconnectFlowSourceFailoverConfigSourcePriority): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.putSourcePriority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

---

##### `resetFailoverMode` <a name="resetFailoverMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetFailoverMode"></a>

```typescript
public resetFailoverMode(): void
```

##### `resetRecoveryWindow` <a name="resetRecoveryWindow" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetRecoveryWindow"></a>

```typescript
public resetRecoveryWindow(): void
```

##### `resetSourcePriority` <a name="resetSourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetSourcePriority"></a>

```typescript
public resetSourcePriority(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriority">sourcePriority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference">MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverModeInput">failoverModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindowInput">recoveryWindowInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriorityInput">sourcePriorityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverMode">failoverMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindow">recoveryWindow</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourcePriority`<sup>Required</sup> <a name="sourcePriority" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriority"></a>

```typescript
public readonly sourcePriority: MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference">MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference</a>

---

##### `failoverModeInput`<sup>Optional</sup> <a name="failoverModeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverModeInput"></a>

```typescript
public readonly failoverModeInput: string;
```

- *Type:* string

---

##### `recoveryWindowInput`<sup>Optional</sup> <a name="recoveryWindowInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindowInput"></a>

```typescript
public readonly recoveryWindowInput: number;
```

- *Type:* number

---

##### `sourcePriorityInput`<sup>Optional</sup> <a name="sourcePriorityInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.sourcePriorityInput"></a>

```typescript
public readonly sourcePriorityInput: IResolvable | MediaconnectFlowSourceFailoverConfigSourcePriority;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `failoverMode`<sup>Required</sup> <a name="failoverMode" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.failoverMode"></a>

```typescript
public readonly failoverMode: string;
```

- *Type:* string

---

##### `recoveryWindow`<sup>Required</sup> <a name="recoveryWindow" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.recoveryWindow"></a>

```typescript
public readonly recoveryWindow: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceFailoverConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfig">MediaconnectFlowSourceFailoverConfig</a>

---


### MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference <a name="MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource">resetPrimarySource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimarySource` <a name="resetPrimarySource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource"></a>

```typescript
public resetPrimarySource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput">primarySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySource">primarySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primarySourceInput`<sup>Optional</sup> <a name="primarySourceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput"></a>

```typescript
public readonly primarySourceInput: string;
```

- *Type:* string

---

##### `primarySource`<sup>Required</sup> <a name="primarySource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.primarySource"></a>

```typescript
public readonly primarySource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceFailoverConfigSourcePriority;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceFailoverConfigSourcePriority">MediaconnectFlowSourceFailoverConfigSourcePriority</a>

---


### MediaconnectFlowSourceGatewayBridgeSourceOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.putVpcInterfaceAttachment">putVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetBridgeArn">resetBridgeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetVpcInterfaceAttachment">resetVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpcInterfaceAttachment` <a name="putVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.putVpcInterfaceAttachment"></a>

```typescript
public putVpcInterfaceAttachment(value: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.putVpcInterfaceAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

---

##### `resetBridgeArn` <a name="resetBridgeArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetBridgeArn"></a>

```typescript
public resetBridgeArn(): void
```

##### `resetVpcInterfaceAttachment` <a name="resetVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.resetVpcInterfaceAttachment"></a>

```typescript
public resetVpcInterfaceAttachment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachment">vpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArnInput">bridgeArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachmentInput">vpcInterfaceAttachmentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArn">bridgeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcInterfaceAttachment`<sup>Required</sup> <a name="vpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachment"></a>

```typescript
public readonly vpcInterfaceAttachment: MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference</a>

---

##### `bridgeArnInput`<sup>Optional</sup> <a name="bridgeArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArnInput"></a>

```typescript
public readonly bridgeArnInput: string;
```

- *Type:* string

---

##### `vpcInterfaceAttachmentInput`<sup>Optional</sup> <a name="vpcInterfaceAttachmentInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.vpcInterfaceAttachmentInput"></a>

```typescript
public readonly vpcInterfaceAttachmentInput: IResolvable | MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

---

##### `bridgeArn`<sup>Required</sup> <a name="bridgeArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.bridgeArn"></a>

```typescript
public readonly bridgeArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceGatewayBridgeSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

---


### MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference <a name="MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName">resetVpcInterfaceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcInterfaceName` <a name="resetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName"></a>

```typescript
public resetVpcInterfaceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput">vpcInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcInterfaceNameInput`<sup>Optional</sup> <a name="vpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput"></a>

```typescript
public readonly vpcInterfaceNameInput: string;
```

- *Type:* string

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment">MediaconnectFlowSourceGatewayBridgeSourceVpcInterfaceAttachment</a>

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get"></a>

```typescript
public get(index: number): MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.putInterface">putInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInputPort">resetInputPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInterface">resetInterface</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInterface` <a name="putInterface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.putInterface"></a>

```typescript
public putInterface(value: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.putInterface.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

---

##### `resetInputPort` <a name="resetInputPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInputPort"></a>

```typescript
public resetInputPort(): void
```

##### `resetInterface` <a name="resetInterface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.resetInterface"></a>

```typescript
public resetInterface(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interface">interface</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPortInput">inputPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interfaceInput">interfaceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPort">inputPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interface"></a>

```typescript
public readonly interface: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterfaceOutputReference</a>

---

##### `inputPortInput`<sup>Optional</sup> <a name="inputPortInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPortInput"></a>

```typescript
public readonly inputPortInput: number;
```

- *Type:* number

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.interfaceInput"></a>

```typescript
public readonly interfaceInput: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsInterface</a>

---

##### `inputPort`<sup>Required</sup> <a name="inputPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.inputPort"></a>

```typescript
public readonly inputPort: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsList <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.get"></a>

```typescript
public get(index: number): MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]

---


### MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference <a name="MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.putInputConfigurations">putInputConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetEncodingName">resetEncodingName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetInputConfigurations">resetInputConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetMediaStreamName">resetMediaStreamName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInputConfigurations` <a name="putInputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.putInputConfigurations"></a>

```typescript
public putInputConfigurations(value: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.putInputConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]

---

##### `resetEncodingName` <a name="resetEncodingName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetEncodingName"></a>

```typescript
public resetEncodingName(): void
```

##### `resetInputConfigurations` <a name="resetInputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetInputConfigurations"></a>

```typescript
public resetInputConfigurations(): void
```

##### `resetMediaStreamName` <a name="resetMediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.resetMediaStreamName"></a>

```typescript
public resetMediaStreamName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurations">inputConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingNameInput">encodingNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurationsInput">inputConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamNameInput">mediaStreamNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingName">encodingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamName">mediaStreamName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inputConfigurations`<sup>Required</sup> <a name="inputConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurations"></a>

```typescript
public readonly inputConfigurations: MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurationsList</a>

---

##### `encodingNameInput`<sup>Optional</sup> <a name="encodingNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingNameInput"></a>

```typescript
public readonly encodingNameInput: string;
```

- *Type:* string

---

##### `inputConfigurationsInput`<sup>Optional</sup> <a name="inputConfigurationsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.inputConfigurationsInput"></a>

```typescript
public readonly inputConfigurationsInput: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurationsInputConfigurations</a>[]

---

##### `mediaStreamNameInput`<sup>Optional</sup> <a name="mediaStreamNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamNameInput"></a>

```typescript
public readonly mediaStreamNameInput: string;
```

- *Type:* string

---

##### `encodingName`<sup>Required</sup> <a name="encodingName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.encodingName"></a>

```typescript
public readonly encodingName: string;
```

- *Type:* string

---

##### `mediaStreamName`<sup>Required</sup> <a name="mediaStreamName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.mediaStreamName"></a>

```typescript
public readonly mediaStreamName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>

---


### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get"></a>

```typescript
public get(index: number): MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]

---


### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.putSilentAudio">putSilentAudio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resetSilentAudio">resetSilentAudio</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSilentAudio` <a name="putSilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.putSilentAudio"></a>

```typescript
public putSilentAudio(value: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.putSilentAudio.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

---

##### `resetSilentAudio` <a name="resetSilentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.resetSilentAudio"></a>

```typescript
public resetSilentAudio(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudio">silentAudio</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudioInput">silentAudioInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `silentAudio`<sup>Required</sup> <a name="silentAudio" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudio"></a>

```typescript
public readonly silentAudio: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference</a>

---

##### `silentAudioInput`<sup>Optional</sup> <a name="silentAudioInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.silentAudioInput"></a>

```typescript
public readonly silentAudioInput: IResolvable | MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>

---


### MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference <a name="MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetThresholdSeconds">resetThresholdSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetThresholdSeconds` <a name="resetThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.resetThresholdSeconds"></a>

```typescript
public resetThresholdSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSecondsInput">thresholdSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSeconds">thresholdSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `thresholdSecondsInput`<sup>Optional</sup> <a name="thresholdSecondsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSecondsInput"></a>

```typescript
public readonly thresholdSecondsInput: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `thresholdSeconds`<sup>Required</sup> <a name="thresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.thresholdSeconds"></a>

```typescript
public readonly thresholdSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudioOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsSilentAudio</a>

---


### MediaconnectFlowSourceMonitoringConfigOutputReference <a name="MediaconnectFlowSourceMonitoringConfigOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putAudioMonitoringSettings">putAudioMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putVideoMonitoringSettings">putVideoMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetAudioMonitoringSettings">resetAudioMonitoringSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetContentQualityAnalysisState">resetContentQualityAnalysisState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetThumbnailState">resetThumbnailState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetVideoMonitoringSettings">resetVideoMonitoringSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAudioMonitoringSettings` <a name="putAudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putAudioMonitoringSettings"></a>

```typescript
public putAudioMonitoringSettings(value: IResolvable | MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putAudioMonitoringSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]

---

##### `putVideoMonitoringSettings` <a name="putVideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putVideoMonitoringSettings"></a>

```typescript
public putVideoMonitoringSettings(value: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.putVideoMonitoringSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]

---

##### `resetAudioMonitoringSettings` <a name="resetAudioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetAudioMonitoringSettings"></a>

```typescript
public resetAudioMonitoringSettings(): void
```

##### `resetContentQualityAnalysisState` <a name="resetContentQualityAnalysisState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetContentQualityAnalysisState"></a>

```typescript
public resetContentQualityAnalysisState(): void
```

##### `resetThumbnailState` <a name="resetThumbnailState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetThumbnailState"></a>

```typescript
public resetThumbnailState(): void
```

##### `resetVideoMonitoringSettings` <a name="resetVideoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.resetVideoMonitoringSettings"></a>

```typescript
public resetVideoMonitoringSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettings">audioMonitoringSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettings">videoMonitoringSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettingsInput">audioMonitoringSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisStateInput">contentQualityAnalysisStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailStateInput">thumbnailStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettingsInput">videoMonitoringSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisState">contentQualityAnalysisState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailState">thumbnailState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioMonitoringSettings`<sup>Required</sup> <a name="audioMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettings"></a>

```typescript
public readonly audioMonitoringSettings: MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettingsList</a>

---

##### `videoMonitoringSettings`<sup>Required</sup> <a name="videoMonitoringSettings" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettings"></a>

```typescript
public readonly videoMonitoringSettings: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList</a>

---

##### `audioMonitoringSettingsInput`<sup>Optional</sup> <a name="audioMonitoringSettingsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.audioMonitoringSettingsInput"></a>

```typescript
public readonly audioMonitoringSettingsInput: IResolvable | MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings">MediaconnectFlowSourceMonitoringConfigAudioMonitoringSettings</a>[]

---

##### `contentQualityAnalysisStateInput`<sup>Optional</sup> <a name="contentQualityAnalysisStateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisStateInput"></a>

```typescript
public readonly contentQualityAnalysisStateInput: string;
```

- *Type:* string

---

##### `thumbnailStateInput`<sup>Optional</sup> <a name="thumbnailStateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailStateInput"></a>

```typescript
public readonly thumbnailStateInput: string;
```

- *Type:* string

---

##### `videoMonitoringSettingsInput`<sup>Optional</sup> <a name="videoMonitoringSettingsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.videoMonitoringSettingsInput"></a>

```typescript
public readonly videoMonitoringSettingsInput: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]

---

##### `contentQualityAnalysisState`<sup>Required</sup> <a name="contentQualityAnalysisState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.contentQualityAnalysisState"></a>

```typescript
public readonly contentQualityAnalysisState: string;
```

- *Type:* string

---

##### `thumbnailState`<sup>Required</sup> <a name="thumbnailState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.thumbnailState"></a>

```typescript
public readonly thumbnailState: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceMonitoringConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfig">MediaconnectFlowSourceMonitoringConfig</a>

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetThresholdSeconds">resetThresholdSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetThresholdSeconds` <a name="resetThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.resetThresholdSeconds"></a>

```typescript
public resetThresholdSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSecondsInput">thresholdSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSeconds">thresholdSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `thresholdSecondsInput`<sup>Optional</sup> <a name="thresholdSecondsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSecondsInput"></a>

```typescript
public readonly thresholdSecondsInput: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `thresholdSeconds`<sup>Required</sup> <a name="thresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.thresholdSeconds"></a>

```typescript
public readonly thresholdSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetThresholdSeconds">resetThresholdSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetState"></a>

```typescript
public resetState(): void
```

##### `resetThresholdSeconds` <a name="resetThresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.resetThresholdSeconds"></a>

```typescript
public resetThresholdSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSecondsInput">thresholdSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSeconds">thresholdSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `thresholdSecondsInput`<sup>Optional</sup> <a name="thresholdSecondsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSecondsInput"></a>

```typescript
public readonly thresholdSecondsInput: number;
```

- *Type:* number

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `thresholdSeconds`<sup>Required</sup> <a name="thresholdSeconds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.thresholdSeconds"></a>

```typescript
public readonly thresholdSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get"></a>

```typescript
public get(index: number): MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>[]

---


### MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference <a name="MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putBlackFrames">putBlackFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putFrozenFrames">putFrozenFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetBlackFrames">resetBlackFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetFrozenFrames">resetFrozenFrames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBlackFrames` <a name="putBlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putBlackFrames"></a>

```typescript
public putBlackFrames(value: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putBlackFrames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

---

##### `putFrozenFrames` <a name="putFrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putFrozenFrames"></a>

```typescript
public putFrozenFrames(value: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.putFrozenFrames.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

---

##### `resetBlackFrames` <a name="resetBlackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetBlackFrames"></a>

```typescript
public resetBlackFrames(): void
```

##### `resetFrozenFrames` <a name="resetFrozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.resetFrozenFrames"></a>

```typescript
public resetFrozenFrames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFrames">blackFrames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFrames">frozenFrames</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFramesInput">blackFramesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFramesInput">frozenFramesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `blackFrames`<sup>Required</sup> <a name="blackFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFrames"></a>

```typescript
public readonly blackFrames: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFramesOutputReference</a>

---

##### `frozenFrames`<sup>Required</sup> <a name="frozenFrames" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFrames"></a>

```typescript
public readonly frozenFrames: MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFramesOutputReference</a>

---

##### `blackFramesInput`<sup>Optional</sup> <a name="blackFramesInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.blackFramesInput"></a>

```typescript
public readonly blackFramesInput: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsBlackFrames</a>

---

##### `frozenFramesInput`<sup>Optional</sup> <a name="frozenFramesInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.frozenFramesInput"></a>

```typescript
public readonly frozenFramesInput: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsFrozenFrames</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings">MediaconnectFlowSourceMonitoringConfigVideoMonitoringSettings</a>

---


### MediaconnectFlowSourceOutputReference <a name="MediaconnectFlowSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption">putDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putGatewayBridgeSource">putGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putMediaStreamSourceConfigurations">putMediaStreamSourceConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDecryption">resetDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetEntitlementArn">resetEntitlementArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetGatewayBridgeSource">resetGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetIngestPort">resetIngestPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxBitrate">resetMaxBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxLatency">resetMaxLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxSyncBuffer">resetMaxSyncBuffer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMediaStreamSourceConfigurations">resetMediaStreamSourceConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMinLatency">resetMinLatency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderControlPort">resetSenderControlPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderIpAddress">resetSenderIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerAddress">resetSourceListenerAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerPort">resetSourceListenerPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetStreamId">resetStreamId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetVpcInterfaceName">resetVpcInterfaceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetWhitelistCidr">resetWhitelistCidr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDecryption` <a name="putDecryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption"></a>

```typescript
public putDecryption(value: MediaconnectFlowSourceDecryption): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putDecryption.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

---

##### `putGatewayBridgeSource` <a name="putGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putGatewayBridgeSource"></a>

```typescript
public putGatewayBridgeSource(value: MediaconnectFlowSourceGatewayBridgeSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putGatewayBridgeSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

---

##### `putMediaStreamSourceConfigurations` <a name="putMediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putMediaStreamSourceConfigurations"></a>

```typescript
public putMediaStreamSourceConfigurations(value: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.putMediaStreamSourceConfigurations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]

---

##### `resetDecryption` <a name="resetDecryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDecryption"></a>

```typescript
public resetDecryption(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEntitlementArn` <a name="resetEntitlementArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetEntitlementArn"></a>

```typescript
public resetEntitlementArn(): void
```

##### `resetGatewayBridgeSource` <a name="resetGatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetGatewayBridgeSource"></a>

```typescript
public resetGatewayBridgeSource(): void
```

##### `resetIngestPort` <a name="resetIngestPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetIngestPort"></a>

```typescript
public resetIngestPort(): void
```

##### `resetMaxBitrate` <a name="resetMaxBitrate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxBitrate"></a>

```typescript
public resetMaxBitrate(): void
```

##### `resetMaxLatency` <a name="resetMaxLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxLatency"></a>

```typescript
public resetMaxLatency(): void
```

##### `resetMaxSyncBuffer` <a name="resetMaxSyncBuffer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMaxSyncBuffer"></a>

```typescript
public resetMaxSyncBuffer(): void
```

##### `resetMediaStreamSourceConfigurations` <a name="resetMediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMediaStreamSourceConfigurations"></a>

```typescript
public resetMediaStreamSourceConfigurations(): void
```

##### `resetMinLatency` <a name="resetMinLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetMinLatency"></a>

```typescript
public resetMinLatency(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSenderControlPort` <a name="resetSenderControlPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderControlPort"></a>

```typescript
public resetSenderControlPort(): void
```

##### `resetSenderIpAddress` <a name="resetSenderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSenderIpAddress"></a>

```typescript
public resetSenderIpAddress(): void
```

##### `resetSourceListenerAddress` <a name="resetSourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerAddress"></a>

```typescript
public resetSourceListenerAddress(): void
```

##### `resetSourceListenerPort` <a name="resetSourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetSourceListenerPort"></a>

```typescript
public resetSourceListenerPort(): void
```

##### `resetStreamId` <a name="resetStreamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetStreamId"></a>

```typescript
public resetStreamId(): void
```

##### `resetVpcInterfaceName` <a name="resetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetVpcInterfaceName"></a>

```typescript
public resetVpcInterfaceName(): void
```

##### `resetWhitelistCidr` <a name="resetWhitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.resetWhitelistCidr"></a>

```typescript
public resetWhitelistCidr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryption">decryption</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference">MediaconnectFlowSourceDecryptionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSource">gatewayBridgeSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference">MediaconnectFlowSourceGatewayBridgeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestIp">ingestIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurations">mediaStreamSourceConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceArn">sourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceIngestPort">sourceIngestPort</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryptionInput">decryptionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArnInput">entitlementArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSourceInput">gatewayBridgeSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPortInput">ingestPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrateInput">maxBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatencyInput">maxLatencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBufferInput">maxSyncBufferInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurationsInput">mediaStreamSourceConfigurationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatencyInput">minLatencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPortInput">senderControlPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddressInput">senderIpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddressInput">sourceListenerAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPortInput">sourceListenerPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamIdInput">streamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceNameInput">vpcInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidrInput">whitelistCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArn">entitlementArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPort">ingestPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrate">maxBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatency">maxLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBuffer">maxSyncBuffer</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatency">minLatency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPort">senderControlPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddress">senderIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddress">sourceListenerAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPort">sourceListenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamId">streamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidr">whitelistCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `decryption`<sup>Required</sup> <a name="decryption" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryption"></a>

```typescript
public readonly decryption: MediaconnectFlowSourceDecryptionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryptionOutputReference">MediaconnectFlowSourceDecryptionOutputReference</a>

---

##### `gatewayBridgeSource`<sup>Required</sup> <a name="gatewayBridgeSource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSource"></a>

```typescript
public readonly gatewayBridgeSource: MediaconnectFlowSourceGatewayBridgeSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSourceOutputReference">MediaconnectFlowSourceGatewayBridgeSourceOutputReference</a>

---

##### `ingestIp`<sup>Required</sup> <a name="ingestIp" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestIp"></a>

```typescript
public readonly ingestIp: string;
```

- *Type:* string

---

##### `mediaStreamSourceConfigurations`<sup>Required</sup> <a name="mediaStreamSourceConfigurations" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurations"></a>

```typescript
public readonly mediaStreamSourceConfigurations: MediaconnectFlowSourceMediaStreamSourceConfigurationsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurationsList">MediaconnectFlowSourceMediaStreamSourceConfigurationsList</a>

---

##### `sourceArn`<sup>Required</sup> <a name="sourceArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceArn"></a>

```typescript
public readonly sourceArn: string;
```

- *Type:* string

---

##### `sourceIngestPort`<sup>Required</sup> <a name="sourceIngestPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceIngestPort"></a>

```typescript
public readonly sourceIngestPort: string;
```

- *Type:* string

---

##### `decryptionInput`<sup>Optional</sup> <a name="decryptionInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.decryptionInput"></a>

```typescript
public readonly decryptionInput: IResolvable | MediaconnectFlowSourceDecryption;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceDecryption">MediaconnectFlowSourceDecryption</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `entitlementArnInput`<sup>Optional</sup> <a name="entitlementArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArnInput"></a>

```typescript
public readonly entitlementArnInput: string;
```

- *Type:* string

---

##### `gatewayBridgeSourceInput`<sup>Optional</sup> <a name="gatewayBridgeSourceInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.gatewayBridgeSourceInput"></a>

```typescript
public readonly gatewayBridgeSourceInput: IResolvable | MediaconnectFlowSourceGatewayBridgeSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceGatewayBridgeSource">MediaconnectFlowSourceGatewayBridgeSource</a>

---

##### `ingestPortInput`<sup>Optional</sup> <a name="ingestPortInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPortInput"></a>

```typescript
public readonly ingestPortInput: number;
```

- *Type:* number

---

##### `maxBitrateInput`<sup>Optional</sup> <a name="maxBitrateInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrateInput"></a>

```typescript
public readonly maxBitrateInput: number;
```

- *Type:* number

---

##### `maxLatencyInput`<sup>Optional</sup> <a name="maxLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatencyInput"></a>

```typescript
public readonly maxLatencyInput: number;
```

- *Type:* number

---

##### `maxSyncBufferInput`<sup>Optional</sup> <a name="maxSyncBufferInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBufferInput"></a>

```typescript
public readonly maxSyncBufferInput: number;
```

- *Type:* number

---

##### `mediaStreamSourceConfigurationsInput`<sup>Optional</sup> <a name="mediaStreamSourceConfigurationsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.mediaStreamSourceConfigurationsInput"></a>

```typescript
public readonly mediaStreamSourceConfigurationsInput: IResolvable | MediaconnectFlowSourceMediaStreamSourceConfigurations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceMediaStreamSourceConfigurations">MediaconnectFlowSourceMediaStreamSourceConfigurations</a>[]

---

##### `minLatencyInput`<sup>Optional</sup> <a name="minLatencyInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatencyInput"></a>

```typescript
public readonly minLatencyInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `senderControlPortInput`<sup>Optional</sup> <a name="senderControlPortInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPortInput"></a>

```typescript
public readonly senderControlPortInput: number;
```

- *Type:* number

---

##### `senderIpAddressInput`<sup>Optional</sup> <a name="senderIpAddressInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddressInput"></a>

```typescript
public readonly senderIpAddressInput: string;
```

- *Type:* string

---

##### `sourceListenerAddressInput`<sup>Optional</sup> <a name="sourceListenerAddressInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddressInput"></a>

```typescript
public readonly sourceListenerAddressInput: string;
```

- *Type:* string

---

##### `sourceListenerPortInput`<sup>Optional</sup> <a name="sourceListenerPortInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPortInput"></a>

```typescript
public readonly sourceListenerPortInput: number;
```

- *Type:* number

---

##### `streamIdInput`<sup>Optional</sup> <a name="streamIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamIdInput"></a>

```typescript
public readonly streamIdInput: string;
```

- *Type:* string

---

##### `vpcInterfaceNameInput`<sup>Optional</sup> <a name="vpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceNameInput"></a>

```typescript
public readonly vpcInterfaceNameInput: string;
```

- *Type:* string

---

##### `whitelistCidrInput`<sup>Optional</sup> <a name="whitelistCidrInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidrInput"></a>

```typescript
public readonly whitelistCidrInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `entitlementArn`<sup>Required</sup> <a name="entitlementArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.entitlementArn"></a>

```typescript
public readonly entitlementArn: string;
```

- *Type:* string

---

##### `ingestPort`<sup>Required</sup> <a name="ingestPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.ingestPort"></a>

```typescript
public readonly ingestPort: number;
```

- *Type:* number

---

##### `maxBitrate`<sup>Required</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxBitrate"></a>

```typescript
public readonly maxBitrate: number;
```

- *Type:* number

---

##### `maxLatency`<sup>Required</sup> <a name="maxLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxLatency"></a>

```typescript
public readonly maxLatency: number;
```

- *Type:* number

---

##### `maxSyncBuffer`<sup>Required</sup> <a name="maxSyncBuffer" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.maxSyncBuffer"></a>

```typescript
public readonly maxSyncBuffer: number;
```

- *Type:* number

---

##### `minLatency`<sup>Required</sup> <a name="minLatency" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.minLatency"></a>

```typescript
public readonly minLatency: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `senderControlPort`<sup>Required</sup> <a name="senderControlPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderControlPort"></a>

```typescript
public readonly senderControlPort: number;
```

- *Type:* number

---

##### `senderIpAddress`<sup>Required</sup> <a name="senderIpAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.senderIpAddress"></a>

```typescript
public readonly senderIpAddress: string;
```

- *Type:* string

---

##### `sourceListenerAddress`<sup>Required</sup> <a name="sourceListenerAddress" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerAddress"></a>

```typescript
public readonly sourceListenerAddress: string;
```

- *Type:* string

---

##### `sourceListenerPort`<sup>Required</sup> <a name="sourceListenerPort" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.sourceListenerPort"></a>

```typescript
public readonly sourceListenerPort: number;
```

- *Type:* number

---

##### `streamId`<sup>Required</sup> <a name="streamId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.streamId"></a>

```typescript
public readonly streamId: string;
```

- *Type:* string

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

---

##### `whitelistCidr`<sup>Required</sup> <a name="whitelistCidr" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.whitelistCidr"></a>

```typescript
public readonly whitelistCidr: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowSource">MediaconnectFlowSource</a>

---


### MediaconnectFlowVpcInterfacesList <a name="MediaconnectFlowVpcInterfacesList" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowVpcInterfacesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.get"></a>

```typescript
public get(index: number): MediaconnectFlowVpcInterfacesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowVpcInterfaces[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>[]

---


### MediaconnectFlowVpcInterfacesOutputReference <a name="MediaconnectFlowVpcInterfacesOutputReference" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer"></a>

```typescript
import { mediaconnectFlow } from '@cdktn/provider-awscc'

new mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceIds">resetNetworkInterfaceIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceType">resetNetworkInterfaceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkInterfaceIds` <a name="resetNetworkInterfaceIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceIds"></a>

```typescript
public resetNetworkInterfaceIds(): void
```

##### `resetNetworkInterfaceType` <a name="resetNetworkInterfaceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetNetworkInterfaceType"></a>

```typescript
public resetNetworkInterfaceType(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIdsInput">networkInterfaceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceTypeInput">networkInterfaceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIds">networkInterfaceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceType">networkInterfaceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkInterfaceIdsInput`<sup>Optional</sup> <a name="networkInterfaceIdsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIdsInput"></a>

```typescript
public readonly networkInterfaceIdsInput: string[];
```

- *Type:* string[]

---

##### `networkInterfaceTypeInput`<sup>Optional</sup> <a name="networkInterfaceTypeInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceTypeInput"></a>

```typescript
public readonly networkInterfaceTypeInput: string;
```

- *Type:* string

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkInterfaceIds`<sup>Required</sup> <a name="networkInterfaceIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceIds"></a>

```typescript
public readonly networkInterfaceIds: string[];
```

- *Type:* string[]

---

##### `networkInterfaceType`<sup>Required</sup> <a name="networkInterfaceType" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.networkInterfaceType"></a>

```typescript
public readonly networkInterfaceType: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfacesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectFlowVpcInterfaces;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectFlow.MediaconnectFlowVpcInterfaces">MediaconnectFlowVpcInterfaces</a>

---



