# `elasticloadbalancingv2Listener` Submodule <a name="`elasticloadbalancingv2Listener` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2Listener <a name="Elasticloadbalancingv2Listener" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener awscc_elasticloadbalancingv2_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener(scope: Construct, id: string, config: Elasticloadbalancingv2ListenerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig">Elasticloadbalancingv2ListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig">Elasticloadbalancingv2ListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putCertificates">putCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putDefaultActions">putDefaultActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putListenerAttributes">putListenerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication">putMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetAlpnPolicy">resetAlpnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetCertificates">resetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetListenerAttributes">resetListenerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetMutualAuthentication">resetMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetSslPolicy">resetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCertificates` <a name="putCertificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putCertificates"></a>

```typescript
public putCertificates(value: IResolvable | Elasticloadbalancingv2ListenerCertificates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putCertificates.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>[]

---

##### `putDefaultActions` <a name="putDefaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putDefaultActions"></a>

```typescript
public putDefaultActions(value: IResolvable | Elasticloadbalancingv2ListenerDefaultActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putDefaultActions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>[]

---

##### `putListenerAttributes` <a name="putListenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putListenerAttributes"></a>

```typescript
public putListenerAttributes(value: IResolvable | Elasticloadbalancingv2ListenerListenerAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putListenerAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>[]

---

##### `putMutualAuthentication` <a name="putMutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication"></a>

```typescript
public putMutualAuthentication(value: Elasticloadbalancingv2ListenerMutualAuthentication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putTags"></a>

```typescript
public putTags(value: IResolvable | Elasticloadbalancingv2ListenerTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>[]

---

##### `resetAlpnPolicy` <a name="resetAlpnPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetAlpnPolicy"></a>

```typescript
public resetAlpnPolicy(): void
```

##### `resetCertificates` <a name="resetCertificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetCertificates"></a>

```typescript
public resetCertificates(): void
```

##### `resetListenerAttributes` <a name="resetListenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetListenerAttributes"></a>

```typescript
public resetListenerAttributes(): void
```

##### `resetMutualAuthentication` <a name="resetMutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetMutualAuthentication"></a>

```typescript
public resetMutualAuthentication(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetSslPolicy` <a name="resetSslPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetSslPolicy"></a>

```typescript
public resetSslPolicy(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isConstruct"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformElement"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformResource"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Elasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Elasticloadbalancingv2Listener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Elasticloadbalancingv2Listener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2Listener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificates">certificates</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList">Elasticloadbalancingv2ListenerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActions">defaultActions</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList">Elasticloadbalancingv2ListenerDefaultActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerArn">listenerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributes">listenerAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList">Elasticloadbalancingv2ListenerListenerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthentication">mutualAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference">Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList">Elasticloadbalancingv2ListenerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicyInput">alpnPolicyInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificatesInput">certificatesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActionsInput">defaultActionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributesInput">listenerAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArnInput">loadBalancerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthenticationInput">mutualAuthenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicyInput">sslPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicy">alpnPolicy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArn">loadBalancerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificates"></a>

```typescript
public readonly certificates: Elasticloadbalancingv2ListenerCertificatesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList">Elasticloadbalancingv2ListenerCertificatesList</a>

---

##### `defaultActions`<sup>Required</sup> <a name="defaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActions"></a>

```typescript
public readonly defaultActions: Elasticloadbalancingv2ListenerDefaultActionsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList">Elasticloadbalancingv2ListenerDefaultActionsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `listenerArn`<sup>Required</sup> <a name="listenerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerArn"></a>

```typescript
public readonly listenerArn: string;
```

- *Type:* string

---

##### `listenerAttributes`<sup>Required</sup> <a name="listenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributes"></a>

```typescript
public readonly listenerAttributes: Elasticloadbalancingv2ListenerListenerAttributesList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList">Elasticloadbalancingv2ListenerListenerAttributesList</a>

---

##### `mutualAuthentication`<sup>Required</sup> <a name="mutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthentication"></a>

```typescript
public readonly mutualAuthentication: Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference">Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tags"></a>

```typescript
public readonly tags: Elasticloadbalancingv2ListenerTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList">Elasticloadbalancingv2ListenerTagsList</a>

---

##### `alpnPolicyInput`<sup>Optional</sup> <a name="alpnPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicyInput"></a>

```typescript
public readonly alpnPolicyInput: string[];
```

- *Type:* string[]

---

##### `certificatesInput`<sup>Optional</sup> <a name="certificatesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificatesInput"></a>

```typescript
public readonly certificatesInput: IResolvable | Elasticloadbalancingv2ListenerCertificates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>[]

---

##### `defaultActionsInput`<sup>Optional</sup> <a name="defaultActionsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActionsInput"></a>

```typescript
public readonly defaultActionsInput: IResolvable | Elasticloadbalancingv2ListenerDefaultActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>[]

---

##### `listenerAttributesInput`<sup>Optional</sup> <a name="listenerAttributesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributesInput"></a>

```typescript
public readonly listenerAttributesInput: IResolvable | Elasticloadbalancingv2ListenerListenerAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>[]

---

##### `loadBalancerArnInput`<sup>Optional</sup> <a name="loadBalancerArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArnInput"></a>

```typescript
public readonly loadBalancerArnInput: string;
```

- *Type:* string

---

##### `mutualAuthenticationInput`<sup>Optional</sup> <a name="mutualAuthenticationInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthenticationInput"></a>

```typescript
public readonly mutualAuthenticationInput: IResolvable | Elasticloadbalancingv2ListenerMutualAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `sslPolicyInput`<sup>Optional</sup> <a name="sslPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicyInput"></a>

```typescript
public readonly sslPolicyInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | Elasticloadbalancingv2ListenerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>[]

---

##### `alpnPolicy`<sup>Required</sup> <a name="alpnPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicy"></a>

```typescript
public readonly alpnPolicy: string[];
```

- *Type:* string[]

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArn"></a>

```typescript
public readonly loadBalancerArn: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sslPolicy`<sup>Required</sup> <a name="sslPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2ListenerCertificates <a name="Elasticloadbalancingv2ListenerCertificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerCertificates: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates.property.certificateArn">certificateArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the certificate. |

---

##### `certificateArn`<sup>Optional</sup> <a name="certificateArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#certificate_arn Elasticloadbalancingv2Listener#certificate_arn}

---

### Elasticloadbalancingv2ListenerConfig <a name="Elasticloadbalancingv2ListenerConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerConfig: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.defaultActions">defaultActions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>[]</code> | The actions for the default rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.loadBalancerArn">loadBalancerArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.alpnPolicy">alpnPolicy</a></code> | <code>string[]</code> | [TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.certificates">certificates</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>[]</code> | The default SSL server certificate for a secure listener. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.listenerAttributes">listenerAttributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>[]</code> | The listener attributes. Attributes that you do not modify retain their current values. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.mutualAuthentication">mutualAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a></code> | The mutual authentication configuration information. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.port">port</a></code> | <code>number</code> | The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.protocol">protocol</a></code> | <code>string</code> | The protocol for connections from clients to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.sslPolicy">sslPolicy</a></code> | <code>string</code> | [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#tags Elasticloadbalancingv2Listener#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `defaultActions`<sup>Required</sup> <a name="defaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.defaultActions"></a>

```typescript
public readonly defaultActions: IResolvable | Elasticloadbalancingv2ListenerDefaultActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>[]

The actions for the default rule.

You cannot define a condition for a default rule.
 To create additional rules for an Application Load Balancer, use [AWS::ElasticLoadBalancingV2::ListenerRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#default_actions Elasticloadbalancingv2Listener#default_actions}

---

##### `loadBalancerArn`<sup>Required</sup> <a name="loadBalancerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.loadBalancerArn"></a>

```typescript
public readonly loadBalancerArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#load_balancer_arn Elasticloadbalancingv2Listener#load_balancer_arn}

---

##### `alpnPolicy`<sup>Optional</sup> <a name="alpnPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.alpnPolicy"></a>

```typescript
public readonly alpnPolicy: string[];
```

- *Type:* string[]

[TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#alpn_policy Elasticloadbalancingv2Listener#alpn_policy}

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.certificates"></a>

```typescript
public readonly certificates: IResolvable | Elasticloadbalancingv2ListenerCertificates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>[]

The default SSL server certificate for a secure listener.

You must provide exactly one certificate if the listener protocol is HTTPS or TLS.
 For an HTTPS listener, update requires some interruptions. For a TLS listener, update requires no interruption.
 To create a certificate list for a secure listener, use [AWS::ElasticLoadBalancingV2::ListenerCertificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#certificates Elasticloadbalancingv2Listener#certificates}

---

##### `listenerAttributes`<sup>Optional</sup> <a name="listenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.listenerAttributes"></a>

```typescript
public readonly listenerAttributes: IResolvable | Elasticloadbalancingv2ListenerListenerAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>[]

The listener attributes. Attributes that you do not modify retain their current values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#listener_attributes Elasticloadbalancingv2Listener#listener_attributes}

---

##### `mutualAuthentication`<sup>Optional</sup> <a name="mutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.mutualAuthentication"></a>

```typescript
public readonly mutualAuthentication: Elasticloadbalancingv2ListenerMutualAuthentication;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

The mutual authentication configuration information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#mutual_authentication Elasticloadbalancingv2Listener#mutual_authentication}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#port Elasticloadbalancingv2Listener#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol for connections from clients to the load balancer.

For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC. You can’t specify the UDP, TCP_UDP, QUIC, or TCP_QUIC protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#protocol Elasticloadbalancingv2Listener#protocol}

---

##### `sslPolicy`<sup>Optional</sup> <a name="sslPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.sslPolicy"></a>

```typescript
public readonly sslPolicy: string;
```

- *Type:* string

[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.

For more information, see [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/describe-ssl-policies.html) in the *Application Load Balancers Guide* and [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html) in the *Network Load Balancers Guide*.
 [HTTPS listeners] Updating the security policy can result in interruptions if the load balancer is handling a high volume of traffic. To decrease the possibility of an interruption if your load balancer is handling a high volume of traffic, create an additional load balancer or request an LCU reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#ssl_policy Elasticloadbalancingv2Listener#ssl_policy}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | Elasticloadbalancingv2ListenerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#tags Elasticloadbalancingv2Listener#tags}.

---

### Elasticloadbalancingv2ListenerDefaultActions <a name="Elasticloadbalancingv2ListenerDefaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerDefaultActions: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.type">type</a></code> | <code>string</code> | The type of action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateCognitoConfig">authenticateCognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a></code> | [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateOidcConfig">authenticateOidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a></code> | [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.fixedResponseConfig">fixedResponseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a></code> | [Application Load Balancer] Information for creating an action that returns a custom HTTP response. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.forwardConfig">forwardConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a></code> | Information for creating an action that distributes requests among multiple target groups. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.jwtValidationConfig">jwtValidationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a></code> | [HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.order">order</a></code> | <code>number</code> | The order for the action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.redirectConfig">redirectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a></code> | [Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the target group. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

The type of action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#type Elasticloadbalancingv2Listener#type}

---

##### `authenticateCognitoConfig`<sup>Optional</sup> <a name="authenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateCognitoConfig"></a>

```typescript
public readonly authenticateCognitoConfig: Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#authenticate_cognito_config Elasticloadbalancingv2Listener#authenticate_cognito_config}

---

##### `authenticateOidcConfig`<sup>Optional</sup> <a name="authenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateOidcConfig"></a>

```typescript
public readonly authenticateOidcConfig: Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC).

Specify only when ``Type`` is ``authenticate-oidc``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#authenticate_oidc_config Elasticloadbalancingv2Listener#authenticate_oidc_config}

---

##### `fixedResponseConfig`<sup>Optional</sup> <a name="fixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.fixedResponseConfig"></a>

```typescript
public readonly fixedResponseConfig: Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

[Application Load Balancer] Information for creating an action that returns a custom HTTP response.

Specify only when ``Type`` is ``fixed-response``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#fixed_response_config Elasticloadbalancingv2Listener#fixed_response_config}

---

##### `forwardConfig`<sup>Optional</sup> <a name="forwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.forwardConfig"></a>

```typescript
public readonly forwardConfig: Elasticloadbalancingv2ListenerDefaultActionsForwardConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

Information for creating an action that distributes requests among multiple target groups.

Specify only when ``Type`` is ``forward``.
 If you specify both ``ForwardConfig`` and ``TargetGroupArn``, you can specify only one target group using ``ForwardConfig`` and it must be the same target group specified in ``TargetGroupArn``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#forward_config Elasticloadbalancingv2Listener#forward_config}

---

##### `jwtValidationConfig`<sup>Optional</sup> <a name="jwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.jwtValidationConfig"></a>

```typescript
public readonly jwtValidationConfig: Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

[HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#jwt_validation_config Elasticloadbalancingv2Listener#jwt_validation_config}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

The order for the action.

This value is required for rules with multiple actions. The action with the lowest value for order is performed first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#order Elasticloadbalancingv2Listener#order}

---

##### `redirectConfig`<sup>Optional</sup> <a name="redirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.redirectConfig"></a>

```typescript
public readonly redirectConfig: Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

[Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#redirect_config Elasticloadbalancingv2Listener#redirect_config}

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the target group.

Specify only when ``Type`` is ``forward`` and you want to route to a single target group. To route to multiple target groups, you must use ``ForwardConfig`` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#target_group_arn Elasticloadbalancingv2Listener#target_group_arn}

---

### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.scope">scope</a></code> | <code>string</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionTimeout">sessionTimeout</a></code> | <code>string</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the Amazon Cognito user pool. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolClientId">userPoolClientId</a></code> | <code>string</code> | The ID of the Amazon Cognito user pool client. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolDomain">userPoolDomain</a></code> | <code>string</code> | The domain prefix or fully-qualified domain name of the Amazon Cognito user pool. |

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#authentication_request_extra_params Elasticloadbalancingv2Listener#authentication_request_extra_params}

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

The behavior if the user is not authenticated.

The following are possible values:
  +  deny```` - Return an HTTP 401 Unauthorized error.
  +  allow```` - Allow the request to be forwarded to the target.
  +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#on_unauthenticated_request Elasticloadbalancingv2Listener#on_unauthenticated_request}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The set of user claims to be requested from the IdP.

The default is ``openid``.
 To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#scope Elasticloadbalancingv2Listener#scope}

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#session_cookie_name Elasticloadbalancingv2Listener#session_cookie_name}

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: string;
```

- *Type:* string

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#session_timeout Elasticloadbalancingv2Listener#session_timeout}

---

##### `userPoolArn`<sup>Optional</sup> <a name="userPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#user_pool_arn Elasticloadbalancingv2Listener#user_pool_arn}

---

##### `userPoolClientId`<sup>Optional</sup> <a name="userPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolClientId"></a>

```typescript
public readonly userPoolClientId: string;
```

- *Type:* string

The ID of the Amazon Cognito user pool client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#user_pool_client_id Elasticloadbalancingv2Listener#user_pool_client_id}

---

##### `userPoolDomain`<sup>Optional</sup> <a name="userPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolDomain"></a>

```typescript
public readonly userPoolDomain: string;
```

- *Type:* string

The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#user_pool_domain Elasticloadbalancingv2Listener#user_pool_domain}

---

### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | The authorization endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientId">clientId</a></code> | <code>string</code> | The OAuth 2.0 client identifier. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientSecret">clientSecret</a></code> | <code>string</code> | The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.issuer">issuer</a></code> | <code>string</code> | The OIDC issuer identifier of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.scope">scope</a></code> | <code>string</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionTimeout">sessionTimeout</a></code> | <code>string</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The token endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.useExistingClientSecret">useExistingClientSecret</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether to use the existing client secret when modifying a rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | The user info endpoint of the IdP. |

---

##### `authenticationRequestExtraParams`<sup>Optional</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#authentication_request_extra_params Elasticloadbalancingv2Listener#authentication_request_extra_params}

---

##### `authorizationEndpoint`<sup>Optional</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

The authorization endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#authorization_endpoint Elasticloadbalancingv2Listener#authorization_endpoint}

---

##### `clientId`<sup>Optional</sup> <a name="clientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The OAuth 2.0 client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#client_id Elasticloadbalancingv2Listener#client_id}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#client_secret Elasticloadbalancingv2Listener#client_secret}

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

The OIDC issuer identifier of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}

---

##### `onUnauthenticatedRequest`<sup>Optional</sup> <a name="onUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

The behavior if the user is not authenticated.

The following are possible values:
  +  deny```` - Return an HTTP 401 Unauthorized error.
  +  allow```` - Allow the request to be forwarded to the target.
  +  authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#on_unauthenticated_request Elasticloadbalancingv2Listener#on_unauthenticated_request}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

The set of user claims to be requested from the IdP.

The default is ``openid``.
 To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#scope Elasticloadbalancingv2Listener#scope}

---

##### `sessionCookieName`<sup>Optional</sup> <a name="sessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#session_cookie_name Elasticloadbalancingv2Listener#session_cookie_name}

---

##### `sessionTimeout`<sup>Optional</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: string;
```

- *Type:* string

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#session_timeout Elasticloadbalancingv2Listener#session_timeout}

---

##### `tokenEndpoint`<sup>Optional</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The token endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#token_endpoint Elasticloadbalancingv2Listener#token_endpoint}

---

##### `useExistingClientSecret`<sup>Optional</sup> <a name="useExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.useExistingClientSecret"></a>

```typescript
public readonly useExistingClientSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether to use the existing client secret when modifying a rule.

If you are creating a rule, you can omit this parameter or set it to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#use_existing_client_secret Elasticloadbalancingv2Listener#use_existing_client_secret}

---

##### `userInfoEndpoint`<sup>Optional</sup> <a name="userInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

The user info endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#user_info_endpoint Elasticloadbalancingv2Listener#user_info_endpoint}

---

### Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.contentType">contentType</a></code> | <code>string</code> | The content type.  Valid Values: text/plain \| text/css \| text/html \| application/javascript \| application/json. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.messageBody">messageBody</a></code> | <code>string</code> | The message. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.statusCode">statusCode</a></code> | <code>string</code> | The HTTP response code (2XX, 4XX, or 5XX). |

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

The content type.  Valid Values: text/plain | text/css | text/html | application/javascript | application/json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#content_type Elasticloadbalancingv2Listener#content_type}

---

##### `messageBody`<sup>Optional</sup> <a name="messageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

The message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#message_body Elasticloadbalancingv2Listener#message_body}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

The HTTP response code (2XX, 4XX, or 5XX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#status_code Elasticloadbalancingv2Listener#status_code}

---

### Elasticloadbalancingv2ListenerDefaultActionsForwardConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerDefaultActionsForwardConfig: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroups">targetGroups</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>[]</code> | Information about how traffic will be distributed between multiple target groups in a forward rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroupStickinessConfig">targetGroupStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a></code> | Information about the target group stickiness for a rule. |

---

##### `targetGroups`<sup>Optional</sup> <a name="targetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroups"></a>

```typescript
public readonly targetGroups: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>[]

Information about how traffic will be distributed between multiple target groups in a forward rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#target_groups Elasticloadbalancingv2Listener#target_groups}

---

##### `targetGroupStickinessConfig`<sup>Optional</sup> <a name="targetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroupStickinessConfig"></a>

```typescript
public readonly targetGroupStickinessConfig: Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

Information about the target group stickiness for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#target_group_stickiness_config Elasticloadbalancingv2Listener#target_group_stickiness_config}

---

### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.weight">weight</a></code> | <code>number</code> | The weight. The range is 0 to 999. |

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#target_group_arn Elasticloadbalancingv2Listener#target_group_arn}

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

The weight. The range is 0 to 999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#weight Elasticloadbalancingv2Listener#weight}

---

### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | [Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether target group stickiness is enabled. |

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

[Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group.

The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#duration_seconds Elasticloadbalancingv2Listener#duration_seconds}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether target group stickiness is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#enabled Elasticloadbalancingv2Listener#enabled}

---

### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.additionalClaims">additionalClaims</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#additional_claims Elasticloadbalancingv2Listener#additional_claims}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.issuer">issuer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.jwksEndpoint">jwksEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#jwks_endpoint Elasticloadbalancingv2Listener#jwks_endpoint}. |

---

##### `additionalClaims`<sup>Optional</sup> <a name="additionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.additionalClaims"></a>

```typescript
public readonly additionalClaims: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#additional_claims Elasticloadbalancingv2Listener#additional_claims}.

---

##### `issuer`<sup>Optional</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}.

---

##### `jwksEndpoint`<sup>Optional</sup> <a name="jwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.jwksEndpoint"></a>

```typescript
public readonly jwksEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#jwks_endpoint Elasticloadbalancingv2Listener#jwks_endpoint}.

---

### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.format">format</a></code> | <code>string</code> | The format of the claim value. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.name">name</a></code> | <code>string</code> | The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.values">values</a></code> | <code>string[]</code> | The claim value. |

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

The format of the claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#format Elasticloadbalancingv2Listener#format}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#name Elasticloadbalancingv2Listener#name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

The claim value.

The maximum size of the list is 10. Each value can be up to 256 characters in length. If the format is ``space-separated-values``, the values can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#values Elasticloadbalancingv2Listener#values}

---

### Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerDefaultActionsRedirectConfig: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.host">host</a></code> | <code>string</code> | The hostname. This component is not percent-encoded. The hostname can contain #{host}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.path">path</a></code> | <code>string</code> | The absolute path, starting with the leading "/". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.port">port</a></code> | <code>string</code> | The port. You can specify a value from 1 to 65535 or #{port}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.protocol">protocol</a></code> | <code>string</code> | The protocol. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.query">query</a></code> | <code>string</code> | The query parameters, URL-encoded when necessary, but not percent-encoded. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.statusCode">statusCode</a></code> | <code>string</code> | The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302). |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The hostname. This component is not percent-encoded. The hostname can contain #{host}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#host Elasticloadbalancingv2Listener#host}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The absolute path, starting with the leading "/".

This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#path Elasticloadbalancingv2Listener#path}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

The port. You can specify a value from 1 to 65535 or #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#port Elasticloadbalancingv2Listener#port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

The protocol.

You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#protocol Elasticloadbalancingv2Listener#protocol}

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

The query parameters, URL-encoded when necessary, but not percent-encoded.

Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#query Elasticloadbalancingv2Listener#query}

---

##### `statusCode`<sup>Optional</sup> <a name="statusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#status_code Elasticloadbalancingv2Listener#status_code}

---

### Elasticloadbalancingv2ListenerListenerAttributes <a name="Elasticloadbalancingv2ListenerListenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerListenerAttributes: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.key">key</a></code> | <code>string</code> | The name of the attribute. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.value">value</a></code> | <code>string</code> | The value of the attribute. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The name of the attribute.

The following attribute is supported by Network Load Balancers, and Gateway Load Balancers.
  +  ``tcp.idle_timeout.seconds`` - The tcp idle timeout value, in seconds. The valid range is 60-6000 seconds. The default is 350 seconds.
  
 The following attributes are only supported by Application Load Balancers.
  +  ``routing.http.request.x_amzn_mtls_clientcert_serial_number.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Serial-Number* HTTP request header.
  +  ``routing.http.request.x_amzn_mtls_clientcert_issuer.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Issuer* HTTP request header.
  +  ``routing.http.request.x_amzn_mtls_clientcert_subject.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Subject* HTTP request header.
  +  ``routing.http.request.x_amzn_mtls_clientcert_validity.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Validity* HTTP request header.
  +  ``routing.http.request.x_amzn_mtls_clientcert_leaf.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Leaf* HTTP request header.
  +  ``routing.http.request.x_amzn_mtls_clientcert.header_name`` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert* HTTP request header.
  +  ``routing.http.request.x_amzn_tls_version.header_name`` - Enables you to modify the header name of the *X-Amzn-Tls-Version* HTTP request header.
  +  ``routing.http.request.x_amzn_tls_cipher_suite.header_name`` - Enables you to modify the header name of the *X-Amzn-Tls-Cipher-Suite* HTTP request header.
  +  ``routing.http.response.server.enabled`` - Enables you to allow or remove the HTTP response server header.
  +  ``routing.http.response.strict_transport_security.header_value`` - Informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS.
  +  ``routing.http.response.access_control_allow_origin.header_value`` - Specifies which origins are allowed to access the server.
  +  ``routing.http.response.access_control_allow_methods.header_value`` - Returns which HTTP methods are allowed when accessing the server from a different origin.
  +  ``routing.http.response.access_control_allow_headers.header_value`` - Specifies which headers can be used during the request.
  +  ``routing.http.response.access_control_allow_credentials.header_value`` - Indicates whether the browser should include credentials such as cookies or authentication when making requests.
  +  ``routing.http.response.access_control_expose_headers.header_value`` - Returns which headers the browser can expose to the requesting client.
  +  ``routing.http.response.access_control_max_age.header_value`` - Specifies how long the results of a preflight request can be cached, in seconds.
  +  ``routing.http.response.content_security_policy.header_value`` - Specifies restrictions enforced by the browser to help minimize the risk of certain types of security threats.
  +  ``routing.http.response.x_content_type_options.header_value`` - Indicates whether the MIME types advertised in the *Content-Type* headers should be followed and not be changed.
  +  ``routing.http.response.x_frame_options.header_value`` - Indicates whether the browser is allowed to render a page in a *frame*, *iframe*, *embed* or *object*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#key Elasticloadbalancingv2Listener#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#value Elasticloadbalancingv2Listener#value}

---

### Elasticloadbalancingv2ListenerMutualAuthentication <a name="Elasticloadbalancingv2ListenerMutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerMutualAuthentication: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.advertiseTrustStoreCaNames">advertiseTrustStoreCaNames</a></code> | <code>string</code> | Indicates whether trust store CA certificate names are advertised. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.ignoreClientCertificateExpiry">ignoreClientCertificateExpiry</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether expired client certificates are ignored. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.mode">mode</a></code> | <code>string</code> | The client certificate handling method. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.trustStoreArn">trustStoreArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the trust store. |

---

##### `advertiseTrustStoreCaNames`<sup>Optional</sup> <a name="advertiseTrustStoreCaNames" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.advertiseTrustStoreCaNames"></a>

```typescript
public readonly advertiseTrustStoreCaNames: string;
```

- *Type:* string

Indicates whether trust store CA certificate names are advertised.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#advertise_trust_store_ca_names Elasticloadbalancingv2Listener#advertise_trust_store_ca_names}

---

##### `ignoreClientCertificateExpiry`<sup>Optional</sup> <a name="ignoreClientCertificateExpiry" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.ignoreClientCertificateExpiry"></a>

```typescript
public readonly ignoreClientCertificateExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether expired client certificates are ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#ignore_client_certificate_expiry Elasticloadbalancingv2Listener#ignore_client_certificate_expiry}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

The client certificate handling method.

Options are ``off``, ``passthrough`` or ``verify``. The default value on initial resource creation is ``off``. After mutual authentication is turned on, you must explicitly set the ``Mode`` to ``off`` to turn it off; removing the property from your template will not turn it off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#mode Elasticloadbalancingv2Listener#mode}

---

##### `trustStoreArn`<sup>Optional</sup> <a name="trustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.trustStoreArn"></a>

```typescript
public readonly trustStoreArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#trust_store_arn Elasticloadbalancingv2Listener#trust_store_arn}

---

### Elasticloadbalancingv2ListenerTags <a name="Elasticloadbalancingv2ListenerTags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

const elasticloadbalancingv2ListenerTags: elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.key">key</a></code> | <code>string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.value">value</a></code> | <code>string</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#key Elasticloadbalancingv2Listener#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_listener#value Elasticloadbalancingv2Listener#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2ListenerCertificatesList <a name="Elasticloadbalancingv2ListenerCertificatesList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerCertificates[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>[]

---


### Elasticloadbalancingv2ListenerCertificatesOutputReference <a name="Elasticloadbalancingv2ListenerCertificatesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resetCertificateArn">resetCertificateArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateArn` <a name="resetCertificateArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resetCertificateArn"></a>

```typescript
public resetCertificateArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArnInput">certificateArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn">certificateArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateArnInput`<sup>Optional</sup> <a name="certificateArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArnInput"></a>

```typescript
public readonly certificateArnInput: string;
```

- *Type:* string

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerCertificates;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates">Elasticloadbalancingv2ListenerCertificates</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn">resetUserPoolArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId">resetUserPoolClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain">resetUserPoolDomain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```typescript
public resetAuthenticationRequestExtraParams(): void
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```typescript
public resetOnUnauthenticatedRequest(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName"></a>

```typescript
public resetSessionCookieName(): void
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout"></a>

```typescript
public resetSessionTimeout(): void
```

##### `resetUserPoolArn` <a name="resetUserPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn"></a>

```typescript
public resetUserPoolArn(): void
```

##### `resetUserPoolClientId` <a name="resetUserPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId"></a>

```typescript
public resetUserPoolClientId(): void
```

##### `resetUserPoolDomain` <a name="resetUserPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain"></a>

```typescript
public resetUserPoolDomain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput">userPoolArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput">userPoolClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput">userPoolDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn">userPoolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId">userPoolClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain">userPoolDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```typescript
public readonly authenticationRequestExtraParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```typescript
public readonly onUnauthenticatedRequestInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput"></a>

```typescript
public readonly sessionCookieNameInput: string;
```

- *Type:* string

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput"></a>

```typescript
public readonly sessionTimeoutInput: string;
```

- *Type:* string

---

##### `userPoolArnInput`<sup>Optional</sup> <a name="userPoolArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput"></a>

```typescript
public readonly userPoolArnInput: string;
```

- *Type:* string

---

##### `userPoolClientIdInput`<sup>Optional</sup> <a name="userPoolClientIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput"></a>

```typescript
public readonly userPoolClientIdInput: string;
```

- *Type:* string

---

##### `userPoolDomainInput`<sup>Optional</sup> <a name="userPoolDomainInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput"></a>

```typescript
public readonly userPoolDomainInput: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: string;
```

- *Type:* string

---

##### `userPoolArn`<sup>Required</sup> <a name="userPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn"></a>

```typescript
public readonly userPoolArn: string;
```

- *Type:* string

---

##### `userPoolClientId`<sup>Required</sup> <a name="userPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId"></a>

```typescript
public readonly userPoolClientId: string;
```

- *Type:* string

---

##### `userPoolDomain`<sup>Required</sup> <a name="userPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain"></a>

```typescript
public readonly userPoolDomain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams">resetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint">resetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientId">resetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest">resetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName">resetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout">resetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint">resetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret">resetUseExistingClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint">resetUserInfoEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthenticationRequestExtraParams` <a name="resetAuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```typescript
public resetAuthenticationRequestExtraParams(): void
```

##### `resetAuthorizationEndpoint` <a name="resetAuthorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint"></a>

```typescript
public resetAuthorizationEndpoint(): void
```

##### `resetClientId` <a name="resetClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientId"></a>

```typescript
public resetClientId(): void
```

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientSecret"></a>

```typescript
public resetClientSecret(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetOnUnauthenticatedRequest` <a name="resetOnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```typescript
public resetOnUnauthenticatedRequest(): void
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetScope"></a>

```typescript
public resetScope(): void
```

##### `resetSessionCookieName` <a name="resetSessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName"></a>

```typescript
public resetSessionCookieName(): void
```

##### `resetSessionTimeout` <a name="resetSessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout"></a>

```typescript
public resetSessionTimeout(): void
```

##### `resetTokenEndpoint` <a name="resetTokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint"></a>

```typescript
public resetTokenEndpoint(): void
```

##### `resetUseExistingClientSecret` <a name="resetUseExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret"></a>

```typescript
public resetUseExistingClientSecret(): void
```

##### `resetUserInfoEndpoint` <a name="resetUserInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint"></a>

```typescript
public resetUserInfoEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput">authenticationRequestExtraParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput">authorizationEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput">onUnauthenticatedRequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scopeInput">scopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput">sessionCookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput">sessionTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput">useExistingClientSecretInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput">userInfoEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams">authenticationRequestExtraParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint">authorizationEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId">clientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest">onUnauthenticatedRequest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope">scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName">sessionCookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout">sessionTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret">useExistingClientSecret</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint">userInfoEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="authenticationRequestExtraParamsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```typescript
public readonly authenticationRequestExtraParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizationEndpointInput`<sup>Optional</sup> <a name="authorizationEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput"></a>

```typescript
public readonly authorizationEndpointInput: string;
```

- *Type:* string

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientIdInput"></a>

```typescript
public readonly clientIdInput: string;
```

- *Type:* string

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput"></a>

```typescript
public readonly clientSecretInput: string;
```

- *Type:* string

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `onUnauthenticatedRequestInput`<sup>Optional</sup> <a name="onUnauthenticatedRequestInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```typescript
public readonly onUnauthenticatedRequestInput: string;
```

- *Type:* string

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scopeInput"></a>

```typescript
public readonly scopeInput: string;
```

- *Type:* string

---

##### `sessionCookieNameInput`<sup>Optional</sup> <a name="sessionCookieNameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput"></a>

```typescript
public readonly sessionCookieNameInput: string;
```

- *Type:* string

---

##### `sessionTimeoutInput`<sup>Optional</sup> <a name="sessionTimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput"></a>

```typescript
public readonly sessionTimeoutInput: string;
```

- *Type:* string

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput"></a>

```typescript
public readonly tokenEndpointInput: string;
```

- *Type:* string

---

##### `useExistingClientSecretInput`<sup>Optional</sup> <a name="useExistingClientSecretInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput"></a>

```typescript
public readonly useExistingClientSecretInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userInfoEndpointInput`<sup>Optional</sup> <a name="userInfoEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput"></a>

```typescript
public readonly userInfoEndpointInput: string;
```

- *Type:* string

---

##### `authenticationRequestExtraParams`<sup>Required</sup> <a name="authenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams"></a>

```typescript
public readonly authenticationRequestExtraParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authorizationEndpoint`<sup>Required</sup> <a name="authorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint"></a>

```typescript
public readonly authorizationEndpoint: string;
```

- *Type:* string

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `onUnauthenticatedRequest`<sup>Required</sup> <a name="onUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest"></a>

```typescript
public readonly onUnauthenticatedRequest: string;
```

- *Type:* string

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope"></a>

```typescript
public readonly scope: string;
```

- *Type:* string

---

##### `sessionCookieName`<sup>Required</sup> <a name="sessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName"></a>

```typescript
public readonly sessionCookieName: string;
```

- *Type:* string

---

##### `sessionTimeout`<sup>Required</sup> <a name="sessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout"></a>

```typescript
public readonly sessionTimeout: string;
```

- *Type:* string

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

---

##### `useExistingClientSecret`<sup>Required</sup> <a name="useExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret"></a>

```typescript
public readonly useExistingClientSecret: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userInfoEndpoint`<sup>Required</sup> <a name="userInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint"></a>

```typescript
public readonly userInfoEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetMessageBody">resetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetMessageBody` <a name="resetMessageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetMessageBody"></a>

```typescript
public resetMessageBody(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBodyInput">messageBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody">messageBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `messageBodyInput`<sup>Optional</sup> <a name="messageBodyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBodyInput"></a>

```typescript
public readonly messageBodyInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `messageBody`<sup>Required</sup> <a name="messageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody"></a>

```typescript
public readonly messageBody: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroups">putTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroupStickinessConfig">putTargetGroupStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroups">resetTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig">resetTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTargetGroups` <a name="putTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroups"></a>

```typescript
public putTargetGroups(value: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>[]

---

##### `putTargetGroupStickinessConfig` <a name="putTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroupStickinessConfig"></a>

```typescript
public putTargetGroupStickinessConfig(value: Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroupStickinessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

---

##### `resetTargetGroups` <a name="resetTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroups"></a>

```typescript
public resetTargetGroups(): void
```

##### `resetTargetGroupStickinessConfig` <a name="resetTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig"></a>

```typescript
public resetTargetGroupStickinessConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups">targetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig">targetGroupStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupsInput">targetGroupsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput">targetGroupStickinessConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetGroups`<sup>Required</sup> <a name="targetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups"></a>

```typescript
public readonly targetGroups: Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a>

---

##### `targetGroupStickinessConfig`<sup>Required</sup> <a name="targetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig"></a>

```typescript
public readonly targetGroupStickinessConfig: Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a>

---

##### `targetGroupsInput`<sup>Optional</sup> <a name="targetGroupsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupsInput"></a>

```typescript
public readonly targetGroupsInput: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>[]

---

##### `targetGroupStickinessConfigInput`<sup>Optional</sup> <a name="targetGroupStickinessConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput"></a>

```typescript
public readonly targetGroupStickinessConfigInput: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>[]

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn"></a>

```typescript
public resetTargetGroupArn(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput"></a>

```typescript
public readonly targetGroupArnInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds"></a>

```typescript
public resetDurationSeconds(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput">durationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput"></a>

```typescript
public readonly durationSecondsInput: number;
```

- *Type:* number

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>[]

---


### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat"></a>

```typescript
public resetFormat(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetValues` <a name="resetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues"></a>

```typescript
public resetValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput">formatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format">format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput"></a>

```typescript
public readonly formatInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format"></a>

```typescript
public readonly format: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.putAdditionalClaims">putAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetAdditionalClaims">resetAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetIssuer">resetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetJwksEndpoint">resetJwksEndpoint</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalClaims` <a name="putAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.putAdditionalClaims"></a>

```typescript
public putAdditionalClaims(value: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.putAdditionalClaims.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>[]

---

##### `resetAdditionalClaims` <a name="resetAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetAdditionalClaims"></a>

```typescript
public resetAdditionalClaims(): void
```

##### `resetIssuer` <a name="resetIssuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetIssuer"></a>

```typescript
public resetIssuer(): void
```

##### `resetJwksEndpoint` <a name="resetJwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetJwksEndpoint"></a>

```typescript
public resetJwksEndpoint(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims">additionalClaims</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaimsInput">additionalClaimsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuerInput">issuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpointInput">jwksEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer">issuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint">jwksEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalClaims`<sup>Required</sup> <a name="additionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims"></a>

```typescript
public readonly additionalClaims: Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a>

---

##### `additionalClaimsInput`<sup>Optional</sup> <a name="additionalClaimsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaimsInput"></a>

```typescript
public readonly additionalClaimsInput: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims</a>[]

---

##### `issuerInput`<sup>Optional</sup> <a name="issuerInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuerInput"></a>

```typescript
public readonly issuerInput: string;
```

- *Type:* string

---

##### `jwksEndpointInput`<sup>Optional</sup> <a name="jwksEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpointInput"></a>

```typescript
public readonly jwksEndpointInput: string;
```

- *Type:* string

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer"></a>

```typescript
public readonly issuer: string;
```

- *Type:* string

---

##### `jwksEndpoint`<sup>Required</sup> <a name="jwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint"></a>

```typescript
public readonly jwksEndpoint: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsList <a name="Elasticloadbalancingv2ListenerDefaultActionsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerDefaultActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerDefaultActions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>[]

---


### Elasticloadbalancingv2ListenerDefaultActionsOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig">putAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig">putAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig">putFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putForwardConfig">putForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig">putJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig">putRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateCognitoConfig">resetAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateOidcConfig">resetAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetFixedResponseConfig">resetFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetForwardConfig">resetForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetJwtValidationConfig">resetJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetRedirectConfig">resetRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticateCognitoConfig` <a name="putAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig"></a>

```typescript
public putAuthenticateCognitoConfig(value: Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

---

##### `putAuthenticateOidcConfig` <a name="putAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig"></a>

```typescript
public putAuthenticateOidcConfig(value: Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

---

##### `putFixedResponseConfig` <a name="putFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig"></a>

```typescript
public putFixedResponseConfig(value: Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

---

##### `putForwardConfig` <a name="putForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putForwardConfig"></a>

```typescript
public putForwardConfig(value: Elasticloadbalancingv2ListenerDefaultActionsForwardConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putForwardConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

---

##### `putJwtValidationConfig` <a name="putJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig"></a>

```typescript
public putJwtValidationConfig(value: Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

---

##### `putRedirectConfig` <a name="putRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig"></a>

```typescript
public putRedirectConfig(value: Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

---

##### `resetAuthenticateCognitoConfig` <a name="resetAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateCognitoConfig"></a>

```typescript
public resetAuthenticateCognitoConfig(): void
```

##### `resetAuthenticateOidcConfig` <a name="resetAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateOidcConfig"></a>

```typescript
public resetAuthenticateOidcConfig(): void
```

##### `resetFixedResponseConfig` <a name="resetFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetFixedResponseConfig"></a>

```typescript
public resetFixedResponseConfig(): void
```

##### `resetForwardConfig` <a name="resetForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetForwardConfig"></a>

```typescript
public resetForwardConfig(): void
```

##### `resetJwtValidationConfig` <a name="resetJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetJwtValidationConfig"></a>

```typescript
public resetJwtValidationConfig(): void
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetOrder"></a>

```typescript
public resetOrder(): void
```

##### `resetRedirectConfig` <a name="resetRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetRedirectConfig"></a>

```typescript
public resetRedirectConfig(): void
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetTargetGroupArn"></a>

```typescript
public resetTargetGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig">authenticateCognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig">authenticateOidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig">fixedResponseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig">forwardConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig">jwtValidationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig">redirectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfigInput">authenticateCognitoConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfigInput">authenticateOidcConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfigInput">fixedResponseConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfigInput">forwardConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfigInput">jwtValidationConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.orderInput">orderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfigInput">redirectConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order">order</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authenticateCognitoConfig`<sup>Required</sup> <a name="authenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig"></a>

```typescript
public readonly authenticateCognitoConfig: Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a>

---

##### `authenticateOidcConfig`<sup>Required</sup> <a name="authenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig"></a>

```typescript
public readonly authenticateOidcConfig: Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a>

---

##### `fixedResponseConfig`<sup>Required</sup> <a name="fixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig"></a>

```typescript
public readonly fixedResponseConfig: Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a>

---

##### `forwardConfig`<sup>Required</sup> <a name="forwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig"></a>

```typescript
public readonly forwardConfig: Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a>

---

##### `jwtValidationConfig`<sup>Required</sup> <a name="jwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig"></a>

```typescript
public readonly jwtValidationConfig: Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a>

---

##### `redirectConfig`<sup>Required</sup> <a name="redirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig"></a>

```typescript
public readonly redirectConfig: Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a>

---

##### `authenticateCognitoConfigInput`<sup>Optional</sup> <a name="authenticateCognitoConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfigInput"></a>

```typescript
public readonly authenticateCognitoConfigInput: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

---

##### `authenticateOidcConfigInput`<sup>Optional</sup> <a name="authenticateOidcConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfigInput"></a>

```typescript
public readonly authenticateOidcConfigInput: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

---

##### `fixedResponseConfigInput`<sup>Optional</sup> <a name="fixedResponseConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfigInput"></a>

```typescript
public readonly fixedResponseConfigInput: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

---

##### `forwardConfigInput`<sup>Optional</sup> <a name="forwardConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfigInput"></a>

```typescript
public readonly forwardConfigInput: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsForwardConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

---

##### `jwtValidationConfigInput`<sup>Optional</sup> <a name="jwtValidationConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfigInput"></a>

```typescript
public readonly jwtValidationConfigInput: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.orderInput"></a>

```typescript
public readonly orderInput: number;
```

- *Type:* number

---

##### `redirectConfigInput`<sup>Optional</sup> <a name="redirectConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfigInput"></a>

```typescript
public readonly redirectConfigInput: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArnInput"></a>

```typescript
public readonly targetGroupArnInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order"></a>

```typescript
public readonly order: number;
```

- *Type:* number

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerDefaultActions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions">Elasticloadbalancingv2ListenerDefaultActions</a>

---


### Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetQuery">resetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetStatusCode">resetStatusCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetQuery"></a>

```typescript
public resetQuery(): void
```

##### `resetStatusCode` <a name="resetStatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetStatusCode"></a>

```typescript
public resetStatusCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.portInput">portInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCodeInput">statusCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port">port</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode">statusCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.portInput"></a>

```typescript
public readonly portInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `statusCodeInput`<sup>Optional</sup> <a name="statusCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCodeInput"></a>

```typescript
public readonly statusCodeInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port"></a>

```typescript
public readonly port: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `statusCode`<sup>Required</sup> <a name="statusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode"></a>

```typescript
public readonly statusCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

---


### Elasticloadbalancingv2ListenerListenerAttributesList <a name="Elasticloadbalancingv2ListenerListenerAttributesList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerListenerAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerListenerAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>[]

---


### Elasticloadbalancingv2ListenerListenerAttributesOutputReference <a name="Elasticloadbalancingv2ListenerListenerAttributesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerListenerAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes">Elasticloadbalancingv2ListenerListenerAttributes</a>

---


### Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference <a name="Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetAdvertiseTrustStoreCaNames">resetAdvertiseTrustStoreCaNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetIgnoreClientCertificateExpiry">resetIgnoreClientCertificateExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetTrustStoreArn">resetTrustStoreArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdvertiseTrustStoreCaNames` <a name="resetAdvertiseTrustStoreCaNames" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetAdvertiseTrustStoreCaNames"></a>

```typescript
public resetAdvertiseTrustStoreCaNames(): void
```

##### `resetIgnoreClientCertificateExpiry` <a name="resetIgnoreClientCertificateExpiry" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetIgnoreClientCertificateExpiry"></a>

```typescript
public resetIgnoreClientCertificateExpiry(): void
```

##### `resetMode` <a name="resetMode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetTrustStoreArn` <a name="resetTrustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetTrustStoreArn"></a>

```typescript
public resetTrustStoreArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNamesInput">advertiseTrustStoreCaNamesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiryInput">ignoreClientCertificateExpiryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArnInput">trustStoreArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames">advertiseTrustStoreCaNames</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry">ignoreClientCertificateExpiry</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn">trustStoreArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `advertiseTrustStoreCaNamesInput`<sup>Optional</sup> <a name="advertiseTrustStoreCaNamesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNamesInput"></a>

```typescript
public readonly advertiseTrustStoreCaNamesInput: string;
```

- *Type:* string

---

##### `ignoreClientCertificateExpiryInput`<sup>Optional</sup> <a name="ignoreClientCertificateExpiryInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiryInput"></a>

```typescript
public readonly ignoreClientCertificateExpiryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `trustStoreArnInput`<sup>Optional</sup> <a name="trustStoreArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArnInput"></a>

```typescript
public readonly trustStoreArnInput: string;
```

- *Type:* string

---

##### `advertiseTrustStoreCaNames`<sup>Required</sup> <a name="advertiseTrustStoreCaNames" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames"></a>

```typescript
public readonly advertiseTrustStoreCaNames: string;
```

- *Type:* string

---

##### `ignoreClientCertificateExpiry`<sup>Required</sup> <a name="ignoreClientCertificateExpiry" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry"></a>

```typescript
public readonly ignoreClientCertificateExpiry: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `trustStoreArn`<sup>Required</sup> <a name="trustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn"></a>

```typescript
public readonly trustStoreArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerMutualAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

---


### Elasticloadbalancingv2ListenerTagsList <a name="Elasticloadbalancingv2ListenerTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.get"></a>

```typescript
public get(index: number): Elasticloadbalancingv2ListenerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>[]

---


### Elasticloadbalancingv2ListenerTagsOutputReference <a name="Elasticloadbalancingv2ListenerTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer"></a>

```typescript
import { elasticloadbalancingv2Listener } from '@cdktn/provider-awscc'

new elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Elasticloadbalancingv2ListenerTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags">Elasticloadbalancingv2ListenerTags</a>

---



