# `mediaconnectBridge` Submodule <a name="`mediaconnectBridge` Submodule" id="@cdktn/provider-awscc.mediaconnectBridge"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconnectBridge <a name="MediaconnectBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge awscc_mediaconnect_bridge}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridge(scope: Construct, id: string, config: MediaconnectBridgeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig">MediaconnectBridgeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig">MediaconnectBridgeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putEgressGatewayBridge">putEgressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putIngressGatewayBridge">putIngressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putOutputs">putOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig">putSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetEgressGatewayBridge">resetEgressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetIngressGatewayBridge">resetIngressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOutputs">resetOutputs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetSourceFailoverConfig">resetSourceFailoverConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEgressGatewayBridge` <a name="putEgressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putEgressGatewayBridge"></a>

```typescript
public putEgressGatewayBridge(value: MediaconnectBridgeEgressGatewayBridge): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putEgressGatewayBridge.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

---

##### `putIngressGatewayBridge` <a name="putIngressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putIngressGatewayBridge"></a>

```typescript
public putIngressGatewayBridge(value: MediaconnectBridgeIngressGatewayBridge): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putIngressGatewayBridge.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

---

##### `putOutputs` <a name="putOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putOutputs"></a>

```typescript
public putOutputs(value: IResolvable | MediaconnectBridgeOutputs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putOutputs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>[]

---

##### `putSourceFailoverConfig` <a name="putSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig"></a>

```typescript
public putSourceFailoverConfig(value: MediaconnectBridgeSourceFailoverConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSourceFailoverConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

---

##### `putSources` <a name="putSources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSources"></a>

```typescript
public putSources(value: IResolvable | MediaconnectBridgeSources[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.putSources.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>[]

---

##### `resetEgressGatewayBridge` <a name="resetEgressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetEgressGatewayBridge"></a>

```typescript
public resetEgressGatewayBridge(): void
```

##### `resetIngressGatewayBridge` <a name="resetIngressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetIngressGatewayBridge"></a>

```typescript
public resetIngressGatewayBridge(): void
```

##### `resetOutputs` <a name="resetOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetOutputs"></a>

```typescript
public resetOutputs(): void
```

##### `resetSourceFailoverConfig` <a name="resetSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.resetSourceFailoverConfig"></a>

```typescript
public resetSourceFailoverConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconnectBridge resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isConstruct"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

mediaconnectBridge.MediaconnectBridge.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformElement"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

mediaconnectBridge.MediaconnectBridge.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformResource"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

mediaconnectBridge.MediaconnectBridge.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

mediaconnectBridge.MediaconnectBridge.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MediaconnectBridge resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MediaconnectBridge to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MediaconnectBridge that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MediaconnectBridge to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeArn">bridgeArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeState">bridgeState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridge">egressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference">MediaconnectBridgeEgressGatewayBridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridge">ingressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference">MediaconnectBridgeIngressGatewayBridgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputs">outputs</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList">MediaconnectBridgeOutputsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfig">sourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference">MediaconnectBridgeSourceFailoverConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList">MediaconnectBridgeSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridgeInput">egressGatewayBridgeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridgeInput">ingressGatewayBridgeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputsInput">outputsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArnInput">placementArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfigInput">sourceFailoverConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourcesInput">sourcesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArn">placementArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bridgeArn`<sup>Required</sup> <a name="bridgeArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeArn"></a>

```typescript
public readonly bridgeArn: string;
```

- *Type:* string

---

##### `bridgeState`<sup>Required</sup> <a name="bridgeState" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.bridgeState"></a>

```typescript
public readonly bridgeState: string;
```

- *Type:* string

---

##### `egressGatewayBridge`<sup>Required</sup> <a name="egressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridge"></a>

```typescript
public readonly egressGatewayBridge: MediaconnectBridgeEgressGatewayBridgeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference">MediaconnectBridgeEgressGatewayBridgeOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingressGatewayBridge`<sup>Required</sup> <a name="ingressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridge"></a>

```typescript
public readonly ingressGatewayBridge: MediaconnectBridgeIngressGatewayBridgeOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference">MediaconnectBridgeIngressGatewayBridgeOutputReference</a>

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputs"></a>

```typescript
public readonly outputs: MediaconnectBridgeOutputsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList">MediaconnectBridgeOutputsList</a>

---

##### `sourceFailoverConfig`<sup>Required</sup> <a name="sourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfig"></a>

```typescript
public readonly sourceFailoverConfig: MediaconnectBridgeSourceFailoverConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference">MediaconnectBridgeSourceFailoverConfigOutputReference</a>

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sources"></a>

```typescript
public readonly sources: MediaconnectBridgeSourcesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList">MediaconnectBridgeSourcesList</a>

---

##### `egressGatewayBridgeInput`<sup>Optional</sup> <a name="egressGatewayBridgeInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.egressGatewayBridgeInput"></a>

```typescript
public readonly egressGatewayBridgeInput: IResolvable | MediaconnectBridgeEgressGatewayBridge;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

---

##### `ingressGatewayBridgeInput`<sup>Optional</sup> <a name="ingressGatewayBridgeInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.ingressGatewayBridgeInput"></a>

```typescript
public readonly ingressGatewayBridgeInput: IResolvable | MediaconnectBridgeIngressGatewayBridge;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `outputsInput`<sup>Optional</sup> <a name="outputsInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.outputsInput"></a>

```typescript
public readonly outputsInput: IResolvable | MediaconnectBridgeOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>[]

---

##### `placementArnInput`<sup>Optional</sup> <a name="placementArnInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArnInput"></a>

```typescript
public readonly placementArnInput: string;
```

- *Type:* string

---

##### `sourceFailoverConfigInput`<sup>Optional</sup> <a name="sourceFailoverConfigInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourceFailoverConfigInput"></a>

```typescript
public readonly sourceFailoverConfigInput: IResolvable | MediaconnectBridgeSourceFailoverConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.sourcesInput"></a>

```typescript
public readonly sourcesInput: IResolvable | MediaconnectBridgeSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `placementArn`<sup>Required</sup> <a name="placementArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.placementArn"></a>

```typescript
public readonly placementArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridge.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconnectBridgeConfig <a name="MediaconnectBridgeConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

const mediaconnectBridgeConfig: mediaconnectBridge.MediaconnectBridgeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.name">name</a></code> | <code>string</code> | The name of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.placementArn">placementArn</a></code> | <code>string</code> | The placement Amazon Resource Number (ARN) of the bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sources">sources</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>[]</code> | The sources on this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.egressGatewayBridge">egressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#egress_gateway_bridge MediaconnectBridge#egress_gateway_bridge}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.ingressGatewayBridge">ingressGatewayBridge</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#ingress_gateway_bridge MediaconnectBridge#ingress_gateway_bridge}. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.outputs">outputs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>[]</code> | The outputs on this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sourceFailoverConfig">sourceFailoverConfig</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a></code> | The settings for source failover. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `placementArn`<sup>Required</sup> <a name="placementArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.placementArn"></a>

```typescript
public readonly placementArn: string;
```

- *Type:* string

The placement Amazon Resource Number (ARN) of the bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#placement_arn MediaconnectBridge#placement_arn}

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sources"></a>

```typescript
public readonly sources: IResolvable | MediaconnectBridgeSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>[]

The sources on this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#sources MediaconnectBridge#sources}

---

##### `egressGatewayBridge`<sup>Optional</sup> <a name="egressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.egressGatewayBridge"></a>

```typescript
public readonly egressGatewayBridge: MediaconnectBridgeEgressGatewayBridge;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#egress_gateway_bridge MediaconnectBridge#egress_gateway_bridge}.

---

##### `ingressGatewayBridge`<sup>Optional</sup> <a name="ingressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.ingressGatewayBridge"></a>

```typescript
public readonly ingressGatewayBridge: MediaconnectBridgeIngressGatewayBridge;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#ingress_gateway_bridge MediaconnectBridge#ingress_gateway_bridge}.

---

##### `outputs`<sup>Optional</sup> <a name="outputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.outputs"></a>

```typescript
public readonly outputs: IResolvable | MediaconnectBridgeOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>[]

The outputs on this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#outputs MediaconnectBridge#outputs}

---

##### `sourceFailoverConfig`<sup>Optional</sup> <a name="sourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeConfig.property.sourceFailoverConfig"></a>

```typescript
public readonly sourceFailoverConfig: MediaconnectBridgeSourceFailoverConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

The settings for source failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#source_failover_config MediaconnectBridge#source_failover_config}

---

### MediaconnectBridgeEgressGatewayBridge <a name="MediaconnectBridgeEgressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

const mediaconnectBridgeEgressGatewayBridge: mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge.property.maxBitrate">maxBitrate</a></code> | <code>number</code> | The maximum expected bitrate of the egress bridge. |

---

##### `maxBitrate`<sup>Optional</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge.property.maxBitrate"></a>

```typescript
public readonly maxBitrate: number;
```

- *Type:* number

The maximum expected bitrate of the egress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#max_bitrate MediaconnectBridge#max_bitrate}

---

### MediaconnectBridgeIngressGatewayBridge <a name="MediaconnectBridgeIngressGatewayBridge" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

const mediaconnectBridgeIngressGatewayBridge: mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxBitrate">maxBitrate</a></code> | <code>number</code> | The maximum expected bitrate of the ingress bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxOutputs">maxOutputs</a></code> | <code>number</code> | The maximum number of outputs on the ingress bridge. |

---

##### `maxBitrate`<sup>Optional</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxBitrate"></a>

```typescript
public readonly maxBitrate: number;
```

- *Type:* number

The maximum expected bitrate of the ingress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#max_bitrate MediaconnectBridge#max_bitrate}

---

##### `maxOutputs`<sup>Optional</sup> <a name="maxOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge.property.maxOutputs"></a>

```typescript
public readonly maxOutputs: number;
```

- *Type:* number

The maximum number of outputs on the ingress bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#max_outputs MediaconnectBridge#max_outputs}

---

### MediaconnectBridgeOutputs <a name="MediaconnectBridgeOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

const mediaconnectBridgeOutputs: mediaconnectBridge.MediaconnectBridgeOutputs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs.property.networkOutput">networkOutput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a></code> | The output of the bridge. A network output is delivered to your premises. |

---

##### `networkOutput`<sup>Optional</sup> <a name="networkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs.property.networkOutput"></a>

```typescript
public readonly networkOutput: MediaconnectBridgeOutputsNetworkOutput;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a>

The output of the bridge. A network output is delivered to your premises.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#network_output MediaconnectBridge#network_output}

---

### MediaconnectBridgeOutputsNetworkOutput <a name="MediaconnectBridgeOutputsNetworkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

const mediaconnectBridgeOutputsNetworkOutput: mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ipAddress">ipAddress</a></code> | <code>string</code> | The network output IP Address. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.name">name</a></code> | <code>string</code> | The network output name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.networkName">networkName</a></code> | <code>string</code> | The network output's gateway network name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.port">port</a></code> | <code>number</code> | The network output port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.protocol">protocol</a></code> | <code>string</code> | The network output protocol. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ttl">ttl</a></code> | <code>number</code> | The network output TTL. |

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

The network output IP Address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#ip_address MediaconnectBridge#ip_address}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The network output name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `networkName`<sup>Optional</sup> <a name="networkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

The network output's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#network_name MediaconnectBridge#network_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The network output port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#port MediaconnectBridge#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The network output protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#protocol MediaconnectBridge#protocol}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

The network output TTL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#ttl MediaconnectBridge#ttl}

---

### MediaconnectBridgeSourceFailoverConfig <a name="MediaconnectBridgeSourceFailoverConfig" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

const mediaconnectBridgeSourceFailoverConfig: mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.failoverMode">failoverMode</a></code> | <code>string</code> | The type of failover you choose for this flow. FAILOVER allows switching between different streams. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.sourcePriority">sourcePriority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a></code> | The priority you want to assign to a source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#state MediaconnectBridge#state}. |

---

##### `failoverMode`<sup>Optional</sup> <a name="failoverMode" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.failoverMode"></a>

```typescript
public readonly failoverMode: string;
```

- *Type:* string

The type of failover you choose for this flow. FAILOVER allows switching between different streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#failover_mode MediaconnectBridge#failover_mode}

---

##### `sourcePriority`<sup>Optional</sup> <a name="sourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.sourcePriority"></a>

```typescript
public readonly sourcePriority: MediaconnectBridgeSourceFailoverConfigSourcePriority;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

The priority you want to assign to a source.

You can have a primary stream and a backup stream or two equally prioritized streams.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#source_priority MediaconnectBridge#source_priority}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#state MediaconnectBridge#state}.

---

### MediaconnectBridgeSourceFailoverConfigSourcePriority <a name="MediaconnectBridgeSourceFailoverConfigSourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

const mediaconnectBridgeSourceFailoverConfigSourcePriority: mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority.property.primarySource">primarySource</a></code> | <code>string</code> | The name of the source you choose as the primary source for this flow. |

---

##### `primarySource`<sup>Optional</sup> <a name="primarySource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority.property.primarySource"></a>

```typescript
public readonly primarySource: string;
```

- *Type:* string

The name of the source you choose as the primary source for this flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#primary_source MediaconnectBridge#primary_source}

---

### MediaconnectBridgeSources <a name="MediaconnectBridgeSources" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

const mediaconnectBridgeSources: mediaconnectBridge.MediaconnectBridgeSources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.flowSource">flowSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a></code> | The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.networkSource">networkSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a></code> | The source of the bridge. A network source originates at your premises. |

---

##### `flowSource`<sup>Optional</sup> <a name="flowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.flowSource"></a>

```typescript
public readonly flowSource: MediaconnectBridgeSourcesFlowSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a>

The source of the bridge. A flow source originates in MediaConnect as an existing cloud flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#flow_source MediaconnectBridge#flow_source}

---

##### `networkSource`<sup>Optional</sup> <a name="networkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources.property.networkSource"></a>

```typescript
public readonly networkSource: MediaconnectBridgeSourcesNetworkSource;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a>

The source of the bridge. A network source originates at your premises.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#network_source MediaconnectBridge#network_source}

---

### MediaconnectBridgeSourcesFlowSource <a name="MediaconnectBridgeSourcesFlowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

const mediaconnectBridgeSourcesFlowSource: mediaconnectBridge.MediaconnectBridgeSourcesFlowSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowArn">flowArn</a></code> | <code>string</code> | The ARN of the cloud flow used as a source of this bridge. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowVpcInterfaceAttachment">flowVpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a></code> | The name of the VPC interface attachment to use for this source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.name">name</a></code> | <code>string</code> | The name of the flow source. |

---

##### `flowArn`<sup>Optional</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

The ARN of the cloud flow used as a source of this bridge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#flow_arn MediaconnectBridge#flow_arn}

---

##### `flowVpcInterfaceAttachment`<sup>Optional</sup> <a name="flowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.flowVpcInterfaceAttachment"></a>

```typescript
public readonly flowVpcInterfaceAttachment: MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

The name of the VPC interface attachment to use for this source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#flow_vpc_interface_attachment MediaconnectBridge#flow_vpc_interface_attachment}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the flow source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

### MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment <a name="MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

const mediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment: mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | The name of the VPC interface to use for this resource. |

---

##### `vpcInterfaceName`<sup>Optional</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

The name of the VPC interface to use for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#vpc_interface_name MediaconnectBridge#vpc_interface_name}

---

### MediaconnectBridgeSourcesNetworkSource <a name="MediaconnectBridgeSourcesNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

const mediaconnectBridgeSourcesNetworkSource: mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastIp">multicastIp</a></code> | <code>string</code> | The network source multicast IP. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastSourceSettings">multicastSourceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a></code> | The settings related to the multicast source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.name">name</a></code> | <code>string</code> | The name of the network source. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.networkName">networkName</a></code> | <code>string</code> | The network source's gateway network name. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.port">port</a></code> | <code>number</code> | The network source port. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.protocol">protocol</a></code> | <code>string</code> | The network source protocol. |

---

##### `multicastIp`<sup>Optional</sup> <a name="multicastIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastIp"></a>

```typescript
public readonly multicastIp: string;
```

- *Type:* string

The network source multicast IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#multicast_ip MediaconnectBridge#multicast_ip}

---

##### `multicastSourceSettings`<sup>Optional</sup> <a name="multicastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.multicastSourceSettings"></a>

```typescript
public readonly multicastSourceSettings: MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

The settings related to the multicast source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#multicast_source_settings MediaconnectBridge#multicast_source_settings}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the network source.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#name MediaconnectBridge#name}

---

##### `networkName`<sup>Optional</sup> <a name="networkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

The network source's gateway network name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#network_name MediaconnectBridge#network_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The network source port.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#port MediaconnectBridge#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The network source protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#protocol MediaconnectBridge#protocol}

---

### MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings <a name="MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

const mediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings: mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.property.multicastSourceIp">multicastSourceIp</a></code> | <code>string</code> | The IP address of the source for source-specific multicast (SSM). |

---

##### `multicastSourceIp`<sup>Optional</sup> <a name="multicastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings.property.multicastSourceIp"></a>

```typescript
public readonly multicastSourceIp: string;
```

- *Type:* string

The IP address of the source for source-specific multicast (SSM).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/mediaconnect_bridge#multicast_source_ip MediaconnectBridge#multicast_source_ip}

---

## Classes <a name="Classes" id="Classes"></a>

### MediaconnectBridgeEgressGatewayBridgeOutputReference <a name="MediaconnectBridgeEgressGatewayBridgeOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resetMaxBitrate">resetMaxBitrate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBitrate` <a name="resetMaxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.resetMaxBitrate"></a>

```typescript
public resetMaxBitrate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrateInput">maxBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrate">maxBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxBitrateInput`<sup>Optional</sup> <a name="maxBitrateInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrateInput"></a>

```typescript
public readonly maxBitrateInput: number;
```

- *Type:* number

---

##### `maxBitrate`<sup>Required</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.maxBitrate"></a>

```typescript
public readonly maxBitrate: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridgeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeEgressGatewayBridge;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeEgressGatewayBridge">MediaconnectBridgeEgressGatewayBridge</a>

---


### MediaconnectBridgeIngressGatewayBridgeOutputReference <a name="MediaconnectBridgeIngressGatewayBridgeOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxBitrate">resetMaxBitrate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxOutputs">resetMaxOutputs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxBitrate` <a name="resetMaxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxBitrate"></a>

```typescript
public resetMaxBitrate(): void
```

##### `resetMaxOutputs` <a name="resetMaxOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.resetMaxOutputs"></a>

```typescript
public resetMaxOutputs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrateInput">maxBitrateInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputsInput">maxOutputsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrate">maxBitrate</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputs">maxOutputs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxBitrateInput`<sup>Optional</sup> <a name="maxBitrateInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrateInput"></a>

```typescript
public readonly maxBitrateInput: number;
```

- *Type:* number

---

##### `maxOutputsInput`<sup>Optional</sup> <a name="maxOutputsInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputsInput"></a>

```typescript
public readonly maxOutputsInput: number;
```

- *Type:* number

---

##### `maxBitrate`<sup>Required</sup> <a name="maxBitrate" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxBitrate"></a>

```typescript
public readonly maxBitrate: number;
```

- *Type:* number

---

##### `maxOutputs`<sup>Required</sup> <a name="maxOutputs" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.maxOutputs"></a>

```typescript
public readonly maxOutputs: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridgeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeIngressGatewayBridge;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeIngressGatewayBridge">MediaconnectBridgeIngressGatewayBridge</a>

---


### MediaconnectBridgeOutputsList <a name="MediaconnectBridgeOutputsList" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridgeOutputsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.get"></a>

```typescript
public get(index: number): MediaconnectBridgeOutputsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeOutputs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>[]

---


### MediaconnectBridgeOutputsNetworkOutputOutputReference <a name="MediaconnectBridgeOutputsNetworkOutputOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetNetworkName">resetNetworkName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkName` <a name="resetNetworkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetNetworkName"></a>

```typescript
public resetNetworkName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.resetTtl"></a>

```typescript
public resetTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkNameInput">networkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttlInput">ttlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkName">networkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttl">ttl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkNameInput`<sup>Optional</sup> <a name="networkNameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkNameInput"></a>

```typescript
public readonly networkNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttlInput"></a>

```typescript
public readonly ttlInput: number;
```

- *Type:* number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.ttl"></a>

```typescript
public readonly ttl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeOutputsNetworkOutput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a>

---


### MediaconnectBridgeOutputsOutputReference <a name="MediaconnectBridgeOutputsOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridgeOutputsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput">putNetworkOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resetNetworkOutput">resetNetworkOutput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkOutput` <a name="putNetworkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput"></a>

```typescript
public putNetworkOutput(value: MediaconnectBridgeOutputsNetworkOutput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.putNetworkOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a>

---

##### `resetNetworkOutput` <a name="resetNetworkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.resetNetworkOutput"></a>

```typescript
public resetNetworkOutput(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutput">networkOutput</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference">MediaconnectBridgeOutputsNetworkOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutputInput">networkOutputInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkOutput`<sup>Required</sup> <a name="networkOutput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutput"></a>

```typescript
public readonly networkOutput: MediaconnectBridgeOutputsNetworkOutputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutputOutputReference">MediaconnectBridgeOutputsNetworkOutputOutputReference</a>

---

##### `networkOutputInput`<sup>Optional</sup> <a name="networkOutputInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.networkOutputInput"></a>

```typescript
public readonly networkOutputInput: IResolvable | MediaconnectBridgeOutputsNetworkOutput;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsNetworkOutput">MediaconnectBridgeOutputsNetworkOutput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeOutputs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeOutputs">MediaconnectBridgeOutputs</a>

---


### MediaconnectBridgeSourceFailoverConfigOutputReference <a name="MediaconnectBridgeSourceFailoverConfigOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.putSourcePriority">putSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetFailoverMode">resetFailoverMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetSourcePriority">resetSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetState">resetState</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSourcePriority` <a name="putSourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.putSourcePriority"></a>

```typescript
public putSourcePriority(value: MediaconnectBridgeSourceFailoverConfigSourcePriority): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.putSourcePriority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

---

##### `resetFailoverMode` <a name="resetFailoverMode" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetFailoverMode"></a>

```typescript
public resetFailoverMode(): void
```

##### `resetSourcePriority` <a name="resetSourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetSourcePriority"></a>

```typescript
public resetSourcePriority(): void
```

##### `resetState` <a name="resetState" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.resetState"></a>

```typescript
public resetState(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriority">sourcePriority</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference">MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverModeInput">failoverModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriorityInput">sourcePriorityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverMode">failoverMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `sourcePriority`<sup>Required</sup> <a name="sourcePriority" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriority"></a>

```typescript
public readonly sourcePriority: MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference">MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference</a>

---

##### `failoverModeInput`<sup>Optional</sup> <a name="failoverModeInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverModeInput"></a>

```typescript
public readonly failoverModeInput: string;
```

- *Type:* string

---

##### `sourcePriorityInput`<sup>Optional</sup> <a name="sourcePriorityInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.sourcePriorityInput"></a>

```typescript
public readonly sourcePriorityInput: IResolvable | MediaconnectBridgeSourceFailoverConfigSourcePriority;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `failoverMode`<sup>Required</sup> <a name="failoverMode" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.failoverMode"></a>

```typescript
public readonly failoverMode: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeSourceFailoverConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfig">MediaconnectBridgeSourceFailoverConfig</a>

---


### MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference <a name="MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource">resetPrimarySource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrimarySource` <a name="resetPrimarySource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.resetPrimarySource"></a>

```typescript
public resetPrimarySource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput">primarySourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySource">primarySource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `primarySourceInput`<sup>Optional</sup> <a name="primarySourceInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySourceInput"></a>

```typescript
public readonly primarySourceInput: string;
```

- *Type:* string

---

##### `primarySource`<sup>Required</sup> <a name="primarySource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.primarySource"></a>

```typescript
public readonly primarySource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriorityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeSourceFailoverConfigSourcePriority;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourceFailoverConfigSourcePriority">MediaconnectBridgeSourceFailoverConfigSourcePriority</a>

---


### MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference <a name="MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName">resetVpcInterfaceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcInterfaceName` <a name="resetVpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.resetVpcInterfaceName"></a>

```typescript
public resetVpcInterfaceName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput">vpcInterfaceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName">vpcInterfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcInterfaceNameInput`<sup>Optional</sup> <a name="vpcInterfaceNameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceNameInput"></a>

```typescript
public readonly vpcInterfaceNameInput: string;
```

- *Type:* string

---

##### `vpcInterfaceName`<sup>Required</sup> <a name="vpcInterfaceName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.vpcInterfaceName"></a>

```typescript
public readonly vpcInterfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

---


### MediaconnectBridgeSourcesFlowSourceOutputReference <a name="MediaconnectBridgeSourcesFlowSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.putFlowVpcInterfaceAttachment">putFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowArn">resetFlowArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowVpcInterfaceAttachment">resetFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFlowVpcInterfaceAttachment` <a name="putFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.putFlowVpcInterfaceAttachment"></a>

```typescript
public putFlowVpcInterfaceAttachment(value: MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.putFlowVpcInterfaceAttachment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

---

##### `resetFlowArn` <a name="resetFlowArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowArn"></a>

```typescript
public resetFlowArn(): void
```

##### `resetFlowVpcInterfaceAttachment` <a name="resetFlowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetFlowVpcInterfaceAttachment"></a>

```typescript
public resetFlowVpcInterfaceAttachment(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachment">flowVpcInterfaceAttachment</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArnInput">flowArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput">flowVpcInterfaceAttachmentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArn">flowArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowVpcInterfaceAttachment`<sup>Required</sup> <a name="flowVpcInterfaceAttachment" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachment"></a>

```typescript
public readonly flowVpcInterfaceAttachment: MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachmentOutputReference</a>

---

##### `flowArnInput`<sup>Optional</sup> <a name="flowArnInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArnInput"></a>

```typescript
public readonly flowArnInput: string;
```

- *Type:* string

---

##### `flowVpcInterfaceAttachmentInput`<sup>Optional</sup> <a name="flowVpcInterfaceAttachmentInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowVpcInterfaceAttachmentInput"></a>

```typescript
public readonly flowVpcInterfaceAttachmentInput: IResolvable | MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment">MediaconnectBridgeSourcesFlowSourceFlowVpcInterfaceAttachment</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `flowArn`<sup>Required</sup> <a name="flowArn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.flowArn"></a>

```typescript
public readonly flowArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeSourcesFlowSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a>

---


### MediaconnectBridgeSourcesList <a name="MediaconnectBridgeSourcesList" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridgeSourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.get"></a>

```typescript
public get(index: number): MediaconnectBridgeSourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeSources[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>[]

---


### MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference <a name="MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp">resetMulticastSourceIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMulticastSourceIp` <a name="resetMulticastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.resetMulticastSourceIp"></a>

```typescript
public resetMulticastSourceIp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput">multicastSourceIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp">multicastSourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multicastSourceIpInput`<sup>Optional</sup> <a name="multicastSourceIpInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIpInput"></a>

```typescript
public readonly multicastSourceIpInput: string;
```

- *Type:* string

---

##### `multicastSourceIp`<sup>Required</sup> <a name="multicastSourceIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.multicastSourceIp"></a>

```typescript
public readonly multicastSourceIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

---


### MediaconnectBridgeSourcesNetworkSourceOutputReference <a name="MediaconnectBridgeSourcesNetworkSourceOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.putMulticastSourceSettings">putMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastIp">resetMulticastIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastSourceSettings">resetMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetNetworkName">resetNetworkName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMulticastSourceSettings` <a name="putMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.putMulticastSourceSettings"></a>

```typescript
public putMulticastSourceSettings(value: MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.putMulticastSourceSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

---

##### `resetMulticastIp` <a name="resetMulticastIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastIp"></a>

```typescript
public resetMulticastIp(): void
```

##### `resetMulticastSourceSettings` <a name="resetMulticastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetMulticastSourceSettings"></a>

```typescript
public resetMulticastSourceSettings(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkName` <a name="resetNetworkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetNetworkName"></a>

```typescript
public resetNetworkName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettings">multicastSourceSettings</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIpInput">multicastIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettingsInput">multicastSourceSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkNameInput">networkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIp">multicastIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkName">networkName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `multicastSourceSettings`<sup>Required</sup> <a name="multicastSourceSettings" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettings"></a>

```typescript
public readonly multicastSourceSettings: MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettingsOutputReference</a>

---

##### `multicastIpInput`<sup>Optional</sup> <a name="multicastIpInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIpInput"></a>

```typescript
public readonly multicastIpInput: string;
```

- *Type:* string

---

##### `multicastSourceSettingsInput`<sup>Optional</sup> <a name="multicastSourceSettingsInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastSourceSettingsInput"></a>

```typescript
public readonly multicastSourceSettingsInput: IResolvable | MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings">MediaconnectBridgeSourcesNetworkSourceMulticastSourceSettings</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkNameInput`<sup>Optional</sup> <a name="networkNameInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkNameInput"></a>

```typescript
public readonly networkNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `multicastIp`<sup>Required</sup> <a name="multicastIp" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.multicastIp"></a>

```typescript
public readonly multicastIp: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkName`<sup>Required</sup> <a name="networkName" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.networkName"></a>

```typescript
public readonly networkName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeSourcesNetworkSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a>

---


### MediaconnectBridgeSourcesOutputReference <a name="MediaconnectBridgeSourcesOutputReference" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer"></a>

```typescript
import { mediaconnectBridge } from '@cdktn/provider-awscc'

new mediaconnectBridge.MediaconnectBridgeSourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource">putFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource">putNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetFlowSource">resetFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetNetworkSource">resetNetworkSource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFlowSource` <a name="putFlowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource"></a>

```typescript
public putFlowSource(value: MediaconnectBridgeSourcesFlowSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putFlowSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a>

---

##### `putNetworkSource` <a name="putNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource"></a>

```typescript
public putNetworkSource(value: MediaconnectBridgeSourcesNetworkSource): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.putNetworkSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a>

---

##### `resetFlowSource` <a name="resetFlowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetFlowSource"></a>

```typescript
public resetFlowSource(): void
```

##### `resetNetworkSource` <a name="resetNetworkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.resetNetworkSource"></a>

```typescript
public resetNetworkSource(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSource">flowSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference">MediaconnectBridgeSourcesFlowSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSource">networkSource</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference">MediaconnectBridgeSourcesNetworkSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSourceInput">flowSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSourceInput">networkSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `flowSource`<sup>Required</sup> <a name="flowSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSource"></a>

```typescript
public readonly flowSource: MediaconnectBridgeSourcesFlowSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSourceOutputReference">MediaconnectBridgeSourcesFlowSourceOutputReference</a>

---

##### `networkSource`<sup>Required</sup> <a name="networkSource" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSource"></a>

```typescript
public readonly networkSource: MediaconnectBridgeSourcesNetworkSourceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSourceOutputReference">MediaconnectBridgeSourcesNetworkSourceOutputReference</a>

---

##### `flowSourceInput`<sup>Optional</sup> <a name="flowSourceInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.flowSourceInput"></a>

```typescript
public readonly flowSourceInput: IResolvable | MediaconnectBridgeSourcesFlowSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesFlowSource">MediaconnectBridgeSourcesFlowSource</a>

---

##### `networkSourceInput`<sup>Optional</sup> <a name="networkSourceInput" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.networkSourceInput"></a>

```typescript
public readonly networkSourceInput: IResolvable | MediaconnectBridgeSourcesNetworkSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesNetworkSource">MediaconnectBridgeSourcesNetworkSource</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MediaconnectBridgeSources;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.mediaconnectBridge.MediaconnectBridgeSources">MediaconnectBridgeSources</a>

---



