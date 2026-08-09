# `route53HostedZone` Submodule <a name="`route53HostedZone` Submodule" id="@cdktn/provider-awscc.route53HostedZone"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53HostedZone <a name="Route53HostedZone" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone awscc_route53_hosted_zone}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

route53hostedzone.NewRoute53HostedZone(scope Construct, id *string, config Route53HostedZoneConfig) Route53HostedZone
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig">Route53HostedZoneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig">Route53HostedZoneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneConfig">PutHostedZoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneFeatures">PutHostedZoneFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneTags">PutHostedZoneTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putQueryLoggingConfig">PutQueryLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putVpCs">PutVpCs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneConfig">ResetHostedZoneConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneFeatures">ResetHostedZoneFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneTags">ResetHostedZoneTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetQueryLoggingConfig">ResetQueryLoggingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetVpCs">ResetVpCs</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHostedZoneConfig` <a name="PutHostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneConfig"></a>

```go
func PutHostedZoneConfig(value Route53HostedZoneHostedZoneConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

---

##### `PutHostedZoneFeatures` <a name="PutHostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneFeatures"></a>

```go
func PutHostedZoneFeatures(value Route53HostedZoneHostedZoneFeatures)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneFeatures.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

---

##### `PutHostedZoneTags` <a name="PutHostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneTags"></a>

```go
func PutHostedZoneTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putHostedZoneTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryLoggingConfig` <a name="PutQueryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putQueryLoggingConfig"></a>

```go
func PutQueryLoggingConfig(value Route53HostedZoneQueryLoggingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putQueryLoggingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

---

##### `PutVpCs` <a name="PutVpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putVpCs"></a>

```go
func PutVpCs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.putVpCs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHostedZoneConfig` <a name="ResetHostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneConfig"></a>

```go
func ResetHostedZoneConfig()
```

##### `ResetHostedZoneFeatures` <a name="ResetHostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneFeatures"></a>

```go
func ResetHostedZoneFeatures()
```

##### `ResetHostedZoneTags` <a name="ResetHostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetHostedZoneTags"></a>

```go
func ResetHostedZoneTags()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetName"></a>

```go
func ResetName()
```

##### `ResetQueryLoggingConfig` <a name="ResetQueryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetQueryLoggingConfig"></a>

```go
func ResetQueryLoggingConfig()
```

##### `ResetVpCs` <a name="ResetVpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.resetVpCs"></a>

```go
func ResetVpCs()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53HostedZone resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

route53hostedzone.Route53HostedZone_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

route53hostedzone.Route53HostedZone_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

route53hostedzone.Route53HostedZone_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

route53hostedzone.Route53HostedZone_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Route53HostedZone resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53HostedZone to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53HostedZone that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Route53HostedZone to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfig">HostedZoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference">Route53HostedZoneHostedZoneConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeatures">HostedZoneFeatures</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference">Route53HostedZoneHostedZoneFeaturesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneId">HostedZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTags">HostedZoneTags</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList">Route53HostedZoneHostedZoneTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameServers">NameServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfig">QueryLoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference">Route53HostedZoneQueryLoggingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCs">VpCs</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList">Route53HostedZoneVpCsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfigInput">HostedZoneConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeaturesInput">HostedZoneFeaturesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTagsInput">HostedZoneTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfigInput">QueryLoggingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCsInput">VpCsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostedZoneConfig`<sup>Required</sup> <a name="HostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfig"></a>

```go
func HostedZoneConfig() Route53HostedZoneHostedZoneConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference">Route53HostedZoneHostedZoneConfigOutputReference</a>

---

##### `HostedZoneFeatures`<sup>Required</sup> <a name="HostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeatures"></a>

```go
func HostedZoneFeatures() Route53HostedZoneHostedZoneFeaturesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference">Route53HostedZoneHostedZoneFeaturesOutputReference</a>

---

##### `HostedZoneId`<sup>Required</sup> <a name="HostedZoneId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneId"></a>

```go
func HostedZoneId() *string
```

- *Type:* *string

---

##### `HostedZoneTags`<sup>Required</sup> <a name="HostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTags"></a>

```go
func HostedZoneTags() Route53HostedZoneHostedZoneTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList">Route53HostedZoneHostedZoneTagsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameServers"></a>

```go
func NameServers() *[]*string
```

- *Type:* *[]*string

---

##### `QueryLoggingConfig`<sup>Required</sup> <a name="QueryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfig"></a>

```go
func QueryLoggingConfig() Route53HostedZoneQueryLoggingConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference">Route53HostedZoneQueryLoggingConfigOutputReference</a>

---

##### `VpCs`<sup>Required</sup> <a name="VpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCs"></a>

```go
func VpCs() Route53HostedZoneVpCsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList">Route53HostedZoneVpCsList</a>

---

##### `HostedZoneConfigInput`<sup>Optional</sup> <a name="HostedZoneConfigInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneConfigInput"></a>

```go
func HostedZoneConfigInput() interface{}
```

- *Type:* interface{}

---

##### `HostedZoneFeaturesInput`<sup>Optional</sup> <a name="HostedZoneFeaturesInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneFeaturesInput"></a>

```go
func HostedZoneFeaturesInput() interface{}
```

- *Type:* interface{}

---

##### `HostedZoneTagsInput`<sup>Optional</sup> <a name="HostedZoneTagsInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.hostedZoneTagsInput"></a>

```go
func HostedZoneTagsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `QueryLoggingConfigInput`<sup>Optional</sup> <a name="QueryLoggingConfigInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.queryLoggingConfigInput"></a>

```go
func QueryLoggingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `VpCsInput`<sup>Optional</sup> <a name="VpCsInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.vpCsInput"></a>

```go
func VpCsInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZone.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53HostedZoneConfig <a name="Route53HostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

&route53hostedzone.Route53HostedZoneConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	HostedZoneConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig,
	HostedZoneFeatures: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures,
	HostedZoneTags: interface{},
	Name: *string,
	QueryLoggingConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig,
	VpCs: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneConfig">HostedZoneConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a></code> | A complex type that contains an optional comment. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneFeatures">HostedZoneFeatures</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a></code> | The features configuration for the hosted zone, including accelerated recovery settings and status information. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneTags">HostedZoneTags</a></code> | <code>interface{}</code> | Adds, edits, or deletes tags for a health check or a hosted zone. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.name">Name</a></code> | <code>*string</code> | The name of the domain. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.queryLoggingConfig">QueryLoggingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a></code> | Creates a configuration for DNS query logging. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.vpCs">VpCs</a></code> | <code>interface{}</code> | *Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HostedZoneConfig`<sup>Optional</sup> <a name="HostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneConfig"></a>

```go
HostedZoneConfig Route53HostedZoneHostedZoneConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig">Route53HostedZoneHostedZoneConfig</a>

A complex type that contains an optional comment.

If you don't want to specify a comment, omit the `HostedZoneConfig` and `Comment` elements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#hosted_zone_config Route53HostedZone#hosted_zone_config}

---

##### `HostedZoneFeatures`<sup>Optional</sup> <a name="HostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneFeatures"></a>

```go
HostedZoneFeatures Route53HostedZoneHostedZoneFeatures
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures">Route53HostedZoneHostedZoneFeatures</a>

The features configuration for the hosted zone, including accelerated recovery settings and status information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#hosted_zone_features Route53HostedZone#hosted_zone_features}

---

##### `HostedZoneTags`<sup>Optional</sup> <a name="HostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.hostedZoneTags"></a>

```go
HostedZoneTags interface{}
```

- *Type:* interface{}

Adds, edits, or deletes tags for a health check or a hosted zone.

For information about using tags for cost allocation, see [Using Cost Allocation Tags](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/cost-alloc-tags.html) in the *User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#hosted_zone_tags Route53HostedZone#hosted_zone_tags}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the domain.

Specify a fully qualified domain name, for example, *www.example.com*. The trailing dot is optional; Amazon Route 53 assumes that the domain name is fully qualified. This means that Route 53 treats *www.example.com* (without a trailing dot) and *www.example.com.* (with a trailing dot) as identical.
If you're creating a public hosted zone, this is the name you have registered with your DNS registrar. If your domain name is registered with a registrar other than Route 53, change the name servers for your domain to the set of `NameServers` that are returned by the `Fn::GetAtt` intrinsic function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#name Route53HostedZone#name}

---

##### `QueryLoggingConfig`<sup>Optional</sup> <a name="QueryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.queryLoggingConfig"></a>

```go
QueryLoggingConfig Route53HostedZoneQueryLoggingConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig">Route53HostedZoneQueryLoggingConfig</a>

Creates a configuration for DNS query logging.

After you create a query logging configuration, Amazon Route 53 begins to publish log data to an Amazon CloudWatch Logs log group.
DNS query logs contain information about the queries that Route 53 receives for a specified public hosted zone, such as the following:

* Route 53 edge location that responded to the DNS query
* Domain or subdomain that was requested
* DNS record type, such as A or AAAA
* DNS response code, such as `NoError` or `ServFail`
* Log Group and Resource Policy Before you create a query logging configuration, perform the following operations. If you create a query logging configuration using the Route 53 console, Route 53 performs these operations automatically. Create a CloudWatch Logs log group, and make note of the ARN, which you specify when you create a query logging configuration. Note the following: You must create the log group in the us-east-1 region. You must use the same to create the log group and the hosted zone that you want to configure query logging for. When you create log groups for query logging, we recommend that you use a consistent prefix, for example: /aws/route53/hosted zone name In the next step, you'll create a resource policy, which controls access to one or more log groups and the associated resources, such as Route 53 hosted zones. There's a limit on the number of resource policies that you can create, so we recommend that you use a consistent prefix so you can use the same resource policy for all the log groups that you create for query logging. Create a CloudWatch Logs resource policy, and give it the permissions that Route 53 needs to create log streams and to send query logs to log streams. You must create the CloudWatch Logs resource policy in the us-east-1 region. For the value of Resource, specify the ARN for the log group that you created in the previous step. To use the same resource policy for all the CloudWatch Logs log groups that you created for query logging configurations, replace the hosted zone name with *, for example: arn:aws:logs:us-east-1:123412341234:log-group:/aws/route53/* To avoid the confused deputy problem, a security issue where an entity without a permission for an action can coerce a more-privileged entity to perform it, you can optionally limit the permissions that a service has to a resource in a resource-based policy by supplying the following values: For aws:SourceArn, supply the hosted zone ARN used in creating the query logging configuration. For example, aws:SourceArn: arn:aws:route53:::hostedzone/hosted zone ID. For aws:SourceAccount, supply the account ID for the account that creates the query logging configuration. For example, aws:SourceAccount:111111111111. For more information, see The confused deputy problem in the IAM User Guide. You can't use the CloudWatch console to create or edit a resource policy. You must use the CloudWatch API, one of the SDKs, or the . + Log Streams and Edge Locations When Route 53 finishes creating the configuration for DNS query logging, it does the following: Creates a log stream for an edge location the first time that the edge location responds to DNS queries for the specified hosted zone. That log stream is used to log all queries that Route 53 responds to for that edge location. Begins to send query logs to the applicable log stream. The name of each log stream is in the following format: hosted zone ID/edge location code The edge location code is a three-letter code and an arbitrarily assigned number, for example, DFW3. The three-letter code typically corresponds with the International Air Transport Association airport code for an airport near the edge location. (These abbreviations might change in the future.) For a list of edge locations, see "The Route 53 Global Network" on the Route 53 Product Details page. + Queries That Are Logged Query logs contain only the queries that DNS resolvers forward to Route 53. If a DNS resolver has already cached the response to a query (such as the IP address for a load balancer for example.com), the resolver will continue to return the cached response. It doesn't forward another query to Route 53 until the TTL for the corresponding resource record set expires. Depending on how many DNS queries are submitted for a resource record set, and depending on the TTL for that resource record set, query logs might contain information about only one query out of every several thousand queries that are submitted to DNS. For more information about how DNS works, see Routing Internet Traffic to Your Website or Web Application in the Amazon Route 53 Developer Guide. + Log File Format For a list of the values in each query log and the format of each value, see Logging DNS Queries in the Amazon Route 53 Developer Guide. + Pricing For information about charges for query logs, see Amazon CloudWatch Pricing. + How to Stop Logging If you want Route 53 to stop sending query logs to CloudWatch Logs, delete the query logging configuration. For more information, see DeleteQueryLoggingConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#query_logging_config Route53HostedZone#query_logging_config}

---

##### `VpCs`<sup>Optional</sup> <a name="VpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneConfig.property.vpCs"></a>

```go
VpCs interface{}
```

- *Type:* interface{}

*Private hosted zones:* A complex type that contains information about the VPCs that are associated with the specified hosted zone.

For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#vp_cs Route53HostedZone#vp_cs}

---

### Route53HostedZoneHostedZoneConfig <a name="Route53HostedZoneHostedZoneConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

&route53hostedzone.Route53HostedZoneHostedZoneConfig {
	Comment: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig.property.comment">Comment</a></code> | <code>*string</code> | Any comments that you want to include about the hosted zone. |

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Any comments that you want to include about the hosted zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#comment Route53HostedZone#comment}

---

### Route53HostedZoneHostedZoneFeatures <a name="Route53HostedZoneHostedZoneFeatures" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

&route53hostedzone.Route53HostedZoneHostedZoneFeatures {
	EnableAcceleratedRecovery: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures.property.enableAcceleratedRecovery">EnableAcceleratedRecovery</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#enable_accelerated_recovery Route53HostedZone#enable_accelerated_recovery}. |

---

##### `EnableAcceleratedRecovery`<sup>Optional</sup> <a name="EnableAcceleratedRecovery" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeatures.property.enableAcceleratedRecovery"></a>

```go
EnableAcceleratedRecovery interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#enable_accelerated_recovery Route53HostedZone#enable_accelerated_recovery}.

---

### Route53HostedZoneHostedZoneTags <a name="Route53HostedZoneHostedZoneTags" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

&route53hostedzone.Route53HostedZoneHostedZoneTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.key">Key</a></code> | <code>*string</code> | The value of ``Key`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Key`` is the name that you want to give the new tag. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.value">Value</a></code> | <code>*string</code> | The value of ``Value`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Value`` is the value that you want to give the new tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The value of ``Key`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Key`` is the name that you want to give the new tag.

* *Edit a tag*: `Key` is the name of the tag that you want to change the `Value` for.
* *Delete a key*: `Key` is the name of the tag you want to remove.
* *Give a name to a health check*: Edit the default `Name` tag. In the Amazon Route 53 console, the list of your health checks includes a *Name* column that lets you see the name that you've given to each health check.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#key Route53HostedZone#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of ``Value`` depends on the operation that you want to perform:   +  *Add a tag to a health check or hosted zone*: ``Value`` is the value that you want to give the new tag.

* *Edit a tag*: `Value` is the new value that you want to assign the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#value Route53HostedZone#value}

---

### Route53HostedZoneQueryLoggingConfig <a name="Route53HostedZoneQueryLoggingConfig" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

&route53hostedzone.Route53HostedZoneQueryLoggingConfig {
	CloudwatchLogsLogGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig.property.cloudwatchLogsLogGroupArn">CloudwatchLogsLogGroupArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to. |

---

##### `CloudwatchLogsLogGroupArn`<sup>Optional</sup> <a name="CloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfig.property.cloudwatchLogsLogGroupArn"></a>

```go
CloudwatchLogsLogGroupArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the CloudWatch Logs log group that Amazon Route 53 is publishing logs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#cloudwatch_logs_log_group_arn Route53HostedZone#cloudwatch_logs_log_group_arn}

---

### Route53HostedZoneVpCs <a name="Route53HostedZoneVpCs" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

&route53hostedzone.Route53HostedZoneVpCs {
	VpcId: *string,
	VpcRegion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcId">VpcId</a></code> | <code>*string</code> | *Private hosted zones only:* The ID of an Amazon VPC. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcRegion">VpcRegion</a></code> | <code>*string</code> | *Private hosted zones only:* The region that an Amazon VPC was created in. |

---

##### `VpcId`<sup>Optional</sup> <a name="VpcId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

*Private hosted zones only:* The ID of an Amazon VPC.

For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#vpc_id Route53HostedZone#vpc_id}

---

##### `VpcRegion`<sup>Optional</sup> <a name="VpcRegion" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCs.property.vpcRegion"></a>

```go
VpcRegion *string
```

- *Type:* *string

*Private hosted zones only:* The region that an Amazon VPC was created in.

For public hosted zones, omit `VPCs`, `VPCId`, and `VPCRegion`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/route53_hosted_zone#vpc_region Route53HostedZone#vpc_region}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53HostedZoneHostedZoneConfigOutputReference <a name="Route53HostedZoneHostedZoneConfigOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

route53hostedzone.NewRoute53HostedZoneHostedZoneConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53HostedZoneHostedZoneConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resetComment">ResetComment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetComment` <a name="ResetComment" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.resetComment"></a>

```go
func ResetComment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53HostedZoneHostedZoneFeaturesOutputReference <a name="Route53HostedZoneHostedZoneFeaturesOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

route53hostedzone.NewRoute53HostedZoneHostedZoneFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53HostedZoneHostedZoneFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resetEnableAcceleratedRecovery">ResetEnableAcceleratedRecovery</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableAcceleratedRecovery` <a name="ResetEnableAcceleratedRecovery" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.resetEnableAcceleratedRecovery"></a>

```go
func ResetEnableAcceleratedRecovery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecoveryInput">EnableAcceleratedRecoveryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecovery">EnableAcceleratedRecovery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableAcceleratedRecoveryInput`<sup>Optional</sup> <a name="EnableAcceleratedRecoveryInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecoveryInput"></a>

```go
func EnableAcceleratedRecoveryInput() interface{}
```

- *Type:* interface{}

---

##### `EnableAcceleratedRecovery`<sup>Required</sup> <a name="EnableAcceleratedRecovery" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.enableAcceleratedRecovery"></a>

```go
func EnableAcceleratedRecovery() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53HostedZoneHostedZoneTagsList <a name="Route53HostedZoneHostedZoneTagsList" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

route53hostedzone.NewRoute53HostedZoneHostedZoneTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53HostedZoneHostedZoneTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.get"></a>

```go
func Get(index *f64) Route53HostedZoneHostedZoneTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53HostedZoneHostedZoneTagsOutputReference <a name="Route53HostedZoneHostedZoneTagsOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

route53hostedzone.NewRoute53HostedZoneHostedZoneTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53HostedZoneHostedZoneTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneHostedZoneTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53HostedZoneQueryLoggingConfigOutputReference <a name="Route53HostedZoneQueryLoggingConfigOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

route53hostedzone.NewRoute53HostedZoneQueryLoggingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Route53HostedZoneQueryLoggingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resetCloudwatchLogsLogGroupArn">ResetCloudwatchLogsLogGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudwatchLogsLogGroupArn` <a name="ResetCloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.resetCloudwatchLogsLogGroupArn"></a>

```go
func ResetCloudwatchLogsLogGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArnInput">CloudwatchLogsLogGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArn">CloudwatchLogsLogGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudwatchLogsLogGroupArnInput`<sup>Optional</sup> <a name="CloudwatchLogsLogGroupArnInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArnInput"></a>

```go
func CloudwatchLogsLogGroupArnInput() *string
```

- *Type:* *string

---

##### `CloudwatchLogsLogGroupArn`<sup>Required</sup> <a name="CloudwatchLogsLogGroupArn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.cloudwatchLogsLogGroupArn"></a>

```go
func CloudwatchLogsLogGroupArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneQueryLoggingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53HostedZoneVpCsList <a name="Route53HostedZoneVpCsList" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

route53hostedzone.NewRoute53HostedZoneVpCsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53HostedZoneVpCsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.get"></a>

```go
func Get(index *f64) Route53HostedZoneVpCsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53HostedZoneVpCsOutputReference <a name="Route53HostedZoneVpCsOutputReference" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53hostedzone"

route53hostedzone.NewRoute53HostedZoneVpCsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53HostedZoneVpCsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcId">ResetVpcId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcRegion">ResetVpcRegion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVpcId` <a name="ResetVpcId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcId"></a>

```go
func ResetVpcId()
```

##### `ResetVpcRegion` <a name="ResetVpcRegion" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.resetVpcRegion"></a>

```go
func ResetVpcRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegionInput">VpcRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegion">VpcRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `VpcRegionInput`<sup>Optional</sup> <a name="VpcRegionInput" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegionInput"></a>

```go
func VpcRegionInput() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `VpcRegion`<sup>Required</sup> <a name="VpcRegion" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.vpcRegion"></a>

```go
func VpcRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53HostedZone.Route53HostedZoneVpCsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



