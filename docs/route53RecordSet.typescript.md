# `route53RecordSet` Submodule <a name="`route53RecordSet` Submodule" id="@cdktn/provider-awscc.route53RecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecordSet <a name="Route53RecordSet" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set awscc_route53_record_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

new route53RecordSet.Route53RecordSet(scope: Construct, id: string, config: Route53RecordSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig">Route53RecordSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig">Route53RecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget">putAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putCidrRoutingConfig">putCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation">putGeoLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoProximityLocation">putGeoProximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetAliasTarget">resetAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetCidrRoutingConfig">resetCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetFailover">resetFailover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoLocation">resetGeoLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoProximityLocation">resetGeoProximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHealthCheckId">resetHealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneId">resetHostedZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneName">resetHostedZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetMultiValueAnswer">resetMultiValueAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetResourceRecords">resetResourceRecords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetSetIdentifier">resetSetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetTtl">resetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAliasTarget` <a name="putAliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget"></a>

```typescript
public putAliasTarget(value: Route53RecordSetAliasTarget): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

---

##### `putCidrRoutingConfig` <a name="putCidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putCidrRoutingConfig"></a>

```typescript
public putCidrRoutingConfig(value: Route53RecordSetCidrRoutingConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putCidrRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

---

##### `putGeoLocation` <a name="putGeoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation"></a>

```typescript
public putGeoLocation(value: Route53RecordSetGeoLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

---

##### `putGeoProximityLocation` <a name="putGeoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoProximityLocation"></a>

```typescript
public putGeoProximityLocation(value: Route53RecordSetGeoProximityLocation): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoProximityLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a>

---

##### `resetAliasTarget` <a name="resetAliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetAliasTarget"></a>

```typescript
public resetAliasTarget(): void
```

##### `resetCidrRoutingConfig` <a name="resetCidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetCidrRoutingConfig"></a>

```typescript
public resetCidrRoutingConfig(): void
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetFailover` <a name="resetFailover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetFailover"></a>

```typescript
public resetFailover(): void
```

##### `resetGeoLocation` <a name="resetGeoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoLocation"></a>

```typescript
public resetGeoLocation(): void
```

##### `resetGeoProximityLocation` <a name="resetGeoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoProximityLocation"></a>

```typescript
public resetGeoProximityLocation(): void
```

##### `resetHealthCheckId` <a name="resetHealthCheckId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHealthCheckId"></a>

```typescript
public resetHealthCheckId(): void
```

##### `resetHostedZoneId` <a name="resetHostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneId"></a>

```typescript
public resetHostedZoneId(): void
```

##### `resetHostedZoneName` <a name="resetHostedZoneName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneName"></a>

```typescript
public resetHostedZoneName(): void
```

##### `resetMultiValueAnswer` <a name="resetMultiValueAnswer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetMultiValueAnswer"></a>

```typescript
public resetMultiValueAnswer(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetResourceRecords` <a name="resetResourceRecords" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetResourceRecords"></a>

```typescript
public resetResourceRecords(): void
```

##### `resetSetIdentifier` <a name="resetSetIdentifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetSetIdentifier"></a>

```typescript
public resetSetIdentifier(): void
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetTtl"></a>

```typescript
public resetTtl(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetWeight"></a>

```typescript
public resetWeight(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecordSet resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isConstruct"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

route53RecordSet.Route53RecordSet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformElement"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

route53RecordSet.Route53RecordSet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformResource"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

route53RecordSet.Route53RecordSet.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

route53RecordSet.Route53RecordSet.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Route53RecordSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Route53RecordSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Route53RecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTarget">aliasTarget</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference">Route53RecordSetAliasTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfig">cidrRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference">Route53RecordSetCidrRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocation">geoLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference">Route53RecordSetGeoLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoProximityLocation">geoProximityLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference">Route53RecordSetGeoProximityLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.recordSetId">recordSetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTargetInput">aliasTargetInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfigInput">cidrRoutingConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failoverInput">failoverInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocationInput">geoLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoProximityLocationInput">geoProximityLocationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckIdInput">healthCheckIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneNameInput">hostedZoneNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswerInput">multiValueAnswerInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecordsInput">resourceRecordsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifierInput">setIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttlInput">ttlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failover">failover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckId">healthCheckId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneName">hostedZoneName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswer">multiValueAnswer</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecords">resourceRecords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifier">setIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttl">ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weight">weight</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `aliasTarget`<sup>Required</sup> <a name="aliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTarget"></a>

```typescript
public readonly aliasTarget: Route53RecordSetAliasTargetOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference">Route53RecordSetAliasTargetOutputReference</a>

---

##### `cidrRoutingConfig`<sup>Required</sup> <a name="cidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfig"></a>

```typescript
public readonly cidrRoutingConfig: Route53RecordSetCidrRoutingConfigOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference">Route53RecordSetCidrRoutingConfigOutputReference</a>

---

##### `geoLocation`<sup>Required</sup> <a name="geoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocation"></a>

```typescript
public readonly geoLocation: Route53RecordSetGeoLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference">Route53RecordSetGeoLocationOutputReference</a>

---

##### `geoProximityLocation`<sup>Required</sup> <a name="geoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoProximityLocation"></a>

```typescript
public readonly geoProximityLocation: Route53RecordSetGeoProximityLocationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference">Route53RecordSetGeoProximityLocationOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `recordSetId`<sup>Required</sup> <a name="recordSetId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.recordSetId"></a>

```typescript
public readonly recordSetId: string;
```

- *Type:* string

---

##### `aliasTargetInput`<sup>Optional</sup> <a name="aliasTargetInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTargetInput"></a>

```typescript
public readonly aliasTargetInput: IResolvable | Route53RecordSetAliasTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

---

##### `cidrRoutingConfigInput`<sup>Optional</sup> <a name="cidrRoutingConfigInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfigInput"></a>

```typescript
public readonly cidrRoutingConfigInput: IResolvable | Route53RecordSetCidrRoutingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `failoverInput`<sup>Optional</sup> <a name="failoverInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failoverInput"></a>

```typescript
public readonly failoverInput: string;
```

- *Type:* string

---

##### `geoLocationInput`<sup>Optional</sup> <a name="geoLocationInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocationInput"></a>

```typescript
public readonly geoLocationInput: IResolvable | Route53RecordSetGeoLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

---

##### `geoProximityLocationInput`<sup>Optional</sup> <a name="geoProximityLocationInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoProximityLocationInput"></a>

```typescript
public readonly geoProximityLocationInput: IResolvable | Route53RecordSetGeoProximityLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a>

---

##### `healthCheckIdInput`<sup>Optional</sup> <a name="healthCheckIdInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckIdInput"></a>

```typescript
public readonly healthCheckIdInput: string;
```

- *Type:* string

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneIdInput"></a>

```typescript
public readonly hostedZoneIdInput: string;
```

- *Type:* string

---

##### `hostedZoneNameInput`<sup>Optional</sup> <a name="hostedZoneNameInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneNameInput"></a>

```typescript
public readonly hostedZoneNameInput: string;
```

- *Type:* string

---

##### `multiValueAnswerInput`<sup>Optional</sup> <a name="multiValueAnswerInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswerInput"></a>

```typescript
public readonly multiValueAnswerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `resourceRecordsInput`<sup>Optional</sup> <a name="resourceRecordsInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecordsInput"></a>

```typescript
public readonly resourceRecordsInput: string[];
```

- *Type:* string[]

---

##### `setIdentifierInput`<sup>Optional</sup> <a name="setIdentifierInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifierInput"></a>

```typescript
public readonly setIdentifierInput: string;
```

- *Type:* string

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttlInput"></a>

```typescript
public readonly ttlInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `failover`<sup>Required</sup> <a name="failover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failover"></a>

```typescript
public readonly failover: string;
```

- *Type:* string

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string;
```

- *Type:* string

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `hostedZoneName`<sup>Required</sup> <a name="hostedZoneName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneName"></a>

```typescript
public readonly hostedZoneName: string;
```

- *Type:* string

---

##### `multiValueAnswer`<sup>Required</sup> <a name="multiValueAnswer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswer"></a>

```typescript
public readonly multiValueAnswer: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `resourceRecords`<sup>Required</sup> <a name="resourceRecords" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecords"></a>

```typescript
public readonly resourceRecords: string[];
```

- *Type:* string[]

---

##### `setIdentifier`<sup>Required</sup> <a name="setIdentifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifier"></a>

```typescript
public readonly setIdentifier: string;
```

- *Type:* string

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecordSetAliasTarget <a name="Route53RecordSetAliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.Initializer"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

const route53RecordSetAliasTarget: route53RecordSet.Route53RecordSetAliasTarget = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.dnsName">dnsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#dns_name Route53RecordSet#dns_name}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.evaluateTargetHealth">evaluateTargetHealth</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#evaluate_target_health Route53RecordSet#evaluate_target_health}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}. |

---

##### `dnsName`<sup>Optional</sup> <a name="dnsName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#dns_name Route53RecordSet#dns_name}.

---

##### `evaluateTargetHealth`<sup>Optional</sup> <a name="evaluateTargetHealth" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.evaluateTargetHealth"></a>

```typescript
public readonly evaluateTargetHealth: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#evaluate_target_health Route53RecordSet#evaluate_target_health}.

---

##### `hostedZoneId`<sup>Optional</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}.

---

### Route53RecordSetCidrRoutingConfig <a name="Route53RecordSetCidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.Initializer"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

const route53RecordSetCidrRoutingConfig: route53RecordSet.Route53RecordSetCidrRoutingConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.collectionId">collectionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#collection_id Route53RecordSet#collection_id}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.locationName">locationName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#location_name Route53RecordSet#location_name}. |

---

##### `collectionId`<sup>Optional</sup> <a name="collectionId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#collection_id Route53RecordSet#collection_id}.

---

##### `locationName`<sup>Optional</sup> <a name="locationName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.locationName"></a>

```typescript
public readonly locationName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#location_name Route53RecordSet#location_name}.

---

### Route53RecordSetConfig <a name="Route53RecordSetConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.Initializer"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

const route53RecordSetConfig: route53RecordSet.Route53RecordSetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#name Route53RecordSet#name}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#type Route53RecordSet#type}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.aliasTarget">aliasTarget</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#alias_target Route53RecordSet#alias_target}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.cidrRoutingConfig">cidrRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#cidr_routing_config Route53RecordSet#cidr_routing_config}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#comment Route53RecordSet#comment}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.failover">failover</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#failover Route53RecordSet#failover}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoLocation">geoLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#geo_location Route53RecordSet#geo_location}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoProximityLocation">geoProximityLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#geo_proximity_location Route53RecordSet#geo_proximity_location}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.healthCheckId">healthCheckId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#health_check_id Route53RecordSet#health_check_id}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneName">hostedZoneName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#hosted_zone_name Route53RecordSet#hosted_zone_name}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.multiValueAnswer">multiValueAnswer</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#multi_value_answer Route53RecordSet#multi_value_answer}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#region Route53RecordSet#region}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.resourceRecords">resourceRecords</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#resource_records Route53RecordSet#resource_records}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.setIdentifier">setIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#set_identifier Route53RecordSet#set_identifier}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.ttl">ttl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#ttl Route53RecordSet#ttl}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#weight Route53RecordSet#weight}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#name Route53RecordSet#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#type Route53RecordSet#type}.

---

##### `aliasTarget`<sup>Optional</sup> <a name="aliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.aliasTarget"></a>

```typescript
public readonly aliasTarget: Route53RecordSetAliasTarget;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#alias_target Route53RecordSet#alias_target}.

---

##### `cidrRoutingConfig`<sup>Optional</sup> <a name="cidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.cidrRoutingConfig"></a>

```typescript
public readonly cidrRoutingConfig: Route53RecordSetCidrRoutingConfig;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#cidr_routing_config Route53RecordSet#cidr_routing_config}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#comment Route53RecordSet#comment}.

---

##### `failover`<sup>Optional</sup> <a name="failover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.failover"></a>

```typescript
public readonly failover: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#failover Route53RecordSet#failover}.

---

##### `geoLocation`<sup>Optional</sup> <a name="geoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoLocation"></a>

```typescript
public readonly geoLocation: Route53RecordSetGeoLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#geo_location Route53RecordSet#geo_location}.

---

##### `geoProximityLocation`<sup>Optional</sup> <a name="geoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoProximityLocation"></a>

```typescript
public readonly geoProximityLocation: Route53RecordSetGeoProximityLocation;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#geo_proximity_location Route53RecordSet#geo_proximity_location}.

---

##### `healthCheckId`<sup>Optional</sup> <a name="healthCheckId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#health_check_id Route53RecordSet#health_check_id}.

---

##### `hostedZoneId`<sup>Optional</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}.

---

##### `hostedZoneName`<sup>Optional</sup> <a name="hostedZoneName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneName"></a>

```typescript
public readonly hostedZoneName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#hosted_zone_name Route53RecordSet#hosted_zone_name}.

---

##### `multiValueAnswer`<sup>Optional</sup> <a name="multiValueAnswer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.multiValueAnswer"></a>

```typescript
public readonly multiValueAnswer: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#multi_value_answer Route53RecordSet#multi_value_answer}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#region Route53RecordSet#region}.

---

##### `resourceRecords`<sup>Optional</sup> <a name="resourceRecords" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.resourceRecords"></a>

```typescript
public readonly resourceRecords: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#resource_records Route53RecordSet#resource_records}.

---

##### `setIdentifier`<sup>Optional</sup> <a name="setIdentifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.setIdentifier"></a>

```typescript
public readonly setIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#set_identifier Route53RecordSet#set_identifier}.

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.ttl"></a>

```typescript
public readonly ttl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#ttl Route53RecordSet#ttl}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#weight Route53RecordSet#weight}.

---

### Route53RecordSetGeoLocation <a name="Route53RecordSetGeoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.Initializer"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

const route53RecordSetGeoLocation: route53RecordSet.Route53RecordSetGeoLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.continentCode">continentCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#continent_code Route53RecordSet#continent_code}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.countryCode">countryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#country_code Route53RecordSet#country_code}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.subdivisionCode">subdivisionCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#subdivision_code Route53RecordSet#subdivision_code}. |

---

##### `continentCode`<sup>Optional</sup> <a name="continentCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.continentCode"></a>

```typescript
public readonly continentCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#continent_code Route53RecordSet#continent_code}.

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#country_code Route53RecordSet#country_code}.

---

##### `subdivisionCode`<sup>Optional</sup> <a name="subdivisionCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.subdivisionCode"></a>

```typescript
public readonly subdivisionCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#subdivision_code Route53RecordSet#subdivision_code}.

---

### Route53RecordSetGeoProximityLocation <a name="Route53RecordSetGeoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.Initializer"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

const route53RecordSetGeoProximityLocation: route53RecordSet.Route53RecordSetGeoProximityLocation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.awsRegion">awsRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#aws_region Route53RecordSet#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.bias">bias</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#bias Route53RecordSet#bias}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.coordinates">coordinates</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#coordinates Route53RecordSet#coordinates}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.localZoneGroup">localZoneGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#local_zone_group Route53RecordSet#local_zone_group}. |

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#aws_region Route53RecordSet#aws_region}.

---

##### `bias`<sup>Optional</sup> <a name="bias" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.bias"></a>

```typescript
public readonly bias: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#bias Route53RecordSet#bias}.

---

##### `coordinates`<sup>Optional</sup> <a name="coordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.coordinates"></a>

```typescript
public readonly coordinates: Route53RecordSetGeoProximityLocationCoordinates;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#coordinates Route53RecordSet#coordinates}.

---

##### `localZoneGroup`<sup>Optional</sup> <a name="localZoneGroup" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.localZoneGroup"></a>

```typescript
public readonly localZoneGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#local_zone_group Route53RecordSet#local_zone_group}.

---

### Route53RecordSetGeoProximityLocationCoordinates <a name="Route53RecordSetGeoProximityLocationCoordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.Initializer"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

const route53RecordSetGeoProximityLocationCoordinates: route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.property.latitude">latitude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#latitude Route53RecordSet#latitude}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.property.longitude">longitude</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#longitude Route53RecordSet#longitude}. |

---

##### `latitude`<sup>Optional</sup> <a name="latitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.property.latitude"></a>

```typescript
public readonly latitude: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#latitude Route53RecordSet#latitude}.

---

##### `longitude`<sup>Optional</sup> <a name="longitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.property.longitude"></a>

```typescript
public readonly longitude: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53_record_set#longitude Route53RecordSet#longitude}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecordSetAliasTargetOutputReference <a name="Route53RecordSetAliasTargetOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

new route53RecordSet.Route53RecordSetAliasTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetDnsName">resetDnsName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetEvaluateTargetHealth">resetEvaluateTargetHealth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetHostedZoneId">resetHostedZoneId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsName` <a name="resetDnsName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetDnsName"></a>

```typescript
public resetDnsName(): void
```

##### `resetEvaluateTargetHealth` <a name="resetEvaluateTargetHealth" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetEvaluateTargetHealth"></a>

```typescript
public resetEvaluateTargetHealth(): void
```

##### `resetHostedZoneId` <a name="resetHostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetHostedZoneId"></a>

```typescript
public resetHostedZoneId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsNameInput">dnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput">evaluateTargetHealthInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneIdInput">hostedZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsName">dnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealth">evaluateTargetHealth</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneId">hostedZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsNameInput`<sup>Optional</sup> <a name="dnsNameInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsNameInput"></a>

```typescript
public readonly dnsNameInput: string;
```

- *Type:* string

---

##### `evaluateTargetHealthInput`<sup>Optional</sup> <a name="evaluateTargetHealthInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput"></a>

```typescript
public readonly evaluateTargetHealthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hostedZoneIdInput`<sup>Optional</sup> <a name="hostedZoneIdInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneIdInput"></a>

```typescript
public readonly hostedZoneIdInput: string;
```

- *Type:* string

---

##### `dnsName`<sup>Required</sup> <a name="dnsName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsName"></a>

```typescript
public readonly dnsName: string;
```

- *Type:* string

---

##### `evaluateTargetHealth`<sup>Required</sup> <a name="evaluateTargetHealth" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealth"></a>

```typescript
public readonly evaluateTargetHealth: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `hostedZoneId`<sup>Required</sup> <a name="hostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneId"></a>

```typescript
public readonly hostedZoneId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordSetAliasTarget;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

---


### Route53RecordSetCidrRoutingConfigOutputReference <a name="Route53RecordSetCidrRoutingConfigOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

new route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetCollectionId">resetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetLocationName">resetLocationName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCollectionId` <a name="resetCollectionId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetCollectionId"></a>

```typescript
public resetCollectionId(): void
```

##### `resetLocationName` <a name="resetLocationName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetLocationName"></a>

```typescript
public resetLocationName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionIdInput">collectionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationNameInput">locationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionId">collectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationName">locationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectionIdInput`<sup>Optional</sup> <a name="collectionIdInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionIdInput"></a>

```typescript
public readonly collectionIdInput: string;
```

- *Type:* string

---

##### `locationNameInput`<sup>Optional</sup> <a name="locationNameInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationNameInput"></a>

```typescript
public readonly locationNameInput: string;
```

- *Type:* string

---

##### `collectionId`<sup>Required</sup> <a name="collectionId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionId"></a>

```typescript
public readonly collectionId: string;
```

- *Type:* string

---

##### `locationName`<sup>Required</sup> <a name="locationName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationName"></a>

```typescript
public readonly locationName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordSetCidrRoutingConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

---


### Route53RecordSetGeoLocationOutputReference <a name="Route53RecordSetGeoLocationOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

new route53RecordSet.Route53RecordSetGeoLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetContinentCode">resetContinentCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetSubdivisionCode">resetSubdivisionCode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContinentCode` <a name="resetContinentCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetContinentCode"></a>

```typescript
public resetContinentCode(): void
```

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetCountryCode"></a>

```typescript
public resetCountryCode(): void
```

##### `resetSubdivisionCode` <a name="resetSubdivisionCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetSubdivisionCode"></a>

```typescript
public resetSubdivisionCode(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCodeInput">continentCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCodeInput">subdivisionCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCode">continentCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCode">countryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCode">subdivisionCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `continentCodeInput`<sup>Optional</sup> <a name="continentCodeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCodeInput"></a>

```typescript
public readonly continentCodeInput: string;
```

- *Type:* string

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCodeInput"></a>

```typescript
public readonly countryCodeInput: string;
```

- *Type:* string

---

##### `subdivisionCodeInput`<sup>Optional</sup> <a name="subdivisionCodeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCodeInput"></a>

```typescript
public readonly subdivisionCodeInput: string;
```

- *Type:* string

---

##### `continentCode`<sup>Required</sup> <a name="continentCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCode"></a>

```typescript
public readonly continentCode: string;
```

- *Type:* string

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCode"></a>

```typescript
public readonly countryCode: string;
```

- *Type:* string

---

##### `subdivisionCode`<sup>Required</sup> <a name="subdivisionCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCode"></a>

```typescript
public readonly subdivisionCode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordSetGeoLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

---


### Route53RecordSetGeoProximityLocationCoordinatesOutputReference <a name="Route53RecordSetGeoProximityLocationCoordinatesOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

new route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resetLatitude">resetLatitude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resetLongitude">resetLongitude</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLatitude` <a name="resetLatitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resetLatitude"></a>

```typescript
public resetLatitude(): void
```

##### `resetLongitude` <a name="resetLongitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resetLongitude"></a>

```typescript
public resetLongitude(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitudeInput">latitudeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitudeInput">longitudeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitude">latitude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitude">longitude</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `latitudeInput`<sup>Optional</sup> <a name="latitudeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitudeInput"></a>

```typescript
public readonly latitudeInput: string;
```

- *Type:* string

---

##### `longitudeInput`<sup>Optional</sup> <a name="longitudeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitudeInput"></a>

```typescript
public readonly longitudeInput: string;
```

- *Type:* string

---

##### `latitude`<sup>Required</sup> <a name="latitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitude"></a>

```typescript
public readonly latitude: string;
```

- *Type:* string

---

##### `longitude`<sup>Required</sup> <a name="longitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitude"></a>

```typescript
public readonly longitude: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordSetGeoProximityLocationCoordinates;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a>

---


### Route53RecordSetGeoProximityLocationOutputReference <a name="Route53RecordSetGeoProximityLocationOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer"></a>

```typescript
import { route53RecordSet } from '@cdktn/provider-awscc'

new route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.putCoordinates">putCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetBias">resetBias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetCoordinates">resetCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetLocalZoneGroup">resetLocalZoneGroup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCoordinates` <a name="putCoordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.putCoordinates"></a>

```typescript
public putCoordinates(value: Route53RecordSetGeoProximityLocationCoordinates): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.putCoordinates.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a>

---

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetAwsRegion"></a>

```typescript
public resetAwsRegion(): void
```

##### `resetBias` <a name="resetBias" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetBias"></a>

```typescript
public resetBias(): void
```

##### `resetCoordinates` <a name="resetCoordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetCoordinates"></a>

```typescript
public resetCoordinates(): void
```

##### `resetLocalZoneGroup` <a name="resetLocalZoneGroup" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetLocalZoneGroup"></a>

```typescript
public resetLocalZoneGroup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.coordinates">coordinates</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference">Route53RecordSetGeoProximityLocationCoordinatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.biasInput">biasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.coordinatesInput">coordinatesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.localZoneGroupInput">localZoneGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.awsRegion">awsRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.bias">bias</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.localZoneGroup">localZoneGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `coordinates`<sup>Required</sup> <a name="coordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.coordinates"></a>

```typescript
public readonly coordinates: Route53RecordSetGeoProximityLocationCoordinatesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference">Route53RecordSetGeoProximityLocationCoordinatesOutputReference</a>

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.awsRegionInput"></a>

```typescript
public readonly awsRegionInput: string;
```

- *Type:* string

---

##### `biasInput`<sup>Optional</sup> <a name="biasInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.biasInput"></a>

```typescript
public readonly biasInput: number;
```

- *Type:* number

---

##### `coordinatesInput`<sup>Optional</sup> <a name="coordinatesInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.coordinatesInput"></a>

```typescript
public readonly coordinatesInput: IResolvable | Route53RecordSetGeoProximityLocationCoordinates;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a>

---

##### `localZoneGroupInput`<sup>Optional</sup> <a name="localZoneGroupInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.localZoneGroupInput"></a>

```typescript
public readonly localZoneGroupInput: string;
```

- *Type:* string

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.awsRegion"></a>

```typescript
public readonly awsRegion: string;
```

- *Type:* string

---

##### `bias`<sup>Required</sup> <a name="bias" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.bias"></a>

```typescript
public readonly bias: number;
```

- *Type:* number

---

##### `localZoneGroup`<sup>Required</sup> <a name="localZoneGroup" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.localZoneGroup"></a>

```typescript
public readonly localZoneGroup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Route53RecordSetGeoProximityLocation;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a>

---



