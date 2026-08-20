# `route53HostedZone` Submodule <a name="`route53HostedZone` Submodule" id="@cdktn/provider-awscc.route53HostedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HostedZone <a name="Route53HostedZone" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone awscc_route53_hosted_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

new route53HostedZone.Route53HostedZone(scope: Construct, id: string, config?: Route53HostedZoneConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig">Route53HostedZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig">Route53HostedZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneConfig">putHostedZoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneFeatures">putHostedZoneFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneTags">putHostedZoneTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putQueryLoggingConfig">putQueryLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putVpCs">putVpCs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneConfig">resetHostedZoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneFeatures">resetHostedZoneFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneTags">resetHostedZoneTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetQueryLoggingConfig">resetQueryLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetVpCs">resetVpCs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putHostedZoneConfig` <a name="putHostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneConfig"></a>

```typescript
public putHostedZoneConfig(value: Route53HostedZoneHostedZoneConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

---

##### `putHostedZoneFeatures` <a name="putHostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneFeatures"></a>

```typescript
public putHostedZoneFeatures(value: Route53HostedZoneHostedZoneFeatures): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

---

##### `putHostedZoneTags` <a name="putHostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneTags"></a>

```typescript
public putHostedZoneTags(value: IResolvable | Route53HostedZoneHostedZoneTags[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneTags.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>[]

---

##### `putQueryLoggingConfig` <a name="putQueryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putQueryLoggingConfig"></a>

```typescript
public putQueryLoggingConfig(value: Route53HostedZoneQueryLoggingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putQueryLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

---

##### `putVpCs` <a name="putVpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putVpCs"></a>

```typescript
public putVpCs(value: IResolvable | Route53HostedZoneVpCs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putVpCs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>[]

---

##### `resetHostedZoneConfig` <a name="resetHostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneConfig"></a>

```typescript
public resetHostedZoneConfig(): void
```

##### `resetHostedZoneFeatures` <a name="resetHostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneFeatures"></a>

```typescript
public resetHostedZoneFeatures(): void
```

##### `resetHostedZoneTags` <a name="resetHostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneTags"></a>

```typescript
public resetHostedZoneTags(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetName"></a>

```typescript
public resetName(): void
```

##### `resetQueryLoggingConfig` <a name="resetQueryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetQueryLoggingConfig"></a>

```typescript
public resetQueryLoggingConfig(): void
```

##### `resetVpCs` <a name="resetVpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetVpCs"></a>

```typescript
public resetVpCs(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53HostedZone resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isConstruct"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

route53HostedZone.Route53HostedZone.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformElement"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

route53HostedZone.Route53HostedZone.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformResource"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

route53HostedZone.Route53HostedZone.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

route53HostedZone.Route53HostedZone.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53HostedZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53HostedZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53HostedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53HostedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfig">hostedZoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference">Route53HostedZoneHostedZoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeatures">hostedZoneFeatures</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference">Route53HostedZoneHostedZoneFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTags">hostedZoneTags</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList">Route53HostedZoneHostedZoneTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameServers">nameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfig">queryLoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference">Route53HostedZoneQueryLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCs">vpCs</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList">Route53HostedZoneVpCsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfigInput">hostedZoneConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeaturesInput">hostedZoneFeaturesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTagsInput">hostedZoneTagsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfigInput">queryLoggingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCsInput">vpCsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hostedZoneConfig`<sup>Required</sup> <a name="hostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfig"></a>

```typescript
public readonly hostedZoneConfig: Route53HostedZoneHostedZoneConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference">Route53HostedZoneHostedZoneConfigOutputReference</a>

---

##### `hostedZoneFeatures`<sup>Required</sup> <a name="hostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeatures"></a>

```typescript
public readonly hostedZoneFeatures: Route53HostedZoneHostedZoneFeaturesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference">Route53HostedZoneHostedZoneFeaturesOutputReference</a>

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `hostedZoneTags`<sup>Required</sup> <a name="hostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTags"></a>

```typescript
public readonly hostedZoneTags: Route53HostedZoneHostedZoneTagsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList">Route53HostedZoneHostedZoneTagsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `nameServers`<sup>Required</sup> <a name="nameServers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameServers"></a>

```typescript
public readonly nameServers: string[];
```

- *Type:* string[]

---

##### `queryLoggingConfig`<sup>Required</sup> <a name="queryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfig"></a>

```typescript
public readonly queryLoggingConfig: Route53HostedZoneQueryLoggingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference">Route53HostedZoneQueryLoggingConfigOutputReference</a>

---

##### `vpCs`<sup>Required</sup> <a name="vpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCs"></a>

```typescript
public readonly vpCs: Route53HostedZoneVpCsList;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList">Route53HostedZoneVpCsList</a>

---

##### `hostedZoneConfigInput`<sup>Optional</sup> <a name="hostedZoneConfigInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfigInput"></a>

```typescript
public readonly hostedZoneConfigInput: IResolvable | Route53HostedZoneHostedZoneConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

---

##### `hostedZoneFeaturesInput`<sup>Optional</sup> <a name="hostedZoneFeaturesInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeaturesInput"></a>

```typescript
public readonly hostedZoneFeaturesInput: IResolvable | Route53HostedZoneHostedZoneFeatures;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

---

##### `hostedZoneTagsInput`<sup>Optional</sup> <a name="hostedZoneTagsInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTagsInput"></a>

```typescript
public readonly hostedZoneTagsInput: IResolvable | Route53HostedZoneHostedZoneTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `queryLoggingConfigInput`<sup>Optional</sup> <a name="queryLoggingConfigInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfigInput"></a>

```typescript
public readonly queryLoggingConfigInput: IResolvable | Route53HostedZoneQueryLoggingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

---

##### `vpCsInput`<sup>Optional</sup> <a name="vpCsInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCsInput"></a>

```typescript
public readonly vpCsInput: IResolvable | Route53HostedZoneVpCs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HostedZoneConfig <a name="Route53HostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

const route53HostedZoneConfig: route53HostedZone.Route53HostedZoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneConfig">hostedZoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a></code> | A complex type that contains an optional comment. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneFeatures">hostedZoneFeatures</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a></code> | The features configuration for the hosted zone, including accelerated recovery settings and status information. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneTags">hostedZoneTags</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>[]</code> | Adds, edits, or deletes tags for a health check or a hosted zone. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.name">name</a></code> | <code>string</code> | The name of the domain. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.queryLoggingConfig">queryLoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a></code> | Creates a configuration for DNS query logging. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.vpCs">vpCs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>[]</code> | *Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hostedZoneConfig`<sup>Optional</sup> <a name="hostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneConfig"></a>

```typescript
public readonly hostedZoneConfig: Route53HostedZoneHostedZoneConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

A complex type that contains an optional comment.

If you don't want to specify a comment, omit the ``HostedZoneConfig`` and ``Comment`` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#hosted_zone_config Route53HostedZone#hosted_zone_config}

---

##### `hostedZoneFeatures`<sup>Optional</sup> <a name="hostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneFeatures"></a>

```typescript
public readonly hostedZoneFeatures: Route53HostedZoneHostedZoneFeatures;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

The features configuration for the hosted zone, including accelerated recovery settings and status information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#hosted_zone_features Route53HostedZone#hosted_zone_features}

---

##### `hostedZoneTags`<sup>Optional</sup> <a name="hostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneTags"></a>

```typescript
public readonly hostedZoneTags: IResolvable | Route53HostedZoneHostedZoneTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>[]

Adds, edits, or deletes tags for a health check or a hosted zone.

For information about using tags for cost allocation, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#hosted_zone_tags Route53HostedZone#hosted_zone_tags}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the domain.

Specify a fully qualified domain name, for example, *www.example.com*. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats *www.example.com* (without a trailing dot) and *www.example.com.* (with a trailing dot) as identical.
 If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of ``NameServers`` that are returned by the ``Fn::GetAtt`` intrinsic function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#name Route53HostedZone#name}

---

##### `queryLoggingConfig`<sup>Optional</sup> <a name="queryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.queryLoggingConfig"></a>

```typescript
public readonly queryLoggingConfig: Route53HostedZoneQueryLoggingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

Creates a configuration for DNS query logging.

After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.
 DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:
  +  Route 53 edge location that responded to the DNS query
  +  Domain or subdomain that was requested
  +  DNS record type, such as A or AAAA
  +  DNS response code, such as ``NoError`` or ``ServFail``
  
  + Log Group and Resource Policy Before you create a query logging configuration, perform the following operations. If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically. Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following: You must create the log group in the us-east-1 region. You must use the same to create the log group and the hosted zone that you want to configure query logging for. When you create log groups for query logging, we recommend that you use a consistent prefix, for example: /aws/route53/hosted zone name In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging. Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. You must create the CloudWatch Logs resource policy in the us-east-1 region. For the value of Resource, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with *, for example: arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/* To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values: For aws:SourceArn, supply the hosted zone ARN used in creating the query logging configuration. For example, aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID. For aws:SourceAccount, supply the account ID for the account that creates the query logging configuration. For example, aws:SourceAccount:111111111111. For more information, see The confused deputy problem in the IAM User Guide. You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the SDKs, or the . + Log Streams and Edge Locations When Route 53 finishes creating the configuration for DNS query logging, it does the following: Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location. Begins to send query logs to the applicable log stream. The name of each log stream is in the following format: hosted zone ID/edge location code The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Route 53 Global Network" on the Route 53 Product Details page. + Queries That Are Logged Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see Routing Internet Traffic to Your Website or Web Application in the Amazon Route 53 Developer Guide. + Log File Format For a list of the values in each query log and the format of each value, see Logging DNS Queries in the Amazon Route 53 Developer Guide. + Pricing For information about charges for query logs, see Amazon CloudWatch Pricing. + How to Stop Logging If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see DeleteQueryLoggingConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#query_logging_config Route53HostedZone#query_logging_config}

---

##### `vpCs`<sup>Optional</sup> <a name="vpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.vpCs"></a>

```typescript
public readonly vpCs: IResolvable | Route53HostedZoneVpCs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>[]

*Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone.

For public hosted zones, omit ``VPCs``, ``VPCId``, and ``VPCRegion``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#vp_cs Route53HostedZone#vp_cs}

---

### Route53HostedZoneHostedZoneConfig <a name="Route53HostedZoneHostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

const route53HostedZoneHostedZoneConfig: route53HostedZone.Route53HostedZoneHostedZoneConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig.property.comment">comment</a></code> | <code>string</code> | Any comments that you want to include about the hosted zone. |

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Any comments that you want to include about the hosted zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#comment Route53HostedZone#comment}

---

### Route53HostedZoneHostedZoneFeatures <a name="Route53HostedZoneHostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

const route53HostedZoneHostedZoneFeatures: route53HostedZone.Route53HostedZoneHostedZoneFeatures = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures.property.enableAcceleratedRecovery">enableAcceleratedRecovery</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#enable_accelerated_recovery Route53HostedZone#enable_accelerated_recovery}. |

---

##### `enableAcceleratedRecovery`<sup>Optional</sup> <a name="enableAcceleratedRecovery" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures.property.enableAcceleratedRecovery"></a>

```typescript
public readonly enableAcceleratedRecovery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#enable_accelerated_recovery Route53HostedZone#enable_accelerated_recovery}.

---

### Route53HostedZoneHostedZoneTags <a name="Route53HostedZoneHostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

const route53HostedZoneHostedZoneTags: route53HostedZone.Route53HostedZoneHostedZoneTags = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.key">key</a></code> | <code>string</code> | The value of ``Key`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Key`` is the name that you want to give the new tag. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.value">value</a></code> | <code>string</code> | The value of ``Value`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Value`` is the value that you want to give the new tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

The value of ``Key`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Key`` is the name that you want to give the new tag.

+  *Edit a tag*: ``Key`` is the name of the tag that you want to change the ``Value`` for.
  +  *Delete a key*: ``Key`` is the name of the tag you want to remove.
  +  *Give a name to a health check*: Edit the default ``Name`` tag. In the Amazon Route 53 console, the list of your health checks includes a *Name* column that lets you see the name that you've given to each health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#key Route53HostedZone#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The value of ``Value`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Value`` is the value that you want to give the new tag.

+  *Edit a tag*: ``Value`` is the new value that you want to assign the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#value Route53HostedZone#value}

---

### Route53HostedZoneQueryLoggingConfig <a name="Route53HostedZoneQueryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

const route53HostedZoneQueryLoggingConfig: route53HostedZone.Route53HostedZoneQueryLoggingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig.property.cloudwatchLogsLogGroupArn">cloudwatchLogsLogGroupArn</a></code> | <code>string</code> | The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to. |

---

##### `cloudwatchLogsLogGroupArn`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig.property.cloudwatchLogsLogGroupArn"></a>

```typescript
public readonly cloudwatchLogsLogGroupArn: string;
```

- *Type:* string

The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#cloudwatch_logs_log_group_arn Route53HostedZone#cloudwatch_logs_log_group_arn}

---

### Route53HostedZoneVpCs <a name="Route53HostedZoneVpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

const route53HostedZoneVpCs: route53HostedZone.Route53HostedZoneVpCs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcId">vpcId</a></code> | <code>string</code> | *Private hosted zones only:* The ID of an Amazon VPC. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcRegion">vpcRegion</a></code> | <code>string</code> | *Private hosted zones only:* The region that an Amazon VPC was created in. |

---

##### `vpcId`<sup>Optional</sup> <a name="vpcId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

*Private hosted zones only:* The ID of an Amazon VPC.

For public hosted zones, omit ``VPCs``, ``VPCId``, and ``VPCRegion``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#vpc_id Route53HostedZone#vpc_id}

---

##### `vpcRegion`<sup>Optional</sup> <a name="vpcRegion" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcRegion"></a>

```typescript
public readonly vpcRegion: string;
```

- *Type:* string

*Private hosted zones only:* The region that an Amazon VPC was created in.

For public hosted zones, omit ``VPCs``, ``VPCId``, and ``VPCRegion``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_hosted_zone#vpc_region Route53HostedZone#vpc_region}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HostedZoneHostedZoneConfigOutputReference <a name="Route53HostedZoneHostedZoneConfigOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

new route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resetComment">resetComment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HostedZoneHostedZoneConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

---


### Route53HostedZoneHostedZoneFeaturesOutputReference <a name="Route53HostedZoneHostedZoneFeaturesOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

new route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resetEnableAcceleratedRecovery">resetEnableAcceleratedRecovery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableAcceleratedRecovery` <a name="resetEnableAcceleratedRecovery" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resetEnableAcceleratedRecovery"></a>

```typescript
public resetEnableAcceleratedRecovery(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecoveryInput">enableAcceleratedRecoveryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecovery">enableAcceleratedRecovery</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableAcceleratedRecoveryInput`<sup>Optional</sup> <a name="enableAcceleratedRecoveryInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecoveryInput"></a>

```typescript
public readonly enableAcceleratedRecoveryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `enableAcceleratedRecovery`<sup>Required</sup> <a name="enableAcceleratedRecovery" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecovery"></a>

```typescript
public readonly enableAcceleratedRecovery: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HostedZoneHostedZoneFeatures;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

---


### Route53HostedZoneHostedZoneTagsList <a name="Route53HostedZoneHostedZoneTagsList" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

new route53HostedZone.Route53HostedZoneHostedZoneTagsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.get"></a>

```typescript
public get(index: number): Route53HostedZoneHostedZoneTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HostedZoneHostedZoneTags[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>[]

---


### Route53HostedZoneHostedZoneTagsOutputReference <a name="Route53HostedZoneHostedZoneTagsOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

new route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetKey"></a>

```typescript
public resetKey(): void
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HostedZoneHostedZoneTags;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags">Route53HostedZoneHostedZoneTags</a>

---


### Route53HostedZoneQueryLoggingConfigOutputReference <a name="Route53HostedZoneQueryLoggingConfigOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

new route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resetCloudwatchLogsLogGroupArn">resetCloudwatchLogsLogGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudwatchLogsLogGroupArn` <a name="resetCloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resetCloudwatchLogsLogGroupArn"></a>

```typescript
public resetCloudwatchLogsLogGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArnInput">cloudwatchLogsLogGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArn">cloudwatchLogsLogGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogsLogGroupArnInput`<sup>Optional</sup> <a name="cloudwatchLogsLogGroupArnInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArnInput"></a>

```typescript
public readonly cloudwatchLogsLogGroupArnInput: string;
```

- *Type:* string

---

##### `cloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="cloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArn"></a>

```typescript
public readonly cloudwatchLogsLogGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HostedZoneQueryLoggingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

---


### Route53HostedZoneVpCsList <a name="Route53HostedZoneVpCsList" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

new route53HostedZone.Route53HostedZoneVpCsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.get"></a>

```typescript
public get(index: number): Route53HostedZoneVpCsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HostedZoneVpCs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>[]

---


### Route53HostedZoneVpCsOutputReference <a name="Route53HostedZoneVpCsOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer"></a>

```typescript
import { route53HostedZone } from '@cdktn/provider-awscc'

new route53HostedZone.Route53HostedZoneVpCsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcId">resetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcRegion">resetVpcRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVpcId` <a name="resetVpcId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcId"></a>

```typescript
public resetVpcId(): void
```

##### `resetVpcRegion` <a name="resetVpcRegion" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcRegion"></a>

```typescript
public resetVpcRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegionInput">vpcRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegion">vpcRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `vpcRegionInput`<sup>Optional</sup> <a name="vpcRegionInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegionInput"></a>

```typescript
public readonly vpcRegionInput: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpcRegion`<sup>Required</sup> <a name="vpcRegion" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegion"></a>

```typescript
public readonly vpcRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53HostedZoneVpCs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs">Route53HostedZoneVpCs</a>

---



