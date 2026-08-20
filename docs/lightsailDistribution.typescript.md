# `lightsailDistribution` Submodule <a name="`lightsailDistribution` Submodule" id="@cdktn/provider-awscc.lightsailDistribution"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailDistribution <a name="LightsailDistribution" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution awscc_lightsail_distribution}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

new lightsailDistribution.LightsailDistribution(scope: Construct, id: string, config: LightsailDistributionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig">LightsailDistributionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig">LightsailDistributionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviors">putCacheBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings">putCacheBehaviorSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior">putDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putOrigin">putOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCacheBehaviors">resetCacheBehaviors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCacheBehaviorSettings">resetCacheBehaviorSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCertificateName">resetCertificateName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCacheBehaviors` <a name="putCacheBehaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviors"></a>

```typescript
public putCacheBehaviors(value: IResolvable | LightsailDistributionCacheBehaviors[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviors.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]

---

##### `putCacheBehaviorSettings` <a name="putCacheBehaviorSettings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings"></a>

```typescript
public putCacheBehaviorSettings(value: LightsailDistributionCacheBehaviorSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putCacheBehaviorSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---

##### `putDefaultCacheBehavior` <a name="putDefaultCacheBehavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior"></a>

```typescript
public putDefaultCacheBehavior(value: LightsailDistributionDefaultCacheBehavior): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putDefaultCacheBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---

##### `putOrigin` <a name="putOrigin" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putOrigin"></a>

```typescript
public putOrigin(value: LightsailDistributionOrigin): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putOrigin.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putTags"></a>

```typescript
public putTags(value: IResolvable | LightsailDistributionTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.putTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]

---

##### `resetCacheBehaviors` <a name="resetCacheBehaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCacheBehaviors"></a>

```typescript
public resetCacheBehaviors(): void
```

##### `resetCacheBehaviorSettings` <a name="resetCacheBehaviorSettings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCacheBehaviorSettings"></a>

```typescript
public resetCacheBehaviorSettings(): void
```

##### `resetCertificateName` <a name="resetCertificateName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetCertificateName"></a>

```typescript
public resetCertificateName(): void
```

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailDistribution resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isConstruct"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

lightsailDistribution.LightsailDistribution.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformElement"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

lightsailDistribution.LightsailDistribution.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformResource"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

lightsailDistribution.LightsailDistribution.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

lightsailDistribution.LightsailDistribution.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a LightsailDistribution resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LightsailDistribution to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LightsailDistribution that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the LightsailDistribution to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ableToUpdateBundle">ableToUpdateBundle</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviors">cacheBehaviors</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList">LightsailDistributionCacheBehaviorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettings">cacheBehaviorSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference">LightsailDistributionCacheBehaviorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.defaultCacheBehavior">defaultCacheBehavior</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference">LightsailDistributionDefaultCacheBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionArn">distributionArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.origin">origin</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference">LightsailDistributionOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList">LightsailDistributionTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.bundleIdInput">bundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettingsInput">cacheBehaviorSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorsInput">cacheBehaviorsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.certificateNameInput">certificateNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.defaultCacheBehaviorInput">defaultCacheBehaviorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionNameInput">distributionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.originInput">originInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tagsInput">tagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.bundleId">bundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.certificateName">certificateName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionName">distributionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ableToUpdateBundle`<sup>Required</sup> <a name="ableToUpdateBundle" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ableToUpdateBundle"></a>

```typescript
public readonly ableToUpdateBundle: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `cacheBehaviors`<sup>Required</sup> <a name="cacheBehaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviors"></a>

```typescript
public readonly cacheBehaviors: LightsailDistributionCacheBehaviorsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList">LightsailDistributionCacheBehaviorsList</a>

---

##### `cacheBehaviorSettings`<sup>Required</sup> <a name="cacheBehaviorSettings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettings"></a>

```typescript
public readonly cacheBehaviorSettings: LightsailDistributionCacheBehaviorSettingsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference">LightsailDistributionCacheBehaviorSettingsOutputReference</a>

---

##### `defaultCacheBehavior`<sup>Required</sup> <a name="defaultCacheBehavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.defaultCacheBehavior"></a>

```typescript
public readonly defaultCacheBehavior: LightsailDistributionDefaultCacheBehaviorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference">LightsailDistributionDefaultCacheBehaviorOutputReference</a>

---

##### `distributionArn`<sup>Required</sup> <a name="distributionArn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionArn"></a>

```typescript
public readonly distributionArn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.origin"></a>

```typescript
public readonly origin: LightsailDistributionOriginOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference">LightsailDistributionOriginOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tags"></a>

```typescript
public readonly tags: LightsailDistributionTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList">LightsailDistributionTagsList</a>

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.bundleIdInput"></a>

```typescript
public readonly bundleIdInput: string;
```

- *Type:* string

---

##### `cacheBehaviorSettingsInput`<sup>Optional</sup> <a name="cacheBehaviorSettingsInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorSettingsInput"></a>

```typescript
public readonly cacheBehaviorSettingsInput: IResolvable | LightsailDistributionCacheBehaviorSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---

##### `cacheBehaviorsInput`<sup>Optional</sup> <a name="cacheBehaviorsInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.cacheBehaviorsInput"></a>

```typescript
public readonly cacheBehaviorsInput: IResolvable | LightsailDistributionCacheBehaviors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]

---

##### `certificateNameInput`<sup>Optional</sup> <a name="certificateNameInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.certificateNameInput"></a>

```typescript
public readonly certificateNameInput: string;
```

- *Type:* string

---

##### `defaultCacheBehaviorInput`<sup>Optional</sup> <a name="defaultCacheBehaviorInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.defaultCacheBehaviorInput"></a>

```typescript
public readonly defaultCacheBehaviorInput: IResolvable | LightsailDistributionDefaultCacheBehavior;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---

##### `distributionNameInput`<sup>Optional</sup> <a name="distributionNameInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionNameInput"></a>

```typescript
public readonly distributionNameInput: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `originInput`<sup>Optional</sup> <a name="originInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.originInput"></a>

```typescript
public readonly originInput: IResolvable | LightsailDistributionOrigin;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tagsInput"></a>

```typescript
public readonly tagsInput: IResolvable | LightsailDistributionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

---

##### `certificateName`<sup>Required</sup> <a name="certificateName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

---

##### `distributionName`<sup>Required</sup> <a name="distributionName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.distributionName"></a>

```typescript
public readonly distributionName: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistribution.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailDistributionCacheBehaviors <a name="LightsailDistributionCacheBehaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

const lightsailDistributionCacheBehaviors: lightsailDistribution.LightsailDistributionCacheBehaviors = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.property.behavior">behavior</a></code> | <code>string</code> | The cache behavior for the specified path. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.property.path">path</a></code> | <code>string</code> | The path to a directory or file to cached, or not cache. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

The cache behavior for the specified path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#behavior LightsailDistribution#behavior}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The path to a directory or file to cached, or not cache.

Use an asterisk symbol to specify wildcard directories (path/to/assets/*), and file types (*.html, *jpg, *js). Directories and file paths are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#path LightsailDistribution#path}

---

### LightsailDistributionCacheBehaviorSettings <a name="LightsailDistributionCacheBehaviorSettings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

const lightsailDistributionCacheBehaviorSettings: lightsailDistribution.LightsailDistributionCacheBehaviorSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.allowedHttpMethods">allowedHttpMethods</a></code> | <code>string</code> | The HTTP methods that are processed and forwarded to the distribution's origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.cachedHttpMethods">cachedHttpMethods</a></code> | <code>string</code> | The HTTP method responses that are cached by your distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedCookies">forwardedCookies</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | An object that describes the cookies that are forwarded to the origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedHeaders">forwardedHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | An object that describes the headers that are forwarded to the origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedQueryStrings">forwardedQueryStrings</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | An object that describes the query strings that are forwarded to the origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.maximumTtl">maximumTtl</a></code> | <code>number</code> | The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.minimumTtl">minimumTtl</a></code> | <code>number</code> | The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated. |

---

##### `allowedHttpMethods`<sup>Optional</sup> <a name="allowedHttpMethods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.allowedHttpMethods"></a>

```typescript
public readonly allowedHttpMethods: string;
```

- *Type:* string

The HTTP methods that are processed and forwarded to the distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#allowed_http_methods LightsailDistribution#allowed_http_methods}

---

##### `cachedHttpMethods`<sup>Optional</sup> <a name="cachedHttpMethods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.cachedHttpMethods"></a>

```typescript
public readonly cachedHttpMethods: string;
```

- *Type:* string

The HTTP method responses that are cached by your distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#cached_http_methods LightsailDistribution#cached_http_methods}

---

##### `defaultTtl`<sup>Optional</sup> <a name="defaultTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

The default amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the content has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#default_ttl LightsailDistribution#default_ttl}

---

##### `forwardedCookies`<sup>Optional</sup> <a name="forwardedCookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedCookies"></a>

```typescript
public readonly forwardedCookies: LightsailDistributionCacheBehaviorSettingsForwardedCookies;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

An object that describes the cookies that are forwarded to the origin.

Your content is cached based on the cookies that are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#forwarded_cookies LightsailDistribution#forwarded_cookies}

---

##### `forwardedHeaders`<sup>Optional</sup> <a name="forwardedHeaders" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedHeaders"></a>

```typescript
public readonly forwardedHeaders: LightsailDistributionCacheBehaviorSettingsForwardedHeaders;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

An object that describes the headers that are forwarded to the origin.

Your content is cached based on the headers that are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#forwarded_headers LightsailDistribution#forwarded_headers}

---

##### `forwardedQueryStrings`<sup>Optional</sup> <a name="forwardedQueryStrings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.forwardedQueryStrings"></a>

```typescript
public readonly forwardedQueryStrings: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

An object that describes the query strings that are forwarded to the origin.

Your content is cached based on the query strings that are forwarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#forwarded_query_strings LightsailDistribution#forwarded_query_strings}

---

##### `maximumTtl`<sup>Optional</sup> <a name="maximumTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.maximumTtl"></a>

```typescript
public readonly maximumTtl: number;
```

- *Type:* number

The maximum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#maximum_ttl LightsailDistribution#maximum_ttl}

---

##### `minimumTtl`<sup>Optional</sup> <a name="minimumTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings.property.minimumTtl"></a>

```typescript
public readonly minimumTtl: number;
```

- *Type:* number

The minimum amount of time that objects stay in the distribution's cache before the distribution forwards another request to the origin to determine whether the object has been updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#minimum_ttl LightsailDistribution#minimum_ttl}

---

### LightsailDistributionCacheBehaviorSettingsForwardedCookies <a name="LightsailDistributionCacheBehaviorSettingsForwardedCookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

const lightsailDistributionCacheBehaviorSettingsForwardedCookies: lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.cookiesAllowList">cookiesAllowList</a></code> | <code>string[]</code> | The specific cookies to forward to your distribution's origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.option">option</a></code> | <code>string</code> | Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter. |

---

##### `cookiesAllowList`<sup>Optional</sup> <a name="cookiesAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.cookiesAllowList"></a>

```typescript
public readonly cookiesAllowList: string[];
```

- *Type:* string[]

The specific cookies to forward to your distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#cookies_allow_list LightsailDistribution#cookies_allow_list}

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

Specifies which cookies to forward to the distribution's origin for a cache behavior: all, none, or allow-list to forward only the cookies specified in the cookiesAllowList parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

### LightsailDistributionCacheBehaviorSettingsForwardedHeaders <a name="LightsailDistributionCacheBehaviorSettingsForwardedHeaders" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

const lightsailDistributionCacheBehaviorSettingsForwardedHeaders: lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.headersAllowList">headersAllowList</a></code> | <code>string[]</code> | The specific headers to forward to your distribution's origin. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.option">option</a></code> | <code>string</code> | The headers that you want your distribution to forward to your origin and base caching on. |

---

##### `headersAllowList`<sup>Optional</sup> <a name="headersAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.headersAllowList"></a>

```typescript
public readonly headersAllowList: string[];
```

- *Type:* string[]

The specific headers to forward to your distribution's origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#headers_allow_list LightsailDistribution#headers_allow_list}

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

The headers that you want your distribution to forward to your origin and base caching on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

### LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings <a name="LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

const lightsailDistributionCacheBehaviorSettingsForwardedQueryStrings: lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.option">option</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the distribution forwards and caches based on query strings. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.queryStringsAllowList">queryStringsAllowList</a></code> | <code>string[]</code> | The specific query strings that the distribution forwards to the origin. |

---

##### `option`<sup>Optional</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.option"></a>

```typescript
public readonly option: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the distribution forwards and caches based on query strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#option LightsailDistribution#option}

---

##### `queryStringsAllowList`<sup>Optional</sup> <a name="queryStringsAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings.property.queryStringsAllowList"></a>

```typescript
public readonly queryStringsAllowList: string[];
```

- *Type:* string[]

The specific query strings that the distribution forwards to the origin.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#query_strings_allow_list LightsailDistribution#query_strings_allow_list}

---

### LightsailDistributionConfig <a name="LightsailDistributionConfig" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

const lightsailDistributionConfig: lightsailDistribution.LightsailDistributionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.bundleId">bundleId</a></code> | <code>string</code> | The bundle ID to use for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.defaultCacheBehavior">defaultCacheBehavior</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | An object that describes the default cache behavior for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.distributionName">distributionName</a></code> | <code>string</code> | The name for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.origin">origin</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | An object that describes the origin resource for the distribution, such as a Lightsail instance or load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviors">cacheBehaviors</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]</code> | An array of objects that describe the per-path cache behavior for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviorSettings">cacheBehaviorSettings</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | An object that describes the cache behavior settings for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.certificateName">certificateName</a></code> | <code>string</code> | The certificate attached to the Distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | The IP address type for the distribution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Indicates whether the distribution is enabled. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.tags">tags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]</code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

The bundle ID to use for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#bundle_id LightsailDistribution#bundle_id}

---

##### `defaultCacheBehavior`<sup>Required</sup> <a name="defaultCacheBehavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.defaultCacheBehavior"></a>

```typescript
public readonly defaultCacheBehavior: LightsailDistributionDefaultCacheBehavior;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

An object that describes the default cache behavior for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#default_cache_behavior LightsailDistribution#default_cache_behavior}

---

##### `distributionName`<sup>Required</sup> <a name="distributionName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.distributionName"></a>

```typescript
public readonly distributionName: string;
```

- *Type:* string

The name for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#distribution_name LightsailDistribution#distribution_name}

---

##### `origin`<sup>Required</sup> <a name="origin" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.origin"></a>

```typescript
public readonly origin: LightsailDistributionOrigin;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

An object that describes the origin resource for the distribution, such as a Lightsail instance or load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#origin LightsailDistribution#origin}

---

##### `cacheBehaviors`<sup>Optional</sup> <a name="cacheBehaviors" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviors"></a>

```typescript
public readonly cacheBehaviors: IResolvable | LightsailDistributionCacheBehaviors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]

An array of objects that describe the per-path cache behavior for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#cache_behaviors LightsailDistribution#cache_behaviors}

---

##### `cacheBehaviorSettings`<sup>Optional</sup> <a name="cacheBehaviorSettings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.cacheBehaviorSettings"></a>

```typescript
public readonly cacheBehaviorSettings: LightsailDistributionCacheBehaviorSettings;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

An object that describes the cache behavior settings for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#cache_behavior_settings LightsailDistribution#cache_behavior_settings}

---

##### `certificateName`<sup>Optional</sup> <a name="certificateName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.certificateName"></a>

```typescript
public readonly certificateName: string;
```

- *Type:* string

The certificate attached to the Distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#certificate_name LightsailDistribution#certificate_name}

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

The IP address type for the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#ip_address_type LightsailDistribution#ip_address_type}

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Indicates whether the distribution is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#is_enabled LightsailDistribution#is_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionConfig.property.tags"></a>

```typescript
public readonly tags: IResolvable | LightsailDistributionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#tags LightsailDistribution#tags}

---

### LightsailDistributionDefaultCacheBehavior <a name="LightsailDistributionDefaultCacheBehavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

const lightsailDistributionDefaultCacheBehavior: lightsailDistribution.LightsailDistributionDefaultCacheBehavior = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.property.behavior">behavior</a></code> | <code>string</code> | The cache behavior of the distribution. |

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

The cache behavior of the distribution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#behavior LightsailDistribution#behavior}

---

### LightsailDistributionOrigin <a name="LightsailDistributionOrigin" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

const lightsailDistributionOrigin: lightsailDistribution.LightsailDistributionOrigin = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.name">name</a></code> | <code>string</code> | The name of the origin resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.protocolPolicy">protocolPolicy</a></code> | <code>string</code> | The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.regionName">regionName</a></code> | <code>string</code> | The AWS Region name of the origin resource. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the origin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#name LightsailDistribution#name}

---

##### `protocolPolicy`<sup>Optional</sup> <a name="protocolPolicy" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.protocolPolicy"></a>

```typescript
public readonly protocolPolicy: string;
```

- *Type:* string

The protocol that your Amazon Lightsail distribution uses when establishing a connection with your origin to pull content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#protocol_policy LightsailDistribution#protocol_policy}

---

##### `regionName`<sup>Optional</sup> <a name="regionName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

The AWS Region name of the origin resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#region_name LightsailDistribution#region_name}

---

### LightsailDistributionTags <a name="LightsailDistributionTags" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

const lightsailDistributionTags: lightsailDistribution.LightsailDistributionTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.property.key">key</a></code> | <code>string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.property.value">value</a></code> | <code>string</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#key LightsailDistribution#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/lightsail_distribution#value LightsailDistribution#value}

---

## Classes <a name="Classes" id="Classes"></a>

### LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

new lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetCookiesAllowList">resetCookiesAllowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetOption">resetOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCookiesAllowList` <a name="resetCookiesAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetCookiesAllowList"></a>

```typescript
public resetCookiesAllowList(): void
```

##### `resetOption` <a name="resetOption" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.resetOption"></a>

```typescript
public resetOption(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowListInput">cookiesAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.optionInput">optionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowList">cookiesAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.option">option</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookiesAllowListInput`<sup>Optional</sup> <a name="cookiesAllowListInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowListInput"></a>

```typescript
public readonly cookiesAllowListInput: string[];
```

- *Type:* string[]

---

##### `optionInput`<sup>Optional</sup> <a name="optionInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.optionInput"></a>

```typescript
public readonly optionInput: string;
```

- *Type:* string

---

##### `cookiesAllowList`<sup>Required</sup> <a name="cookiesAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.cookiesAllowList"></a>

```typescript
public readonly cookiesAllowList: string[];
```

- *Type:* string[]

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDistributionCacheBehaviorSettingsForwardedCookies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---


### LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

new lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetHeadersAllowList">resetHeadersAllowList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetOption">resetOption</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHeadersAllowList` <a name="resetHeadersAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetHeadersAllowList"></a>

```typescript
public resetHeadersAllowList(): void
```

##### `resetOption` <a name="resetOption" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.resetOption"></a>

```typescript
public resetOption(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowListInput">headersAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.optionInput">optionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowList">headersAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.option">option</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headersAllowListInput`<sup>Optional</sup> <a name="headersAllowListInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowListInput"></a>

```typescript
public readonly headersAllowListInput: string[];
```

- *Type:* string[]

---

##### `optionInput`<sup>Optional</sup> <a name="optionInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.optionInput"></a>

```typescript
public readonly optionInput: string;
```

- *Type:* string

---

##### `headersAllowList`<sup>Required</sup> <a name="headersAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.headersAllowList"></a>

```typescript
public readonly headersAllowList: string[];
```

- *Type:* string[]

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.option"></a>

```typescript
public readonly option: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDistributionCacheBehaviorSettingsForwardedHeaders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---


### LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference <a name="LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

new lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetOption">resetOption</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetQueryStringsAllowList">resetQueryStringsAllowList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOption` <a name="resetOption" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetOption"></a>

```typescript
public resetOption(): void
```

##### `resetQueryStringsAllowList` <a name="resetQueryStringsAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.resetQueryStringsAllowList"></a>

```typescript
public resetQueryStringsAllowList(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.optionInput">optionInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowListInput">queryStringsAllowListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.option">option</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowList">queryStringsAllowList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `optionInput`<sup>Optional</sup> <a name="optionInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.optionInput"></a>

```typescript
public readonly optionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `queryStringsAllowListInput`<sup>Optional</sup> <a name="queryStringsAllowListInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowListInput"></a>

```typescript
public readonly queryStringsAllowListInput: string[];
```

- *Type:* string[]

---

##### `option`<sup>Required</sup> <a name="option" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.option"></a>

```typescript
public readonly option: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `queryStringsAllowList`<sup>Required</sup> <a name="queryStringsAllowList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.queryStringsAllowList"></a>

```typescript
public readonly queryStringsAllowList: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---


### LightsailDistributionCacheBehaviorSettingsOutputReference <a name="LightsailDistributionCacheBehaviorSettingsOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

new lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies">putForwardedCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders">putForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings">putForwardedQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetAllowedHttpMethods">resetAllowedHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetCachedHttpMethods">resetCachedHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetDefaultTtl">resetDefaultTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedCookies">resetForwardedCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedHeaders">resetForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedQueryStrings">resetForwardedQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMaximumTtl">resetMaximumTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMinimumTtl">resetMinimumTtl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putForwardedCookies` <a name="putForwardedCookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies"></a>

```typescript
public putForwardedCookies(value: LightsailDistributionCacheBehaviorSettingsForwardedCookies): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedCookies.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---

##### `putForwardedHeaders` <a name="putForwardedHeaders" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders"></a>

```typescript
public putForwardedHeaders(value: LightsailDistributionCacheBehaviorSettingsForwardedHeaders): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---

##### `putForwardedQueryStrings` <a name="putForwardedQueryStrings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings"></a>

```typescript
public putForwardedQueryStrings(value: LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.putForwardedQueryStrings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---

##### `resetAllowedHttpMethods` <a name="resetAllowedHttpMethods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetAllowedHttpMethods"></a>

```typescript
public resetAllowedHttpMethods(): void
```

##### `resetCachedHttpMethods` <a name="resetCachedHttpMethods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetCachedHttpMethods"></a>

```typescript
public resetCachedHttpMethods(): void
```

##### `resetDefaultTtl` <a name="resetDefaultTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetDefaultTtl"></a>

```typescript
public resetDefaultTtl(): void
```

##### `resetForwardedCookies` <a name="resetForwardedCookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedCookies"></a>

```typescript
public resetForwardedCookies(): void
```

##### `resetForwardedHeaders` <a name="resetForwardedHeaders" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedHeaders"></a>

```typescript
public resetForwardedHeaders(): void
```

##### `resetForwardedQueryStrings` <a name="resetForwardedQueryStrings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetForwardedQueryStrings"></a>

```typescript
public resetForwardedQueryStrings(): void
```

##### `resetMaximumTtl` <a name="resetMaximumTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMaximumTtl"></a>

```typescript
public resetMaximumTtl(): void
```

##### `resetMinimumTtl` <a name="resetMinimumTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.resetMinimumTtl"></a>

```typescript
public resetMinimumTtl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookies">forwardedCookies</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeaders">forwardedHeaders</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStrings">forwardedQueryStrings</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethodsInput">allowedHttpMethodsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethodsInput">cachedHttpMethodsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtlInput">defaultTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookiesInput">forwardedCookiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeadersInput">forwardedHeadersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStringsInput">forwardedQueryStringsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtlInput">maximumTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtlInput">minimumTtlInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethods">allowedHttpMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethods">cachedHttpMethods</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtl">defaultTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtl">maximumTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtl">minimumTtl</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forwardedCookies`<sup>Required</sup> <a name="forwardedCookies" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookies"></a>

```typescript
public readonly forwardedCookies: LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedCookiesOutputReference</a>

---

##### `forwardedHeaders`<sup>Required</sup> <a name="forwardedHeaders" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeaders"></a>

```typescript
public readonly forwardedHeaders: LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedHeadersOutputReference</a>

---

##### `forwardedQueryStrings`<sup>Required</sup> <a name="forwardedQueryStrings" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStrings"></a>

```typescript
public readonly forwardedQueryStrings: LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference">LightsailDistributionCacheBehaviorSettingsForwardedQueryStringsOutputReference</a>

---

##### `allowedHttpMethodsInput`<sup>Optional</sup> <a name="allowedHttpMethodsInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethodsInput"></a>

```typescript
public readonly allowedHttpMethodsInput: string;
```

- *Type:* string

---

##### `cachedHttpMethodsInput`<sup>Optional</sup> <a name="cachedHttpMethodsInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethodsInput"></a>

```typescript
public readonly cachedHttpMethodsInput: string;
```

- *Type:* string

---

##### `defaultTtlInput`<sup>Optional</sup> <a name="defaultTtlInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtlInput"></a>

```typescript
public readonly defaultTtlInput: number;
```

- *Type:* number

---

##### `forwardedCookiesInput`<sup>Optional</sup> <a name="forwardedCookiesInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedCookiesInput"></a>

```typescript
public readonly forwardedCookiesInput: IResolvable | LightsailDistributionCacheBehaviorSettingsForwardedCookies;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedCookies">LightsailDistributionCacheBehaviorSettingsForwardedCookies</a>

---

##### `forwardedHeadersInput`<sup>Optional</sup> <a name="forwardedHeadersInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedHeadersInput"></a>

```typescript
public readonly forwardedHeadersInput: IResolvable | LightsailDistributionCacheBehaviorSettingsForwardedHeaders;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedHeaders">LightsailDistributionCacheBehaviorSettingsForwardedHeaders</a>

---

##### `forwardedQueryStringsInput`<sup>Optional</sup> <a name="forwardedQueryStringsInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.forwardedQueryStringsInput"></a>

```typescript
public readonly forwardedQueryStringsInput: IResolvable | LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings">LightsailDistributionCacheBehaviorSettingsForwardedQueryStrings</a>

---

##### `maximumTtlInput`<sup>Optional</sup> <a name="maximumTtlInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtlInput"></a>

```typescript
public readonly maximumTtlInput: number;
```

- *Type:* number

---

##### `minimumTtlInput`<sup>Optional</sup> <a name="minimumTtlInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtlInput"></a>

```typescript
public readonly minimumTtlInput: number;
```

- *Type:* number

---

##### `allowedHttpMethods`<sup>Required</sup> <a name="allowedHttpMethods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.allowedHttpMethods"></a>

```typescript
public readonly allowedHttpMethods: string;
```

- *Type:* string

---

##### `cachedHttpMethods`<sup>Required</sup> <a name="cachedHttpMethods" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.cachedHttpMethods"></a>

```typescript
public readonly cachedHttpMethods: string;
```

- *Type:* string

---

##### `defaultTtl`<sup>Required</sup> <a name="defaultTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.defaultTtl"></a>

```typescript
public readonly defaultTtl: number;
```

- *Type:* number

---

##### `maximumTtl`<sup>Required</sup> <a name="maximumTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.maximumTtl"></a>

```typescript
public readonly maximumTtl: number;
```

- *Type:* number

---

##### `minimumTtl`<sup>Required</sup> <a name="minimumTtl" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.minimumTtl"></a>

```typescript
public readonly minimumTtl: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDistributionCacheBehaviorSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorSettings">LightsailDistributionCacheBehaviorSettings</a>

---


### LightsailDistributionCacheBehaviorsList <a name="LightsailDistributionCacheBehaviorsList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

new lightsailDistribution.LightsailDistributionCacheBehaviorsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.get"></a>

```typescript
public get(index: number): LightsailDistributionCacheBehaviorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDistributionCacheBehaviors[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>[]

---


### LightsailDistributionCacheBehaviorsOutputReference <a name="LightsailDistributionCacheBehaviorsOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

new lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resetBehavior">resetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBehavior` <a name="resetBehavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resetBehavior"></a>

```typescript
public resetBehavior(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviorsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDistributionCacheBehaviors;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionCacheBehaviors">LightsailDistributionCacheBehaviors</a>

---


### LightsailDistributionDefaultCacheBehaviorOutputReference <a name="LightsailDistributionDefaultCacheBehaviorOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

new lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resetBehavior">resetBehavior</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBehavior` <a name="resetBehavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.resetBehavior"></a>

```typescript
public resetBehavior(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behaviorInput">behaviorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behavior">behavior</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behaviorInput"></a>

```typescript
public readonly behaviorInput: string;
```

- *Type:* string

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.behavior"></a>

```typescript
public readonly behavior: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehaviorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDistributionDefaultCacheBehavior;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionDefaultCacheBehavior">LightsailDistributionDefaultCacheBehavior</a>

---


### LightsailDistributionOriginOutputReference <a name="LightsailDistributionOriginOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

new lightsailDistribution.LightsailDistributionOriginOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetProtocolPolicy">resetProtocolPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetRegionName">resetRegionName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProtocolPolicy` <a name="resetProtocolPolicy" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetProtocolPolicy"></a>

```typescript
public resetProtocolPolicy(): void
```

##### `resetRegionName` <a name="resetRegionName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.resetRegionName"></a>

```typescript
public resetRegionName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicyInput">protocolPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionNameInput">regionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicy">protocolPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionName">regionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolPolicyInput`<sup>Optional</sup> <a name="protocolPolicyInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicyInput"></a>

```typescript
public readonly protocolPolicyInput: string;
```

- *Type:* string

---

##### `regionNameInput`<sup>Optional</sup> <a name="regionNameInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionNameInput"></a>

```typescript
public readonly regionNameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocolPolicy`<sup>Required</sup> <a name="protocolPolicy" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.protocolPolicy"></a>

```typescript
public readonly protocolPolicy: string;
```

- *Type:* string

---

##### `regionName`<sup>Required</sup> <a name="regionName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.regionName"></a>

```typescript
public readonly regionName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOriginOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDistributionOrigin;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionOrigin">LightsailDistributionOrigin</a>

---


### LightsailDistributionTagsList <a name="LightsailDistributionTagsList" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

new lightsailDistribution.LightsailDistributionTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.get"></a>

```typescript
public get(index: number): LightsailDistributionTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDistributionTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>[]

---


### LightsailDistributionTagsOutputReference <a name="LightsailDistributionTagsOutputReference" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer"></a>

```typescript
import { lightsailDistribution } from '@cdktn/provider-awscc'

new lightsailDistribution.LightsailDistributionTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | LightsailDistributionTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.lightsailDistribution.LightsailDistributionTags">LightsailDistributionTags</a>

---



