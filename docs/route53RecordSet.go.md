# `route53RecordSet` Submodule <a name="`route53RecordSet` Submodule" id="@cdktn/provider-awscc.route53RecordSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53RecordSet <a name="Route53RecordSet" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set awscc_route53_record_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

route53recordset.NewRoute53RecordSet(scope Construct, id *string, config Route53RecordSetConfig) Route53RecordSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig">Route53RecordSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig">Route53RecordSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget">PutAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putCidrRoutingConfig">PutCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation">PutGeoLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoProximityLocation">PutGeoProximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetAliasTarget">ResetAliasTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetCidrRoutingConfig">ResetCidrRoutingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetFailover">ResetFailover</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoLocation">ResetGeoLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoProximityLocation">ResetGeoProximityLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHealthCheckId">ResetHealthCheckId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneId">ResetHostedZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneName">ResetHostedZoneName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetMultiValueAnswer">ResetMultiValueAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetResourceRecords">ResetResourceRecords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetSetIdentifier">ResetSetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetTtl">ResetTtl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAliasTarget` <a name="PutAliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget"></a>

```go
func PutAliasTarget(value Route53RecordSetAliasTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putAliasTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

---

##### `PutCidrRoutingConfig` <a name="PutCidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putCidrRoutingConfig"></a>

```go
func PutCidrRoutingConfig(value Route53RecordSetCidrRoutingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putCidrRoutingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

---

##### `PutGeoLocation` <a name="PutGeoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation"></a>

```go
func PutGeoLocation(value Route53RecordSetGeoLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

---

##### `PutGeoProximityLocation` <a name="PutGeoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoProximityLocation"></a>

```go
func PutGeoProximityLocation(value Route53RecordSetGeoProximityLocation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.putGeoProximityLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a>

---

##### `ResetAliasTarget` <a name="ResetAliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetAliasTarget"></a>

```go
func ResetAliasTarget()
```

##### `ResetCidrRoutingConfig` <a name="ResetCidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetCidrRoutingConfig"></a>

```go
func ResetCidrRoutingConfig()
```

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetComment"></a>

```go
func ResetComment()
```

##### `ResetFailover` <a name="ResetFailover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetFailover"></a>

```go
func ResetFailover()
```

##### `ResetGeoLocation` <a name="ResetGeoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoLocation"></a>

```go
func ResetGeoLocation()
```

##### `ResetGeoProximityLocation` <a name="ResetGeoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetGeoProximityLocation"></a>

```go
func ResetGeoProximityLocation()
```

##### `ResetHealthCheckId` <a name="ResetHealthCheckId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHealthCheckId"></a>

```go
func ResetHealthCheckId()
```

##### `ResetHostedZoneId` <a name="ResetHostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneId"></a>

```go
func ResetHostedZoneId()
```

##### `ResetHostedZoneName` <a name="ResetHostedZoneName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetHostedZoneName"></a>

```go
func ResetHostedZoneName()
```

##### `ResetMultiValueAnswer` <a name="ResetMultiValueAnswer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetMultiValueAnswer"></a>

```go
func ResetMultiValueAnswer()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetResourceRecords` <a name="ResetResourceRecords" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetResourceRecords"></a>

```go
func ResetResourceRecords()
```

##### `ResetSetIdentifier` <a name="ResetSetIdentifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetSetIdentifier"></a>

```go
func ResetSetIdentifier()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetTtl"></a>

```go
func ResetTtl()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.resetWeight"></a>

```go
func ResetWeight()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53RecordSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

route53recordset.Route53RecordSet_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

route53recordset.Route53RecordSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

route53recordset.Route53RecordSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

route53recordset.Route53RecordSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Route53RecordSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53RecordSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53RecordSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Route53RecordSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTarget">AliasTarget</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference">Route53RecordSetAliasTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfig">CidrRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference">Route53RecordSetCidrRoutingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocation">GeoLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference">Route53RecordSetGeoLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoProximityLocation">GeoProximityLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference">Route53RecordSetGeoProximityLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.recordSetId">RecordSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTargetInput">AliasTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfigInput">CidrRoutingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failoverInput">FailoverInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocationInput">GeoLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoProximityLocationInput">GeoProximityLocationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckIdInput">HealthCheckIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneNameInput">HostedZoneNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswerInput">MultiValueAnswerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecordsInput">ResourceRecordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifierInput">SetIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failover">Failover</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckId">HealthCheckId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneName">HostedZoneName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswer">MultiValueAnswer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecords">ResourceRecords</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifier">SetIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AliasTarget`<sup>Required</sup> <a name="AliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTarget"></a>

```go
func AliasTarget() Route53RecordSetAliasTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference">Route53RecordSetAliasTargetOutputReference</a>

---

##### `CidrRoutingConfig`<sup>Required</sup> <a name="CidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfig"></a>

```go
func CidrRoutingConfig() Route53RecordSetCidrRoutingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference">Route53RecordSetCidrRoutingConfigOutputReference</a>

---

##### `GeoLocation`<sup>Required</sup> <a name="GeoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocation"></a>

```go
func GeoLocation() Route53RecordSetGeoLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference">Route53RecordSetGeoLocationOutputReference</a>

---

##### `GeoProximityLocation`<sup>Required</sup> <a name="GeoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoProximityLocation"></a>

```go
func GeoProximityLocation() Route53RecordSetGeoProximityLocationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference">Route53RecordSetGeoProximityLocationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RecordSetId`<sup>Required</sup> <a name="RecordSetId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.recordSetId"></a>

```go
func RecordSetId() *string
```

- *Type:* *string

---

##### `AliasTargetInput`<sup>Optional</sup> <a name="AliasTargetInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.aliasTargetInput"></a>

```go
func AliasTargetInput() interface{}
```

- *Type:* interface{}

---

##### `CidrRoutingConfigInput`<sup>Optional</sup> <a name="CidrRoutingConfigInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.cidrRoutingConfigInput"></a>

```go
func CidrRoutingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `FailoverInput`<sup>Optional</sup> <a name="FailoverInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failoverInput"></a>

```go
func FailoverInput() *string
```

- *Type:* *string

---

##### `GeoLocationInput`<sup>Optional</sup> <a name="GeoLocationInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoLocationInput"></a>

```go
func GeoLocationInput() interface{}
```

- *Type:* interface{}

---

##### `GeoProximityLocationInput`<sup>Optional</sup> <a name="GeoProximityLocationInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.geoProximityLocationInput"></a>

```go
func GeoProximityLocationInput() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckIdInput`<sup>Optional</sup> <a name="HealthCheckIdInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckIdInput"></a>

```go
func HealthCheckIdInput() *string
```

- *Type:* *string

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneIdInput"></a>

```go
func HostedZoneIdInput() *string
```

- *Type:* *string

---

##### `HostedZoneNameInput`<sup>Optional</sup> <a name="HostedZoneNameInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneNameInput"></a>

```go
func HostedZoneNameInput() *string
```

- *Type:* *string

---

##### `MultiValueAnswerInput`<sup>Optional</sup> <a name="MultiValueAnswerInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswerInput"></a>

```go
func MultiValueAnswerInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ResourceRecordsInput`<sup>Optional</sup> <a name="ResourceRecordsInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecordsInput"></a>

```go
func ResourceRecordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SetIdentifierInput`<sup>Optional</sup> <a name="SetIdentifierInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifierInput"></a>

```go
func SetIdentifierInput() *string
```

- *Type:* *string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `Failover`<sup>Required</sup> <a name="Failover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.failover"></a>

```go
func Failover() *string
```

- *Type:* *string

---

##### `HealthCheckId`<sup>Required</sup> <a name="HealthCheckId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.healthCheckId"></a>

```go
func HealthCheckId() *string
```

- *Type:* *string

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `HostedZoneName`<sup>Required</sup> <a name="HostedZoneName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.hostedZoneName"></a>

```go
func HostedZoneName() *string
```

- *Type:* *string

---

##### `MultiValueAnswer`<sup>Required</sup> <a name="MultiValueAnswer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.multiValueAnswer"></a>

```go
func MultiValueAnswer() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ResourceRecords`<sup>Required</sup> <a name="ResourceRecords" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.resourceRecords"></a>

```go
func ResourceRecords() *[]*string
```

- *Type:* *[]*string

---

##### `SetIdentifier`<sup>Required</sup> <a name="SetIdentifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.setIdentifier"></a>

```go
func SetIdentifier() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53RecordSetAliasTarget <a name="Route53RecordSetAliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

&route53recordset.Route53RecordSetAliasTarget {
	DnsName: *string,
	EvaluateTargetHealth: interface{},
	HostedZoneId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.dnsName">DnsName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#dns_name Route53RecordSet#dns_name}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.evaluateTargetHealth">EvaluateTargetHealth</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#evaluate_target_health Route53RecordSet#evaluate_target_health}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}. |

---

##### `DnsName`<sup>Optional</sup> <a name="DnsName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.dnsName"></a>

```go
DnsName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#dns_name Route53RecordSet#dns_name}.

---

##### `EvaluateTargetHealth`<sup>Optional</sup> <a name="EvaluateTargetHealth" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.evaluateTargetHealth"></a>

```go
EvaluateTargetHealth interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#evaluate_target_health Route53RecordSet#evaluate_target_health}.

---

##### `HostedZoneId`<sup>Optional</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget.property.hostedZoneId"></a>

```go
HostedZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}.

---

### Route53RecordSetCidrRoutingConfig <a name="Route53RecordSetCidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

&route53recordset.Route53RecordSetCidrRoutingConfig {
	CollectionId: *string,
	LocationName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#collection_id Route53RecordSet#collection_id}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.locationName">LocationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#location_name Route53RecordSet#location_name}. |

---

##### `CollectionId`<sup>Optional</sup> <a name="CollectionId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#collection_id Route53RecordSet#collection_id}.

---

##### `LocationName`<sup>Optional</sup> <a name="LocationName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig.property.locationName"></a>

```go
LocationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#location_name Route53RecordSet#location_name}.

---

### Route53RecordSetConfig <a name="Route53RecordSetConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

&route53recordset.Route53RecordSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Type: *string,
	AliasTarget: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53RecordSet.Route53RecordSetAliasTarget,
	CidrRoutingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig,
	Comment: *string,
	Failover: *string,
	GeoLocation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53RecordSet.Route53RecordSetGeoLocation,
	GeoProximityLocation: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53RecordSet.Route53RecordSetGeoProximityLocation,
	HealthCheckId: *string,
	HostedZoneId: *string,
	HostedZoneName: *string,
	MultiValueAnswer: interface{},
	Region: *string,
	ResourceRecords: *[]*string,
	SetIdentifier: *string,
	Ttl: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#name Route53RecordSet#name}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#type Route53RecordSet#type}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.aliasTarget">AliasTarget</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#alias_target Route53RecordSet#alias_target}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.cidrRoutingConfig">CidrRoutingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#cidr_routing_config Route53RecordSet#cidr_routing_config}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.comment">Comment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#comment Route53RecordSet#comment}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.failover">Failover</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#failover Route53RecordSet#failover}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoLocation">GeoLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#geo_location Route53RecordSet#geo_location}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoProximityLocation">GeoProximityLocation</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#geo_proximity_location Route53RecordSet#geo_proximity_location}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.healthCheckId">HealthCheckId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#health_check_id Route53RecordSet#health_check_id}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneName">HostedZoneName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#hosted_zone_name Route53RecordSet#hosted_zone_name}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.multiValueAnswer">MultiValueAnswer</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#multi_value_answer Route53RecordSet#multi_value_answer}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#region Route53RecordSet#region}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.resourceRecords">ResourceRecords</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#resource_records Route53RecordSet#resource_records}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.setIdentifier">SetIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#set_identifier Route53RecordSet#set_identifier}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.ttl">Ttl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#ttl Route53RecordSet#ttl}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.weight">Weight</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#weight Route53RecordSet#weight}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#name Route53RecordSet#name}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#type Route53RecordSet#type}.

---

##### `AliasTarget`<sup>Optional</sup> <a name="AliasTarget" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.aliasTarget"></a>

```go
AliasTarget Route53RecordSetAliasTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTarget">Route53RecordSetAliasTarget</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#alias_target Route53RecordSet#alias_target}.

---

##### `CidrRoutingConfig`<sup>Optional</sup> <a name="CidrRoutingConfig" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.cidrRoutingConfig"></a>

```go
CidrRoutingConfig Route53RecordSetCidrRoutingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfig">Route53RecordSetCidrRoutingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#cidr_routing_config Route53RecordSet#cidr_routing_config}.

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#comment Route53RecordSet#comment}.

---

##### `Failover`<sup>Optional</sup> <a name="Failover" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.failover"></a>

```go
Failover *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#failover Route53RecordSet#failover}.

---

##### `GeoLocation`<sup>Optional</sup> <a name="GeoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoLocation"></a>

```go
GeoLocation Route53RecordSetGeoLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation">Route53RecordSetGeoLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#geo_location Route53RecordSet#geo_location}.

---

##### `GeoProximityLocation`<sup>Optional</sup> <a name="GeoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.geoProximityLocation"></a>

```go
GeoProximityLocation Route53RecordSetGeoProximityLocation
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation">Route53RecordSetGeoProximityLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#geo_proximity_location Route53RecordSet#geo_proximity_location}.

---

##### `HealthCheckId`<sup>Optional</sup> <a name="HealthCheckId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.healthCheckId"></a>

```go
HealthCheckId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#health_check_id Route53RecordSet#health_check_id}.

---

##### `HostedZoneId`<sup>Optional</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneId"></a>

```go
HostedZoneId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#hosted_zone_id Route53RecordSet#hosted_zone_id}.

---

##### `HostedZoneName`<sup>Optional</sup> <a name="HostedZoneName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.hostedZoneName"></a>

```go
HostedZoneName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#hosted_zone_name Route53RecordSet#hosted_zone_name}.

---

##### `MultiValueAnswer`<sup>Optional</sup> <a name="MultiValueAnswer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.multiValueAnswer"></a>

```go
MultiValueAnswer interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#multi_value_answer Route53RecordSet#multi_value_answer}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#region Route53RecordSet#region}.

---

##### `ResourceRecords`<sup>Optional</sup> <a name="ResourceRecords" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.resourceRecords"></a>

```go
ResourceRecords *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#resource_records Route53RecordSet#resource_records}.

---

##### `SetIdentifier`<sup>Optional</sup> <a name="SetIdentifier" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.setIdentifier"></a>

```go
SetIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#set_identifier Route53RecordSet#set_identifier}.

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#ttl Route53RecordSet#ttl}.

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetConfig.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#weight Route53RecordSet#weight}.

---

### Route53RecordSetGeoLocation <a name="Route53RecordSetGeoLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

&route53recordset.Route53RecordSetGeoLocation {
	ContinentCode: *string,
	CountryCode: *string,
	SubdivisionCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.continentCode">ContinentCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#continent_code Route53RecordSet#continent_code}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.countryCode">CountryCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#country_code Route53RecordSet#country_code}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.subdivisionCode">SubdivisionCode</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#subdivision_code Route53RecordSet#subdivision_code}. |

---

##### `ContinentCode`<sup>Optional</sup> <a name="ContinentCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.continentCode"></a>

```go
ContinentCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#continent_code Route53RecordSet#continent_code}.

---

##### `CountryCode`<sup>Optional</sup> <a name="CountryCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.countryCode"></a>

```go
CountryCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#country_code Route53RecordSet#country_code}.

---

##### `SubdivisionCode`<sup>Optional</sup> <a name="SubdivisionCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocation.property.subdivisionCode"></a>

```go
SubdivisionCode *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#subdivision_code Route53RecordSet#subdivision_code}.

---

### Route53RecordSetGeoProximityLocation <a name="Route53RecordSetGeoProximityLocation" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

&route53recordset.Route53RecordSetGeoProximityLocation {
	AwsRegion: *string,
	Bias: *f64,
	Coordinates: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates,
	LocalZoneGroup: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#aws_region Route53RecordSet#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.bias">Bias</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#bias Route53RecordSet#bias}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.coordinates">Coordinates</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#coordinates Route53RecordSet#coordinates}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.localZoneGroup">LocalZoneGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#local_zone_group Route53RecordSet#local_zone_group}. |

---

##### `AwsRegion`<sup>Optional</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.awsRegion"></a>

```go
AwsRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#aws_region Route53RecordSet#aws_region}.

---

##### `Bias`<sup>Optional</sup> <a name="Bias" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.bias"></a>

```go
Bias *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#bias Route53RecordSet#bias}.

---

##### `Coordinates`<sup>Optional</sup> <a name="Coordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.coordinates"></a>

```go
Coordinates Route53RecordSetGeoProximityLocationCoordinates
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#coordinates Route53RecordSet#coordinates}.

---

##### `LocalZoneGroup`<sup>Optional</sup> <a name="LocalZoneGroup" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocation.property.localZoneGroup"></a>

```go
LocalZoneGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#local_zone_group Route53RecordSet#local_zone_group}.

---

### Route53RecordSetGeoProximityLocationCoordinates <a name="Route53RecordSetGeoProximityLocationCoordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

&route53recordset.Route53RecordSetGeoProximityLocationCoordinates {
	Latitude: *string,
	Longitude: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.property.latitude">Latitude</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#latitude Route53RecordSet#latitude}. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.property.longitude">Longitude</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#longitude Route53RecordSet#longitude}. |

---

##### `Latitude`<sup>Optional</sup> <a name="Latitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.property.latitude"></a>

```go
Latitude *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#latitude Route53RecordSet#latitude}.

---

##### `Longitude`<sup>Optional</sup> <a name="Longitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates.property.longitude"></a>

```go
Longitude *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/route53_record_set#longitude Route53RecordSet#longitude}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53RecordSetAliasTargetOutputReference <a name="Route53RecordSetAliasTargetOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

route53recordset.NewRoute53RecordSetAliasTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordSetAliasTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetDnsName">ResetDnsName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetEvaluateTargetHealth">ResetEvaluateTargetHealth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetHostedZoneId">ResetHostedZoneId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDnsName` <a name="ResetDnsName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetDnsName"></a>

```go
func ResetDnsName()
```

##### `ResetEvaluateTargetHealth` <a name="ResetEvaluateTargetHealth" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetEvaluateTargetHealth"></a>

```go
func ResetEvaluateTargetHealth()
```

##### `ResetHostedZoneId` <a name="ResetHostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.resetHostedZoneId"></a>

```go
func ResetHostedZoneId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsNameInput">DnsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput">EvaluateTargetHealthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneIdInput">HostedZoneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealth">EvaluateTargetHealth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsNameInput"></a>

```go
func DnsNameInput() *string
```

- *Type:* *string

---

##### `EvaluateTargetHealthInput`<sup>Optional</sup> <a name="EvaluateTargetHealthInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealthInput"></a>

```go
func EvaluateTargetHealthInput() interface{}
```

- *Type:* interface{}

---

##### `HostedZoneIdInput`<sup>Optional</sup> <a name="HostedZoneIdInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneIdInput"></a>

```go
func HostedZoneIdInput() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `EvaluateTargetHealth`<sup>Required</sup> <a name="EvaluateTargetHealth" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.evaluateTargetHealth"></a>

```go
func EvaluateTargetHealth() interface{}
```

- *Type:* interface{}

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetAliasTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordSetCidrRoutingConfigOutputReference <a name="Route53RecordSetCidrRoutingConfigOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

route53recordset.NewRoute53RecordSetCidrRoutingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordSetCidrRoutingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetCollectionId">ResetCollectionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetLocationName">ResetLocationName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCollectionId` <a name="ResetCollectionId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetCollectionId"></a>

```go
func ResetCollectionId()
```

##### `ResetLocationName` <a name="ResetLocationName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.resetLocationName"></a>

```go
func ResetLocationName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationNameInput">LocationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationName">LocationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `LocationNameInput`<sup>Optional</sup> <a name="LocationNameInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationNameInput"></a>

```go
func LocationNameInput() *string
```

- *Type:* *string

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `LocationName`<sup>Required</sup> <a name="LocationName" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.locationName"></a>

```go
func LocationName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetCidrRoutingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordSetGeoLocationOutputReference <a name="Route53RecordSetGeoLocationOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

route53recordset.NewRoute53RecordSetGeoLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordSetGeoLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetContinentCode">ResetContinentCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetCountryCode">ResetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetSubdivisionCode">ResetSubdivisionCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContinentCode` <a name="ResetContinentCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetContinentCode"></a>

```go
func ResetContinentCode()
```

##### `ResetCountryCode` <a name="ResetCountryCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetCountryCode"></a>

```go
func ResetCountryCode()
```

##### `ResetSubdivisionCode` <a name="ResetSubdivisionCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.resetSubdivisionCode"></a>

```go
func ResetSubdivisionCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCodeInput">ContinentCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCodeInput">CountryCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCodeInput">SubdivisionCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCode">ContinentCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCode">CountryCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCode">SubdivisionCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContinentCodeInput`<sup>Optional</sup> <a name="ContinentCodeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCodeInput"></a>

```go
func ContinentCodeInput() *string
```

- *Type:* *string

---

##### `CountryCodeInput`<sup>Optional</sup> <a name="CountryCodeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCodeInput"></a>

```go
func CountryCodeInput() *string
```

- *Type:* *string

---

##### `SubdivisionCodeInput`<sup>Optional</sup> <a name="SubdivisionCodeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCodeInput"></a>

```go
func SubdivisionCodeInput() *string
```

- *Type:* *string

---

##### `ContinentCode`<sup>Required</sup> <a name="ContinentCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.continentCode"></a>

```go
func ContinentCode() *string
```

- *Type:* *string

---

##### `CountryCode`<sup>Required</sup> <a name="CountryCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.countryCode"></a>

```go
func CountryCode() *string
```

- *Type:* *string

---

##### `SubdivisionCode`<sup>Required</sup> <a name="SubdivisionCode" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.subdivisionCode"></a>

```go
func SubdivisionCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordSetGeoProximityLocationCoordinatesOutputReference <a name="Route53RecordSetGeoProximityLocationCoordinatesOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

route53recordset.NewRoute53RecordSetGeoProximityLocationCoordinatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordSetGeoProximityLocationCoordinatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resetLatitude">ResetLatitude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resetLongitude">ResetLongitude</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLatitude` <a name="ResetLatitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resetLatitude"></a>

```go
func ResetLatitude()
```

##### `ResetLongitude` <a name="ResetLongitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.resetLongitude"></a>

```go
func ResetLongitude()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitudeInput">LatitudeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitudeInput">LongitudeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitude">Latitude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitude">Longitude</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LatitudeInput`<sup>Optional</sup> <a name="LatitudeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitudeInput"></a>

```go
func LatitudeInput() *string
```

- *Type:* *string

---

##### `LongitudeInput`<sup>Optional</sup> <a name="LongitudeInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitudeInput"></a>

```go
func LongitudeInput() *string
```

- *Type:* *string

---

##### `Latitude`<sup>Required</sup> <a name="Latitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.latitude"></a>

```go
func Latitude() *string
```

- *Type:* *string

---

##### `Longitude`<sup>Required</sup> <a name="Longitude" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.longitude"></a>

```go
func Longitude() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53RecordSetGeoProximityLocationOutputReference <a name="Route53RecordSetGeoProximityLocationOutputReference" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53recordset"

route53recordset.NewRoute53RecordSetGeoProximityLocationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53RecordSetGeoProximityLocationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.putCoordinates">PutCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetAwsRegion">ResetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetBias">ResetBias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetCoordinates">ResetCoordinates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetLocalZoneGroup">ResetLocalZoneGroup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCoordinates` <a name="PutCoordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.putCoordinates"></a>

```go
func PutCoordinates(value Route53RecordSetGeoProximityLocationCoordinates)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.putCoordinates.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinates">Route53RecordSetGeoProximityLocationCoordinates</a>

---

##### `ResetAwsRegion` <a name="ResetAwsRegion" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetAwsRegion"></a>

```go
func ResetAwsRegion()
```

##### `ResetBias` <a name="ResetBias" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetBias"></a>

```go
func ResetBias()
```

##### `ResetCoordinates` <a name="ResetCoordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetCoordinates"></a>

```go
func ResetCoordinates()
```

##### `ResetLocalZoneGroup` <a name="ResetLocalZoneGroup" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.resetLocalZoneGroup"></a>

```go
func ResetLocalZoneGroup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.coordinates">Coordinates</a></code> | <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference">Route53RecordSetGeoProximityLocationCoordinatesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.awsRegionInput">AwsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.biasInput">BiasInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.coordinatesInput">CoordinatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.localZoneGroupInput">LocalZoneGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.awsRegion">AwsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.bias">Bias</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.localZoneGroup">LocalZoneGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Coordinates`<sup>Required</sup> <a name="Coordinates" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.coordinates"></a>

```go
func Coordinates() Route53RecordSetGeoProximityLocationCoordinatesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationCoordinatesOutputReference">Route53RecordSetGeoProximityLocationCoordinatesOutputReference</a>

---

##### `AwsRegionInput`<sup>Optional</sup> <a name="AwsRegionInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.awsRegionInput"></a>

```go
func AwsRegionInput() *string
```

- *Type:* *string

---

##### `BiasInput`<sup>Optional</sup> <a name="BiasInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.biasInput"></a>

```go
func BiasInput() *f64
```

- *Type:* *f64

---

##### `CoordinatesInput`<sup>Optional</sup> <a name="CoordinatesInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.coordinatesInput"></a>

```go
func CoordinatesInput() interface{}
```

- *Type:* interface{}

---

##### `LocalZoneGroupInput`<sup>Optional</sup> <a name="LocalZoneGroupInput" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.localZoneGroupInput"></a>

```go
func LocalZoneGroupInput() *string
```

- *Type:* *string

---

##### `AwsRegion`<sup>Required</sup> <a name="AwsRegion" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.awsRegion"></a>

```go
func AwsRegion() *string
```

- *Type:* *string

---

##### `Bias`<sup>Required</sup> <a name="Bias" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.bias"></a>

```go
func Bias() *f64
```

- *Type:* *f64

---

##### `LocalZoneGroup`<sup>Required</sup> <a name="LocalZoneGroup" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.localZoneGroup"></a>

```go
func LocalZoneGroup() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53RecordSet.Route53RecordSetGeoProximityLocationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



